// Adds the Android project, syncs your game into it, and locks the app to landscape.
const { execSync } = require("child_process");
const fs = require("fs"), path = require("path");
const run = c => execSync(c, { stdio: "inherit" });
if (!fs.existsSync("android")) run("npx cap add android");
run("npx cap sync android");
const mf = path.join("android","app","src","main","AndroidManifest.xml");
let x = fs.readFileSync(mf, "utf8");
if (!x.includes("screenOrientation")) x = x.replace("<activity", '<activity android:screenOrientation="sensorLandscape"');
fs.writeFileSync(mf, x);
console.log("\nDone. Now run:  npx cap open android");
