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
      "A legal AI workspace designed to help pro se litigants organize case documents, timelines, discovery, exhibits, and AI-ready case exports. Built from direct experience navigating federal litigation, discovery disputes, and document-heavy workflows.",
    positioning:
      "Human-in-the-loop legal AI, document intelligence, high-stakes workflow design, AI-assisted case management.",
    buttonLabel: "View Case Vault Concept",
    href: "/case-vault",
  },
  {
    title: "WebWalletX",
    description:
      "A financial command center concept for tracking accounts, debt, payments, and digital cash workflows in one centralized app. Built from Scott's earlier Complete Cash Control software concept and expanded for modern AI-assisted financial operations.",
    positioning:
      "AI-assisted financial operations, digital cash workflow design, user-facing product deployment.",
    buttonLabel: "View WebWalletX Concept",
    href: "/webwalletx",
  },
];

const mainProjects = [
  {
    title: "Case Vault",
    text: "Human-in-the-loop legal AI workspace for document-heavy pro se litigation workflows.",
    href: "/case-vault",
  },
  {
    title: "WebWalletX",
    text: "AI-assisted financial command center for accounts, payments, debt, and cash workflows.",
    href: "/webwalletx",
  },
  {
    title: "Anthropic Fellows",
    text: "Candidate profile focused on AI reliability, human systems, and field deployment pressure.",
    href: "/anthropic-fellows",
  },
  {
    title: "OpenAI FDE",
    text: "Forward Deployed Engineer profile connecting infrastructure execution with AI workflows.",
    href: "/openai-fde",
  },
];

const projectPages: ProjectProfilePageContent[] = [
  {
    path: "/case-vault",
    title: "AI Pro Se GPT Case Vault",
    eyebrow: "Legal AI workflow infrastructure",
    subtitle:
      "AI-assisted legal workflow infrastructure built from real federal litigation experience.",
    overview: {
      title: "Overview",
      paragraphs: [
        "AI Pro Se GPT Case Vault is a human-in-the-loop AI workspace for pro se litigants who need operational clarity across complex legal materials.",
        "The platform is designed to organize exhibits, discovery, timelines, filings, and AI-ready exports in one structured environment.",
        "It is built from real-world litigation pressure and document-heavy workflows, with an emphasis on workflow visibility and preparation rather than legal advice.",
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
        title: "Why It Matters",
        paragraphs: [
          "This project demonstrates high-stakes workflow design, AI orchestration thinking, and operational system building under unclear conditions.",
        ],
      },
    ],
  },
  {
    path: "/webwalletx",
    title: "WebWalletX",
    eyebrow: "AI-assisted financial operations",
    subtitle:
      "A modern AI-assisted financial command center inspired by real-world cash-control systems.",
    overview: {
      title: "Overview",
      paragraphs: [
        "WebWalletX is a financial operations dashboard concept for debt, payment, account, and cash-flow visibility.",
        "It centralizes money management into a clear operational workspace and applies AI-assisted financial organization to everyday decisions.",
        "The concept is inspired by Scott's earlier Complete Cash Control system and expands that thinking for modern product deployment.",
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
        title: "Vision",
        paragraphs: [
          "WebWalletX represents operational thinking around financial systems, workflow simplification, and user-centered AI tooling.",
        ],
      },
      {
        title: "Future Expansion",
        paragraphs: [
          "Future expansion can include AI agents, automation, financial intelligence, operational dashboards, and digital asset integrations.",
        ],
      },
    ],
  },
  {
    path: "/anthropic-fellows",
    title: "Anthropic Fellows Candidate Profile",
    eyebrow: "AI reliability and human systems",
    subtitle:
      "Exploring AI reliability, human systems, and operational intelligence through real-world deployment experience.",
    overview: {
      title: "Background",
      paragraphs: [
        "Scott brings the perspective of a former military communications operator, infrastructure deployment technician, AI systems builder, human-centered workflow designer, and real-world field operator.",
        "His work sits at the intersection of technical systems, operational pressure, and people who must make decisions with incomplete information.",
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
          "This research direction studies how AI systems behave when requirements are incomplete, environments are unstable, and humans must rapidly adapt.",
        ],
      },
      {
        title: "Closing Statement",
        paragraphs: [
          "The goal is to bridge real-world operational complexity with practical AI system design.",
        ],
      },
    ],
  },
  {
    path: "/openai-fde",
    title: "Forward Deployed Engineer Profile",
    eyebrow: "Deployment, communication, execution",
    subtitle:
      "Deploying technology into real-world environments where ambiguity, communication, and execution matter.",
    overview: {
      title: "Mission Alignment",
      paragraphs: [
        "Scott is a field-tested technical operator with deep experience in deployments and infrastructure.",
        "He is comfortable in unclear environments, customer-facing settings, and execution-focused work where operations and technology need to meet quickly.",
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
          "Scott's background includes nationwide technical deployments, infrastructure troubleshooting, multi-site support, technical leadership, operational communication, and AI product development.",
        ],
      },
      {
        title: "Why Forward Deployment",
        paragraphs: [
          "Forward deployment combines technical execution, customer interaction, operational clarity, and rapid adaptation under pressure.",
        ],
      },
      {
        title: "Closing Statement",
        paragraphs: [
          "Scott is a hybrid operator combining field engineering, infrastructure deployment, systems thinking, and AI-assisted workflow design.",
        ],
      },
    ],
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
          Field-tested engineer with 35+ years of combined military,
          telecommunications, IT, cabling, wireless, data center, and
          client-facing technical deployment experience, now strengthened by
          hands-on AI tools and automation.
        </p>
      </section>

      <section className="section">
        <h2>Why Scott Fits Forward Deployed Engineering</h2>

        <p>
          Scott brings the mix of technical depth, field experience, and
          client-facing communication that makes AI Forward Deployed Engineers
          effective. He can step into ambiguous environments, define the
          problem, build practical solutions, and carry delivery through to a
          documented, working system.
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
