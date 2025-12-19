"use client";

import { useState } from "react";
import { isBusinessEmail } from "../../lib/validation";

type FormErrors = Partial<Record<string, string>>;

const expectedVolumes = [
  "Under 1,000 calls / month",
  "1,000–10,000 calls / month",
  "10,000–50,000 calls / month",
  "50,000+ calls / month",
];

export default function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const nextErrors: FormErrors = {};

    if (!data.companyName) {
      nextErrors.companyName = "Company name is required.";
    }
    if (!data.companyWebsite) {
      nextErrors.companyWebsite = "Company website is required.";
    }
    if (!data.businessEmail) {
      nextErrors.businessEmail = "Business email is required.";
    } else if (!isBusinessEmail(String(data.businessEmail))) {
      nextErrors.businessEmail =
        "Please use a valid business email address.";
    }
    if (!data.country) {
      nextErrors.country = "Country of registration is required.";
    }
    if (!data.useCase) {
      nextErrors.useCase = "Please describe your intended telecom use case.";
    }
    if (!data.expectedVolume) {
      nextErrors.expectedVolume = "Expected call volume is required.";
    }
    if (!data.consent) {
      nextErrors.consent =
        "You must confirm you have read the privacy policy.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: data.companyName,
          companyWebsite: data.companyWebsite,
          businessEmail: data.businessEmail,
          phoneNumber: data.phoneNumber || "",
          country: data.country,
          useCase: data.useCase,
          expectedVolume: data.expectedVolume,
          consent: Boolean(data.consent),
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setStatus("error");
        setStatusMessage(
          payload?.message ||
            "We could not submit your application. Please try again.",
        );
        return;
      }

      setStatus("success");
      setStatusMessage(
        "Thank you. Your application has been received and will be reviewed.",
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        "We could not submit your application. Please try again.",
      );
    }
  };

  return (
    <form
      className="space-y-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="companyName">
            Company name <span className="text-red-400">*</span>
          </label>
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-slate-400"
            id="companyName"
            name="companyName"
            required
            aria-invalid={Boolean(errors.companyName)}
            aria-describedby={errors.companyName ? "companyName-error" : undefined}
          />
          {errors.companyName && (
            <p id="companyName-error" className="text-xs text-red-300">
              {errors.companyName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="companyWebsite">
            Company website <span className="text-red-400">*</span>
          </label>
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-slate-400"
            id="companyWebsite"
            name="companyWebsite"
            type="url"
            placeholder="https://"
            required
            aria-invalid={Boolean(errors.companyWebsite)}
            aria-describedby={
              errors.companyWebsite ? "companyWebsite-error" : undefined
            }
          />
          {errors.companyWebsite && (
            <p id="companyWebsite-error" className="text-xs text-red-300">
              {errors.companyWebsite}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="businessEmail">
            Business email <span className="text-red-400">*</span>
          </label>
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-slate-400"
            id="businessEmail"
            name="businessEmail"
            type="email"
            required
            aria-invalid={Boolean(errors.businessEmail)}
            aria-describedby={
              errors.businessEmail ? "businessEmail-error" : undefined
            }
          />
          {errors.businessEmail && (
            <p id="businessEmail-error" className="text-xs text-red-300">
              {errors.businessEmail}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="phoneNumber">
            Phone number
          </label>
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-slate-400"
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="country">
            Country of registration <span className="text-red-400">*</span>
          </label>
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-slate-400"
            id="country"
            name="country"
            required
            aria-invalid={Boolean(errors.country)}
            aria-describedby={errors.country ? "country-error" : undefined}
          />
          {errors.country && (
            <p id="country-error" className="text-xs text-red-300">
              {errors.country}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="expectedVolume">
            Expected call volume <span className="text-red-400">*</span>
          </label>
          <select
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-slate-400"
            id="expectedVolume"
            name="expectedVolume"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.expectedVolume)}
            aria-describedby={
              errors.expectedVolume ? "expectedVolume-error" : undefined
            }
          >
            <option value="" disabled>
              Select an option
            </option>
            {expectedVolumes.map((volume) => (
              <option key={volume} value={volume}>
                {volume}
              </option>
            ))}
          </select>
          {errors.expectedVolume && (
            <p id="expectedVolume-error" className="text-xs text-red-300">
              {errors.expectedVolume}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="useCase">
          Intended telecom use case <span className="text-red-400">*</span>
        </label>
        <textarea
          className="min-h-[140px] w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-slate-400"
          id="useCase"
          name="useCase"
          required
          aria-invalid={Boolean(errors.useCase)}
          aria-describedby={errors.useCase ? "useCase-error" : undefined}
        />
        {errors.useCase && (
          <p id="useCase-error" className="text-xs text-red-300">
            {errors.useCase}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-950 text-slate-100"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <label htmlFor="consent" className="text-sm text-slate-300">
            I confirm that I have read the privacy policy and consent to the
            processing of my business contact information.
            <span className="text-red-400"> *</span>
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" className="text-xs text-red-300">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 px-4 py-3 text-xs text-slate-400">
        reCAPTCHA will be added during final deployment to protect submissions.
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-slate-400">
          We do not create accounts or send automated emails after submission.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Submit application"}
        </button>
      </div>

      <div aria-live="polite" className="text-sm">
        {status === "success" && (
          <p className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-emerald-100">
            {statusMessage}
          </p>
        )}
        {status === "error" && (
          <p className="rounded-2xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-red-100">
            {statusMessage}
          </p>
        )}
      </div>
    </form>
  );
}
