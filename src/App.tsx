import AlexAssistant from "./components/AlexAssistant";
import { useRef, useState, type CSSProperties, type PointerEvent } from "react";

import {
  alexAvatarUrl,
  alexIntroVideoUrl,
  alexSupportMutedVideoUrl,
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
import SiteMapNav from "./components/SiteMapNav";

function HeroVideoDock() {
  return (
    <a
      className="heroVideoDock"
      href="https://scottjewett.me/alex"
      aria-label="Open Alex assistant"
    >
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
    </a>
  );
}

type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  text: string;
  location?: string;
  proofLabel?: string;
  proofHref?: string;
};

const experience: ExperienceEntry[] = [
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

const resumeExperience: ExperienceEntry[] = [
  {
    company: "TechSGT.com",
    role: "Owner / Operator",
    dates: "07/22/2020 - Present",
    location: "Murfreesboro, TN",
    text: "Veteran-owned IT networking, low-voltage cabling, break/fix, installation, and field-service company. Supports business clients with network infrastructure, cabling, device installs, troubleshooting, and contractor coordination.",
    proofLabel: "View related proof",
    proofHref: "https://techsgt.com/",
  },
  {
    company: "IT Contractor",
    role: "IT Field Engineer",
    dates: "01/03/2013 - Present",
    location: "Nationwide, US",
    text: "Nationwide field engineering across Windows migrations, PC imaging, retail, foodservice, hotels, healthcare, new construction, financial services, government facilities, POS systems, LAN/WAN, DAS, low-voltage cabling, servers, switches, routers, modems, and network device repair/maintenance.",
  },
  {
    company: "IES Communications",
    role: "Data Center Manager",
    dates: "03/01/2021 - 07/23/2022",
    location: "Nashville, TN",
    text: "Managed and optimized data center operations at EdgeConneX Nashville, supporting infrastructure, compliance, security, network management, system integration, and expert-level technical support.",
  },
  {
    company: "Von Technologies",
    role: "IT Field Engineer",
    dates: "07/17/2017 - 02/01/2021",
    location: "Nationwide, US",
    text: 'Road-warrior field engineer supporting Wi-Fi surveys, network implementations, Pepsi and Frito-Lay plant projects, Valvoline "BayTracker" cabling systems, and Hilton Hotels "Connected Room" deployments.',
  },
  {
    company: "Hooters Restaurants of America",
    role: "Manager",
    dates: "2010 - 2013",
    location: "Colorado Springs, CO",
    text: "Managed front-of-house and back-of-house recruiting, training, supervision, HR implementation, local store marketing, POS procedures, and back-office computer operations.",
  },
  {
    company: "Blue Martini",
    role: "Manager",
    dates: "2004 - 2010",
    location: "West Palm Beach, FL",
    text: "Managed recruiting, training, scheduling, cash handling, and back-office workflow systems across multiple outlets.",
  },
  {
    company: "TGI Friday's",
    role: "Bartender",
    dates: "2000 - 2004",
    location: "San Diego, CA and West Palm Beach, FL",
    text: "Worked across several locations in high-volume customer-facing service and bar operations.",
  },
  {
    company: "U.S. Navy - NR SEAL Team 3",
    role: "Radioman / Information Systems Technician, Petty Officer 2nd Class",
    dates: "01/07/1997 - 01/07/2000",
    location: "San Diego, CA",
    text: "Operated complex networked computer and communications systems supporting air, ground, ship, submarine, satellite data, and special intelligence communications.",
  },
  {
    company: "U.S. Marine Corps - 4th ANGLICO",
    role: "Field Radio Operator, Sergeant",
    dates: "11/03/1988 - 11/03/1996",
    location: "West Palm Beach, FL / Desert Shield & Desert Storm",
    text: "Served as Field Radio Operator with Task Force Sheppard, 2nd ANGLICO, 1st Surveillance, Reconnaissance & Intelligence Group, I MEF. Operated PLRS, DCTs, tactical facsimile systems, RF communications, and cryptographic frequency-hopping equipment during Desert Shield/Storm. Awarded Navy Achievement Medal for heroic achievement and superior performance of duties.",
    proofLabel: "View related proof",
    proofHref:
      "https://techsgt.com/wp-content/uploads/2026/05/MARINE-COMMS-IN-DESERT-SHIELD-AND-DESERT-STORM.pdf",
  },
  {
    company: "Wackenhut Security",
    role: "Armed Security Officer / Site Supervisor / Road Supervisor",
    dates: "1992 - 1996",
    location: "Boca Raton and West Palm Beach, FL",
    text: "Served in site supervisor and road supervisor roles supporting high-responsibility security operations.",
  },
];

const timelineExperience = resumeExperience.length
  ? resumeExperience
  : experience.map((job) => ({ ...job, location: "" }));

const dischargeDocuments = [
  {
    id: "usmc-page-1",
    branch: "USMC Honorable Discharge",
    label: "USMC Honorable Discharge - Page 1",
    imageUrl:
      "https://techsgt.com/wp-content/uploads/2026/05/USMC-Hon-Discharge-1.png",
    audioUrl: "/the_marines_hymn.mp3",
  },
  {
    id: "usmc-page-2",
    branch: "USMC Honorable Discharge",
    label: "USMC Honorable Discharge - Page 2",
    imageUrl:
      "https://techsgt.com/wp-content/uploads/2026/05/USMC-Hon-Discharge-2.png",
    audioUrl: "/the_marines_hymn.mp3",
  },
  {
    id: "navy",
    branch: "Navy Honorable Discharge",
    label: "Navy Honorable Discharge",
    imageUrl:
      "https://techsgt.com/wp-content/uploads/2026/05/Navy-Hon-Discharge.webp",
    audioUrl: "/anchors-aweigh.mp3",
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
  {
    title: "GPT Swarm / AI Agent Lab",
    text: "A working lab of role-based GPTs built around field operations, legal workflows, WebWalletX, QA, and support.",
    href: "/gpt-swarm",
  },
];

const aiReliabilityWritingSample = [
  "AI systems often look strongest in the places where the work is cleanest. A demo has a clear prompt, a known objective, a tidy interface, and a controlled path to success. The model is given enough context to sound useful, and the environment rarely pushes back. In that setting, reliability can look better than it really is.",
  "Real operational environments are different. In the field, the network closet may not match the diagram. Switch ports may be mislabeled. The last technician may have left incomplete notes. A customer may be standing nearby asking when the system will be back online. A remote engineer may be giving instructions based on an outdated floor plan. The system might be partially working, which can be more dangerous than a clean failure because everyone assumes the problem is smaller than it is.",
  "This is where AI systems can fail quietly. A quiet failure is not a dramatic hallucination or an obviously wrong answer. It is an assistant that sounds confident when the situation calls for caution. It is a recommendation that skips over missing information. It is a troubleshooting step that assumes the port label is correct, the handoff is known, the device inventory is current, or the person on site has confirmed what the remote team thinks is true. The output may read well, but the operational risk has increased.",
  "That matters because many real deployments are not clean technical puzzles. They are coordination problems under pressure. Scott Jewett's work sits in that environment. His background spans military communications, field engineering, infrastructure troubleshooting, low-voltage and network deployments, data center operations, and AI workflow building. That combination gives him a practical view of a reliability problem AI teams increasingly need to understand: systems must behave well when the world is incomplete, undocumented, and moving.",
  "In military communications, one of the first lessons is that assumptions can break the mission. Equipment status, frequency plans, handoffs, signal paths, authentication, and message discipline all matter. When information is missing, the answer is not to pretend it is present. The answer is to verify, escalate, mark uncertainty, and keep the human decision-maker oriented.",
  "Field engineering teaches the same lesson in another form. A technician may arrive at a site where the documentation says one thing and the rack says another. The customer wants speed, but the infrastructure demands patience. A mislabeled cable can take down a point-of-sale system. A rushed change can make a partial outage worse. A remote team may know the intended architecture, while the person on site sees the actual condition. Reliability depends on combining both views without letting either one become absolute.",
  "AI assistants deployed into these environments need more than fluent answers. They need escalation logic. They need failure-mode awareness. They need to recognize when a situation is under-specified. They need to support operators instead of replacing them. A reliable assistant should ask for missing information when that information affects the outcome, avoid confident guessing, recommend human confirmation when the cost of being wrong is high, identify likely failure modes, and provide an escalation path when risk requires it.",
  "These are the behaviors Scott's Python reliability harness is designed to test. The project uses realistic field scenarios and rule-based checks to evaluate whether assistant responses ask for missing information, avoid guessing, recommend human confirmation, avoid unsafe certainty, identify failure modes, and include escalation paths when required. The scenarios include undocumented network closets, mislabeled switch ports, POS outages during business hours, camera systems offline after power events, unclear fiber handoffs, conflicting remote instructions, access control failures, and risky change approval without onsite validation.",
  "Those examples are ordinary in the best sense. They are not speculative edge cases. They are the kinds of situations where operational reliability is tested every day. That is why they are useful. AI safety is not only about preventing extreme failures. It is also about preventing everyday systems from becoming quietly overconfident in the moments when humans most need clarity.",
  "The phrase human-in-the-loop is often used loosely. In real operations, the human is not a ceremonial checkpoint. The human is the one who sees the room, hears the customer, notices the undocumented patch cable, recognizes that the remote instruction does not match the site condition, and understands when a technically valid step is operationally unsafe. AI should make that person stronger. It should reduce cognitive load, organize evidence, surface risks, and help build a plan. It should not pressure the operator into trusting a clean answer for a messy situation.",
  "Unsafe certainty is one of the most important failure modes to test. Models are trained to be helpful, and helpfulness can become a problem when the system fills gaps too smoothly. In a clean demo, that fluency feels impressive. In a live environment, it can hide the difference between known facts, assumptions, and guesses. Reliable AI should label those categories clearly so operators can see what is confirmed, what is assumed, what could break, what can be checked safely, and where escalation belongs.",
  "Forward deployed engineering sits in the same territory. It requires technical ability, but also judgment in unclear environments. It requires listening to customers, reading operational constraints, adapting quickly, and turning messy workflows into usable systems. AI tools deployed into customer environments will face the same conditions: incomplete context, shifting requirements, unclear ownership, legacy systems, and people under pressure.",
  "The future of reliable AI will not be built only in clean test environments. It will require people who understand models, but also people who understand what happens when software meets a real site, a real customer, a broken handoff, and a clock that is already running. Reliable AI depends on that bridge. It depends on systems that know when to help, when to ask, when to slow down, and when to escalate.",
];

const defaultGptAvatarUrl =
  "https://techsgt.com/wp-content/uploads/2026/05/Alex-Avatar.png";

const projectPages: ProjectProfilePageContent[] = [
  {
    path: "/gpt-swarm",
    title: "GPT Swarm / AI Agent Lab",
    eyebrow: "Role-based AI assistants",
    subtitle:
      "A working collection of role-based AI assistants built to support field operations, legal workflows, WebWalletX, compliance, development, QA, and customer support.",
    heroVideo: {
      src: scottIntroVideoUrl,
      label: "Say hello to Scott video",
      className: "standardHeroVideo",
    },
    overview: {
      title: "Overview",
      paragraphs: [
        "This is Scott's AI agent lab: a practical swarm of specialized GPTs built around real workflows instead of abstract demos. Each assistant has a role, a job, and a target operating environment.",
      ],
    },
    featureSections: [],
    categorySections: [
      {
        title: "Swarm Categories",
        categories: [
          {
            title: "Field Operations",
            description:
              "Assistants for work orders, field surveys, network deployments, closing notes, and technician support.",
            examples: [
              {
                label: "TechSGT.com AI Field Tech Assistant",
                href: "https://chatgpt.com/g/g-69a2382343bc8191aee5f6a8dec9b98a-techsgt-com-ai-field-tech-assistant",
              },
              {
                label: "TechSGT Network Deployment Commander",
                href: "https://chatgpt.com/g/g-69a71c3dfaf88191bc36c612a6c8fa7b-techsgt-network-deployment-commander",
              },
              {
                label: "Work Order Prompt Generator 5.0",
                href: "https://chatgpt.com/g/g-68caaed343348191b87fc16802f02063-work-order-prompt-generator-5-0",
              },
              {
                label: "Velocity Survey Guide",
                href: "https://chatgpt.com/g/g-69bf964a1af08191a1d0aa0f02f7ae3e-velocity-survey-guide",
              },
            ],
          },
          {
            title: "Legal Workflow Systems",
            description:
              "Assistants for pro se litigation organization, legal media framing, jurisdiction review, case strategy, and document-heavy workflows.",
            examples: [
              {
                label: "Pro Se GPT",
                href: "https://chatgpt.com/g/g-u8i7Axisa-pro-se-gpt",
              },
              {
                label: "Jurisdiction Finder Pro Se GPT",
                href: "https://chatgpt.com/g/g-686b4790cd488191b6cf4f87bdf31cd0-jurisdiction-finder-pro-se-gpt",
              },
              {
                label: "Alex Reyes",
                href: "https://chatgpt.com/g/g-6833abdd64c48191bfb963915341be1c-alex-reyes",
              },
              {
                label: "Maggie Legal Assistant GPT",
                href: "https://chatgpt.com/g/g-683371d12c008191aec2b132be6f562c-maggie-legal-assistant-gpt-patel-case",
              },
              {
                label: "David Class Action Counsel",
                href: "https://chatgpt.com/g/g-6833907a7edc8191a68030eeaca647f9-david-class-action-counsel",
              },
            ],
          },
          {
            title: "WebWalletX Product Team",
            description:
              "A role-based product team covering support, compliance, security, development, UX, QA, and project management.",
            examples: [
              {
                label: "WebWalletX AI Support",
                href: "https://chatgpt.com/g/g-tojGDo9qH-webwalletx-ai-support",
              },
              {
                label: "WebWalletX Compliance Officer",
                href: "https://chatgpt.com/g/g-zhRKcEsVC-webwalletx-compliance-officer",
              },
              {
                label: "WebWalletX Security Analyst",
                href: "https://chatgpt.com/g/g-VfCbBH7lp-webwalletx-security-analyst",
              },
              {
                label: "WebWalletX Back-End Developer",
                href: "https://chatgpt.com/g/g-WA2V7y6dI-webwalletx-back-end-developer",
              },
              {
                label: "WebWalletX Front-End Developer",
                href: "https://chatgpt.com/g/g-2CeU47a0r-webwalletx-front-end-developer",
              },
              {
                label: "WebWalletX QA Engineer",
                href: "https://chatgpt.com/g/g-FNTFwnscE-webwalletx-qa-engineer",
              },
              {
                label: "WebWalletX Project Manager",
                href: "https://chatgpt.com/g/g-0qW0pFQ1h-webwalletx-project-manager",
              },
              {
                label: "WebWalletX UX Designer",
                href: "https://chatgpt.com/g/g-M2tSOZZvm-webwalletx-ux-designer",
              },
            ],
          },
          {
            title: "Business / Operations",
            description:
              "Assistants for scheduling, bid strategy, business cards, underwriter support, and startup planning.",
            examples: [
              {
                label: "SAM Bid Strategist",
                href: "https://chatgpt.com/g/g-679525a06fd88191951f758b9cb4ff55-sam-bid-strategist",
              },
              {
                label: "Event Scheduler",
                href: "https://chatgpt.com/g/g-67d30d1ffecc819197ac8083570f6e03-event-scheduler",
              },
              {
                label: "Business Card Collector",
                href: "https://chatgpt.com/g/g-X0nh5BiMC-business-card-collector",
              },
              {
                label: "AI Businesses Agents and Ideas",
                href: "https://chatgpt.com/g/g-H2A6II6TS-ai-businesses-agents-and-ideas",
              },
              {
                label: "TechSGT.com GPT Underwriter for Fund TN",
                href: "https://chatgpt.com/g/g-QJb2593PX-techsgt-com-gpt-underwriter-for-fund-tn",
              },
            ],
          },
        ],
      },
    ],
    copySections: [
      {
        title: "Why It Matters",
        paragraphs: [
          "The swarm demonstrates Scott's ability to design AI systems around real operating roles. It is not one chatbot trying to do everything. It is a distributed support model where each assistant handles a defined workflow.",
        ],
      },
      {
        title: "FDE Relevance",
        paragraphs: [
          "Forward deployed work requires translating messy human operations into usable systems. This GPT swarm shows how Scott thinks: define the mission, separate roles, build assistants around the work, and keep humans in control.",
        ],
      },
    ],
    directorySection: {
      title: "GPT Directory",
      href: "https://chatgpt.com/g/g-6a11af119b008191b89e3ca98a4b9561-alex",
      helperText:
        "Select here to talk to Alex about Scott's full directory of GPTs.",
      links: [
        {
          label: "TechSGT.com AI Field Tech Assistant",
          href: "https://chatgpt.com/g/g-69a2382343bc8191aee5f6a8dec9b98a-techsgt-com-ai-field-tech-assistant",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "TechSGT Network Deployment Commander",
          href: "https://chatgpt.com/g/g-69a71c3dfaf88191bc36c612a6c8fa7b-techsgt-network-deployment-commander",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "Work Order Prompt Generator 5.0",
          href: "https://chatgpt.com/g/g-68caaed343348191b87fc16802f02063-work-order-prompt-generator-5-0",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "Pro Se GPT",
          href: "https://chatgpt.com/g/g-u8i7Axisa-pro-se-gpt",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "Jurisdiction Finder Pro Se GPT",
          href: "https://chatgpt.com/g/g-686b4790cd488191b6cf4f87bdf31cd0-jurisdiction-finder-pro-se-gpt",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "Alex Reyes",
          href: "https://chatgpt.com/g/g-6833abdd64c48191bfb963915341be1c-alex-reyes",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "WebWalletX AI Support",
          href: "https://chatgpt.com/g/g-tojGDo9qH-webwalletx-ai-support",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "WebWalletX Compliance Officer",
          href: "https://chatgpt.com/g/g-zhRKcEsVC-webwalletx-compliance-officer",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "WebWalletX Security Analyst",
          href: "https://chatgpt.com/g/g-VfCbBH7lp-webwalletx-security-analyst",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "WebWalletX Back-End Developer",
          href: "https://chatgpt.com/g/g-WA2V7y6dI-webwalletx-back-end-developer",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "WebWalletX Front-End Developer",
          href: "https://chatgpt.com/g/g-2CeU47a0r-webwalletx-front-end-developer",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "WebWalletX QA Engineer",
          href: "https://chatgpt.com/g/g-FNTFwnscE-webwalletx-qa-engineer",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "WebWalletX Project Manager",
          href: "https://chatgpt.com/g/g-0qW0pFQ1h-webwalletx-project-manager",
          avatarUrl: defaultGptAvatarUrl,
        },
        {
          label: "WebWalletX UX Designer",
          href: "https://chatgpt.com/g/g-M2tSOZZvm-webwalletx-ux-designer",
          avatarUrl: defaultGptAvatarUrl,
        },
      ],
    },
  },
  {
    path: "/case-vault",
    title: "AI Pro Se GPT Case Vault",
    eyebrow: "Legal workflow built from pressure",
    subtitle:
      "A practical legal workflow system shaped by real federal litigation, large document sets, and the need to stay oriented.",
    heroVideo: {
      src: "/AI_Pro_Se_GPT_Case_Vault_for_Legal_Case_Management__05-23 09_12.mp4",
      label: "AI Pro Se GPT Case Vault video",
      className: "caseVaultHeroVideo",
    },
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
    heroResumePreview: {
      href: "/Scott_Jewett_AI_Reliability_FDE_Resume.pdf",
      label: "Open Scott Jewett AI Reliability FDE Resume PDF",
      pages: [
        {
          src: "/resume-page-1.png",
          alt: "Scott Jewett AI Reliability FDE resume page 1 preview",
        },
        {
          src: "/resume-page-2.png",
          alt: "Scott Jewett AI Reliability FDE resume page 2 preview",
        },
      ],
    },
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
        title: "Technical Proof: Agent Reliability Field Test",
        paragraphs: [
          "Scott built a lightweight Python reliability test harness to evaluate how AI assistants respond to ambiguous, high-stakes field deployment scenarios. The project tests whether an assistant avoids guessing, asks for missing information, identifies failure modes, recommends human confirmation, and escalates when risk is high.",
          "Proof details: 8 field scenarios tested, 8 passed, and 0 failed.",
          "Scenario themes: undocumented network closets, mislabeled ports, POS outage, camera system outage, fiber handoff ambiguity, conflicting remote instructions, access control failure, and risky change approval without onsite validation.",
          "Focus areas: AI reliability, ambiguity handling, human-in-the-loop escalation, unsafe certainty detection, and failure-mode awareness.",
          "This is technical proof that Scott can translate field deployment reality into AI safety and reliability evaluation logic.",
        ],
        links: [
          {
            label: "View GitHub Reliability Test",
            href: "https://github.com/cypherpunk89/scott-fde-splash/tree/main/agent-reliability-field-test",
          },
        ],
      },
      {
        title: "Closing Statement",
        paragraphs: [
          "The goal is to connect real operational complexity with practical AI system design, especially in places where reliability depends on communication, context, and disciplined handoffs.",
        ],
      },
    ],
    writingSample: {
      tag: "Operational AI Reliability",
      title: "Why AI Systems Fail Quietly in Ambiguous Environments",
      intro:
        "A deployment-focused writing sample on why AI reliability has to be tested against incomplete documentation, field pressure, uncertain handoffs, and human-in-the-loop escalation.",
      quotes: [
        "The most dangerous failure is often the one that sounds certain while quietly being wrong.",
        "Reliable AI depends on systems that know when to help, when to ask, when to slow down, and when to escalate.",
      ],
      connection:
        "This piece connects Scott's Python reliability harness to field deployment environments, human-in-the-loop systems, and the practical problem of keeping AI useful without letting it guess past missing context.",
      articleParagraphs: aiReliabilityWritingSample,
      downloadLabel: "Download PDF (coming soon)",
    },
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

function escapeDocumentText(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function openDischargeDocument(document: (typeof dischargeDocuments)[number]) {
  const popup = window.open("", "_blank");

  if (!popup) {
    window.open(document.imageUrl, "_blank", "noreferrer");
    return;
  }

  const title = escapeDocumentText(document.label);
  const imageUrl = encodeURI(document.imageUrl);
  const audioUrl = encodeURI(document.audioUrl);

  popup.document.write(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 72px 24px 24px;
        background: #020617;
        color: #e5e7eb;
        font-family: Inter, Arial, sans-serif;
      }
      img {
        display: block;
        max-width: min(1100px, 100%);
        max-height: calc(100vh - 128px);
        object-fit: contain;
        border-radius: 14px;
        border: 1px solid rgba(148, 163, 184, 0.24);
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
        background: white;
      }
      button {
        position: fixed;
        top: 18px;
        right: 18px;
        min-height: 42px;
        padding: 0 16px;
        border: 1px solid rgba(148, 163, 184, 0.28);
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.94);
        color: #f8fafc;
        font: inherit;
        font-weight: 800;
        cursor: pointer;
      }
      .audioPanel {
        position: fixed;
        left: 18px;
        right: 90px;
        top: 18px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
      }
      .audioPanel p {
        margin: 0;
        color: #cbd5e1;
        font-size: 14px;
      }
      .audioPanel button {
        position: static;
      }
    </style>
  </head>
  <body>
    <button type="button" onclick="window.close()">Close</button>
    <div class="audioPanel">
      <button type="button" id="playMusic">Play music</button>
      <p id="audioStatus">Music may start automatically. If not, select Play music.</p>
    </div>
    <img src="${imageUrl}" alt="${title}" />
    <audio id="branchAudio" src="${audioUrl}" loop autoplay></audio>
    <script>
      const audio = document.getElementById("branchAudio");
      const status = document.getElementById("audioStatus");
      const playButton = document.getElementById("playMusic");

      function playAudio() {
        audio.play()
          .then(() => {
            status.textContent = "Music playing while this window is open.";
          })
          .catch(() => {
            status.textContent = "Browser autoplay is blocked. Select Play music to start audio.";
          });
      }

      playButton.addEventListener("click", playAudio);
      playAudio();
    </script>
  </body>
</html>`);
  popup.document.close();
  popup.opener = null;
}

function DraggableDischargeImage({
  className = "",
  document,
}: {
  className?: string;
  document: (typeof dischargeDocuments)[number];
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragStartRef = useRef({
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
  });
  const didDragRef = useRef(false);

  function handlePointerDown(event: PointerEvent<HTMLButtonElement>) {
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      startX: position.x,
      startY: position.y,
    };
    didDragRef.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    const nextX =
      dragStartRef.current.startX +
      event.clientX -
      dragStartRef.current.pointerX;
    const nextY =
      dragStartRef.current.startY +
      event.clientY -
      dragStartRef.current.pointerY;

    if (Math.abs(nextX - position.x) > 2 || Math.abs(nextY - position.y) > 2) {
      didDragRef.current = true;
    }

    setPosition({ x: nextX, y: nextY });
  }

  function handlePointerUp(event: PointerEvent<HTMLButtonElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleClick() {
    if (didDragRef.current) {
      didDragRef.current = false;
      return;
    }

    openDischargeDocument(document);
  }

  return (
    <button
      className={`dischargeImageButton ${className}`}
      type="button"
      style={
        {
          "--drag-x": `${position.x}px`,
          "--drag-y": `${position.y}px`,
        } as CSSProperties
      }
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <img src={document.imageUrl} alt={document.label} draggable={false} />
    </button>
  );
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const projectPage = projectPages.find((page) => page.path === pathname);

  if (pathname === "/book/thanks") {
    return (
      <>
        <BookingThanks />
        <SiteMapNav />
      </>
    );
  }

  if (pathname === "/book") {
    return (
      <>
        <BookingPage />
        <SiteMapNav />
      </>
    );
  }

  if (pathname === "/alex/thanks") {
    return (
      <>
        <AlexThanks />
        <SiteMapNav />
      </>
    );
  }

  if (pathname === "/alex") {
    return (
      <>
        <AlexLanding />
        <SiteMapNav />
      </>
    );
  }

  if (projectPage) {
    return (
      <>
        <ProjectProfilePage content={projectPage} />
        <SiteMapNav />
      </>
    );
  }

  return (
    <main className="page">
      <section className="hero">
        <div className="heroMediaRow">
          <HeroVideoDock />

          <a
            className="heroAvatar"
            href="https://scottjewett.me/gpt-swarm"
            aria-label="Open GPT Swarm"
          >
            <video
              className="heroAvatarMedia"
              src={alexSupportMutedVideoUrl}
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

        <a
          className="badge badgeLink"
          href="https://share.google/aimode/eRHoGJ9E2mH3ud68w"
          target="_blank"
          rel="noreferrer"
          aria-label="Watch Forward Deployed Engineer video"
        >
          Forward Deployed Engineer
        </a>

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

        <div className="dischargeGrid heroDischargeGrid">
          <div className="dischargeStack" aria-label="USMC honorable discharge records">
            {dischargeDocuments.slice(0, 2).map((document, index) => (
              <DraggableDischargeImage
                className={index === 1 ? "dischargeImageButtonOverlay" : ""}
                document={document}
                key={document.id}
              />
            ))}
          </div>

          <DraggableDischargeImage
            className="dischargeNavyButton"
            document={dischargeDocuments[2]}
          />
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
          {timelineExperience.map((job) => (
            <article className="job" key={job.company}>
              <div className="jobHeader">
                <h3>{job.company}</h3>
                <p className="dates">{job.dates}</p>
              </div>
              <p className="role">{job.role}</p>
              <p className="jobLocation">{job.location}</p>
              <p>{job.text}</p>
              {job.proofHref ? (
                <a
                  className="timelineProofLink"
                  href={job.proofHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {job.proofLabel}
                </a>
              ) : null}
            </article>
          ))}
        </div>
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

      <section className="section">
        <h2>Why Scott Fits Forward Deployed Engineering</h2>

        <p>
          Scott's background is built around deployment work, troubleshooting,
          and keeping people aligned when the plan does not match the site. He
          can walk into a messy environment, figure out what is real, explain it
          clearly, and build or repair the system under pressure.
        </p>
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
      <SiteMapNav />
    </main>
  );
}
