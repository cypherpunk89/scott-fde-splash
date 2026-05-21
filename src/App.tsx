import AlexAssistant from "./components/AlexAssistant";

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
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">Forward Deployed Engineer Candidate</div>

        <h1>Scott Jewett</h1>

        <p className="subtitle">
          Veteran IT Specialist & Tactical Network Engineer
        </p>

        <p className="heroText">
          Field-tested engineer with 35+ years of combined military,
          telecommunications, IT, cabling, wireless, data center, and
          client-facing technical deployment experience.
        </p>

        <div className="actions">
          <a href="mailto:scott.jewett@techsgt.com">Email Scott</a>
          <a href="https://techsgt.com" target="_blank" rel="noreferrer">
            Visit TechSGT.com
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Why Scott Fits Forward Deployed Engineering</h2>

        <p>
          Scott’s background combines hands-on technical execution, field
          problem solving, customer communication, military communications
          discipline, and real-world deployment experience. He is comfortable
          walking into unclear environments, identifying the technical problem,
          building the solution, documenting the result, and leaving the client
          with a working system.
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
      </section>

      <AlexAssistant />
    </main>
  );
}