import fs from "node:fs";
import path from "node:path";

const configPath = path.join(process.cwd(), "dist", "server", "wrangler.json");
const placeholderId = "00000000-0000-4000-8000-000000000000";
const databaseId = process.env.D1_DATABASE_ID?.trim();
const databaseName = process.env.D1_DATABASE_NAME?.trim() || "collabai-waitlist";
const isCloudflareBuild =
  process.env.CI === "true" ||
  process.env.CF_PAGES === "1" ||
  Boolean(process.env.CLOUDFLARE_ACCOUNT_ID);

if (!fs.existsSync(configPath)) {
  console.warn(`Cloudflare config not found at ${configPath}; skipping D1 patch.`);
  process.exit(0);
}

const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const databases = Array.isArray(config.d1_databases) ? config.d1_databases : [];
const db = databases.find((entry) => entry?.binding === "DB");

if (!db) {
  console.warn("No DB binding found in generated Cloudflare config; skipping D1 patch.");
  process.exit(0);
}

if (!databaseId) {
  const message =
    "Missing D1_DATABASE_ID. Add it as a non-private Cloudflare build variable, not a runtime secret.";
  if (isCloudflareBuild || db.database_id === placeholderId) {
    console.error(message);
    process.exit(1);
  }
  console.warn(message);
  process.exit(0);
}

db.database_name = databaseName;
db.database_id = databaseId;
fs.writeFileSync(configPath, `${JSON.stringify(config)}\n`);
console.log(`Patched Cloudflare D1 binding DB -> ${databaseName}.`);
