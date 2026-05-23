import { useEffect } from "react";

import { trackPageView } from "../analytics";

type FeatureSection = {
  title: string;
  items: string[];
};

type CopySection = {
  title: string;
  paragraphs: string[];
};

export type ProjectProfilePageContent = {
  path: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  overview: CopySection;
  featureSections: FeatureSection[];
  copySections: CopySection[];
};

type ProjectProfilePageProps = {
  content: ProjectProfilePageContent;
};

export default function ProjectProfilePage({ content }: ProjectProfilePageProps) {
  useEffect(() => {
    const nextTitle = `${content.title} | Scott Jewett`;
    const previousTitle = document.title;

    document.title = nextTitle;
    trackPageView(content.path, nextTitle);

    return () => {
      document.title = previousTitle;
    };
  }, [content.path, content.title]);

  return (
    <main className="projectPage">
      <section className="projectHero">
        <a className="alexBackLink" href="/">
          Back to Scott's profile
        </a>

        <div className="projectGlow" aria-hidden="true" />

        <p className="alexEyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p className="projectHeroSubtitle">{content.subtitle}</p>
      </section>

      <section className="projectDetailSection">
        <h2>{content.overview.title}</h2>
        {content.overview.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      {content.featureSections.map((section) => (
        <section className="projectDetailSection" key={section.title}>
          <h2>{section.title}</h2>

          <div className="projectFeatureGrid">
            {section.items.map((item) => (
              <article className="projectFeatureCard" key={item}>
                {item}
              </article>
            ))}
          </div>
        </section>
      ))}

      {content.copySections.map((section) => (
        <section className="projectDetailSection" key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      <section className="projectDetailSection callout">
        <h2>Next Step</h2>
        <a className="calloutLink" href="/">
          Return to Main Site
        </a>
      </section>
    </main>
  );
}
