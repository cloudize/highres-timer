const packageJson = require("../../package.json");
const fs = require("fs");

function prepareReleaseVersion() {
    let regexp = /-.+/;
    packageJson.version = packageJson.version.replace(regexp, "");

    fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, " "));
    console.log("The NPM Package has been prepared to be published with version " + packageJson.version);
}

prepareReleaseVersion();