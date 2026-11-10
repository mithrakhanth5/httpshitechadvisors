export interface SolutionItem {
  id: string;
  title: string;
  line: string;
  link: string;
  helpArea: string;
  platforms: string;
}

export interface RoleItem {
  role: string;
  focus: string;
  linksTo: string;
  helpArea: string;
}

export interface CapabilityItem {
  title: string;
  line: string;
  helpArea: string;
}

export interface CaseStoryItem {
  stat: string;
  metric: string;
  title: string;
  industry: string;
  detail: string;
  helpArea: string;
}

export interface IndustryItem {
  name: string;
  challenges: string;
}

export interface ArticleItem {
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
}

export const hitechContent = {
  meta: {
    name: "Hitech Advisors",
    tagline: "Business & Technology Solutions",
    brandLine: "Meaningful problems deserve meaningful solutions.",
    brandPromise: "Clarity in the decision. Accountability in the delivery.",
  },

  announcement: {
    eventTitle: "Executive Roundtable: Production AI & Governance in the Enterprise",
    city: "Seattle, WA",
    date: "Spring 2026",
    action: "Request an invitation",
  },

  hero: {
    eyebrow: "Business & Technology Solutions",
    h1: "Strategy That Connects to Execution.",
    supporting:
      "Hitech Advisors helps companies make the right technology decisions and turn them into working results — across business applications, data, cybersecurity, IT operations, AI and engineering. One accountable team, from the first conversation to measurable outcomes.",
    primaryCta: "Discuss a Challenge",
    secondaryCta: "Explore Our Solutions",
  },

  problemStatement: {
    headline: "The hardest business problems don't fit inside one technology category.",
    cards: [
      {
        id: "systems",
        title: "You bought the systems. The business still runs on spreadsheets.",
        body: "CRM, ERP and a dozen apps that don't talk to each other, and teams working around them.",
      },
      {
        id: "ai",
        title: "Everyone wants AI. Nobody owns the result.",
        body: "Pilots that never reach production, and no clear view of where AI should actually do the work.",
      },
      {
        id: "risk",
        title: "The risk keeps growing faster than the fixes.",
        body: "Security findings, IT backlogs and data you can't fully trust — with too few hands to close them.",
      },
    ],
  },

  proposition: {
    headline: "One partner from the decision to the delivery.",
    body: "Most firms either advise or implement. We do both, and we stay accountable for both. We start with your business problem, recommend the right combination of strategy, systems, data, security, engineering and AI, and then deliver it — with the right Hitech team for the work.",
    pillars: [
      {
        title: "The right answer, not the default one.",
        body: "We're platform-neutral. We recommend what fits your business, your scale and your budget.",
      },
      {
        title: "Strategy and delivery in one team.",
        body: "The people who frame the problem stay with it until the result is real. No hand-off gap.",
      },
      {
        title: "Senior expertise, flexibly engaged.",
        body: "Experienced consultants and specialists — as advisors, embedded experts or complete delivery teams.",
      },
    ],
  },

  solutions: [
    {
      id: "crm-erp",
      title: "CRM, ERP & Business Applications",
      line: "Choose, implement and connect the systems that run your business — and make sure people use them.",
      link: "#solutions",
      helpArea: "crm-erp",
      platforms: "Salesforce, HubSpot, Microsoft Dynamics, NetSuite, SAP, Zoho, Freshworks",
    },
    {
      id: "data",
      title: "Data & Customer Intelligence",
      line: "Bring your data together into one trusted view of customers and operations, ready for decisions and AI.",
      link: "#solutions",
      helpArea: "data",
      platforms: "Snowflake, Databricks, BigQuery, Microsoft Fabric, Segment, Tealium, Amperity",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Risk",
      line: "Find your real exposure, fix what matters most, and show the board it's handled.",
      link: "#solutions",
      helpArea: "cybersecurity",
      platforms: "CrowdStrike, Microsoft Defender, Qualys, Rapid7, Splunk, Tenable, Wiz",
    },
    {
      id: "it-operations",
      title: "IT Operations & Cloud",
      line: "Run IT that's reliable, efficient and ready to scale — from the service desk to the cloud.",
      link: "#solutions",
      helpArea: "it-operations",
      platforms: "ServiceNow, Jira Service Management, Freshservice, AWS, Azure, Google Cloud",
    },
    {
      id: "ai",
      title: "AI Adoption & Agents",
      line: "Move AI from pilots to production — agents and automation that do real work, safely.",
      link: "#solutions",
      helpArea: "ai",
      platforms: "OpenAI, Anthropic Claude, Google Gemini, Azure AI, LangChain, open-source models",
    },
  ] as SolutionItem[],

  roleSelector: {
    headline: "Start with your role",
    subhead: "Every executive faces distinct delivery pressures. Route directly to the solutions and capabilities built for your objectives.",
    roles: [
      {
        role: "CEO / Founder",
        focus: "Growth, efficiency and where technology should pay back",
        linksTo: "Strategy & Advisory",
        helpArea: "strategy",
      },
      {
        role: "COO",
        focus: "Processes, systems and automation that remove friction",
        linksTo: "CRM, ERP & Business Applications",
        helpArea: "crm-erp",
      },
      {
        role: "CIO / CTO",
        focus: "Architecture, modernization, AI and delivery capacity",
        linksTo: "IT Operations & Cloud",
        helpArea: "it-operations",
      },
      {
        role: "CISO",
        focus: "Exposure, remediation and security governance",
        linksTo: "Cybersecurity & Risk",
        helpArea: "cybersecurity",
      },
      {
        role: "Head of Data",
        focus: "Customer data, data quality and analytics",
        linksTo: "Data & Customer Intelligence",
        helpArea: "data",
      },
      {
        role: "Growth & Revenue leader",
        focus: "Pipeline, go-to-market and revenue operations",
        linksTo: "Growth & Go-to-Market",
        helpArea: "growth",
      },
    ] as RoleItem[],
  },

  capabilities: {
    headline: "How we deliver",
    subhead: "Our solution areas define what we solve. Our capabilities define how.",
    cards: [
      {
        title: "Strategy & Advisory",
        line: "Technology strategy, architecture and platform decisions you can stand behind.",
        helpArea: "strategy",
      },
      {
        title: "Product & Engineering",
        line: "Product strategy, application development, modernization and quality engineering.",
        helpArea: "product-engineering",
      },
      {
        title: "Growth & Go-to-Market",
        line: "Go-to-market strategy, revenue operations and the technology behind growth.",
        helpArea: "growth",
      },
      {
        title: "Talent & Managed Teams",
        line: "Specialist experts, embedded leaders and managed teams that scale with you.",
        helpArea: "talent",
      },
    ] as CapabilityItem[],
  },

  whyHitech: {
    headline: "Why clients work with us",
    reasons: [
      {
        title: "Platform-neutral advice.",
        body: "No single-vendor agenda. The recommendation fits the problem.",
      },
      {
        title: "Advice that ships.",
        body: "We are measured on outcomes, not slide decks.",
      },
      {
        title: "Senior people on the work.",
        body: "Senior consultants lead every engagement and stay on it.",
      },
      {
        title: "A real network.",
        body: "Our executive roundtables connect us to technology leaders across industries.",
      },
    ],
  },

  howItWorks: {
    headline: "How an engagement works",
    linkText: "See how we work →",
    phases: [
      {
        step: "01",
        name: "Discover",
        line: "We listen first. We learn the business problem, the people involved, the systems in place and what success needs to look like.",
        takeaway: "A shared understanding of the problem and its value.",
      },
      {
        step: "02",
        name: "Frame",
        line: "We define the outcome and lay out the options — technology, approach, team, cost and risk — and recommend one.",
        takeaway: "A clear recommendation and a plan you can approve.",
      },
      {
        step: "03",
        name: "Deliver",
        line: "We build, implement and integrate, with the right Hitech team for the work. We deliver in stages so value shows up early.",
        takeaway: "Working results, not status reports.",
      },
      {
        step: "04",
        name: "Optimize",
        line: "We drive adoption, measure the result against the goal and keep improving — for as long as you need us.",
        takeaway: "An outcome that lasts.",
      },
    ],
  },

  results: {
    headline: "Results our clients can measure",
    linkText: "See all results →",
    stories: [
      {
        stat: "99.99%",
        metric: "Uptime through peak sales",
        title: "Keeping a high-volume retailer online through peak flash-sale traffic",
        industry: "Retail & E-commerce",
        detail: "50% faster page loads at peak and a 40% revenue increase with resilient cloud architecture.",
        helpArea: "product-engineering",
      },
      {
        stat: "5,000+",
        metric: "Users migrated safely",
        title: "Separating 5,000+ users from a parent company without disruption",
        industry: "Technology & Cloud",
        detail: "30% higher asset utilization and 25% higher user satisfaction during divestiture migration.",
        helpArea: "it-operations",
      },
      {
        stat: "60%",
        metric: "Faster remediation time",
        title: "Cutting time to remediation across a global enterprise security estate",
        industry: "Financial Services & Security",
        detail: "Prioritizing vulnerability backlogs by business risk and establishing an actionable 3-year security roadmap.",
        helpArea: "cybersecurity",
      },
    ] as CaseStoryItem[],
    testimonial: {
      quote: "**APPROVED QUOTE**",
      author: "**NAME**",
      title: "**TITLE**",
      company: "**COMPANY**",
    },
  },

  industries: {
    headline: "Across the industries we serve",
    closingPrompt:
      "Don't see your industry? Most of our work starts with a business problem, not an industry label.",
    items: [
      {
        name: "Technology & SaaS",
        challenges: "Scaling platforms, go-to-market for new products, enterprise security standards, production AI.",
      },
      {
        name: "Retail & E-commerce",
        challenges: "Peak-traffic resilience, unified customer data, real-time inventory and order orchestration.",
      },
      {
        name: "Financial Services",
        challenges: "Legacy systems modernization, regulatory compliance, fraud & identity risk, governance.",
      },
      {
        name: "Healthcare & Life Sciences",
        challenges: "Patient and member experiences, HIPAA protected data governance, remote care tools.",
      },
      {
        name: "Manufacturing & Distribution",
        challenges: "Operational visibility from order to delivery, ERP modernization, supply-chain data flow.",
      },
      {
        name: "Nonprofit & Global Health",
        challenges: "Mission-critical technologies, field operations tools, donor systems, high impact on constrained budgets.",
      },
    ] as IndustryItem[],
  },

  eventsAndInsights: {
    headline: "Where technology leaders compare notes",
    subhead:
      "Since **FIRST EVENT YEAR**, our executive roundtables and panels have brought Seattle-area leaders together to talk honestly about what AI and technology are changing in their industries.",
    event: {
      tag: "Next Executive Roundtable",
      title: "Production AI & Governance in the Enterprise",
      location: "Seattle, WA · In Person",
      access: "Invitation Only",
      date: "Spring 2026",
    },
    articles: [
      {
        category: "AI & Automation",
        readTime: "6 min read",
        title: "What is an AI agent — and what should it do in your business?",
        excerpt:
          "How leadership teams separate AI agent hype from durable workflow automation that actually reaches production and stays governed.",
      },
      {
        category: "Data & Customer Intelligence",
        readTime: "7 min read",
        title: "Customer data platform or data warehouse? How to decide",
        excerpt:
          "Why CDPs and data warehouses serve different jobs, and how to design the simplest modern data architecture that fits your roadmap.",
      },
    ] as ArticleItem[],
  },

  finalCta: {
    headline: "What are you trying to solve?",
    line: "Share the challenge. A senior consultant will come back to you within **RESPONSE TIME** — with questions worth answering, not a sales pitch.",
    button: "Discuss a Challenge",
  },

  contactInfo: {
    address: "608 State Street South, Kirkland, WA 98033",
    phone: "(425) 284-3315",
    email: "hello@hitechadvisors.com",
    responseTime: "**RESPONSE TIME**",
    linkedIn: "https://www.linkedin.com/company/hitech-advisors/",
    youtube: "https://www.youtube.com/@hitechadvisors",
  },

  helpAreaOptions: [
    { label: "CRM, ERP & Business Applications", value: "crm-erp" },
    { label: "Data & Customer Intelligence", value: "data" },
    { label: "Cybersecurity & Risk", value: "cybersecurity" },
    { label: "IT Operations & Cloud", value: "it-operations" },
    { label: "AI Adoption & Agents", value: "ai" },
    { label: "Strategy & Advisory", value: "strategy" },
    { label: "Product & Engineering", value: "product-engineering" },
    { label: "Growth & Go-to-Market", value: "growth" },
    { label: "Talent & Managed Teams", value: "talent" },
    { label: "Not sure yet", value: "not-sure" },
  ],
};
