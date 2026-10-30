import type { IconType } from "react-icons";
import { FaAws, FaCodeBranch, FaProjectDiagram, FaUniversalAccess, FaUsersCog, FaWpforms, FaLayerGroup, FaShieldAlt, FaCubes } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiAngular, SiBitbucket, SiCss3, SiDocker, SiExpress, SiFluentbit, SiGithub, SiGrafana, SiHtml5, SiIonic, SiJavascript,
  SiJenkins, SiJsonwebtokens, SiKeycloak, SiKubernetes, SiMinio, SiMui, SiMysql, SiNatsdotio, SiNestjs, SiNetflix,
  SiNextdotjs, SiNginx, SiNodedotjs, SiPostgresql, SiPrisma, SiPrometheus, SiRadixui, SiReact, SiReacthookform,
  SiReactquery, SiRedis, SiRender, SiSass, SiShopify, SiSocketdotio, SiTailwindcss, SiTurborepo, SiTypescript, SiZod,
  SiAmazons3, SiWoocommerce,
} from "react-icons/si";

// Matched in order against the lower-cased tech name, so more specific names come first.
const rules: [string, IconType][] = [
  ["react hook form", SiReacthookform],
  ["tanstack", SiReactquery],
  ["next", SiNextdotjs],
  ["react", SiReact],
  ["angular", SiAngular],
  ["typescript", SiTypescript],
  ["javascript", SiJavascript],
  ["html", SiHtml5],
  ["scss", SiSass],
  ["css", SiCss3],
  ["tailwind", SiTailwindcss],
  ["material", SiMui],
  ["radix", SiRadixui],
  ["ionic", SiIonic],
  ["nestjs", SiNestjs],
  ["node", SiNodedotjs],
  ["express", SiExpress],
  ["prisma", SiPrisma],
  ["postgres", SiPostgresql],
  ["mysql", SiMysql],
  ["redis", SiRedis],
  ["bullmq", SiRedis],
  ["minio", SiMinio],
  ["s3", SiAmazons3],
  ["docker", SiDocker],
  ["kubernetes", SiKubernetes],
  ["nginx", SiNginx],
  ["aws", FaAws],
  ["azure", VscAzure],
  ["jenkins", SiJenkins],
  ["github", SiGithub],
  ["bitbucket", SiBitbucket],
  ["keycloak", SiKeycloak],
  ["socket", SiSocketdotio],
  ["jwt", SiJsonwebtokens],
  ["zod", SiZod],
  ["turborepo", SiTurborepo],
  ["grafana", SiGrafana],
  ["prometheus", SiPrometheus],
  ["conductor", SiNetflix],
  ["nats", SiNatsdotio],
  ["fluent", SiFluentbit],
  ["render", SiRender],
  ["shopify", SiShopify],
  ["woocommerce", SiWoocommerce],
  ["wcag", FaUniversalAccess],
  ["low-code", FaCubes],
  ["json", FaWpforms],
  ["workflow", FaProjectDiagram],
  ["multi-tenant", FaLayerGroup],
  ["rbac", FaUsersCog],
  ["oauth", FaShieldAlt],
  ["accessib", FaUniversalAccess],
];

export function iconFor(name: string): IconType {
  const n = name.toLowerCase();
  return rules.find(([key]) => n.includes(key))?.[1] ?? FaCodeBranch;
}

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconFor(name);
  return <Icon aria-hidden="true" className={className} />;
}

export function TechChip({ name, size = "sm" }: { name: string; size?: "sm" | "md" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface font-medium text-text ${
        size === "md" ? "px-3 py-1.5 text-sm" : "px-2 py-1 text-xs"
      }`}
    >
      <TechIcon name={name} className={size === "md" ? "size-4 text-primary" : "size-3.5 text-primary"} />
      {name}
    </span>
  );
}
