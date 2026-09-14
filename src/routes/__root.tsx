import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { title: "EduSchool-Saathi | #1 Multi-School Management SaaS Platform | Smart School ERP Bihar" },
      { name: "description", content: "EduSchool-Saathi is an enterprise-grade AI-powered School Management ERP & SaaS platform for schools in Madhubani, Darbhanga, Patna, Bihar & across India. Complete attendance, instant fee receipts, exams, and portals. Sponsored by Sehaat Saathi, Powered by TechSeva IT Solutions." },
      { name: "keywords", content: "EduSchool-Saathi, EduSchool Saathi, School Management SaaS, School ERP Bihar, Madhubani School Software, Darbhanga School ERP, Patna School Management, Student Attendance System, School Fee Receipt Software, Pre-Nursery to 12th ERP, TechSeva IT Solutions, Sehaat Saathi" },
      { name: "author", content: "TechSeva IT Solutions Agency & EduSchool-Saathi" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "theme-color", content: "#1E40AF" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "EduSchool-Saathi" },
      { name: "application-name", content: "EduSchool-Saathi" },
      { property: "og:site_name", content: "EduSchool-Saathi" },
      { property: "og:title", content: "EduSchool-Saathi | Complete Digital School Management Platform" },
      { property: "og:description", content: "Har School Ka Saathi — Smart Schools. Connected Education. Simpler Management. Built for Bihar and beyond. Sponsored by Sehaat Saathi, Powered by TechSeva IT Solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eduschool-saathi.vercel.app/" },
      { property: "og:image", content: "https://eduschool-saathi.vercel.app/logo-optimized.png" },
      { property: "og:image:alt", content: "EduSchool-Saathi Official Logo" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EduSchool-Saathi | Smart School ERP & Multi-School SaaS" },
      { name: "twitter:description", content: "Digital school management for schools in Bihar & India. Instant fees, attendance, report cards & multi-role portals." },
      { name: "twitter:image", content: "https://eduschool-saathi.vercel.app/logo-optimized.png" },
    ],
    links: [
      {
        rel: "manifest",
        href: "/manifest.json",
      },
      {
        rel: "canonical",
        href: "https://eduschool-saathi.vercel.app/",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "alternate icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "EduSchool-Saathi",
      "operatingSystem": "All (Web-based, Mobile responsive)",
      "applicationCategory": "EducationalApplication, BusinessApplication",
      "description": "Multi-School Management SaaS Platform providing complete digital school ERP, dynamic class management, automated fee collection, 10-second attendance, exam report cards, and dedicated portals for Admin, Teachers, Students and Parents.",
      "offers": {
        "@type": "Offer",
        "price": "5000",
        "priceCurrency": "INR",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128"
      }
    },
    {
      "@type": "Organization",
      "name": "EduSchool-Saathi",
      "url": "https://eduschool-saathi.vercel.app/",
      "logo": "https://eduschool-saathi.vercel.app/logo-optimized.png",
      "slogan": "Har School Ka Saathi — Complete Digital School Management",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bara Bazar",
        "addressLocality": "Madhubani",
        "addressRegion": "Bihar",
        "addressCountry": "IN"
      },
      "telephone": "+91-6200087830",
      "email": "eduschoolsaathi@gmail.com",
      "sponsor": {
        "@type": "Organization",
        "name": "Sehaat Saathi App",
        "url": "https://sehaat-saathi.vercel.app/"
      },
      "provider": {
        "@type": "Organization",
        "name": "TechSeva IT Solutions Agency",
        "url": "https://techseva-it-solutions.vercel.app/"
      }
    },
    {
      "@type": "WebSite",
      "name": "EduSchool-Saathi",
      "url": "https://eduschool-saathi.vercel.app/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://eduschool-saathi.vercel.app/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(err) {
                    console.log('SW registration failed:', err);
                  });
                });
              }
            `,
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
