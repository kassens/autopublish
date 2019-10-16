const path = require("path");
const fs = require("fs");

const packageJson = require("../package.json");

if (process.argv.length !== 3 || sha.length !== 42) {
  process.stderr.write(
    `Usage:\n  ${process.argv[0]} ${process.argv[1]} COMMIT_SHA\n`
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
