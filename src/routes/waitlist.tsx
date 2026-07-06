import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { submitWaitlist, waitlistSchema } from "../lib/waitlist.functions";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export const Route = createFileRoute("/waitlist")({
  head: () => ({
    meta: [
      { title: "Start a Project — Studio Cove" },
      {
        name: "description",
        content:
          "Tell us about your brand. We respond personally to every project we're the right studio for.",
      },
      { property: "og:title", content: "Start a Project — Studio Cove" },
      {
        property: "og:description",
        content: "Let's make waves. Start a project with Studio Cove.",
      },
    ],
  }),
  component: Waitlist,
});

const SERVICES = [
  "Branding",
  "Social Media",
  "Production",
  "Campaigns",
  "Multiple / Not Sure",
] as const;

type FormState = {
  name: string;
  number: string;
  companyName: string;
  companyInstagram: string;
  service: (typeof SERVICES)[number] | "";
};

const initial: FormState = {
  name: "",
  number: "",
  companyName: "",
  companyInstagram: "",
  service: "",
};

function Waitlist() {
  const submit = useServerFn(submitWaitlist);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    const parsed = waitlistSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await submit({ data: parsed.data });
      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
        setErrorMsg(res.error ?? "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  return (
    <section className="pt-40 pb-32 px-6 bg-paper min-h-screen">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
          [ Start a Project ]
        </p>
        <h1 className="text-[clamp(3rem,10vw,7rem)] leading-[0.9] font-display italic tracking-tighter mb-12 max-w-4xl">
          Let&rsquo;s make waves.
        </h1>
        <p className="text-xl md:text-2xl text-ink/70 leading-relaxed max-w-2xl mb-20">
          Tell us a little about your brand. We respond personally to every
          project we&rsquo;re the right studio for.
        </p>

        {status === "done" ? (
          <div className="border-t border-border pt-16 max-w-2xl">
            <p className="font-mono text-[10px] uppercase text-accent mb-6">
              [ Received ]
            </p>
            <p className="font-display italic text-4xl md:text-5xl leading-tight mb-6">
              Thank you, {form.name.split(" ")[0]}.
            </p>
            <p className="text-ink/60">
              Your note is with the studio. If there&rsquo;s a fit, we&rsquo;ll
              be in touch within five working days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="border-t border-border pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl"
            noValidate
          >
            <Field label="Name" required error={errors.name}>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-transparent border-b border-ink/20 py-3 w-full focus:outline-none focus:border-accent transition-colors text-base"
              />
            </Field>
            <Field label="Number" required error={errors.number}>
              <input
                type="tel"
                required
                value={form.number}
                onChange={(e) => setForm({ ...form, number: e.target.value })}
                placeholder="+91 98765 43210"
                className="bg-transparent border-b border-ink/20 py-3 w-full focus:outline-none focus:border-accent transition-colors text-base placeholder:text-ink/30"
              />
            </Field>
            <Field
              label="Company Name"
              required
              error={errors.companyName}
              className="md:col-span-2"
            >
              <input
                type="text"
                required
                value={form.companyName}
                onChange={(e) =>
                  setForm({ ...form, companyName: e.target.value })
                }
                className="bg-transparent border-b border-ink/20 py-3 w-full focus:outline-none focus:border-accent transition-colors text-base"
              />
            </Field>
            <Field
              label="Company Instagram Handle"
              required
              error={errors.companyInstagram}
            >
              <input
                type="text"
                required
                value={form.companyInstagram}
                onChange={(e) =>
                  setForm({ ...form, companyInstagram: e.target.value })
                }
                placeholder="@yourbrand"
                className="bg-transparent border-b border-ink/20 py-3 w-full focus:outline-none focus:border-accent transition-colors text-base placeholder:text-ink/30"
              />
            </Field>
            <Field
              label="Service you're looking for"
              required
              error={errors.service}
            >
              <select
                required
                value={form.service}
                onChange={(e) =>
                  setForm({
                    ...form,
                    service: e.target.value as FormState["service"],
                  })
                }
                className="bg-transparent border-b border-ink/20 py-3 w-full focus:outline-none focus:border-accent transition-colors text-base appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            {errorMsg && (
              <p className="md:col-span-2 text-sm text-destructive">{errorMsg}</p>
            )}
            <div className="md:col-span-2 pt-6 flex justify-end">
              <LiquidButton
                type="submit"
                disabled={status === "sending"}
                className="text-[11px] uppercase tracking-[0.2em] text-ink disabled:opacity-50"
                size="xl"
              >
                {status === "sending" ? "Sending…" : "Send Enquiry"}
              </LiquidButton>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  required,
  className,
  error,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
  error?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-3 block">
        {label}
        {required && <span className="text-ink/40"> *</span>}
      </span>
      {children}
      {error && (
        <span className="block mt-2 text-[11px] text-destructive">{error}</span>
      )}
    </label>
  );
}
