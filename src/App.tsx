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

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

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