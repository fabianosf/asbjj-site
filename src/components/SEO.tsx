import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEO = ({
  title = "Jiu-Jitsu Rio de Janeiro | ASBJJ - Academia de Jiu-Jitsu Vila Isabel",
  description = "Academia de Jiu-Jitsu no Rio de Janeiro, Vila Isabel. Aulas de Jiu-Jitsu para adultos, crianças e mulheres. Professor Alexandre Salgado. Aula experimental gratuita.",
  keywords = "jiu-jitsu rio de janeiro, jiu-jitsu vila isabel, academia jiu-jitsu rj, jiu-jitsu adulto rio de janeiro, jiu-jitsu infantil rio de janeiro, jiu-jitsu feminino rio de janeiro, bjj rio de janeiro",
  canonical = "https://asbjj.com.br",
  ogImage = "https://asbjj.com.br/og-image.jpg",
  noindex = false,
}: SEOProps) => {
  const fullTitle = title.includes("ASBJJ") ? title : `${title} | ASBJJ - Jiu-Jitsu Rio de Janeiro`;

  useEffect(() => {
    // Atualizar título
    document.title = fullTitle;

    // Função helper para atualizar ou criar meta tag
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Função helper para atualizar ou criar link tag
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Meta tags básicas
    updateMetaTag("title", fullTitle);
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    
    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow");
    }

    // Canonical
    updateLinkTag("canonical", canonical);

    // Open Graph
    updateMetaTag("og:type", "website", "property");
    updateMetaTag("og:url", canonical, "property");
    updateMetaTag("og:title", fullTitle, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", ogImage, "property");

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:url", canonical);
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);
  }, [fullTitle, description, keywords, canonical, ogImage, noindex]);

  return null;
};

export default SEO;

