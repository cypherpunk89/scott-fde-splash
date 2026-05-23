import { useEffect, useState } from "react";

const siteMapLinks = [
  { label: "Home", href: "/" },
  { label: "Alex", href: "/alex" },
  { label: "Alex Thanks", href: "/alex/thanks" },
  { label: "Book Scott", href: "/book" },
  { label: "Case Vault", href: "/case-vault" },
  { label: "WebWalletX", href: "/webwalletx" },
  { label: "Anthropic Fellows", href: "/anthropic-fellows" },
  { label: "OpenAI FDE", href: "/openai-fde" },
  { label: "GPT Swarm", href: "/gpt-swarm" },
];

export default function SiteMapNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav className="siteMapNav" aria-label="Site navigation">
      {isOpen ? (
        <div className="siteMapPanel">
          {siteMapLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      ) : null}

      <button
        type="button"
        className="siteMapButton"
        aria-label="Open site navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true">☰</span>
      </button>
    </nav>
  );
}
