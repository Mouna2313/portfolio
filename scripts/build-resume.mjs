// Prints resume/resume.html to PDF with headless Edge or Chrome, in two versions:
// - public/resume.pdf: served on the site, without a phone number
// - a private copy with the phone number, saved outside the repo, for job applications
// The phone number lives in resume/private.local.json (git-ignored): { "phone": "+91 ...", "privateOut": "C:/..." }
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const browsers = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
];
const browser = browsers.find(existsSync);
if (!browser) throw new Error("Edge or Chrome not found");

const html = readFileSync(resolve("resume/resume.html"), "utf8");
const privatePath = resolve("resume/private.local.json");
const priv = existsSync(privatePath) ? JSON.parse(readFileSync(privatePath, "utf8")) : {};

function print(source, out) {
  const tmp = join(tmpdir(), `resume-${Date.now()}.html`);
  writeFileSync(tmp, source);
  mkdirSync(dirname(out), { recursive: true });
  execFileSync(browser, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--generate-pdf-document-outline", `--print-to-pdf=${out}`, pathToFileURL(tmp).href], { stdio: "inherit" });
  console.log(`Wrote ${out}`);
}

print(html.replace("<!--PHONE-->", ""), resolve("public/resume.pdf"));

if (priv.phone) {
  const out = priv.privateOut ?? resolve("../Mounajeyaseeli_J_Resume.pdf");
  print(html.replace("<!--PHONE-->", `<span>${priv.phone}</span>`), out);
} else {
  console.log("No resume/private.local.json phone found; skipped the private copy.");
}
