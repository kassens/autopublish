const path = require("path");
const fs = require("fs");

const packageJson = require("../package.json");

const version = `0.0.0-next.${Date.now()}`;

process.stdout.write(`Bumping version to '${version}'.\n`);

packageJson.version = version;
fs.writeFileSync(
  path.join(__dirname, "../package.json"),
  JSON.stringify(packageJson, null, 2) + "\n",
  "utf8"
);
