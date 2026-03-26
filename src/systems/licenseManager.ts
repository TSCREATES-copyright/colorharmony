// src/systems/licenseManager.ts

export const PREMIUM_PREFIX = "CH-PRO-";
export const LICENSE_STORAGE_KEY = "colorharmony:licenseKey";
export const PREMIUM_FLAG_STORAGE_KEY = "colorharmony:isPremium";

export const VALID_LICENSE_KEYS = [
  "CH-PRO-A1B2-C3D4",
  "CH-PRO-E5F6-G7H8",
  "CH-PRO-I9J0-K1L2",
  "CH-PRO-M3N4-O5P6",
  "CH-PRO-Q7R8-S9T0",
  "CH-PRO-U1V2-W3X4",
  "CH-PRO-Y5Z6-A7B8",
  "CH-PRO-C9D0-E1F2",
  "CH-PRO-G3H4-I5J6",
  "CH-PRO-K7L8-M9N0",
  "CH-PRO-P1Q2-R3S4",
  "CH-PRO-T5U6-V7W8",
  "CH-PRO-X9Y0-Z1A2",
  "CH-PRO-B3C4-D5E6",
  "CH-PRO-F7G8-H9I0",
  "CH-PRO-J1K2-L3M4",
  "CH-PRO-N5O6-P7Q8",
  "CH-PRO-R9S0-T1U2",
  "CH-PRO-V3W4-X5Y6",
  "CH-PRO-Z7A8-B9C0",
  "CH-PRO-D1E2-F3G4",
  "CH-PRO-H5I6-J7K8",
  "CH-PRO-L9M0-N1O2",
  "CH-PRO-P3Q4-R5S6",
  "CH-PRO-T7U8-V9W0",
  "CH-PRO-X1Y2-Z3A4",
  "CH-PRO-B5C6-D7E8",
  "CH-PRO-F9G0-H1I2",
  "CH-PRO-J3K4-L5M6",
  "CH-PRO-N7O8-P9Q0",
  "CH-PRO-R1S2-T3U4",
  "CH-PRO-V5W6-X7Y8",
  "CH-PRO-Z9A0-B1C2",
  "CH-PRO-D3E4-F5G6",
  "CH-PRO-H7I8-J9K0",
  "CH-PRO-L1M2-N3O4",
  "CH-PRO-P5Q6-R7S8",
  "CH-PRO-T9U0-V1W2",
  "CH-PRO-X3Y4-Z5A6",
  "CH-PRO-B7C8-D9E0",
  "CH-PRO-F1G2-H3I4",
  "CH-PRO-J5K6-L7M8",
  "CH-PRO-N9O0-P1Q2",
  "CH-PRO-R3S4-T5U6",
  "CH-PRO-V7W8-X9Y0",
  "CH-PRO-Z1A2-B3C4",
  "CH-PRO-D5E6-F7G8",
  "CH-PRO-H9I0-J1K2",
  "CH-PRO-L3M4-N5O6",
  "CH-PRO-P7Q8-R9S0",
] as const;

export type LicenseStatus =
  | "unknown"
  | "valid"
  | "invalid"
  | "empty"
  | "not-found"
  | "storage-unavailable";

export interface LicenseValidationResult {
  valid: boolean;
  status: LicenseStatus;
  normalizedKey: string;
  message: string;
}

const LICENSE_FORMAT = /^CH-PRO-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

function hasWindow(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function normalizeLicenseKey(key: string): string {
  return (key ?? "").trim().toUpperCase();
}

export function isValidLicenseFormat(key: string): boolean {
  const normalized = normalizeLicenseKey(key);
  return LICENSE_FORMAT.test(normalized);
}

export function validateLicenseKey(key: string): boolean {
  const normalized = normalizeLicenseKey(key);
  if (!normalized) return false;
  return LICENSE_FORMAT.test(normalized) && VALID_LICENSE_KEYS.includes(normalized as (typeof VALID_LICENSE_KEYS)[number]);
}

export function getLicenseValidationResult(key: string): LicenseValidationResult {
  const normalizedKey = normalizeLicenseKey(key);

  if (!normalizedKey) {
    return {
      valid: false,
      status: "empty",
      normalizedKey,
      message: "Enter a license key to unlock premium.",
    };
  }

  if (!isValidLicenseFormat(normalizedKey)) {
    return {
      valid: false,
      status: "invalid",
      normalizedKey,
      message: "License key format is invalid. Use CH-PRO-XXXX-XXXX.",
    };
  }

  if (!VALID_LICENSE_KEYS.includes(normalizedKey as (typeof VALID_LICENSE_KEYS)[number])) {
    return {
      valid: false,
      status: "not-found",
      normalizedKey,
      message: "This license key is not recognized.",
    };
  }

  return {
    valid: true,
    status: "valid",
    normalizedKey,
    message: "Premium unlocked successfully.",
  };
}

export function saveLicenseKey(key: string): boolean {
  if (!hasWindow()) return false;

  const normalized = normalizeLicenseKey(key);
  if (!validateLicenseKey(normalized)) return false;

  try {
    window.localStorage.setItem(LICENSE_STORAGE_KEY, normalized);
    window.localStorage.setItem(PREMIUM_FLAG_STORAGE_KEY, "true");
    return true;
  } catch {
    return false;
  }
}

export function loadLicenseKey(): string {
  if (!hasWindow()) return "";

  try {
    return window.localStorage.getItem(LICENSE_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

export function isPremiumUnlocked(): boolean {
  if (!hasWindow()) return false;

  try {
    return window.localStorage.getItem(PREMIUM_FLAG_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export function unlockPremiumWithKey(key: string): LicenseValidationResult {
  const result = getLicenseValidationResult(key);

  if (!result.valid) {
    return result;
  }

  const saved = saveLicenseKey(result.normalizedKey);
  if (!saved) {
    return {
      valid: false,
      status: "storage-unavailable",
      normalizedKey: result.normalizedKey,
      message: "Premium was validated, but local storage is unavailable.",
    };
  }

  return {
    valid: true,
    status: "valid",
    normalizedKey: result.normalizedKey,
    message: "Premium unlocked successfully.",
  };
}

export function clearLicenseKey(): void {
  if (!hasWindow()) return;

  try {
    window.localStorage.removeItem(LICENSE_STORAGE_KEY);
    window.localStorage.removeItem(PREMIUM_FLAG_STORAGE_KEY);
  } catch {
    // no-op
  }
}

export function getPremiumLicenseState() {
  const storedKey = loadLicenseKey();
  const validation = storedKey ? getLicenseValidationResult(storedKey) : getLicenseValidationResult("");

  return {
    isPremium: validation.valid && isPremiumUnlocked(),
    storedKey,
    validation,
  };
}