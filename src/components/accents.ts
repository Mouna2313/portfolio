import type { Project } from "@/content/data";

// Full class names so Tailwind keeps them in the build. Gradients are dark enough for white text.
export const accents: Record<Project["accent"], { gradient: string; soft: string; text: string; ring: string }> = {
  rose: { gradient: "from-rose-700 via-rose-600 to-orange-600", soft: "bg-rose-500/10", text: "text-rose-700 dark:text-rose-300", ring: "group-hover:ring-rose-500/40" },
  emerald: { gradient: "from-emerald-800 via-emerald-700 to-teal-600", soft: "bg-emerald-500/10", text: "text-emerald-700 dark:text-emerald-300", ring: "group-hover:ring-emerald-500/40" },
  sky: { gradient: "from-blue-800 via-blue-700 to-sky-600", soft: "bg-sky-500/10", text: "text-blue-700 dark:text-sky-300", ring: "group-hover:ring-sky-500/40" },
  violet: { gradient: "from-violet-800 via-violet-700 to-fuchsia-600", soft: "bg-violet-500/10", text: "text-violet-700 dark:text-violet-300", ring: "group-hover:ring-violet-500/40" },
  amber: { gradient: "from-orange-700 via-amber-700 to-amber-600", soft: "bg-amber-500/10", text: "text-amber-800 dark:text-amber-300", ring: "group-hover:ring-amber-500/40" },
  pink: { gradient: "from-pink-800 via-pink-700 to-rose-600", soft: "bg-pink-500/10", text: "text-pink-700 dark:text-pink-300", ring: "group-hover:ring-pink-500/40" },
  indigo: { gradient: "from-indigo-800 via-indigo-700 to-blue-600", soft: "bg-indigo-500/10", text: "text-indigo-700 dark:text-indigo-300", ring: "group-hover:ring-indigo-500/40" },
};
