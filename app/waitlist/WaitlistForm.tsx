"use client";

import { useState } from "react";
import { ArrowRight, Building2, Mail, UserRound } from "lucide-react";

type Status =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      email: String(formData.get("email") ?? ""),
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "You are on the waitlist. We will be in touch soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="waitlist-form" onSubmit={submit}>
      <label>
        <span>
          <UserRound size={17} /> Name
        </span>
        <input name="name" type="text" placeholder="Your name" required />
      </label>
      <label>
        <span>
          <Building2 size={17} /> Organization
        </span>
        <input
          name="organization"
          type="text"
          placeholder="Company, school, or team"
          required
        />
      </label>
      <label>
        <span>
          <Mail size={17} /> Email address
        </span>
        <input name="email" type="email" placeholder="you@example.com" required />
      </label>
      <button className="button primary" type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Request access"}
        <ArrowRight size={18} />
      </button>
      {status.message ? (
        <p className={`form-status ${status.type}`}>{status.message}</p>
      ) : null}
    </form>
  );
}
