const blockedEmailDomains = new Set([
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "yahoo.co.uk",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
  "gmx.com",
  "gmx.net",
  "yandex.com",
  "fastmail.com",
]);

export function isBusinessEmail(email: string): boolean {
  const trimmed = email.trim().toLowerCase();
  const parts = trimmed.split("@");
  if (parts.length !== 2) {
    return false;
  }
  const domain = parts[1];
  if (!domain || domain.length < 3) {
    return false;
  }
  if (blockedEmailDomains.has(domain)) {
    return false;
  }
  return true;
}
