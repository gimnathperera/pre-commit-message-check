// commit-msg.js
const fs = require("fs");
const path = require("path");

const commitMsgFile = process.argv[2];
const prefix = "[PREFIX] ";

const commitMessage = fs.readFileSync(commitMsgFile, "utf8");
if (!commitMessage.startsWith(prefix)) {
  fs.writeFileSync(commitMsgFile, prefix + commitMessage);
}
