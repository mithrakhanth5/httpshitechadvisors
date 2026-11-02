export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
  techStack: string[];
  metrics: string;
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
  format: string;
  description: string;
  speakers: string[];
  status: 'Upcoming' | 'On Demand';
  recordingUrl?: string;
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

export const SITE_STATS = [
  { value: '50+', label: 'Enterprise Clients', detail: 'Fortune 500 to High-Growth Scale-ups' },
  { value: '180+', label: 'Engagements Delivered', detail: 'Zero failure rate across mission-critical rollouts' },
  { value: '10+', label: 'Industry Domains', detail: 'Cloud, Healthcare, Retail, Fintech, Telecommunications' },
  { value: '10+', label: 'Years of Excellence', detail: 'Founded in the heart of the Pacific Northwest tech corridor' },
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
    description: 'We share information freely, set realistic expectations, and ensure our clients and partners always have the full picture.',
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    bio: 'Visionary technology executive with over two decades of experience scaling global technology advisory practices and enterprise solutions.',
  },
  {
    name: 'Lan Wang',
    role: 'Partner & Chief Operating Officer',
    linkedin: 'https://www.linkedin.com/in/wanglan3/',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    bio: 'Operational leader driving client delivery excellence, strategic growth, and cross-functional technology initiatives across enterprise portfolios.',
  },
  {
    name: 'Peter Simonsen',
    role: 'Principal Consultant',
    linkedin: 'https://www.linkedin.com/in/petersim/',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    bio: 'Enterprise systems architect with deep expertise in large-scale infrastructure, cloud migrations, and high-availability operations.',
  },
  {
    name: 'Deborah Steele',
    role: 'Client Partner',
    linkedin: 'https://www.linkedin.com/in/steele-deborah/',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    bio: 'Strategic relationship leader dedicated to aligning enterprise tech initiatives with quantifiable business outcomes and talent strategy.',
  },
  {
    name: 'Sandeep Krishnamurthy',
    role: 'Principal Consultant',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    bio: 'Veteran technical strategist advising executive teams on emerging architectures, edge computing, and AI integration.',
  },
  {
    name: 'Ruchi Khanna',
    role: 'Head of Talent Solutions',
    linkedin: 'https://www.linkedin.com/in/khannaruchi/',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    bio: 'Leads our elite tech talent network, curating and embedding top 1% specialized engineers and leadership squads directly into client teams.',
  },
  {
    name: 'Taryn Adams',
    role: 'Marketing Manager & Thought Leadership Author',
    linkedin: 'https://www.linkedin.com/in/tarynmadams/',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    bio: 'Technology writer and researcher spearheading the Executive 2030 Series and Hitech Advisors analytical whitepapers.',
  },
  {
    name: 'Isha Sangani',
    role: 'Consultant',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80',
    bio: 'Specialist in rapid prototyping, AI workflows, and digital transformation execution across fast-growing enterprises.',
  },
];

export const CLIENT_LOGOS = [
  { name: 'Microsoft', category: 'Enterprise Cloud' },
  { name: 'Qualtrics', category: 'Experience Management' },
  { name: 'Costco Wholesale', category: 'Global Retail & Logistics' },
  { name: 'Bank of America', category: 'Financial Services' },
  { name: 'Cisco Systems', category: 'Networking & Telemetry' },
  { name: 'T-Mobile', category: 'Telecommunications' },
  { name: 'Nintendo', category: 'Interactive Entertainment' },
  { name: 'Gates Foundation', category: 'Global Health & Philanthropy' },
  { name: 'Flipkart', category: 'E-Commerce Infrastructure' },
  { name: 'Genesys', category: 'Customer Experience AI' },
  { name: 'Intellectual Ventures', category: 'Deep Tech & IP' },
  { name: 'BuyWander', category: 'Autonomous Logistics' },
  { name: 'SeniorLife', category: 'Healthcare Tech' },
  { name: 'inQbrands', category: 'Global Brand Acceleration' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'cloud-and-security',
    title: 'Cloud & Security Architecture',
    subtitle: 'Zero-trust foundations, cloud migration & resilient AI infrastructure',
    description: 'Market-leading cloud, AI, and cybersecurity engineering. We architect battle-tested hybrid and multi-cloud foundations that eliminate single points of failure, enforce defense-in-depth, and optimize compute spend for intensive machine learning workloads.',
    iconName: 'ShieldCheck',
    metrics: '99.999% reliability architecture & up to 40% cloud cost reduction',
    deliverables: [
      'Zero-Trust Architecture & Governance (FedRAMP, SOC2, HIPAA)',
      'Enterprise AWS, Azure, & GCP Cloud Migrations',
      'AI & Machine Learning Infrastructure Optimization (GPU clusters, FinOps)',
      'Threat Modeling, Penetration Testing & Automated Incident Response',
    ],
    techStack: ['Azure', 'AWS', 'Kubernetes', 'Terraform', 'Vault', 'Datadog', 'CrowdStrike'],
  },
  {
    id: 'product-engineering',
    title: 'Product & AI Engineering',
    subtitle: 'Transforming theoretical models into production-grade systems',
    description: 'We bridge the gap between AI experimentation and robust production engineering. Our senior architects and full-cycle engineers design, prototype, and scale resilient software systems that run seamlessly under real-world enterprise load.',
    iconName: 'Cpu',
    metrics: '3x accelerated time-to-market with automated CI/CD and edge deployment',
    deliverables: [
      'Full-Lifecycle Enterprise Software & Systems Development',
      'LLM & SLM Integration, Fine-Tuning & Retrieval-Augmented Generation (RAG)',
      'Real-Time Event-Driven Distributed Architectures',
      'Modern Edge AI & Mobile Diagnostics Applications',
    ],
    techStack: ['TypeScript', 'Python', 'React', 'Go', 'Docker', 'PostgreSQL', 'PyTorch', 'FastAPI'],
  },
  {
    id: 'it-systems-operations',
    title: 'IT Systems & Autonomous Operations',
    subtitle: 'Modernizing legacy backbones and scaling automated DevOps',
    description: 'We help enterprise leaders select, streamline, and modernize their core IT platforms. By injecting intelligent automation, AI-driven observability, and unified MDM frameworks, we liberate IT departments from reactive firefighting.',
    iconName: 'Layers',
    metrics: 'Over 80% reduction in operational tickets and zero-touch MDM rollout',
    deliverables: [
      'Enterprise Modern Device Management (MDM) & Spin-Off Separations',
      'Automated CI/CD Pipelines & Self-Healing DevOps Workflows',
      'Unified Identity & Access Management (Okta, Entra ID, Ping)',
      'Enterprise Data Management & Real-Time Telemetry Observability',
    ],
    techStack: ['Intune', 'Jamf', 'Okta', 'Ansible', 'PagerDuty', 'Snowflake', 'Kafka'],
  },
  {
    id: 'talent-solutions',
    title: 'Talent Solutions & Embedded Teams',
    subtitle: 'Specialized senior tech experts embedded directly into your squads',
    description: 'The talent gap in AI, Cloud, and distributed engineering can stall growth. We don’t just supply resumes; we embed vetted, high-velocity specialists and managed squads directly into your engineering and product organizations.',
    iconName: 'Users',
    metrics: 'Top 1% vetted specialist network with 94% retention on engagements',
    deliverables: [
      'Direct-Hire Executive & Strategic Tech Leadership (Fractional CTO/CISO)',
      'Augmented Autonomous Engineering & Data Science Squads',
      'AI-Driven Skill Matching & Velocity Benchmarking',
      'Technical Capability & Upskilling Workshops for In-House Teams',
    ],
    techStack: ['Leadership Search', 'Managed Squads', 'Embedded Architects', 'Capability Upskilling'],
  },
  {
    id: 'growth-acceleration',
    title: 'Growth Acceleration & Market Strategy',
    subtitle: 'Validating market demand and scaling revenue channels with data intelligence',
    description: 'Leverage data intelligence and AI-driven insights to evaluate market entry, validate product-market fit, streamline sales operations, and scale distribution channels across direct and partner ecosystems.',
    iconName: 'TrendingUp',
    metrics: 'Average 3.4x ARR expansion velocity across advisory portfolios',
    deliverables: [
      'Data-Driven GTM Strategy & Total Addressable Market Validation',
      'Enterprise Channel Partner Program Design & Execution',
      'Revenue Operations (RevOps) AI Automation & CRM Optimization',
      'Cross-Border North American & International Expansion Advisory',
    ],
    techStack: ['HubSpot AI', 'Salesforce Einstein', 'Segment', 'Tableau', 'Mixpanel'],
  },
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
    challenge: 'Healthcare workers in remote sub-Saharan African clinics lacked access to on-site radiologists to analyze ultrasound and medical imaging scans.',
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
    id: '2030-series-q1',
    title: 'The 2030 Enterprise: Navigating the Next Wave of Sovereign & Edge AI',
    series: 'Executive 2030 Series',
    date: 'March 24, 2026 • 11:00 AM PST',
    format: 'Executive RoundTable & Live Interactive Stream',
    description: 'An invitation-only panel featuring Fortune 500 CTOs and venture innovators discussing how edge computing and sovereign LLMs will redefine corporate data governance over the next five years.',
    speakers: ['David Chen (Ex-AWS Chief Architect)', 'Sarah Jenkins (VP AI Infrastructure)', 'Hitech Advisory Partners'],
    status: 'Upcoming',
  },
  {
    id: '2030-series-q2',
    title: 'Zero-Downtime M&A: Decoupling Corporate Tech Debt in 60 Days',
    series: 'Executive 2030 Series',
    date: 'April 18, 2026 • 10:00 AM PST',
    format: 'Strategic Workshop & Case Clinic',
    description: 'Deep dive into real-world divestitures and carve-outs. How to cleanly untangle corporate networks, SaaS stacks, and employee identity without business disruption.',
    speakers: ['Hitech Enterprise Architecture Team', 'Guest Enterprise Legal & InfoSec Counsel'],
    status: 'Upcoming',
  },
  {
    id: '2030-past-1',
    title: 'AI Provides The Baseline, Humans Provide The Delta: The 2025 Retrospective',
    series: 'Executive 2030 Series',
    date: 'Recorded Live in Kirkland, WA',
    format: 'Executive Panel Recording',
    description: 'Exploring why 70% of enterprise generative AI pilots stall before production, and the practical cultural and architectural shifts needed to generate measurable ROI.',
    speakers: ['Hitech Advisory Partners & Pacific NW Tech Leaders'],
    status: 'On Demand',
    recordingUrl: 'https://www.youtube.com/watch?v=nSYfXoNSRRg',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'the-great-displacement',
    title: 'The Great Displacement: Rethinking Engineering Velocity in the AI Era',
    author: 'Taryn Adams',
    date: 'May 11, 2026',
    readTime: '6 min read',
    category: 'AI & Engineering',
    summary: 'Why code generation alone is not engineering velocity. How elite organizations are restructuring senior architectural roles around verification and system design.',
    highlight: 'AI doesn’t replace engineers; it shifts the bottleneck from writing syntax to designing resilient system topologies and verifying edge-case safety.',
    content: [
      'The modern software landscape has reached an inflection point. Tools that generate code in milliseconds have flooded codebases, but shipping reliable software to production has never demanded more discipline.',
      'Our analysis of over 50 enterprise client codebases demonstrates that raw lines of code output increased by 300%, while debugging and architectural reconciliation time expanded by 45%.',
      'To capture genuine velocity, leadership must transition their best architects into verification and security review gates, ensuring that automated code does not compound hidden architectural debt.',
    ],
  },
  {
    id: 'building-what-lasts',
    title: 'Building What Lasts: Technology Decisions That Scale Through Disruption',
    author: 'Taryn Adams',
    date: 'April 16, 2026',
    readTime: '8 min read',
    category: 'Architecture & Strategy',
    summary: 'Evaluating software and platform decisions with a 5-year resilience horizon. How to avoid vendor lock-in while leveraging cloud hyperscalers.',
    highlight: 'A great technology decision is not judged by how quickly it can be built, but by how easily it can be refactored when the business paradigm shifts.',
    content: [
      'Every CTO faces the siren song of proprietary platform ecosystems that promise zero setup time. Yet, when licensing fees spike or strategic pivots occur, uncoupling from these silos paralyzes development.',
      'We advocate for modular, open-standard interfaces at key boundaries: database layers, identity providers, and inference backbones.',
      'When your organization owns the orchestration layer, cloud infrastructure becomes an elastic commodity rather than a hostage situation.',
    ],
  },
  {
    id: 'edge-is-not-an-optimization',
    title: 'Edge Is Not an Optimization. It’s the Foundation',
    author: 'Taryn Adams',
    date: 'March 10, 2026',
    readTime: '7 min read',
    category: 'Cloud & Distributed Systems',
    summary: 'Why processing compute closer to the user and device is no longer a luxury for specialized hardware, but the baseline requirement for enterprise data privacy.',
    highlight: 'Bandwidth is expensive; latency kills user flow; regulation demands data sovereignty. The edge is where modern compute must reside.',
    content: [
      'For the past decade, centralization was the dominant gospel of enterprise IT. Everything belonged in massive hyperscaler data centers.',
      'Today, privacy mandates, local inference latency, and mobile offline resilience have shattered that orthodoxy.',
      'Organizations deploying intelligence at the physical edge—whether on handheld medical tools or localized branch hardware—achieve unprecedented reliability while drastically cutting backhaul cloud fees.',
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
