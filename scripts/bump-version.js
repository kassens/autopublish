const path = require("path");
const fs = require("fs");

const packageJson = require("../package.json");

const sha = process.env.COMMIT_SHA;

if (!sha || sha.length !== 42) {
  process.stderr.write(
    "Expected COMMIT_SHA environment variable to be set to the commit sha.\n"
  );
  process.exit(1);
}

const version = `0.0.0-master.${sha.substr(0, 8)}`;

process.stdout.write(`Bumping version to '${version}'.\n`);

packageJson.version = version;
fs.writeFileSync(
  path.join(__dirname, "../package.json"),
  JSON.stringify(packageJson, null, 2) + "\n",
  "utf8"
);
