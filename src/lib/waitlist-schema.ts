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
  service: z.enum(["Branding", "Social Media", "Production", "Campaigns", "Multiple / Not Sure"]),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
