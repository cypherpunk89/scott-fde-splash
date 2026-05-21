import AlexAssistant from "./components/AlexAssistant";
import BookingPage from "./components/BookingPage";
import BookingThanks from "./components/BookingThanks";
import AlexLanding from "./components/AlexLanding";
import AlexThanks from "./components/AlexThanks";

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
    company: "U.S. Navy / U.S. Marine Corps",
    role: "Communications / Tactical Network Specialist",
    dates: "1988 – 2000",
    text: "Built mission-critical communications experience across RF, satellite data, secure communications, field operations, and high-pressure technical environments.",
  },
];

const strengths = [
  "Forward deployment",
  "Client-facing technical execution",
  "Network infrastructure",
  "Low-voltage cabling",
  "Wireless surveys",
  "Data center operations",
  "Troubleshooting under pressure",
  "Field documentation",
  "AI-assisted workflows",
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
            <div className="card" key={item}>
              {item}
            </div>
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