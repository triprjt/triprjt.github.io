import dotenv from "dotenv";

// Only run dotenv in Node (server); in the browser process.stdout is undefined and dotenv would throw
if (typeof process !== "undefined" && process.stdout) {
  dotenv.config();
}

/** Google Apps Script Web App URL for form submissions */
export const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

/** Zoho Flow webhook URL (production) */
export const ZOHO_FLOW_URL = process.env.NEXT_PUBLIC_ZOHO_FLOW_URL;

/** Zoho Flow webhook URL (test/debug) */
export const ZOHO_FLOW_TEST = process.env.NEXT_PUBLIC_ZOHO_FLOW_TEST;

/** DigitalOcean Spaces / CDN origin for assets (use NEXT_PUBLIC_DG_OCEAN_ORIGIN in .env for client-side) */
export const DG_OCEAN_ORIGIN =
  process.env.DG_OCEAN_ORIGIN ?? process.env.NEXT_PUBLIC_DG_OCEAN_ORIGIN;
