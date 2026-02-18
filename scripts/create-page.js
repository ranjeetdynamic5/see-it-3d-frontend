// scripts/create-page.js
const fs = require("fs");
const path = require("path");

const pageName = process.argv[2];

if (!pageName) {
  console.error("❌ Please provide page name");
  console.error("👉 npm run page ai-solutions");
  process.exit(1);
}

const PAGE_DIR = path.join("app", pageName);
const TEMPLATE_PATH = path.join("templates", "page.template.tsx");

/* -----------------------------------
   🔹 SECTION REGISTRY (SINGLE SOURCE)
----------------------------------- */

const SECTIONS = {
  hero: {
    import: `import HeroSection from "@/components/sections/HeroSection";`,
    jsx: `<HeroSection />`,
  },
  breadcrumb: {
    import: `import PageBreadcrumb from "@/components/common/PageBreadcrumb";`,
    jsx: `<PageBreadcrumb title="__PAGE_TITLE__" />`,
  },
  whyChoose: {
    import: `import WhyChoose from "@/components/sections/WhyChoose";`,
    jsx: `<WhyChoose />`,
  },
  process: {
    import: `import ProcessSteps from "@/components/sections/ProcessSteps";`,
    jsx: `<ProcessSteps />`,
  },
  formats: {
    import: `import TrainingFormats from "@/components/training/TrainingFormats";`,
    jsx: `<TrainingFormats />`,
  },
  cta: {
    import: `import CallToAction from "@/components/sections/CallToAction";`,
    jsx: `<CallToAction />`,
  },
  content: {
    import: `import PageContent from "@/components/sections/PageContent";`,
    jsx: `<PageContent />`,
  },
};

/* -----------------------------------
   🔹 PAGE TYPE RULES
----------------------------------- */

const PAGE_TYPES = {
  training: ["hero", "breadcrumb", "whyChoose", "process", "formats"],
  service: ["hero", "breadcrumb", "whyChoose", "process", "cta"],
  static: ["breadcrumb", "content", "cta"],
};

/* -----------------------------------
   🔍 PAGE TYPE DETECTION
----------------------------------- */

function detectPageType(name) {
  if (name.includes("training")) return "training";
  if (
    name.includes("ai") ||
    name.includes("web") ||
    name.includes("software")
  )
    return "service";
  return "static";
}

const pageType = detectPageType(pageName);
const sections = PAGE_TYPES[pageType];

/* -----------------------------------
   ❌ SAFETY CHECK
----------------------------------- */

if (fs.existsSync(PAGE_DIR)) {
  console.error(`❌ Page already exists: /${pageName}`);
  process.exit(1);
}

/* -----------------------------------
   📁 CREATE PAGE
----------------------------------- */

fs.mkdirSync(PAGE_DIR, { recursive: true });

let template = fs.readFileSync(TEMPLATE_PATH, "utf8");

const imports = sections.map((s) => SECTIONS[s].import).join("\n");
const jsx = sections.map((s) => `      ${SECTIONS[s].jsx}`).join("\n");

template = template
  .replace("__IMPORTS__", imports)
  .replace("__SECTIONS__", jsx)
  .replace(/__PAGE_NAME__/g, toComponent(pageName))
  .replace(/__PAGE_TITLE__/g, toTitle(pageName));

fs.writeFileSync(path.join(PAGE_DIR, "page.tsx"), template);

/* -----------------------------------
   ✅ SUCCESS LOG
----------------------------------- */

console.log(`
✅ Page created successfully!

📄 Route      : /${pageName}
🧠 Page Type : ${pageType}
🧩 Sections  :
${sections.map((s) => " - " + s).join("\n")}
`);

/* -----------------------------------
   🛠 UTILS
----------------------------------- */

function toTitle(str) {
  return str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

function toComponent(str) {
  return toTitle(str).replace(/\s/g, "");
}
