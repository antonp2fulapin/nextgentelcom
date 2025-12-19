import { NextResponse } from "next/server";
import { isBusinessEmail } from "@/lib/validation";

const BACKEND_ENDPOINT = "https://api.placeholder.example/telecom/apply";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { message: "Invalid submission payload." },
      { status: 400 },
    );
  }

  const {
    companyName,
    companyWebsite,
    businessEmail,
    phoneNumber,
    country,
    useCase,
    expectedVolume,
    consent,
  } = body;

  if (!companyName || !companyWebsite || !businessEmail || !country || !useCase) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!expectedVolume) {
    return NextResponse.json(
      { message: "Expected call volume is required." },
      { status: 400 },
    );
  }

  if (!consent) {
    return NextResponse.json(
      { message: "Privacy policy consent is required." },
      { status: 400 },
    );
  }

  if (!isBusinessEmail(String(businessEmail))) {
    return NextResponse.json(
      { message: "Please use a valid business email address." },
      { status: 400 },
    );
  }

  const payload = {
    companyName: String(companyName),
    companyWebsite: String(companyWebsite),
    businessEmail: String(businessEmail),
    phoneNumber: phoneNumber ? String(phoneNumber) : "",
    country: String(country),
    useCase: String(useCase),
    expectedVolume: String(expectedVolume),
    consent: Boolean(consent),
  };

  const backendResponse = await fetch(BACKEND_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!backendResponse.ok) {
    return NextResponse.json(
      { message: "We could not submit your application. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
