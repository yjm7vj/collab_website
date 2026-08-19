import { getDb } from "../../../db";
import { waitlistEntries } from "../../../db/schema";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function errorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : "Unexpected error";
  if (message.includes("no such table") || message.includes("waitlist_entries")) {
    return "The waitlist database is not ready yet. Please try again later.";
  }
  return message;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;
    const name = clean(payload.name);
    const organization = clean(payload.organization);
    const email = clean(payload.email).toLowerCase();

    if (!name || !organization || !email) {
      return Response.json(
        { error: "Name, organization, and email are required." },
        { status: 400 },
      );
    }

    if (!isEmail(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    await getDb().insert(waitlistEntries).values({ name, organization, email });
    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    return Response.json({ error: errorMessage(error) }, { status: 500 });
  }
}
