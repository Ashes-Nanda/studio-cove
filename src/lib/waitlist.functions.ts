import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  number: z
    .string()
    .trim()
    .min(6, "Enter a valid phone number")
    .max(32, "Enter a valid phone number")
    .regex(/^[+0-9()\-\s]+$/, "Enter a valid phone number"),
  companyName: z.string().trim().min(1, "Company name is required").max(160),
  companyInstagram: z
    .string()
    .trim()
    .min(1, "Instagram handle is required")
    .max(60)
    .transform((v) => v.replace(/^@/, "")),
  service: z.enum([
    "Branding",
    "Social Media",
    "Production",
    "Campaigns",
    "Multiple / Not Sure",
  ]),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;

const NOTION_GATEWAY = "https://connector-gateway.lovable.dev/notion/v1";

async function writeToNotion(data: WaitlistInput) {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const NOTION_API_KEY = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_WAITLIST_DATABASE_ID;

  if (!LOVABLE_API_KEY || !NOTION_API_KEY || !databaseId) {
    console.warn(
      "[waitlist] Notion not yet configured. Submission stored to logs only.",
      { ...data, missing: { LOVABLE_API_KEY: !LOVABLE_API_KEY, NOTION_API_KEY: !NOTION_API_KEY, NOTION_WAITLIST_DATABASE_ID: !databaseId } },
    );
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

export const submitWaitlist = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => waitlistSchema.parse(input))
  .handler(async ({ data }) => {
    try {
      const result = await writeToNotion(data);
      return { ok: true as const, delivered: result.delivered };
    } catch (err) {
      console.error("[waitlist] submission failed", err);
      return {
        ok: false as const,
        delivered: false,
        error: "We couldn't reach the studio inbox. Please email us instead.",
      };
    }
  });
