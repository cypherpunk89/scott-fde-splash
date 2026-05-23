import AlexAssistant from "./components/AlexAssistant";
import {
  alexAvatarUrl,
  alexIntroVideoUrl,
  scottIntroVideoUrl,
  scottWebsiteUrl,
} from "./alexConfig";
import BookingPage from "./components/BookingPage";
import BookingThanks from "./components/BookingThanks";
import AlexLanding from "./components/AlexLanding";
import AlexThanks from "./components/AlexThanks";
import ProjectProfilePage, {
  type ProjectProfilePageContent,
} from "./components/ProjectProfilePage";

function HeroVideoDock() {
  return (
    <div className="heroVideoDock">
      <div className="heroVideoFrame" aria-hidden="true">
        <video
          className="heroVideoEmbed"
          src={alexIntroVideoUrl}
          poster={alexAvatarUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
        />
      </div>
    </div>
  );
}

const experience = [
  {
    company: "TechSGT.com",
    role: "Owner / Operator",
    dates: "2020 – Present",
    text: "Veteran-owned IT, low-voltage, network deployment, cabling, break/fix, and field service company serving business clients across Tennessee and beyond.",
  },
  {
    company: "IT Contractor",
    role: "Field Engineer",
    dates: "2013 – Present",
    text: "Nationwide field engineering across retail, healthcare, hospitality, government, financial, and construction environments.",
  },
  {
    company: "IES Communications",
    role: "Data Center Manager",
    dates: "2021 – 2022",
    text: "Managed and optimized data center systems, infrastructure, compliance, network operations, and technical support.",
  },
  {
    company: "Hooters Restaurants of America",
    role: "Manager",
    dates: "2010 – 2013",
    text: "Colorado Springs, CO. Led front-of-house and back-of-house recruiting, training, supervision, HR implementation, local store marketing, and day-to-day POS/back-office operations.",
  },
  {
    company: "Blue Martini",
    role: "Manager",
    dates: "2004 – 2010",
    text: "West Palm Beach, FL. Managed recruiting, training, scheduling, cash handling, and back-office workflows across multiple outlets.",
  },
  {
    company: "TGI Friday's",
    role: "Bartender",
    dates: "2000 – 2004",
    text: "San Diego, CA and West Palm Beach, FL. Worked across several locations in customer-facing service and bar operations.",
  },
  {
    company: "U.S. Navy / U.S. Marine Corps",
    role: "Communications / Tactical Network Specialist",
    dates: "1988 – 2000",
    text: "Built mission-critical communications experience across RF, satellite data, secure communications, field operations, and high-pressure technical environments.",
  },
  {
    company: "Wackenhut Security",
    role: "Armed Security Officer",
    dates: "1992 – 1996",
    text: "Boca Raton and West Palm Beach, FL. Served in site supervisor and road supervisor roles supporting high-responsibility security operations.",
  },
];

const strengths = [
  {
    label: "Forward deployment",
    href: "https://techsgt.com/wp-content/uploads/2026/05/MARINE-COMMS-IN-DESERT-SHIELD-AND-DESERT-STORM.pdf",
  },
  {
    label: "Client-facing technical execution",
    href: "https://techsgt.com/med-1135-smyrna/",
  },
  {
    label: "Network infrastructure",
    href: scottWebsiteUrl,
  },
  {
    label: "Low-voltage cabling",
    href: scottWebsiteUrl,
  },
  {
    label: "Wireless surveys",
    href: scottWebsiteUrl,
  },
  {
    label: "Data center operations",
    href: scottWebsiteUrl,
  },
  {
    label: "Troubleshooting under pressure",
    href: scottWebsiteUrl,
  },
  {
    label: "Field documentation",
    href: scottWebsiteUrl,
  },
  {
    label: "AI-assisted workflows",
    href: scottWebsiteUrl,
  },
];

const pressureBuiltProjects = [
  {
    title: "AI Pro Se GPT Case Vault",
    description:
      "A legal workflow workspace shaped by the grind of federal litigation: sorting filings, evidence, discovery, timelines, and exports when the paperwork starts to outrun the person carrying it.",
    positioning:
      "Human-in-the-loop legal workflows, evidence organization, document-heavy case management.",
    buttonLabel: "View Case Vault Concept",
    href: "/case-vault",
  },
  {
    title: "WebWalletX",
    description:
      "A financial command center for keeping accounts, debt, payments, and cash movement visible in one place. It grows out of Scott's earlier Complete Cash Control idea and a field mindset for keeping systems understandable.",
    positioning:
      "Cash control, operational visibility, financial dashboards, user-facing product design.",
    buttonLabel: "View WebWalletX Concept",
    href: "/webwalletx",
  },
];

const mainProjects = [
  {
    title: "Case Vault",
    text: "A practical case workspace for keeping evidence, discovery, timelines, and filings in order under pressure. Powered by the WebDime utility model.",
    href: "/case-vault",
  },
  {
    title: "WebWalletX",
    text: "A cash-control dashboard concept for making accounts, payments, debt, and money movement easier to read. Powered by the WebDime utility model.",
    href: "/webwalletx",
  },
  {
    title: "Anthropic Fellows",
    text: "A research-oriented profile around AI reliability when people are working with incomplete information.",
    href: "/anthropic-fellows",
  },
  {
    title: "OpenAI FDE",
    text: "A field-first FDE profile built around deployments, troubleshooting, communication, and recovery.",
    href: "/openai-fde",
  },
];

const projectPages: ProjectProfilePageContent[] = [
  {
    path: "/case-vault",
    title: "AI Pro Se GPT Case Vault",
    eyebrow: "Legal workflow built from pressure",
    subtitle:
      "A practical legal workflow system shaped by real federal litigation, large document sets, and the need to stay oriented.",
    overview: {
      title: "Overview",
      paragraphs: [
        "AI Pro Se GPT Case Vault comes from the practical strain of navigating federal litigation without a large support staff behind you.",
        "The idea is simple: when filings, exhibits, discovery responses, deadlines, transcripts, and notes start piling up, the human needs a way to stay oriented. The workspace is meant to help organize the material, preserve context, and prepare clean exports for AI review or human review.",
        "It is not positioned as legal advice. It is an operating system for case materials: what happened, where the evidence is, what still needs attention, and how to keep the record usable when the workload gets heavy.",
      ],
    },
    featureSections: [
      {
        title: "Core Features",
        items: [
          "AI-ready document organization",
          "Discovery tracking",
          "Timeline reconstruction",
          "Deposition preparation",
          "Exhibit indexing",
          "AI export packaging",
          "Workspace collaboration",
          "Case intelligence dashboards",
        ],
      },
      {
        title: "Technical Stack",
        items: [
          "React",
          "TypeScript",
          "Vite",
          "Supabase",
          "AI-assisted workflows",
          "Document intelligence architecture",
        ],
      },
    ],
    copySections: [
      {
        title: "WDM Access Model",
        paragraphs: [
          "AI Pro Se GPT Case Vault is planned as part of the broader WebDime utility ecosystem. Users would hold WDM to access protected tools, case organization workflows, and AI-assisted workspace features. The focus is utility access, not financial speculation.",
        ],
        links: [
          {
            label: "AI Pro Se GPT Case Vault",
            href: "https://aiprosegpt.com/",
          },
        ],
      },
      {
        title: "Why It Matters",
        paragraphs: [
          "Case Vault is built from a familiar operational problem: the work is already hard, and bad organization makes it harder. The project turns that frustration into software structure so a person can keep track of evidence, deadlines, documents, and decisions under pressure.",
          "It shows system-building in a high-stakes environment where the requirements are messy, the documents are dense, and the cost of losing context is real.",
        ],
      },
    ],
  },
  {
    path: "/webwalletx",
    title: "WebWalletX",
    eyebrow: "Cash control and operational visibility",
    subtitle:
      "A financial command center concept built from real cash-control thinking and a field operator's need for clear dashboards.",
    overview: {
      title: "Overview",
      paragraphs: [
        "WebWalletX grows out of Scott's earlier Complete Cash Control concept: make the moving parts visible, reduce confusion, and give the user one place to see what is happening.",
        "The page is not trying to make personal finance sound mysterious. It treats money movement like an operations board: accounts, debt, payments, due dates, cash flow, and decisions that need attention.",
        "The AI layer is there to help summarize, sort, and surface what matters. The core idea is still operational visibility: a system should be understandable when a person is tired, busy, or trying to make a decision quickly.",
      ],
    },
    featureSections: [
      {
        title: "System Concepts",
        items: [
          "Payment tracking",
          "Debt visibility",
          "Account monitoring",
          "Digital cash workflows",
          "AI financial summaries",
          "User-facing operational dashboards",
        ],
      },
    ],
    copySections: [
      {
        title: "WebDime Utility Access",
        paragraphs: [
          "WebWalletX is designed around WebDime (WDM), the utility token used to access and support the WebWalletX ecosystem. The goal is to connect financial organization, digital cash workflows, and AI-assisted account visibility through a token-gated utility model.",
        ],
        links: [
          {
            label: "WebWalletX",
            href: "https://webwalletx.com/",
          },
          {
            label: "WebDime Whitepaper",
            href: "https://webdime.io/webdime-whitepaper/",
          },
          {
            label: "Alex WebWalletX AI Support",
            href: "https://chatgpt.com/g/g-tojGDo9qH-webwalletx-ai-support",
          },
        ],
      },
      {
        title: "Vision",
        paragraphs: [
          "WebWalletX is about taking financial noise and turning it into a readable operating picture. The goal is a dashboard that helps people see where they stand without digging through five apps and a pile of disconnected reminders.",
        ],
      },
      {
        title: "Future Expansion",
        paragraphs: [
          "Future versions could add AI agents, automation, financial summaries, operational dashboards, and digital asset integrations, but the standard stays the same: the system has to remain clear enough for a real person to trust and use.",
        ],
      },
    ],
  },
  {
    path: "/anthropic-fellows",
    title: "Anthropic Fellows Candidate Profile",
    eyebrow: "AI reliability under real conditions",
    subtitle:
      "A research direction focused on how AI systems behave when the environment is unclear and humans have to adapt.",
    overview: {
      title: "Background",
      paragraphs: [
        "Scott's background is useful here because it comes from environments where the documentation is incomplete, the site conditions change, and the human still has to make the system work.",
        "Military communications, infrastructure deployment, field service, and AI workflow building all expose the same problem from different angles: people coordinate under uncertainty, and systems often fail at the handoff points.",
        "That makes AI reliability a practical question, not an abstract one. What happens when the model has partial context? What does it ask for? What does it assume? How does the human recover when the system is confident but wrong?",
      ],
    },
    featureSections: [
      {
        title: "Research Interests",
        items: [
          "AI reliability",
          "Human-in-the-loop systems",
          "Ambiguous operational environments",
          "AI deployment safety",
          "AI workflow coordination",
          "Field-based AI systems",
        ],
      },
      {
        title: "Technical Interests",
        items: [
          "AI orchestration",
          "Operational systems",
          "Deployment workflows",
          "Infrastructure intelligence",
          "Workflow automation",
          "Real-world AI coordination",
        ],
      },
    ],
    copySections: [
      {
        title: "Testing AI Agent Reliability in Ambiguous Field Environments",
        paragraphs: [
          "This research direction studies AI agents in conditions closer to field work: incomplete requirements, unstable environments, missing context, communication gaps, and humans who are adapting as they go.",
          "The goal is to understand where coordination breaks down. Does the system recognize uncertainty? Does it escalate well? Can it keep track of changing constraints? Can it support the human without pretending the situation is cleaner than it is?",
        ],
      },
      {
        title: "Closing Statement",
        paragraphs: [
          "The goal is to connect real operational complexity with practical AI system design, especially in places where reliability depends on communication, context, and disciplined handoffs.",
        ],
      },
    ],
  },
  {
    path: "/openai-fde",
    title: "Forward Deployed Engineer Profile",
    eyebrow: "Field execution and system recovery",
    subtitle:
      "Deploying technology where the site is messy, the clock is running, and the work is not finished until the system is operational.",
    overview: {
      title: "Mission Alignment",
      paragraphs: [
        "Scott's strongest fit is not a standard software engineer lane. It is field execution: walking into unclear environments, reading the room, finding the failure point, and getting people back to a working system.",
        "That work takes technical range, but it also takes communication. Someone has to translate between the customer, the site contact, the remote team, the documentation, and the equipment that is actually in front of you.",
        "Forward deployment rewards the same habits: stay calm, build context fast, explain what is happening, make practical decisions, and carry the work until the system is usable.",
      ],
    },
    featureSections: [
      {
        title: "Core Strengths",
        items: [
          "Network infrastructure",
          "Low-voltage systems",
          "Wireless surveys",
          "Fiber deployments",
          "Client-facing technical execution",
          "AI-assisted operational systems",
          "Deployment troubleshooting",
          "Rapid field adaptation",
        ],
      },
    ],
    copySections: [
      {
        title: "Real-World Experience",
        paragraphs: [
          "Scott's background includes nationwide technical deployments, infrastructure troubleshooting, multi-site support, field documentation, technical leadership, operational communication, and AI product development.",
          "The common thread is recovery and execution. A site may have missing information, wrong assumptions, bad cabling, failed equipment, unclear ownership, or a customer who just needs the system back online. The job is to narrow the problem, communicate clearly, and keep moving.",
        ],
      },
      {
        title: "Why Forward Deployment",
        paragraphs: [
          "Forward deployment is where technical work meets reality. Requirements change, users explain symptoms instead of root causes, and the environment rarely matches the clean version in the plan.",
          "That is the kind of work Scott knows: troubleshoot the infrastructure, talk to non-technical stakeholders without losing them, coordinate with technical teams without wasting time, and restore a clear operating picture.",
        ],
      },
      {
        title: "Closing Statement",
        paragraphs: [
          "Scott brings a hybrid operator profile: field engineering, infrastructure deployment, systems thinking, customer communication, and AI-assisted workflow design.",
          "The value is practical. He can work where the problem is not fully defined yet, where the customer needs a steady technical voice, and where progress depends on turning confusion into an operational plan.",
        ],
      },
    ],
    quote:
      "Field environments are rarely clean, fully documented, or predictable. The job is to restore clarity and get systems operational.",
  },
];

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const projectPage = projectPages.find((page) => page.path === pathname);

  if (pathname === "/book/thanks") {
    return <BookingThanks />;
  }

  if (pathname === "/book") {
    return <BookingPage />;
  }

  if (pathname === "/alex/thanks") {
    return <AlexThanks />;
  }

  if (pathname === "/alex") {
    return <AlexLanding />;
  }

  if (projectPage) {
    return <ProjectProfilePage content={projectPage} />;
  }

  return (
    <main className="page">
      <section className="hero">
        <div className="heroMediaRow">
          <HeroVideoDock />

          <a
            className="heroAvatar"
            href={scottWebsiteUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit TechSGT.com"
          >
            <video
              className="heroAvatarMedia"
              src={scottIntroVideoUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              tabIndex={-1}
            />
          </a>
        </div>

        <div className="badge">Forward Deployed Engineer</div>

        <h1>Scott Jewett</h1>

        <p className="subtitle">
          Veteran IT Specialist & Tactical Network Engineer
        </p>

        <p className="heroText">
          Field-tested operator with 35+ years across military communications,
          telecom, IT, cabling, wireless, data centers, and customer-facing
          deployments. Scott is used to unclear sites, broken assumptions,
          infrastructure problems, and the kind of operational communication it
          takes to get systems working again.
        </p>
      </section>

      <section className="section">
        <h2>Why Scott Fits Forward Deployed Engineering</h2>

        <p>
          Scott's background is built around deployment work, troubleshooting,
          and keeping people aligned when the plan does not match the site. He
          can walk into a messy environment, figure out what is real, explain it
          clearly, and build or repair the system under pressure.
        </p>
      </section>

      <section className="gridSection">
        <h2>Core Strengths</h2>

        <div className="grid">
          {strengths.map((item) => (
            <a
              className="card cardLink"
              href={item.href}
              key={item.label}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>

      <section className="section projectSection">
        <h2>AI Systems Built From Real-World Pressure</h2>

        <div className="projectGrid">
          {pressureBuiltProjects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <p className="projectPositioning">{project.positioning}</p>

              <a
                className="projectButton"
                href={project.href}
              >
                {project.buttonLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section projectSection">
        <h2>Projects</h2>

        <div className="mainProjectGrid">
          {mainProjects.map((project) => (
            <a className="mainProjectCard" href={project.href} key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Experience Timeline</h2>

        <div className="timeline">
          {experience.map((job) => (
            <article className="job" key={job.company}>
              <div>
                <h3>{job.company}</h3>
                <p className="role">{job.role}</p>
              </div>
              <p className="dates">{job.dates}</p>
              <p>{job.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section callout">
        <h2>Alex AI Assistant</h2>
        <p>
          Alex will act as Scott’s interactive FDE profile assistant. Visitors
          will be able to ask questions about Scott’s background, deployment
          experience, technical strengths, and project history.
        </p>
        <a className="calloutLink" href="/alex">
          Ask Alex before you book the call.
        </a>
      </section>

      <AlexAssistant />
    </main>
  );
}
