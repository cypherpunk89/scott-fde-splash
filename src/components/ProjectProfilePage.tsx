import { useEffect } from "react";

import { trackPageView } from "../analytics";

type FeatureSection = {
  title: string;
  items: string[];
};

type CopySection = {
  title: string;
  paragraphs: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

type CategorySection = {
  title: string;
  categories: {
    title: string;
    description: string;
    examples: string[];
  }[];
};

type DirectorySection = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export type ProjectProfilePageContent = {
  path: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  overview: CopySection;
  featureSections: FeatureSection[];
  categorySections?: CategorySection[];
  copySections: CopySection[];
  directorySection?: DirectorySection;
  quote?: string;
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

      {content.categorySections?.map((section) => (
        <section className="projectDetailSection" key={section.title}>
          <h2>{section.title}</h2>

          <div className="projectCategoryGrid">
            {section.categories.map((category) => (
              <article className="projectCategoryCard" key={category.title}>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="projectExampleList">
                  <span>Example GPTs</span>
                  <ul>
                    {category.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
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
          {section.links ? (
            <div className="projectLinkList">
              {section.links.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </section>
      ))}

      {content.directorySection ? (
        <section className="projectDetailSection">
          <h2>{content.directorySection.title}</h2>
          <div className="projectDirectoryGrid">
            {content.directorySection.links.map((link) => (
              <a
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {content.quote ? (
        <section className="projectDetailSection projectQuoteBlock">
          <p>{content.quote}</p>
        </section>
      ) : null}

      <section className="projectDetailSection callout">
        <h2>Next Step</h2>
        <a className="calloutLink" href="/">
          Return to Main Site
        </a>
      </section>
    </main>
  );
}
