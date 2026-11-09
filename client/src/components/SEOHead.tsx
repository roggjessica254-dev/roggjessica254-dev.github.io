import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  noIndex?: boolean;
}

export default function SEOHead({ title, description, noIndex = false }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    let robots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (!robots) {
        robots = document.createElement("meta");
        robots.setAttribute("name", "robots");
        document.head.appendChild(robots);
      }
      robots.setAttribute("content", "noindex, nofollow, noarchive");
    }

    return () => {
      if (noIndex && robots) {
        robots.remove();
      }
    };
  }, [title, description, noIndex]);

  return null;
}
