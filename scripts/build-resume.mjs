// Prints resume/resume.html to public/resume.pdf with headless Edge or Chrome.
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const browsers = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
];
const browser = browsers.find(existsSync);
if (!browser) throw new Error("Edge or Chrome not found");

const src = pathToFileURL(resolve("resume/resume.html")).href;
const out = resolve("public/resume.pdf");
execFileSync(browser, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--generate-pdf-document-outline", `--print-to-pdf=${out}`, src], { stdio: "inherit" });
console.log(`Wrote ${out}`);
