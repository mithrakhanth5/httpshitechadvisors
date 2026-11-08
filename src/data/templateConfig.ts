export interface NavLink {
  label: string;
  href: string;
}

export interface RoleItem {
  title: string;
  description: string;
  hue: string;
}

export interface Role {
  id: string;
  name: string;
  tint: 'blue' | 'green' | 'yellow';
  tagline: string;
  items: RoleItem[];
  previewTasks: {
    title: string;
    source: string;
    time: string;
    status: string;
    details: string;
  }[];
}

export interface TaskTile {
  id: string;
  title: string;
  description: string;
  badge: string;
  bgColor: string;
  gridY: string;
  gridX: string;
  illustration: string;
  contextTag: string;
}

export interface CapabilityCard {
  id: string;
  title: string;
  description: string;
  graphic: 'skills' | 'context' | 'stay';
  badge: string;
  previewSteps: {
    label: string;
    status: 'completed' | 'active' | 'pending';
    detail: string;
  }[];
}

export interface IntegrationTool {
  name: string;
  category: 'Communication' | 'Productivity' | 'Development' | 'Sales & CRM' | 'Documents';
  icon: string;
  description: string;
  connected?: boolean;
}

export interface MultiplayerPoint {
  title: string;
  description: string;
  iconType: 'leafL' | 'yellow' | 'green' | 'leafR';
}

export interface SecurityPoint {
  title: string;
  description: string;
  highlight?: string;
}

export interface TemplateConfig {
  brand: {
    name: string;
    logoText: string;
    tagline: string;
    copyright: string;
    earlyAccessUrl: string;
    demoUrl: string;
  };
  nav: {
    links: NavLink[];
    demoCta: string;
    earlyAccessCta: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    trustMetric: string;
  };
  meetSym: {
    title: string;
    subtitle: string;
    description: string;
  };
  everyTask: {
    title: string;
    description: string;
  };
  taskList: {
    title: string;
    tiles: TaskTile[];
  };
  doesTheWork: {
    title: string;
    description: string;
    cards: CapabilityCard[];
  };
  integrations: {
    title: string;
    description: string;
    categories: string[];
    tools: IntegrationTool[];
  };
  roles: {
    title: string;
    description: string;
    list: Role[];
  };
  multiplayer: {
    badge: string;
    title: string;
    description: string;
    points: MultiplayerPoint[];
  };
  security: {
    title: string;
    subtitle: string;
    points: SecurityPoint[];
  };
  finalCta: {
    title: string;
    description: string;
    buttonText: string;
    subtext: string;
  };
  footer: {
    copyright: string;
    columns: {
      title: string;
      links: { label: string; href: string }[];
    }[];
  };
}

export const templateConfig: TemplateConfig = {
  brand: {
    name: 'Symmetry',
    logoText: 'Symmetry',
    tagline: 'The work finds itself and gets done.',
    copyright: 'Symmetry AI, Inc. ©2026',
    earlyAccessUrl: 'https://form.typeform.com/to/Ejqdj9L8',
    demoUrl: '#demo',
  },
  nav: {
    links: [
      { label: 'Product', href: '#product' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Roles', href: '#roles' },
      { label: 'Security', href: '#security' },
    ],
    demoCta: 'Book a demo',
    earlyAccessCta: 'Get early access',
  },
  hero: {
    badge: 'Autonomous Workplace Coordination',
    title: 'The work finds itself',
    titleHighlight: 'and gets done.',
    description:
      'Every teammate gets a Sym, a personal work agent that finds the tasks hiding across your tools and finishes them the way you would.',
    primaryCta: 'Get early access',
    secondaryCta: 'Book a demo',
    trustMetric: 'Connecting across 100+ workplace tools with zero configuration required.',
  },
  meetSym: {
    title: 'Meet Sym',
    subtitle: 'Your counterpart for work',
    description:
      'Work comes at you from every direction. Keeping track is a job of its own. Sym finds your tasks, understands the context, learns how you work and does them just like you.',
  },
  everyTask: {
    title: 'Every task, from everywhere.',
    description:
      'Sym catches every task, commitment and deadline that surfaces throughout your day, and lands it in one place with all the details and decisions behind it, so nothing slips.',
  },
  taskList: {
    title: 'A task list that runs itself.',
    tiles: [
      {
        id: 'c1',
        title: 'Tasks land with context',
        description: 'Each task arrives with its source and background context attached.',
        badge: 'Smart Context',
        bgColor: '#E8F3FA',
        gridY: '/art/task-list/c1-grid-y.svg',
        gridX: '/art/task-list/c1-grid-x.svg',
        illustration: '/art/task-list/c1-task.svg',
        contextTag: 'Attached from Slack #general & Linear PR #342',
      },
      {
        id: 'c2',
        title: 'Your list, already sorted',
        description:
          'Grouped by source, project and urgency, so you skip the sorting and get straight to the work.',
        badge: 'Priority Engine',
        bgColor: '#FDF7E7',
        gridY: '/art/task-list/c2-grid-y.svg',
        gridX: '/art/task-list/c2-grid-x.svg',
        illustration: '/art/task-list/c2-lifted.svg',
        contextTag: 'Ranked by urgency: Due in 2 hrs',
      },
      {
        id: 'c3',
        title: 'Tasks update themselves',
        description:
          'As work moves across your tools, tasks pick up new context, change status and close on their own.',
        badge: 'Self-Updating',
        bgColor: '#E8F7EC',
        gridY: '/art/task-list/c3-grid-y.svg',
        gridX: '/art/task-list/c3-grid-x.svg',
        illustration: '/art/task-list/c3-task-launch.svg',
        contextTag: 'Status auto-transitioned via Notion doc update',
      },
      {
        id: 'c4',
        title: 'Tasks fly off your board',
        description:
          'Focus mode shows each task’s source and context at a glance, so you can act in seconds.',
        badge: 'Focus Execution',
        bgColor: '#F6EFF9',
        gridY: '/art/task-list/c4-grid-y.svg',
        gridX: '/art/task-list/c4-grid-x.svg',
        illustration: '/art/task-list/c4-board.svg',
        contextTag: 'One-click approve & auto-resolve',
      },
    ],
  },
  doesTheWork: {
    title: 'Sym does the work, the way you would.',
    description:
      'It learns how you do each task, knows the full story behind it and chases down what’s missing for you. You say the word, and it finishes the job across your tools.',
    cards: [
      {
        id: 'skills',
        title: 'Builds its own skills.',
        description:
          'Hand Sym a new task and it studies how you’ve done it before, then builds a skill. Next time, it’s done your way. Nothing to set up, nothing to explain.',
        graphic: 'skills',
        badge: 'Adaptive Skill Learning',
        previewSteps: [
          { label: 'Observed past investor update formatting', status: 'completed', detail: 'Identified 4 standard KPI metrics & tone preference' },
          { label: 'Synthesized monthly SaaS metrics', status: 'completed', detail: 'Pulled ARR, churn, and NPS from Stripe & Mixpanel' },
          { label: 'Drafted update memo in Notion', status: 'active', detail: 'Ready for your 1-click confirmation' },
        ],
      },
      {
        id: 'context',
        title: 'Sees the whole picture.',
        description:
          'Sym maps every thread, doc, decision and person behind your work and how they connect, so it starts every task up to speed. Never from scratch.',
        graphic: 'context',
        badge: 'Unified Knowledge Graph',
        previewSteps: [
          { label: 'Indexed 14 Slack threads on Q3 Roadmap', status: 'completed', detail: 'Resolved conflicting ship dates' },
          { label: 'Cross-referenced Linear milestone #89', status: 'completed', detail: 'Found dependencies assigned to design lead' },
          { label: 'Synced team alignment summary', status: 'active', detail: 'No missing information remaining' },
        ],
      },
      {
        id: 'stay',
        title: 'Stays on top of it all.',
        description:
          'Work stalls and loose ends pile up. Sym nudges you when it needs your input and unblocks itself by chasing down what it’s missing from your team.',
        graphic: 'stay',
        badge: 'Proactive Coordination',
        previewSteps: [
          { label: 'Chased missing security questionnaire', status: 'completed', detail: 'Prompted vendor with auto-filled responses' },
          { label: 'Scheduled design review hold', status: 'completed', detail: 'Found free slot across 4 stakeholder calendars' },
          { label: 'Delivered sign-off summary to channel', status: 'active', detail: 'Unblocked 3 pending pull requests' },
        ],
      },
    ],
  },
  integrations: {
    title: 'Sym follows through and closes the loop across 100+ tools.',
    description:
      'Connect Gmail, Slack, Notion, Linear and everything else your work runs through. Nothing to configure. The more Sym can see, the more it can finish.',
    categories: ['All', 'Communication', 'Productivity', 'Development', 'Sales & CRM', 'Documents'],
    tools: [
      { name: 'Slack', category: 'Communication', icon: '/art/every-task/logo-slack.svg', description: 'Monitors channels, threads, and action items', connected: true },
      { name: 'Gmail', category: 'Communication', icon: '/art/every-task/logo-gmail.svg', description: 'Catches commitments and drafts executive follow-ups', connected: true },
      { name: 'Linear', category: 'Productivity', icon: '/art/integrations/logos/linear.svg', description: 'Tracks issues, cycles, and milestone updates', connected: true },
      { name: 'Notion', category: 'Documents', icon: '/art/every-task/logos/notion.webp', description: 'Updates wikis, specs, meeting notes, and roadmaps', connected: true },
      { name: 'Google Drive', category: 'Documents', icon: '/art/every-task/logo-drive.svg', description: 'Indexes shared presentations, sheets, and contracts', connected: true },
      { name: 'Google Calendar', category: 'Productivity', icon: '/art/every-task/logos/google-calendar.webp', description: 'Prepares briefs and attendee context ahead of time', connected: true },
      { name: 'Asana', category: 'Productivity', icon: '/art/every-task/logos/asana.webp', description: 'Keeps project boards in sync across cross-functional teams', connected: true },
      { name: 'HubSpot', category: 'Sales & CRM', icon: '/art/every-task/logos/hubspot.webp', description: 'Auto-logs deal stages, call recaps, and contact activity', connected: true },
      { name: 'Claude', category: 'Development', icon: '/art/every-task/logos/claude.webp', description: 'Coordinates AI reasoning across deep research tasks', connected: true },
      { name: 'WhatsApp', category: 'Communication', icon: '/art/every-task/logos/whatsapp.webp', description: 'Captures ad-hoc messages from clients and stakeholders', connected: true },
      { name: 'Google Sheets', category: 'Documents', icon: '/art/every-task/logos/google-sheets.webp', description: 'Rolls up monthly numbers and financial models', connected: true },
      { name: 'Outlook', category: 'Communication', icon: '/art/every-task/logos/outlook.webp', description: 'Enterprise email sync and executive scheduling', connected: true },
    ],
  },
  roles: {
    title: 'Built for how you actually work.',
    description:
      'Whatever your role, one forgotten promise can cost you. Pick yours and see what Sym remembers for you, what it takes off your plate and the skills it learns along the way.',
    list: [
      {
        id: 'founder',
        name: 'Founder',
        tint: 'blue',
        tagline: 'Lead the vision while Sym handles executive coordination and stakeholder cadence.',
        items: [
          { title: 'Investor updates', description: 'Drafted monthly from your metrics and wins.', hue: '#6CBEE4' },
          { title: 'Hiring follow-ups', description: 'Every candidate intro answered on time.', hue: '#40AA4A' },
          { title: 'Board prep', description: 'The deck and the open questions, ready before you walk in.', hue: '#FAC344' },
          { title: 'Team status roll-ups', description: 'What everyone shipped, in one note.', hue: '#6CBEE4' },
        ],
        previewTasks: [
          { title: 'Q3 Board Deck Prep', source: 'Notion + Sheets', time: '10:00 AM', status: 'Ready for Review', details: 'Financials reconciled, 3 pending slides drafted' },
          { title: 'Series A Lead Check-in', source: 'Gmail', time: '11:30 AM', status: 'Draft Prepared', details: 'Key metrics attached from Stripe dashboard' },
          { title: 'All-Hands Agenda Compilation', source: 'Slack #announcements', time: '2:15 PM', status: 'Automated', details: 'Shipped features aggregated from 4 eng teams' },
        ],
      },
      {
        id: 'product',
        name: 'Product',
        tint: 'green',
        tagline: 'Ship faster with zero context loss between customer calls, Figma specs, and Linear tickets.',
        items: [
          { title: 'Weekly team updates', description: 'Drafted from what shipped and what moved.', hue: '#40AA4A' },
          { title: 'Launch checklists', description: 'Kept current as tasks close across your tools.', hue: '#6CBEE4' },
          { title: 'Feedback triage', description: 'Sorted from Figma, Slack and calls into next steps.', hue: '#FAC344' },
          { title: 'Decision tracking', description: 'Every call captured, with where it was made.', hue: '#40AA4A' },
        ],
        previewTasks: [
          { title: 'Beta Launch Checklist Roll-Up', source: 'Linear + Figma', time: '9:45 AM', status: '94% Complete', details: '15/16 blocking tickets closed, release notes drafted' },
          { title: 'Enterprise Customer Call Insights', source: 'Gong + Slack', time: '1:00 PM', status: 'Synthesized', details: 'Extracted 3 recurring feature requests into Linear backlog' },
          { title: 'Spec Drift Warning', source: 'Notion', time: '3:30 PM', status: 'Alerted', details: 'Architecture change in Slack flagged against PRD' },
        ],
      },
      {
        id: 'operations',
        name: 'Operations',
        tint: 'yellow',
        tagline: 'Keep processes running smoothly without chasing down loose ends across departments.',
        items: [
          { title: 'Vendor reviews', description: 'Contracts and terms gathered before you meet.', hue: '#FAC344' },
          { title: 'Process docs', description: 'Updated as the process actually changes.', hue: '#6CBEE4' },
          { title: 'Cross-team roll-ups', description: 'What every team moved, in one read-out.', hue: '#40AA4A' },
          { title: 'Action item tracking', description: 'Every owner and deadline, followed up.', hue: '#FAC344' },
        ],
        previewTasks: [
          { title: 'Annual SaaS Vendor Audit', source: 'DocuSign + Gmail', time: '10:15 AM', status: 'Compiled', details: '4 upcoming auto-renewals flagged with pricing deltas' },
          { title: 'New Hire Onboarding Pipeline', source: 'Notion + HRIS', time: '12:00 PM', status: 'In Sync', details: 'Hardware, accounts, and 1:1 welcomes pre-scheduled' },
          { title: 'Quarterly OKR Action Tracker', source: 'Slack + Sheets', time: '4:20 PM', status: 'Followed Up', details: 'Nudged 6 department leads with automated status links' },
        ],
      },
      {
        id: 'sales',
        name: 'Sales',
        tint: 'blue',
        tagline: 'Never drop a follow-up or lose a deal to slow CRM updates and disjointed prep.',
        items: [
          { title: 'Post-call follow-ups', description: 'Drafted with next steps right after the call.', hue: '#6CBEE4' },
          { title: 'CRM updates', description: 'Deal notes and stages kept current for you.', hue: '#40AA4A' },
          { title: 'Deal prep', description: 'Context on every account before each call.', hue: '#FAC344' },
          { title: 'Proposal drafts', description: 'Built from the call and your past proposals.', hue: '#6CBEE4' },
        ],
        previewTasks: [
          { title: 'Acme Corp Post-Demo Follow-Up', source: 'HubSpot + Gmail', time: '11:05 AM', status: 'Sent via Sym', details: 'Custom pricing sheet and security whitepaper attached' },
          { title: 'HubSpot Stage Progression: Closed/Won', source: 'HubSpot', time: '2:40 PM', status: 'Updated', details: 'Contract value and start date updated from DocuSign' },
          { title: 'Enterprise Discovery Prep Brief', source: 'LinkedIn + Web', time: '4:00 PM', status: 'Ready', details: 'Key decision-makers, tech stack, and pain points outlined' },
        ],
      },
      {
        id: 'client-services',
        name: 'Client services',
        tint: 'green',
        tagline: 'Deliver white-glove client satisfaction with instant recaps, proactive renewals, and zero friction.',
        items: [
          { title: 'Client recaps', description: 'Written from the call, ready to send.', hue: '#40AA4A' },
          { title: 'Status reports', description: 'Pulled together from where the work happened.', hue: '#6CBEE4' },
          { title: 'Renewals', description: 'Flagged early, with the prep already started.', hue: '#FAC344' },
          { title: 'Handoffs', description: 'Context packaged so nothing gets lost between teams.', hue: '#40AA4A' },
        ],
        previewTasks: [
          { title: 'Bi-Weekly Enterprise Health Check', source: 'Slack Connect', time: '9:30 AM', status: 'Generated', details: 'Resolved tickets and milestone progress compiled' },
          { title: 'Q4 Contract Renewal Milestone', source: 'Salesforce', time: '1:45 PM', status: 'Flagged (60d)', details: 'Usage metrics up 34%; renewal brief sent to account exec' },
          { title: 'Cross-functional Support Handoff', source: 'Zendesk + Linear', time: '3:15 PM', status: 'Packaged', details: 'Customer logs and reproduction steps handed to core eng' },
        ],
      },
      {
        id: 'recruiting',
        name: 'Recruiting',
        tint: 'yellow',
        tagline: 'Give candidates a world-class experience with zero delays, instant scheduling, and complete alignment.',
        items: [
          { title: 'Candidate follow-ups', description: 'No candidate left waiting on a reply.', hue: '#FAC344' },
          { title: 'Interview scheduling', description: 'Panels lined up around everyone’s calendar.', hue: '#6CBEE4' },
          { title: 'Scorecard chasing', description: 'Missing feedback chased until it’s in.', hue: '#40AA4A' },
          { title: 'Offer prep', description: 'Offer letters drafted from the approved terms.', hue: '#FAC344' },
        ],
        previewTasks: [
          { title: 'Staff Engineer Interview Loop', source: 'Google Cal + Ashby', time: '10:45 AM', status: 'Confirmed', details: 'Panel of 4 interviewers scheduled across 2 timezones' },
          { title: 'Missing Scorecard Reminder', source: 'Slack DM', time: '2:00 PM', status: 'Nudge Sent', details: 'Automated gentle nudge sent to hiring manager with rubric link' },
          { title: 'Offer Letter Generation', source: 'DocuSign', time: '4:45 PM', status: 'Drafted', details: 'Salary, equity vesting, and start date verified with VP' },
        ],
      },
    ],
  },
  multiplayer: {
    badge: 'Coming Soon',
    title: 'Your whole team, in symmetry.',
    description:
      'Give everyone a Sym and your team thinks and moves as one. Syms collaborate on tasks, share context, catch conflicts and keep every answer one ask away.',
    points: [
      {
        title: 'Syms work together',
        description: 'They team up on shared tasks and unblock each other across workflows.',
        iconType: 'leafL',
      },
      {
        title: 'Context carries forward',
        description: 'Project context follows the work, so Syms stay aligned automatically.',
        iconType: 'yellow',
      },
      {
        title: 'Conflicts get caught',
        description: 'Symmetry flags drift and mismatched timelines before mistakes change hands.',
        iconType: 'green',
      },
      {
        title: 'Ask any Sym',
        description: 'Shared knowledge is always there, even when a teammate is out or heads-down.',
        iconType: 'leafR',
      },
    ],
  },
  security: {
    title: 'Private and secure.',
    subtitle: 'Built so you can hand Sym real work with confidence.',
    points: [
      {
        title: 'Your data stays yours',
        description: 'Never used to train models, and never sold to third parties.',
      },
      {
        title: 'Nothing leaves without you',
        description: 'Sym asks before anything sensitive or customer-facing goes out.',
      },
      {
        title: 'You decide what it sees',
        description: 'Connect or remove sources and delete your data at any time with one click.',
      },
      {
        title: 'Secure by design',
        description: 'Encrypted in transit and at rest with TLS 1.3 and AES-256.',
        highlight: 'SOC 2 Type 1 in progress',
      },
    ],
  },
  finalCta: {
    title: 'Let the work find itself.',
    description:
      'For anyone running too many things at once. Get a Sym and find out what’s been slipping. Then watch it get done.',
    buttonText: 'Get early access',
    subtext: 'Join forward-thinking product, ops, and engineering teams using Sym.',
  },
  footer: {
    copyright: 'Symmetry AI, Inc. ©2026',
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'Product', href: '#product' },
          { label: 'Careers', href: '#careers' },
          { label: 'Contact', href: '#contact' },
          { label: 'Trust', href: '#trust' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '#privacy' },
          { label: 'Terms', href: '#terms' },
          { label: 'Security', href: '#security' },
        ],
      },
      {
        title: 'Social',
        links: [
          { label: 'LinkedIn', href: 'https://linkedin.com' },
          { label: 'X.com', href: 'https://x.com' },
          { label: 'Instagram', href: 'https://instagram.com' },
        ],
      },
    ],
  },
};
