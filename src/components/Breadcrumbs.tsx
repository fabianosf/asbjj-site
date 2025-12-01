import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs = () => {
  const location = useLocation();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const paths: BreadcrumbItem[] = [
      { label: "Início", path: "/" },
    ];

    const pathMap: Record<string, string> = {
      "/sobre": "Sobre",
      "/modalidades": "Modalidades",
      "/horarios": "Horários",
      "/galeria": "Galeria",
      "/contato": "Contato",
      "/privacidade": "Privacidade",
    };

    if (location.pathname !== "/") {
      const currentPath = pathMap[location.pathname];
      if (currentPath) {
        paths.push({ label: currentPath, path: location.pathname });
      }
    }

    return paths;
  };

  const breadcrumbs = getBreadcrumbs();

  // Adicionar dados estruturados de breadcrumbs
  useEffect(() => {
    if (breadcrumbs.length > 1) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: `https://asbjj.com.br${item.path}`,
        })),
      };

      let script = document.getElementById("breadcrumb-structured-data");
      if (script) {
        script.remove();
      }

      script = document.createElement("script");
      script.id = "breadcrumb-structured-data";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById("breadcrumb-structured-data");
      if (script) {
        script.remove();
      }
    };
  }, [location.pathname]);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        {breadcrumbs.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-foreground transition-colors flex items-center"
              >
                {index === 0 && <Home className="h-4 w-4 mr-1" />}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

