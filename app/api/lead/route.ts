import { NextResponse } from "next/server";

const PHONE_RE = /^[6-9]\d{9}$/;

// ponytail: leads are logged to the function output only.
// Wire to a CRM/webhook/email when there is somewhere to send them.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }
  if (body.company) return NextResponse.json({ ok: true }); // honeypot filled = bot

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();

  if (!name || !PHONE_RE.test(phone)) {
    return NextResponse.json({ ok: false, error: "invalid name or phone" }, { status: 422 });
  }

  console.log("[lead]", {
    name,
    phone,
    email: body.email ?? "",
    configuration: body.configuration ?? "",
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
