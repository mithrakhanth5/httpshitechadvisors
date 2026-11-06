export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  audience: string;
  iconName: string;
  deliverables: string[];
  examples: string;
  metrics: string;
}

export interface CapabilityItem {
  id: string;
  slug: string;
  title: string;
  line: string;
  iconName: string;
  deliverables: string[];
}

export interface BuyerRole {
  id: string;
  role: string;
  title: string;
  pain: string;
  focus: string;
  recommendedLink: string;
  recommendedLabel: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  quote: string;
  authorTitle: string;
  tag: string;
}

export interface EventItem {
  id: string;
  title: string;
  series: string;
  date: string;
  location?: string;
  format: string;
  description: string;
  speakers: string[];
  collaborators?: string[];
  status: 'Upcoming' | 'On Demand';
  image?: string;
  recordingUrl?: string;
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
  highlight: string;
  image: string;
  link?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  linkedin?: string;
  image: string;
  bio?: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

/* =========================================================================
   5 Core Solutions (as specified in Hitech Advisors Build Document Section 5 & 8)
   ========================================================================= */
export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'crm-erp-business-applications',
    slug: 'crm-erp-business-applications',
    title: 'CRM, ERP & Business Applications',
    shortTitle: 'CRM, ERP & Apps',
    subtitle: 'Systems that run the business, connected and adopted',
    description: 'Systems should make the business easier to run. We help you choose the right platforms, implement them properly, connect them to everything else, and get your teams using them.',
    audience: 'COO, CIO, CEO',
    iconName: 'Layers',
    metrics: 'Over 65% faster workflow turnaround & 95%+ cross-department adoption',
    deliverables: [
      'Platform evaluation & vendor-neutral selection',
      'End-to-end ERP and CRM system implementation',
      'Cross-application workflow automation & middleware integration',
      'Change management, training & user adoption engineering',
    ],
    examples: 'Salesforce, HubSpot, Microsoft Dynamics, NetSuite, Workday, Zoho, SAP or custom business apps.',
  },
  {
    id: 'data-customer-intelligence',
    slug: 'data-customer-intelligence',
    title: 'Data & Customer Intelligence',
    shortTitle: 'Data & Intelligence',
    subtitle: 'One trusted view of your customers and operations',
    description: 'Every decision depends on data you can trust. We design and build the data foundations, customer data platforms (CDPs) and analytics that give you one reliable view.',
    audience: 'Head of Data, CMO, CIO',
    iconName: 'Database',
    metrics: 'Unified customer view across 10+ operational systems & 4x faster reporting cycles',
    deliverables: [
      'Customer Data Platform (CDP) & Customer 360 architecture',
      'Modern data warehouse, lakehouse & real-time pipelines',
      'Data governance, schema standardisation & quality enforcement',
      'Executive analytics, attribution modeling & predictive insights',
    ],
    examples: 'Snowflake, Databricks, BigQuery, Segment, dbt, Fivetran, Power BI, Tableau.',
  },
  {
    id: 'cybersecurity-risk',
    slug: 'cybersecurity-risk',
    title: 'Cybersecurity & Risk',
    shortTitle: 'Cybersecurity & Risk',
    subtitle: 'Find exposure, fix what matters, prove it',
    description: 'Security is a business risk, not a tool list. We assess your exposure, prioritize what matters most, and build the programme that keeps it under control and board-ready.',
    audience: 'CISO, CIO',
    iconName: 'ShieldCheck',
    metrics: '100% audit-readiness and 78% reduction in mean time to remediate (MTTR)',
    deliverables: [
      'Vulnerability assessments & actionable exposure prioritization',
      'Zero-Trust architecture & cloud security posture management',
      'Compliance & audit readiness (SOC 2, ISO 27001, HIPAA, FedRAMP)',
      'Incident response engineering & executive risk governance',
    ],
    examples: 'Okta, CrowdStrike, Palo Alto, AWS/Azure Security, Wiz, Sentinel, Microsoft Entra.',
  },
  {
    id: 'it-operations-cloud',
    slug: 'it-operations-cloud',
    title: 'IT Operations & Cloud',
    shortTitle: 'IT Ops & Cloud',
    subtitle: 'Reliable, efficient, modern IT',
    description: 'IT should be reliable and invisible. We modernize service management, operations, and infrastructure so IT runs efficiently and scales cleanly with the business.',
    audience: 'Head of IT Ops, CIO',
    iconName: 'Cloud',
    metrics: '99.999% system availability and up to 40% reduction in cloud infrastructure waste',
    deliverables: [
      'IT Service Management (ITSM) modernization & ticketing automation',
      'Enterprise Modern Device Management (MDM) & zero-touch deployment',
      'Cloud migrations, hybrid infrastructure & FinOps cost governance',
      'Automated observability, site reliability engineering (SRE) & DevOps',
    ],
    examples: 'AWS, Azure, Google Cloud, Terraform, Kubernetes, Datadog, ServiceNow, Intune.',
  },
  {
    id: 'ai-adoption-agents',
    slug: 'ai-adoption-agents',
    title: 'AI Adoption & Agents',
    shortTitle: 'AI Adoption & Agents',
    subtitle: 'AI that does real work in production',
    description: 'AI only matters when it does real work. We find the high-ROI use cases, build production-grade agents and automation into your workflows, and govern them safely.',
    audience: 'CEO, CTO, COO',
    iconName: 'Cpu',
    metrics: 'From proof-of-concept to production in under 8 weeks with verifiable accuracy',
    deliverables: [
      'Enterprise AI opportunity framing & architectural roadmap',
      'Autonomous workflow agents & RAG-powered knowledge systems',
      'Model selection, prompt ops, safety guardrails & evaluation harness',
      'Production deployment, latency tuning & human-in-the-loop governance',
    ],
    examples: 'Anthropic Claude, OpenAI, Google Gemini, LangChain, LlamaIndex, vLLM, Pinecone.',
  },
];

/* Backward compatibility alias */
export const SERVICES = SOLUTIONS;

/* =========================================================================
   4 Core Delivery Capabilities (Section 5 & 8)
   ========================================================================= */
export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'strategy-advisory',
    slug: 'strategy-advisory',
    title: 'Strategy & Advisory',
    line: 'Technology strategy, architecture and platform decisions you can stand behind.',
    iconName: 'Compass',
    deliverables: [
      'Vendor-neutral platform evaluations & architecture review',
      'M&A technology diligence & corporate separation execution',
      'Executive technology roadmapping & budget optimization',
    ],
  },
  {
    id: 'product-engineering',
    slug: 'product-engineering',
    title: 'Product & Engineering',
    line: 'Product strategy, application development, modernization and quality engineering.',
    iconName: 'Code',
    deliverables: [
      'Full-stack enterprise application development',
      'Legacy modernization & microservices decoupling',
      'Edge computing & mission-critical offline software',
    ],
  },
  {
    id: 'growth-go-to-market',
    slug: 'growth-go-to-market',
    title: 'Growth & Go-to-Market',
    line: 'Go-to-market strategy, revenue operations and the technology behind growth.',
    iconName: 'TrendingUp',
    deliverables: [
      'Revenue operations (RevOps) & CRM pipeline alignment',
      'Omnichannel marketing technology integration',
      'Conversion tracking & automated client journeys',
    ],
  },
  {
    id: 'talent-managed-teams',
    slug: 'talent-managed-teams',
    title: 'Talent & Managed Teams',
    line: 'Specialist experts, embedded leaders and managed teams that scale with you.',
    iconName: 'Users',
    deliverables: [
      'Embedded senior architects & fractional CTO/CISO',
      'Self-contained, managed technical delivery squads',
      'Specialized engineering pods for surge capacity',
    ],
  },
];

/* =========================================================================
   6 Buyer Personas for the Role Selector ("Start with your role")
   ========================================================================= */
export const BUYER_ROLES: BuyerRole[] = [
  {
    id: 'ceo',
    role: 'CEO / Founder',
    title: 'Founder & Chief Executive Officer',
    pain: 'Growth is stalling; technology spend isn’t paying back or giving you a clear competitive edge.',
    focus: 'Business outcomes first, plain English, and proof of technology ROI that the board can see.',
    recommendedLink: '/what-we-do/strategy-advisory',
    recommendedLabel: 'Strategy & Advisory',
  },
  {
    id: 'coo',
    role: 'COO / Operations Leader',
    title: 'Chief Operating Officer',
    pain: 'Manual work, disconnected business apps, and spreadsheet drag slowing day-to-day execution.',
    focus: 'Connected business applications, automated workflows, and high user adoption across teams.',
    recommendedLink: '/what-we-do/crm-erp-business-applications',
    recommendedLabel: 'CRM, ERP & Business Applications',
  },
  {
    id: 'cto',
    role: 'CIO / CTO / VP Engineering',
    title: 'Technology & Engineering Leadership',
    pain: 'Legacy systems, delivery risk, architecture decisions, and pressure to adopt AI in production.',
    focus: 'Technical depth, architectural independence, vendor neutrality, and senior delivery capacity.',
    recommendedLink: '/what-we-do/it-operations-cloud',
    recommendedLabel: 'IT Operations & Cloud',
  },
  {
    id: 'ciso',
    role: 'CISO / Security Leader',
    title: 'Chief Information Security Officer',
    pain: 'Expanding attack surface, compliance audit backlogs, and tool sprawl without clear risk reduction.',
    focus: 'Security programme thinking, risk-to-business mapping, and measurable remediation.',
    recommendedLink: '/what-we-do/cybersecurity-risk',
    recommendedLabel: 'Cybersecurity & Risk',
  },
  {
    id: 'data',
    role: 'Head of Data & Analytics',
    title: 'VP of Data & Business Intelligence',
    pain: 'Fragmented customer data across silos, poor data quality, and no single trusted source of truth.',
    focus: 'Data engineering, customer data platforms (CDP), clean pipelines, and reliable governance.',
    recommendedLink: '/what-we-do/data-customer-intelligence',
    recommendedLabel: 'Data & Customer Intelligence',
  },
  {
    id: 'gtm',
    role: 'Growth & Revenue Leader',
    title: 'Chief Revenue / Marketing Officer',
    pain: 'Pipeline leaks, disconnected sales/marketing systems, and inability to attribute revenue.',
    focus: 'Go-to-market technology, revenue operations (RevOps), and pipeline velocity automation.',
    recommendedLink: '/what-we-do/growth-go-to-market',
    recommendedLabel: 'Growth & Go-to-Market',
  },
];

/* =========================================================================
   3 Value Pillars (Section 2)
   ========================================================================= */
export const VALUE_PILLARS = [
  {
    number: '01',
    title: 'Right answer, not the default answer',
    description: 'We recommend the technology that fits your business, your scale and your budget — not what we are tied to selling. We hold no vendor quota or resale agenda.',
  },
  {
    number: '02',
    title: 'Strategy and delivery in one team',
    description: 'The senior consultants who frame your problem stay accountable until the result is real. No hand-off gap between planners and builders.',
  },
  {
    number: '03',
    title: 'Senior expertise, flexibly engaged',
    description: 'Experienced consultants and specialists — engaged as high-impact advisors, embedded specialists, or full autonomous delivery teams.',
  },
];

/* =========================================================================
   3 Buyer Problem Statements (Section 8.1)
   ========================================================================= */
export const PROBLEM_CARDS = [
  {
    id: 'spreadsheets',
    title: 'You bought the systems. The business still runs on spreadsheets.',
    description: 'CRM, ERP and a dozen apps that don’t talk to each other, and frustrated teams constantly working around them.',
    tag: 'Business Systems',
  },
  {
    id: 'ai-stall',
    title: 'Everyone wants AI. Nobody owns the result.',
    description: 'Pilots that never reach production, endless experimentation, and no clear view of where AI should actually do the work.',
    tag: 'Production AI',
  },
  {
    id: 'risk-backlog',
    title: 'The risk keeps growing faster than the fixes.',
    description: 'Security audit findings, IT backlogs, and data you can’t fully trust — with too few experienced hands to close them.',
    tag: 'Security & Ops',
  },
];

/* =========================================================================
   4-Step Engagement Timeline (Section 8.1)
   ========================================================================= */
export const ENGAGEMENT_STEPS = [
  {
    phase: '01',
    name: 'Discover',
    tagline: 'We learn the business problem, not just the technical request.',
    detail: 'We assess operational constraints, interview stakeholders, and map current systems to identify what is actually holding back performance.',
  },
  {
    phase: '02',
    name: 'Frame',
    tagline: 'We define the outcome, the options and the right approach.',
    detail: 'We establish clear measurable success criteria, compare platform trade-offs on the merits, and design a realistic architecture.',
  },
  {
    phase: '03',
    name: 'Deliver',
    tagline: 'We build, implement and integrate, with the right team.',
    detail: 'Our senior architects and delivery squads execute in transparent sprints, managing integrations, migration, and quality gates.',
  },
  {
    phase: '04',
    name: 'Optimize',
    tagline: 'We drive adoption, measure the result and improve it.',
    detail: 'We ensure user adoption, conduct knowledge transfer, monitor performance against target metrics, and continually refine workflows.',
  },
];

export const SITE_STATS = [
  { value: '50+', label: 'Enterprise Clients', detail: 'Mid-Market to Fortune 500' },
  { value: '180+', label: 'Engagements Delivered', detail: 'Zero failure rate across mission-critical rollouts' },
  { value: '5', label: 'Solution Areas', detail: 'Connected under one accountable team' },
  { value: '10+', label: 'Years of Excellence', detail: 'Headquartered in Kirkland, WA' },
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Trust',
    description: 'Everything starts with trust. We build long-term relationships through transparency, honesty, and delivering on our commitments.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Accountability',
    description: 'We take ownership of outcomes and hold ourselves accountable to our clients, our partners, and one another.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Resourcefulness',
    description: 'Complex challenges require creative thinking. We bring together the right expertise, perspectives, and solutions for every engagement.',
    icon: 'Cpu',
  },
  {
    title: 'People First',
    description: 'Great outcomes come from great people. We invest in lasting relationships with our clients, consultants, and partners.',
    icon: 'Users',
  },
  {
    title: 'Transparency',
    description: 'We share information freely, set realistic expectations, and ensure our clients always have the full picture.',
    icon: 'Compass',
  },
  {
    title: 'High Energy & Fun',
    description: 'We bring positive energy and enthusiasm to our projects. Solving complex enterprise problems should be an inspiring journey.',
    icon: 'Sparkles',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Haresh Sangani',
    role: 'Chief Executive Officer',
    linkedin: 'https://www.linkedin.com/in/hareshsangani/',
    image: './images/team/haresh-sangani.png',
    bio: 'Visionary technology executive with over two decades of experience scaling global technology advisory practices and enterprise solutions.',
  },
  {
    name: 'Lan Wang',
    role: 'Partner & Chief Operating Officer',
    linkedin: 'https://www.linkedin.com/in/wanglan3/',
    image: './images/team/lan-wang.png',
    bio: 'Operational leader driving client delivery excellence, strategic growth, and cross-functional technology initiatives across enterprise portfolios.',
  },
  {
    name: 'Peter Simonsen',
    role: 'Principal Consultant',
    linkedin: 'https://www.linkedin.com/in/petersim/',
    image: './images/team/peter-simonsen.png',
    bio: 'Enterprise systems architect with deep expertise in large-scale infrastructure, cloud migrations, and high-availability operations.',
  },
  {
    name: 'Deborah Steele',
    role: 'Client Partner',
    linkedin: 'https://www.linkedin.com/in/steele-deborah/',
    image: './images/team/deborah-steele.png',
    bio: 'Strategic relationship leader dedicated to aligning enterprise tech initiatives with quantifiable business outcomes and talent strategy.',
  },
  {
    name: 'Sandeep Krishnamurthy',
    role: 'Principal Consultant',
    image: './images/team/sandeep-krishnamurthy.png',
    bio: 'Veteran technical strategist advising executive teams on emerging architectures, edge computing, and AI integration.',
  },
  {
    name: 'Ruchi Khanna',
    role: 'Head of Talent Solutions',
    linkedin: 'https://www.linkedin.com/in/khannaruchi/',
    image: './images/team/ruchi-khanna.png',
    bio: 'Leads our elite tech talent network, curating and embedding specialized senior engineers and leadership squads directly into client teams.',
  },
  {
    name: 'Taryn Adams',
    role: 'Marketing Manager & Thought Leadership Author',
    linkedin: 'https://www.linkedin.com/in/tarynmadams/',
    image: './images/team/taryn-adams.png',
    bio: 'Technology writer and researcher spearheading the Executive 2030 Series and Hitech Advisors analytical whitepapers.',
  },
  {
    name: 'Isha Sangani',
    role: 'Consultant',
    image: './images/team/isha-sangani.png',
    bio: 'Specialist in rapid prototyping, AI workflows, and digital transformation execution across fast-growing enterprises.',
  },
];

export const CLIENT_LOGOS = [
  { name: 'Qualtrics', category: 'Experience Management' },
  { name: 'Costco Wholesale', category: 'Global Retail & Logistics' },
  { name: 'Bank of America', category: 'Financial Services' },
  { name: 'T-Mobile', category: 'Telecommunications' },
  { name: 'Nintendo', category: 'Interactive Entertainment' },
  { name: 'Gates Foundation', category: 'Global Health & Philanthropy' },
  { name: 'BuyWander', category: 'Autonomous Logistics' },
  { name: 'inQbrands', category: 'Global Brand Acceleration' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'qualtrics',
    client: 'Qualtrics',
    sector: 'Enterprise SaaS / Experience Management',
    tag: 'Enterprise IT & MDM Spin-off',
    challenge: 'During a high-stakes corporate separation from SAP, Qualtrics needed to migrate 5,000+ globally distributed employee workstations and mobile devices without halting everyday sales or support operations.',
    solution: 'Hitech Advisors engineered a zero-downtime Mobile Device Management (MDM) separation protocol with automated background provisioning, seamless Okta/Entra ID cutover, and comprehensive compliance auditing.',
    impactMetrics: [
      { label: 'Seats Migrated', value: '5,000+' },
      { label: 'User Disruption', value: 'Zero downtime' },
      { label: 'IT Overhead Drop', value: '-42%' },
    ],
    quote: "Separating from a parent company’s infrastructure is notoriously high-risk, but Hitech turned our MDM migration into a non-event for our users. We transitioned 5,000 people and actually improved their daily experience. Our legal and security teams now have the reporting they’ve always wanted, and our IT overhead has dropped significantly.",
    authorTitle: 'VP of Global IT Operations, Qualtrics',
  },
  {
    id: 'buywander',
    client: 'BuyWander',
    sector: 'E-Commerce & High-Frequency Logistics',
    tag: 'Cloud Scalability & Performance',
    challenge: 'Rapid viral adoption created massive unpredictable traffic spikes that caused severe server lag and checkout timeouts during critical drop sales.',
    solution: 'Hitech redesigned their cloud infrastructure with auto-scaling containerized microservices, intelligent multi-tier caching, edge load-balancing, and asynchronous payment queues.',
    impactMetrics: [
      { label: 'Traffic Spike Tolerance', value: '5x+' },
      { label: 'P99 Latency', value: '62ms' },
      { label: 'Cart Abandonment', value: '-38%' },
    ],
    quote: "Before Hitech, every major sale felt like a gamble with our infrastructure. They didn't just 'fix' our speed; they gave us the confidence to scale. Watching our traffic spike by 5x while the site stayed lightning-fast was a turning point for our business. For the first time, our tech isn't a bottleneck—it’s our biggest competitive advantage.",
    authorTitle: 'Co-Founder & Chief Technology Officer, BuyWander',
  },
  {
    id: 'gates-foundation',
    client: 'Gates Foundation & Global Health Initiative',
    sector: 'Digital Health & AI Field Diagnostics',
    tag: 'Edge AI & Mobile Health',
    challenge: 'Healthcare workers in remote clinics lacked access to on-site radiologists to analyze ultrasound and medical imaging scans.',
    solution: 'Hitech Advisors converted an academic research model into an ultra-low-power, offline-first mobile AI application that performs real-time diagnostic triage on low-cost handheld devices.',
    impactMetrics: [
      { label: 'Diagnostic Accuracy', value: '96.4%' },
      { label: 'Offline Capability', value: '100%' },
      { label: 'Patient Triage Speed', value: 'Minutes vs Weeks' },
    ],
    quote: "Hitech took a promising research prototype and turned it into a battle-hardened tool for the field. In remote regions where a doctor might be days away, this app is literally the difference between life and death. We aren't just sending tech to Africa; we are sending the expertise of a radiologist in every health worker's pocket.",
    authorTitle: 'Program Director, Global Health Technologies',
  },
  {
    id: 'inqbrands',
    client: 'inQbrands',
    sector: 'Brand Incubation & Omnichannel Retail',
    tag: 'Talent Solutions & GTM Execution',
    challenge: 'Scaling a cross-border US sales and distribution organization required rapid acquisition of specialized technology and enterprise account leaders.',
    solution: 'Hitech provided embedded talent acquisition and high-impact executive alignment workshops, securing top-tier talent in weeks rather than quarters.',
    impactMetrics: [
      { label: 'Time to Hire', value: '< 21 Days' },
      { label: 'Annual Revenue Run Rate', value: '+210%' },
      { label: 'Team Retention', value: '100%' },
    ],
    quote: "As our U.S. sales organization entered a critical growth phase, Hitech Advisors helped us recruit key talent and strengthen our execution. Their consulting and capability workshops provided valuable insights, driving better alignment across our teams and setting us up for continued success.",
    authorTitle: 'Chief Executive Officer, inQbrands',
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 'company-brain-2026',
    title: 'Why Your Company Needs an AI Brain, and What Goes in It',
    series: 'Executive Innovation Roundtable',
    date: 'November 9, 2026',
    location: 'Seattle, WA',
    format: 'In-Person Executive Roundtable',
    description: 'As AI moves from experimentation to everyday business use, can it become more than a tool—a trusted layer of organizational knowledge? Join us to explore sovereign cognitive architectures and enterprise memory.',
    speakers: ['Ashurst Perkins Coie', 'JPMorgan Private Bank', 'Hitech Advisory Leadership'],
    collaborators: ['Ashurst Perkins Coie', 'JPMorgan Private Bank'],
    status: 'Upcoming',
    image: './images/events/company-brain.jpg',
    link: 'https://hitechadvisors.com/innovation-roundtable-why-your-company-needs-a-brain-and-what-goes-in-it/',
  },
  {
    id: 'ai-agents-roundtable-2026',
    title: 'How Many AI Agents Does a Company Really Need?',
    series: 'Executive Innovation Roundtable',
    date: 'August 25, 2026',
    location: 'Kirkland, WA',
    format: 'In-Person Executive Roundtable',
    description: 'Hitech Advisors, in collaboration with Ashurst Perkins Coie and JPMorgan Private Bank, convenes a select group of technology and business leaders to examine multi-agent workflows, task orchestration, and practical enterprise governance.',
    speakers: ['Enterprise CTOs', 'JPMorgan Private Bank', 'Hitech Advisors'],
    collaborators: ['Ashurst Perkins Coie', 'JPMorgan Private Bank'],
    status: 'On Demand',
    image: './images/events/ai-agents.jpg',
    recordingUrl: 'https://www.youtube.com/@hitechadvisors1160',
    link: 'https://hitechadvisors.com/innovation-roundtable-how-many-ai-agents-does-a-company-really-need/',
  },
  {
    id: 'ai-eats-everything-2026',
    title: "If AI Eats Everything, What's Left for Leaders?",
    series: 'Executive Innovation Roundtable',
    date: 'June 17, 2026',
    location: 'Bellevue, WA',
    format: 'Executive Strategy Session',
    description: 'The defining question facing every executive navigating the rapid acceleration of artificial intelligence. Examining where human judgment, ethical boundaries, and strategic foresight create decisive enterprise value.',
    speakers: ['Pacific NW Tech Executives', 'Venture Innovators', 'Hitech Advisors'],
    collaborators: ['Ashurst Perkins Coie', 'JPMorgan Private Bank'],
    status: 'On Demand',
    image: './images/events/ai-eats-everything.jpg',
    recordingUrl: 'https://www.youtube.com/@hitechadvisors1160',
  },
  {
    id: 'shopping-2030-2026',
    title: 'Shopping 2030: Beyond Search and Chatbots',
    series: 'Executive 2030 Series',
    date: 'April 22, 2026',
    location: 'Bellevue, WA',
    format: 'Executive Panel & Briefing',
    description: 'Commerce is evolving at a breakneck pace as new multimodal AI and agentic capabilities transform buyer and seller journeys across digital and physical storefronts.',
    speakers: ['Retail Executives', 'E-commerce Innovators', 'JPMorgan Private Bank'],
    collaborators: ['JPMorgan Private Bank'],
    status: 'On Demand',
    image: './images/events/shopping-2030.jpg',
    recordingUrl: 'https://www.youtube.com/@hitechadvisors1160',
  },
  {
    id: 'ai-2030-beyond-llms',
    title: 'AI 2030: Beyond LLMs',
    series: 'Executive 2030 Series',
    date: 'January 22, 2026',
    location: 'Bellevue, WA',
    format: 'Keynote & Leadership Panel',
    description: 'Join us as we explore the paradigm shift from AI systems that simply converse to systems that reason, act autonomously, and interact directly with complex physical enterprise workflows.',
    speakers: ['AI Research Directors', 'Enterprise Architects', 'JPMorgan Private Bank'],
    collaborators: ['JPMorgan Private Bank'],
    status: 'On Demand',
    image: './images/events/ai-2030-beyond-llms.jpg',
    recordingUrl: 'https://www.youtube.com/@hitechadvisors1160',
  },
  {
    id: 'engineering-2030-cto',
    title: 'Engineering 2030: CTO Meets AI',
    series: 'Executive 2030 Series',
    date: 'September 10, 2025',
    location: 'Bellevue, WA',
    format: 'CTO Roundtable & Case Clinic',
    description: 'How do today’s leading companies engineer products that are hyper-competitive, fast to market, and inherently resilient against exponential technological disruptions?',
    speakers: ['Pacific NW CTOs', 'Cloud Architects', 'Engineering Leaders'],
    collaborators: ['JPMorgan Private Bank'],
    status: 'On Demand',
    image: './images/events/eng-2030.jpg',
    recordingUrl: 'https://www.youtube.com/@hitechadvisors1160',
  },
  {
    id: 'cx-2030-customer-experience',
    title: 'CX 2030: Customer Experience Meets AI',
    series: 'Executive 2030 Series',
    date: 'June 16, 2025',
    location: 'Bellevue, WA',
    format: 'Executive Panel & Live Stream',
    description: 'How do leading companies design customer experiences that are smart, scalable, and future-ready? Featuring leaders from T-Mobile, Microsoft, Starbucks, Amazon, Costco, and Qualtrics.',
    speakers: ['T-Mobile', 'Microsoft', 'Starbucks', 'Amazon', 'Costco', 'Qualtrics'],
    collaborators: ['JPMorgan Private Bank'],
    status: 'On Demand',
    image: './images/events/cx-2030.jpg',
    recordingUrl: 'https://www.youtube.com/@hitechadvisors1160',
  },
  {
    id: 'hiring-2030-ai',
    title: 'Hiring 2030: A Hunt Enabled by AI',
    series: 'Executive 2030 Series',
    date: 'March 12, 2025',
    location: 'Bellevue, WA',
    format: 'Talent & Leadership Panel',
    description: 'Executive hiring, specialized technical recruitment, and board-level talent strategies in an age where AI co-pilots and automated screening reshape the talent acquisition landscape.',
    speakers: ['Chief People Officers', 'Tech Talent Founders', 'Executive Search Partners'],
    collaborators: ['JPMorgan Private Bank'],
    status: 'On Demand',
    image: './images/events/hiring-ai.jpg',
    recordingUrl: 'https://www.youtube.com/@hitechadvisors1160',
  },
  {
    id: 'energy-ai-2024',
    title: 'Energy and AI: Match Made in Heaven or Hell?',
    series: 'Executive 2030 Series',
    date: 'December 4, 2024',
    location: 'Bellevue, WA',
    format: 'Infrastructure & Energy Briefing',
    description: 'Examining the extraordinary power requirements of AI computing clusters, electrical grid constraints, clean energy innovation, and sustainable compute strategies for enterprise infrastructure.',
    speakers: ['Clean Energy Innovators', 'Datacenter VPs', 'JPMorgan Private Bank'],
    collaborators: ['JPMorgan Private Bank'],
    status: 'On Demand',
    image: './images/events/energy-ai.jpg',
    recordingUrl: 'https://www.youtube.com/@hitechadvisors1160',
  },
  {
    id: 'learning-2030-ai',
    title: 'Learning 2030: AI Driven Transformation of Education',
    series: 'Executive 2030 Series',
    date: 'September 25, 2024',
    location: 'Bellevue, WA',
    format: 'Future of Learning Panel',
    description: 'Investigating how generative models, adaptive curriculum agents, and conversational tutors are reshaping higher education and corporate upskilling programs.',
    speakers: ['EdTech Leaders', 'University Deans', 'Corporate Learning Directors'],
    collaborators: ['JPMorgan Private Bank'],
    status: 'On Demand',
    image: './images/events/learning-2030.png',
    recordingUrl: 'https://www.youtube.com/@hitechadvisors1160',
  },
  {
    id: 'comms-2030-ai',
    title: 'Communications 2030: An AI Driven Transformation',
    series: 'Executive 2030 Series',
    date: 'June 12, 2024',
    location: 'Bellevue, WA',
    format: 'Media & Telecom Briefing',
    description: 'Analyzing the profound impact of real-time synthetic media, automated PR pipelines, and agentic communications on corporate reputation management and telecom infrastructure.',
    speakers: ['Telecom Strategists', 'Global Comms Directors', 'JPMorgan Private Bank'],
    collaborators: ['JPMorgan Private Bank'],
    status: 'On Demand',
    image: './images/events/comms-2030.jpeg',
    recordingUrl: 'https://www.youtube.com/@hitechadvisors1160',
  },
  {
    id: 'entertainment-gaming-2030',
    title: 'Entertainment and Gaming 2030',
    series: 'Executive 2030 Series',
    date: 'April 17, 2024',
    location: 'Bellevue, WA',
    format: 'Interactive Media Panel',
    description: 'Generative world building, intelligent non-player characters, real-time procedural physics, and the creative economic shifts unfolding across gaming and cinematic production.',
    speakers: ['Game Studio Founders', 'Creative Directors', 'Venture Capitalists'],
    collaborators: ['JPMorgan Private Bank'],
    status: 'On Demand',
    image: './images/events/entertainment-2030.png',
    recordingUrl: 'https://www.youtube.com/@hitechadvisors1160',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'the-great-displacement',
    title: 'The Great Displacement: Rethinking Engineering Velocity in the AI Era',
    author: 'Farhan Tariq (CTO & Co-Founder)',
    date: 'April 2026',
    readTime: '6 min read',
    category: 'AI & Engineering',
    summary: 'How rapid automation and remote shifts rewritten the compact between engineering leadership and technical talent, shifting the bottleneck from raw syntax generation to architectural resilience.',
    highlight: 'AI doesn’t replace engineers; it shifts the bottleneck from writing syntax to designing resilient system topologies and verifying edge-case safety.',
    image: './images/blog/great-displacement.jpg',
    link: 'https://hitechadvisors.com/the-great-displacement/',
    content: [
      'The modern software landscape has reached an inflection point. Tools that generate code in milliseconds have flooded codebases, but shipping reliable software to production has never demanded more discipline.',
      'Our analysis across enterprise client codebases demonstrates that raw code output increased significantly, while debugging, compliance reconciliation, and architectural review expanded even faster.',
      'To capture genuine velocity, leadership must transition their best architects into verification and security review gates, ensuring that automated code does not compound hidden architectural debt.',
      'Overnight remote and AI workflows rewritten the contract between employers and technical teams: autonomy, output verification, and architectural clarity have superseded mere physical presence.'
    ],
  },
  {
    id: 'building-what-lasts',
    title: 'Building What Lasts: Technology Decisions That Scale',
    author: 'Farhan Tariq (CTO & Co-Founder)',
    date: 'April 2026',
    readTime: '8 min read',
    category: 'Architecture & Strategy',
    summary: 'Evaluating software and platform decisions with a 5-year resilience horizon. How to navigate monolith-to-microservice decouplings without mortgaging your future on proprietary vendor lock-in.',
    highlight: 'A great technology decision is not judged by how quickly it can be built, but by how easily it can be refactored when the business paradigm shifts.',
    image: './images/blog/building-what-lasts.jpg',
    link: 'https://hitechadvisors.com/building-what-lasts-technology-decisions-that-scale/',
    content: [
      'Over 20+ years in technology leadership, converting monolithic applications to cloud-native foundations and managing distributed teams, one lesson stands above all others: simplicity scales, complexity collapses.',
      'Every CTO faces the siren song of proprietary platform ecosystems that promise zero setup time. Yet, when licensing fees spike or strategic pivots occur, uncoupling from these silos paralyzes development.',
      'We advocate for modular, open-standard interfaces at key boundaries: database layers, identity providers, and inference backbones.',
      'When your organization owns the orchestration layer, cloud infrastructure becomes an elastic commodity rather than a hostage situation.'
    ],
  },
  {
    id: 'edge-is-not-an-optimization',
    title: 'Edge Is Not an Optimization. It’s the Foundation',
    author: 'Taryn Adams',
    date: 'March 2026',
    readTime: '7 min read',
    category: 'Cloud & Distributed Systems',
    summary: 'Why processing compute closer to the physical user and sensor is no longer a luxury for specialized hardware, but the baseline requirement for enterprise data privacy and latency.',
    highlight: 'Bandwidth is expensive; latency kills user flow; regulation demands data sovereignty. The edge is where modern compute must reside.',
    image: './images/blog/edge-foundation.jpg',
    link: 'https://hitechadvisors.com/edge-is-not-an-optimization-its-the-foundation/',
    content: [
      'While legacy workplace automation players push exclusively for hyperscale cloud computing as the vehicle for future AI development, market leaders are recognizing the structural limits of centralized backhaul.',
      'Model-shrinking techniques like Retrieval-Augmented Generation (RAG) and quantization have matured to the point where sovereign edge hardware can execute local reasoning with microsecond responsiveness.',
      'Today, privacy mandates, local inference latency, and mobile offline resilience have shattered the centralized orthodoxy.',
      'Organizations deploying intelligence at the physical edge achieve unprecedented reliability while drastically cutting recurring cloud API bills.'
    ],
  },
  {
    id: 'the-ai-paradox',
    title: 'The AI Paradox: Your Most Expensive Technology Is Limited by Your Least Trained Employee',
    author: 'Haresh Sangani (CEO)',
    date: 'March 2026',
    readTime: '6 min read',
    category: 'Enterprise Leadership',
    summary: 'The most expensive AI implementation never fails because of algorithmic accuracy. It fails because leadership assumes tool access is sufficient without human-in-the-loop capability engineering.',
    highlight: 'Organizations pour millions into copilots and data lakes, then discover that enterprise productivity is bounded entirely by the prompt literacy and judgment of frontline staff.',
    image: './images/blog/ai-paradox.jpg',
    link: 'https://hitechadvisors.com/the-ai-paradox-your-most-expensive-technology-is-limited-by-your-least-trained-employee/',
    content: [
      'The most expensive AI failures observed across enterprise engagements did not happen because of software defects. They failed because executive leadership assumed that software procurement equaled operational adoption.',
      'Organizations are pouring serious capital into AI platforms, copilots, automation layers, and enterprise data warehouses, then expecting organic ROI without structured role-based training.',
      'If your frontline teams don’t know how to validate synthetic outputs, challenge hallucinated insights, or frame context-rich inputs, your multimillion-dollar LLM stack operates at the intelligence level of an unguided intern.',
      'True AI capability is 20% technology selection and 80% change management, user enablement, and workflow re-engineering.'
    ],
  },
  {
    id: 'okrs-performance-growth',
    title: 'OKRs & Performance Management for Tech Teams: Aligning Strategy, Execution & Growth',
    author: 'Peter Simonsen (Principal Consultant)',
    date: 'February 2026',
    readTime: '8 min read',
    category: 'Architecture & Strategy',
    summary: 'Why traditional annual planning is dead in fast-moving tech organizations, and how structured Objectives & Key Results turn chaotic engineering backlogs into measurable enterprise value.',
    highlight: 'Without rigorous OKRs, engineering velocity is just motion without direction. Measurement must tie commit frequency directly to customer retention and margin expansion.',
    image: './images/blog/okrs-growth.jpg',
    link: 'https://hitechadvisors.com/okrs-performance-management-for-tech-teams-aligning-strategy-execution-growth/',
    content: [
      'In high-growth tech organizations, annual roadmaps are rendered obsolete within 60 days. Market dynamics shift, product discoveries emerge, and competitive moves require agility.',
      'Yet without structured alignment, autonomous teams diverge into competing micro-priorities that fragment architecture and burn executive goodwill.',
      'Our OKR framework links quarterly Key Results directly to technical health metrics—mean time to recovery, test coverage, deployment frequency—alongside commercial KPIs.',
      'Clarity of purpose empowers engineers to say "no" to distractions and focus energy solely on needle-moving customer outcomes.'
    ],
  },
  {
    id: 'cloud-migration-devops',
    title: 'Cloud Migration & DevOps: Best Practices for Enterprises',
    author: 'Farhan Tariq (CTO & Co-Founder)',
    date: 'December 2025',
    readTime: '9 min read',
    category: 'Cloud & Distributed Systems',
    summary: 'Moving to the cloud and adopting DevOps is not a toolchain swap—it is an organizational restructuring that demands phased migration patterns, infrastructure-as-code, and continuous governance.',
    highlight: 'Lift-and-shift migrations simply import legacy technical debt into higher-cost virtual machines. True modernization requires refactoring for cloud-native elasticity.',
    image: './images/blog/cloud-devops.jpg',
    link: 'https://hitechadvisors.com/cloud-migration-devops-best-practices-for-enterprises/',
    content: [
      'Many enterprises recognize that cloud infrastructure and DevOps pipelines are no longer optional—they are prerequisites for agility and security.',
      'However, moving to AWS, Azure, or GCP without automated CI/CD and immutable infrastructure inevitably inflates cloud expenditure without improving shipping velocity.',
      'We advocate for a phased "strangler fig" migration: isolate discrete capabilities, wrap them in clean APIs, automate their containerized deployment, and retire mainframe legacy modules incrementally.',
      'Coupling infrastructure-as-code (Terraform) with automated security policy guardrails allows developers to deploy multiple times daily with zero downtime.'
    ],
  },
  {
    id: 'ai-adoption-roadmap',
    title: 'How to Build an AI Adoption Roadmap for Your Enterprise',
    author: 'Lan Wang (Partner & COO)',
    date: 'December 2025',
    readTime: '7 min read',
    category: 'AI & Engineering',
    summary: 'A disciplined, 4-stage playbook for moving from fragmented GenAI proofs-of-concept to governed, production-grade enterprise cognitive architecture with predictable ROI.',
    highlight: 'An uncoordinated rollout leads to wasted pilot capital and fragmented security. Prioritize use cases where predictive intelligence solves high-friction bottlenecks.',
    image: './images/blog/ai-roadmap.jpg',
    link: 'https://hitechadvisors.com/how-to-build-an-ai-adoption-roadmap-for-your-enterprise/',
    content: [
      'Enterprise AI adoption rarely suffers from a lack of ideas—it suffers from a lack of prioritization. Business units launch rogue pilots that never transition into production.',
      'Our 4-phase roadmap guides executive sponsors through Discovery & Data Readiness, Architectural Guardrails, Pilot Acceleration, and Scaled Production Governance.',
      'By establishing central security standards—data minimization, prompt injection filters, and tenant isolation—enterprises empower business teams to innovate safely.',
      'The winning formula: pick one high-impact workflow, measure baseline hours, deploy an embedded agent, and prove ROI within 90 days before scaling enterprise-wide.'
    ],
  },
  {
    id: 'deepfake-defense',
    title: 'Deepfake Defense & Cyber Resilience: A New Imperative for Leaders',
    author: 'Deborah Steele (Client Partner)',
    date: 'November 2025',
    readTime: '7 min read',
    category: 'Cybersecurity & Risk',
    summary: 'As synthetic voice cloning and video manipulation enter commercial fraud pipelines, insurance and banking leaders must move beyond human verification to zero-trust cryptographic provenance.',
    highlight: 'When sight and sound can no longer be trusted, identity verification must be anchored in cryptographic proof and multi-party authentication protocol.',
    image: './images/blog/deepfake-defense.jpg',
    link: 'https://hitechadvisors.com/deepfake-defense-a-new-imperative-for-insurance-leaders/',
    content: [
      'The insurance and financial services sectors have always traded on trust—trust in documentation, biometric signatures, and identity confirmation.',
      'Generative video and real-time audio deepfakes have weaponized social engineering to unprecedented levels, bypassing voice recognition and tricking executive wire authorizations.',
      'Combating synthetic media requires a defense-in-depth posture: out-of-band cryptographic confirmation, behavioral anomaly detection, and continuous employee simulation exercises.',
      'Leadership must treat synthetic fraud not as an IT glitch, but as an existential enterprise risk requiring board-level governance and auditable defense protocols.'
    ],
  },
];

export const OFFICE_CONTACT = {
  addressLine1: '608 State Street South',
  addressLine2: 'Kirkland, WA 98033',
  phone: '(425) 284-3315',
  phoneRaw: 'tel:+14252843315',
  email: 'hello@hitechadvisors.com',
  mapUrl: 'https://www.google.com/maps/place/608+State+St,+Kirkland,+WA+98033/@47.6707659,-122.2019918,17z',
  linkedinUrl: 'https://www.linkedin.com/company/hitech-advisors/',
  youtubeUrl: 'https://www.youtube.com/@hitechadvisors1160',
};
