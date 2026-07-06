"use server";

import { waitlistSchema, type WaitlistInput } from "./waitlist-schema";

const NOTION_GATEWAY = "https://connector-gateway.lovable.dev/notion/v1";

async function writeToNotion(data: WaitlistInput) {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_WAITLIST_DATABASE_ID;

  if (!LOVABLE_API_KEY || !NOTION_API_KEY || !databaseId) {
    console.warn("[waitlist] Notion not yet configured. Submission stored to logs only.", {
      ...data,
      missing: {
        LOVABLE_API_KEY: !LOVABLE_API_KEY,
        NOTION_API_KEY: !NOTION_API_KEY,
        NOTION_WAITLIST_DATABASE_ID: !databaseId,
      },
    });
    return { delivered: false as const };
  }

  const res = await fetch(`${NOTION_GATEWAY}/pages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": NOTION_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { content: data.name } }] },
        Number: { rich_text: [{ text: { content: data.number } }] },
        "Company Name": { rich_text: [{ text: { content: data.companyName } }] },
        "Company Instagram": {
          rich_text: [{ text: { content: data.companyInstagram } }],
        },
        Service: { select: { name: data.service } },
      },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Notion API failed [${res.status}]: ${body}`);
  }
  return { delivered: true as const };
}

export async function submitWaitlist(input: unknown) {
  const parsed = waitlistSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false as const,
      delivered: false,
      error: parsed.error.issues[0]?.message ?? "Invalid submission.",
    };
  }
  try {
    const result = await writeToNotion(parsed.data);
    return { ok: true as const, delivered: result.delivered };
  } catch (err) {
    console.error("[waitlist] submission failed", err);
    return {
      ok: false as const,
      delivered: false,
      error: "We couldn't reach the studio inbox. Please email us instead.",
    };
  }
}
