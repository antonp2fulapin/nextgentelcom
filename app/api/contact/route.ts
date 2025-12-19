import { NextResponse } from "next/server";
import { isBusinessEmail } from "../../../lib/validation";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

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

  try {
    new URL(String(companyWebsite));
  } catch {
    return NextResponse.json(
      { message: "Please provide a valid company website URL." },
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

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return NextResponse.json(
      { message: "Submission service is not configured." },
      { status: 500 },
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

  const messageLines = [
    "New telecom application received:",
    `Company: ${payload.companyName}`,
    `Website: ${payload.companyWebsite}`,
    `Business email: ${payload.businessEmail}`,
    `Phone: ${payload.phoneNumber || "Not provided"}`,
    `Country: ${payload.country}`,
    `Expected volume: ${payload.expectedVolume}`,
    `Use case: ${payload.useCase}`,
  ];

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: messageLines.join("\n"),
      }),
    },
  );

  if (!telegramResponse.ok) {
    return NextResponse.json(
      { message: "We could not submit your application. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
