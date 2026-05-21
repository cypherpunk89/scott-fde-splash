const alexUrl = "https://chatgpt.com/g/g-6a0e9d5bb5208191ae06038065b25845-alex";

export default function AlexLanding() {
  return (
    <main className="alexPage">
      <section className="alexHero">
        <a className="alexBackLink" href="/">
          Back to Scott's profile
        </a>

        <div className="alexOrb" aria-hidden="true" />

        <div className="alexHeader">
          <img
            className="alexPortrait"
            src="https://techsgt.com/wp-content/uploads/2026/05/Alex-Avatar.png"
            alt="Alex AI Assistant"
          />

          <div>
            <p className="alexEyebrow">Scott Jewett's FDE guide</p>
            <h1>Ask Alex before you book the call.</h1>
          </div>
        </div>

        <p className="alexIntro">
          Alex is a custom assistant built to answer questions about Scott's
          field engineering background, deployment history, technical strengths,
          and the kind of client-facing work he handles in the field.
        </p>

        <div className="alexActions">
          <a href={alexUrl} target="_blank" rel="noreferrer">
            Launch Alex
          </a>
          <a className="alexSecondaryAction" href="mailto:scott.jewett@techsgt.com">
            Email Scott directly
          </a>
        </div>

        <div className="alexGrid">
          <article className="alexPanel">
            <h2>Good questions to ask</h2>
            <ul>
              <li>What field deployment work has Scott handled recently?</li>
              <li>Which environments fit his networking and cabling background?</li>
              <li>How does he communicate with clients under pressure?</li>
            </ul>
          </article>

          <article className="alexPanel">
            <h2>What Alex can help with</h2>
            <ul>
              <li>Summarize Scott's experience by industry or role.</li>
              <li>Highlight deployment, troubleshooting, and documentation skills.</li>
              <li>Point visitors to the fastest next step for a conversation.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}