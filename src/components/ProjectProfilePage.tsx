import { useEffect, useRef, useState, type MouseEvent } from "react";

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
    examples: (
      | string
      | {
          label: string;
          href: string;
        }
    )[];
  }[];
};

type DirectorySection = {
  title: string;
  href?: string;
  helperText?: string;
  links: {
    label: string;
    href: string;
    avatarUrl?: string;
  }[];
};

type WritingSample = {
  tag: string;
  title: string;
  intro: string;
  quotes: string[];
  connection: string;
  articleParagraphs: string[];
  downloadLabel?: string;
};

export type ProjectProfilePageContent = {
  path: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  heroVideo?: {
        src: string;
        label: string;
        className?: string;
      };
  overview: CopySection;
  featureSections: FeatureSection[];
  categorySections?: CategorySection[];
  copySections: CopySection[];
  directorySection?: DirectorySection;
  writingSample?: WritingSample;
  quote?: string;
};

type ProjectProfilePageProps = {
  content: ProjectProfilePageContent;
};

export function ProjectHeroVideo({
  label,
  className,
  src,
}: {
  label: string;
  className?: string;
  src: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  function restartMutedLoop() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.loop = true;
    setAudioEnabled(false);

    void video.play().catch(() => {
      setAudioEnabled(false);
    });
  }

  function handleAudioToggle(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (audioEnabled) {
      restartMutedLoop();
      return;
    }

    video.pause();
    video.currentTime = 0;
    video.loop = false;
    video.muted = false;

    video
      .play()
      .then(() => {
        setAudioEnabled(true);
      })
      .catch(() => {
        video.muted = true;
        video.loop = true;
        setAudioEnabled(false);
      });
  }

  function handleAudioEnded() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.currentTime = 0;
    restartMutedLoop();
  }

  return (
    <div className="projectHeroVideoWrap">
      <div className="projectHeroVideoFrame">
        <video
          ref={videoRef}
          className={["projectHeroVideo", className].filter(Boolean).join(" ")}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onEnded={handleAudioEnded}
          aria-label={label}
        />
        <button
          className="alexAudioToggle projectHeroAudioToggle"
          type="button"
          aria-pressed={audioEnabled}
          onClick={handleAudioToggle}
        >
          {audioEnabled ? "Mute sound" : "Enable sound"}
        </button>
      </div>
    </div>
  );
}

export default function ProjectProfilePage({ content }: ProjectProfilePageProps) {
  const [writingSampleOpen, setWritingSampleOpen] = useState(false);

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

        <div className={content.heroVideo ? "projectHeroSplit" : undefined}>
          <div className="projectHeroCopy">
            <p className="alexEyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="projectHeroSubtitle">{content.subtitle}</p>
          </div>

          {content.heroVideo ? (
            <ProjectHeroVideo
              className={content.heroVideo.className}
              label={content.heroVideo.label}
              src={content.heroVideo.src}
            />
          ) : null}
        </div>
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
                    {category.examples.map((example) => {
                      const label =
                        typeof example === "string" ? example : example.label;

                      return (
                        <li key={label}>
                          {typeof example === "string" ? (
                            example
                          ) : (
                            <a
                              href={example.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {example.label}
                            </a>
                          )}
                        </li>
                      );
                    })}
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

      {content.writingSample ? (
        <section className="projectDetailSection writingSampleSection">
          <div className="writingSampleHeader">
            <span className="writingSampleTag">{content.writingSample.tag}</span>
            <h2>{content.writingSample.title}</h2>
            <p>{content.writingSample.intro}</p>
          </div>

          <div className="writingQuoteGrid">
            {content.writingSample.quotes.map((quote) => (
              <blockquote key={quote}>{quote}</blockquote>
            ))}
          </div>

          <p className="writingSampleConnection">
            {content.writingSample.connection}
          </p>

          <div className="writingSampleActions">
            <button
              className="writingSampleToggle"
              type="button"
              aria-expanded={writingSampleOpen}
              onClick={() => setWritingSampleOpen((current) => !current)}
            >
              {writingSampleOpen ? "Hide Full Article" : "Read Full Article"}
            </button>

            {content.writingSample.downloadLabel ? (
              <button className="writingSampleDownload" type="button" disabled>
                {content.writingSample.downloadLabel}
              </button>
            ) : null}
          </div>

          {writingSampleOpen ? (
            <article className="writingSampleArticle">
              {content.writingSample.articleParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ) : null}
        </section>
      ) : null}

      {content.directorySection ? (
        <section className="projectDetailSection">
          <h2>
            {content.directorySection.href ? (
              <a
                className="projectDirectoryHeadingLink"
                href={content.directorySection.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{content.directorySection.title}</span>
                {content.directorySection.helperText ? (
                  <small>{content.directorySection.helperText}</small>
                ) : null}
              </a>
            ) : (
              content.directorySection.title
            )}
          </h2>
          <div className="projectDirectoryGrid">
            {content.directorySection.links.map((link) => (
              <a
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.avatarUrl ? (
                  <img
                    className="projectDirectoryAvatar"
                    src={link.avatarUrl}
                    alt=""
                    aria-hidden="true"
                  />
                ) : null}
                <span>{link.label}</span>
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
