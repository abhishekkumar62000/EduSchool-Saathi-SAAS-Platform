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
      { title: "EduSchool Saathi™ | #1 Multi-School Management SaaS Platform & School ERP Bihar" },
      { name: "description", content: "EduSchool Saathi (हर स्कूल का साथी) is Bihar's #1 Cloud School Management ERP & Multi-School SaaS platform. Designed for schools in Madhubani, Darbhanga, Patna & across India with 10-second attendance, instant WhatsApp fee receipts, CBSE/Bihar Board marksheets, 4 role portals (Admin, Teacher, Student, Parent) and 100% data isolation. Official platform: eduschoolsaathi.org." },
      { name: "keywords", content: "EduSchool Saathi, EduSchool-Saathi, Edu School Saathi, eduschoolsaathi.org, app.eduschoolsaathi.org, हर स्कूल का साथी, School ERP Bihar, Best school management software Bihar, School software Madhubani, Darbhanga school management ERP, Patna school ERP software, Student attendance system, Instant WhatsApp fee receipt software, CBSE Bihar board marksheet generator, Multi-tenant school SaaS platform, Abhishek Kumar EduSchool Saathi, Sehaat Saathi, TechSeva IT Solutions, Free school demo Bihar" },
      { name: "author", content: "Abhishek Kumar, TechSeva IT Solutions & EduSchool Saathi" },
      { name: "publisher", content: "EduSchool Saathi Technologies" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "bingbot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "theme-color", content: "#1E40AF" },
      { name: "rating", content: "General" },
      { name: "revisit-after", content: "1 days" },
      { name: "distribution", content: "Global" },
      { name: "geo.region", content: "IN-BR" },
      { name: "geo.placename", content: "Madhubani, Bihar, India" },
      { name: "geo.position", content: "26.3549;86.0719" },
      { name: "ICBM", content: "26.3549, 86.0719" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "EduSchool Saathi" },
      { name: "application-name", content: "EduSchool Saathi" },
      { property: "og:site_name", content: "EduSchool Saathi" },
      { property: "og:title", content: "EduSchool Saathi™ | #1 Multi-School Management SaaS Platform & School ERP Bihar" },
      { property: "og:description", content: "Har School Ka Saathi — Bihar's #1 Digital School ERP with 10-Second Attendance, WhatsApp Fee Receipts, CBSE/State Marksheets & Multi-Role Portals. Official Access at eduschoolsaathi.org." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://eduschoolsaathi.org/" },
      { property: "og:image", content: "https://eduschoolsaathi.org/logo-optimized.png" },
      { property: "og:image:alt", content: "EduSchool Saathi Official Logo and Banner" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:locale:alternate", content: "hi_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EduSchool Saathi™ | Smart School ERP & Multi-School SaaS Bihar" },
      { name: "twitter:description", content: "Digital school management for schools across Bihar & India. 10-sec rollcall, WhatsApp fee receipts, marksheets & multi-role portals." },
      { name: "twitter:image", content: "https://eduschoolsaathi.org/logo-optimized.png" },
      { name: "twitter:creator", content: "@EduSchoolSaathi" },
    ],
    links: [
      {
        rel: "manifest",
        href: "/manifest.json",
      },
      {
        rel: "canonical",
        href: "https://eduschoolsaathi.org/",
      },
      {
        rel: "alternate",
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
      "@type": "WebSite",
      "@id": "https://eduschoolsaathi.org/#website",
      "url": "https://eduschoolsaathi.org/",
      "name": "EduSchool Saathi",
      "alternateName": [
        "EduSchool-Saathi",
        "EduSchoolSaathi",
        "Edu School Saathi",
        "हर स्कूल का साथी",
        "Eduschoolsaathi.org",
        "EduSchool Saathi Platform"
      ],
      "description": "Official portal of EduSchool Saathi - Bihar's #1 Cloud Multi-School Management SaaS and Smart School ERP Platform.",
      "publisher": { "@id": "https://eduschoolsaathi.org/#organization" },
      "inLanguage": ["en-IN", "hi-IN"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://eduschoolsaathi.org/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://eduschoolsaathi.org/#software",
      "name": "EduSchool Saathi",
      "alternateName": "EduSchool-Saathi ERP",
      "applicationCategory": "EducationalApplication, BusinessApplication",
      "operatingSystem": "All (Web-based, Mobile responsive, Android, iOS, Windows, macOS, Linux)",
      "url": "https://eduschoolsaathi.org/",
      "downloadUrl": "https://app.eduschoolsaathi.org/login",
      "installUrl": "https://app.eduschoolsaathi.org/login",
      "softwareVersion": "3.5.0",
      "description": "Enterprise-grade AI-powered Multi-School Management SaaS ERP providing complete digital school automation: dynamic class management, automated fee collection, 10-second attendance rollcall, CBSE & Bihar Board compliant marksheet report cards, 100% data isolation per school, and dedicated portals for Super Admin, School Admin, Teachers, Students and Parents.",
      "featureList": [
        "10-Second Digital Attendance Rollcall System",
        "Instant Automated WhatsApp Fee Receipts & Ledgers",
        "CBSE & Bihar State Board Academic Marksheet Generator",
        "Centralized Super Admin Engine connecting 25+ Schools",
        "Dedicated Portals for School Admin, Teachers, Students & Parents",
        "100% Isolated Cloud Database per School",
        "Instant SMS and WhatsApp Emergency Notification Alerts",
        "Daily Timetable & Teacher Period Coordination",
        "Digital Enrolment & Pre-Nursery to 12th Academic Records",
        "Library, Transport & Asset Inventory Management Modules"
      ],
      "screenshot": "https://eduschoolsaathi.org/logo-optimized.png",
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter School ERP",
          "price": "5000",
          "priceCurrency": "INR",
          "priceValidUntil": "2028-12-31",
          "availability": "https://schema.org/InStock",
          "url": "https://eduschoolsaathi.org/#pricing"
        },
        {
          "@type": "Offer",
          "name": "Standard Pro Cloud",
          "price": "9500",
          "priceCurrency": "INR",
          "priceValidUntil": "2028-12-31",
          "availability": "https://schema.org/InStock",
          "url": "https://eduschoolsaathi.org/#pricing"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "142",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": { "@id": "https://eduschoolsaathi.org/#organization" }
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://eduschoolsaathi.org/#organization",
      "name": "EduSchool Saathi",
      "legalName": "EduSchool Saathi SaaS Technologies",
      "url": "https://eduschoolsaathi.org/",
      "logo": "https://eduschoolsaathi.org/logo-optimized.png",
      "image": "https://eduschoolsaathi.org/logo-optimized.png",
      "slogan": "Har School Ka Saathi — Bihar No 1 School ERP Software",
      "description": "EduSchool Saathi is an educational technology organization founded by Abhishek Kumar, headquartered in Madhubani, Bihar. It provides advanced school management ERP software and cloud infrastructure to schools across Bihar and India.",
      "founder": {
        "@type": "Person",
        "name": "Abhishek Kumar",
        "jobTitle": "Founder & Chief Technology Architect",
        "url": "https://eduschoolsaathi.org/#founder",
        "sameAs": [
          "https://github.com/abhishekkumar62000",
          "https://techseva-it-solutions.vercel.app/"
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bara Bazar",
        "addressLocality": "Madhubani",
        "addressRegion": "Bihar",
        "postalCode": "847211",
        "addressCountry": "IN"
      },
      "telephone": "+91-6200087830",
      "email": "eduschoolsaathi@gmail.com",
      "sameAs": [
        "https://eduschoolsaathi.org",
        "https://app.eduschoolsaathi.org/login",
        "https://eduschool-saathi.vercel.app/",
        "https://github.com/abhishekkumar62000/EduSchool-Saathi-SAAS-Platform",
        "https://sehaat-saathi.vercel.app/",
        "https://techseva-it-solutions.vercel.app/"
      ],
      "areaServed": [
        "Bihar",
        "Madhubani",
        "Darbhanga",
        "Patna",
        "Muzaffarpur",
        "Samastipur",
        "Purnia",
        "Gaya",
        "Bhagalpur",
        "India"
      ],
      "knowsAbout": [
        "School Management ERP",
        "Educational SaaS Platforms",
        "Digital Attendance Automation",
        "School Fee Management & WhatsApp Receipts",
        "CBSE Report Card Generation",
        "Multi-School Network Architecture"
      ],
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
      "@type": "FAQPage",
      "@id": "https://eduschoolsaathi.org/#faqpage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is EduSchool-Saathi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EduSchool-Saathi (eduschoolsaathi.org) is a complete digital school management ERP and SaaS platform that brings administration, teachers, students, and parents together with 10-second attendance, WhatsApp fee receipts, report cards, and 100% isolated databases."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the founder of EduSchool-Saathi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EduSchool-Saathi was founded by Abhishek Kumar, Chief Technology Architect, and is sponsored by Sehaat Saathi App and powered by TechSeva IT Solutions, headquartered in Bara Bazar Madhubani, Bihar."
          }
        },
        {
          "@type": "Question",
          "name": "Is EduSchool-Saathi suitable for small and rural schools in Bihar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. EduSchool-Saathi is specifically engineered for ground realities in Bihar and across India, functioning smoothly on smartphones with zero hardware investment and working reliably even on 3G/4G rural networks."
          }
        },
        {
          "@type": "Question",
          "name": "Can multiple schools use the platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Multiple schools operate on the centralized Super Admin hub while maintaining 100% separate, isolated database environments with individual custom branding."
          }
        },
        {
          "@type": "Question",
          "name": "Can each school have separate admin access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Each school has its own School Admin credentials with granular role-based permissions for student admissions, fee collections, staff management, and examinations."
          }
        },
        {
          "@type": "Question",
          "name": "Can teachers, students, and parents have separate accounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The platform provides 4 distinct role-based portals: Super Admin, School Admin, Teacher Portal, and Student/Parent Portal for transparent communication."
          }
        },
        {
          "@type": "Question",
          "name": "Can schools manage attendance digitally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. EduSchool-Saathi features a proprietary 10-second attendance rollcall engine with instant absence alerts sent to parents via WhatsApp and SMS."
          }
        },
        {
          "@type": "Question",
          "name": "Can schools manage fees and generate receipts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Schools can configure customizable fee structures, track paid and pending dues, and issue 1-click branded PDF fee receipts with instant WhatsApp delivery."
          }
        },
        {
          "@type": "Question",
          "name": "Can schools manage examinations and report cards?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Exam schedules, marks entry, grades, automated ranking, and CBSE/Bihar Board compliant marksheet report cards are generated digitally with school stamp and signature."
          }
        },
        {
          "@type": "Question",
          "name": "Can parents see their child's academic updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Parents can view real-time daily attendance, fee ledger status, homework assignments, test marks, exam timetables, and official school notices on their mobile phone."
          }
        },
        {
          "@type": "Question",
          "name": "How does pricing work for EduSchool-Saathi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plans start from ₹5,000 per month for the Starter School ERP and ₹9,500 per month for the Standard Pro Cloud tier with zero upfront setup fees."
          }
        },
        {
          "@type": "Question",
          "name": "How can my school request a free live demo or trial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can request a free trial directly by visiting https://eduschoolsaathi.org/#trial or logging into https://app.eduschoolsaathi.org/login, or calling the helpdesk at +91 62000 87830."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://eduschoolsaathi.org/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://eduschoolsaathi.org/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "25+ Schools Network",
          "item": "https://eduschoolsaathi.org/schools-network"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Features & Modules",
          "item": "https://eduschoolsaathi.org/#features"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "ERP Pricing",
          "item": "https://eduschoolsaathi.org/#pricing"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Free Trial Access",
          "item": "https://eduschoolsaathi.org/#trial"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Contact & Helpdesk",
          "item": "https://eduschoolsaathi.org/#contact"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://eduschoolsaathi.org/#localbusiness",
      "name": "EduSchool Saathi",
      "description": "Bihar's #1 Cloud School Management SaaS & ERP Platform. Providing 10-second attendance, instant WhatsApp fee receipts, and complete digital school automation to schools across Madhubani, Darbhanga, Patna and Bihar.",
      "url": "https://eduschoolsaathi.org/",
      "telephone": "+91-6200087830",
      "email": "eduschoolsaathi@gmail.com",
      "image": "https://eduschoolsaathi.org/logo-optimized.png",
      "logo": "https://eduschoolsaathi.org/logo-optimized.png",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Online Transfer, UPI, Bank Transfer",
      "openingHours": "Mo-Sa 09:00-20:00",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bara Bazar",
        "addressLocality": "Madhubani",
        "addressRegion": "Bihar",
        "postalCode": "847211",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.3549,
        "longitude": 86.0719
      },
      "hasMap": "https://maps.google.com/?q=Madhubani+Bihar+India",
      "areaServed": [
        {
          "@type": "State",
          "name": "Bihar"
        },
        {
          "@type": "City",
          "name": "Madhubani"
        },
        {
          "@type": "City",
          "name": "Darbhanga"
        },
        {
          "@type": "City",
          "name": "Patna"
        },
        {
          "@type": "City",
          "name": "Muzaffarpur"
        },
        {
          "@type": "City",
          "name": "Samastipur"
        }
      ],
      "serviceType": [
        "School Management ERP Software",
        "Cloud School Attendance System",
        "Digital Fee Receipt Software",
        "CBSE Bihar Board Report Card Generator",
        "Multi-School SaaS Platform"
      ],
      "sameAs": [
        "https://eduschoolsaathi.org",
        "https://app.eduschoolsaathi.org/login",
        "https://github.com/abhishekkumar62000/EduSchool-Saathi-SAAS-Platform"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "142",
        "bestRating": "5"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "School Principal, Madhubani"
          },
          "reviewBody": "EduSchool Saathi ne hamara school completely digital kar diya. Fee receipts WhatsApp pe milti hain aur attendance 10 second mein hoti hai. Bihar ka best school software!"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "School Director, Darbhanga"
          },
          "reviewBody": "Best school ERP for Bihar. No hardware needed, works perfectly on mobile. Report cards generate automatically. Highly recommended for all Bihar schools."
        }
      ]
    },
    {
      "@type": "Product",
      "@id": "https://eduschoolsaathi.org/#product",
      "name": "EduSchool Saathi School ERP",
      "description": "Enterprise-grade Bihar School Management SaaS with 10-second attendance, instant WhatsApp fee receipts, CBSE/Bihar Board marksheet generator, and 4 dedicated role portals.",
      "brand": {
        "@type": "Brand",
        "name": "EduSchool Saathi"
      },
      "manufacturer": {
        "@id": "https://eduschoolsaathi.org/#organization"
      },
      "url": "https://eduschoolsaathi.org/",
      "image": "https://eduschoolsaathi.org/logo-optimized.png",
      "category": "School Management Software",
      "audience": {
        "@type": "Audience",
        "audienceType": "School Principals, School Directors, Teachers, Parents, Students"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "5000",
        "highPrice": "25000",
        "priceCurrency": "INR",
        "offerCount": "3",
        "offers": [
          {
            "@type": "Offer",
            "name": "Starter School ERP Plan",
            "price": "5000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://eduschoolsaathi.org/#pricing",
            "description": "For schools up to 500 students. Includes attendance, fee receipts, and parent portal."
          },
          {
            "@type": "Offer",
            "name": "Standard Pro Cloud Plan",
            "price": "9500",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://eduschoolsaathi.org/#pricing",
            "description": "For schools up to 1500 students. Full ERP with exam engine and CBSE marksheets."
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "142",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ]
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <HeadContent />
        {/* DNS Prefetch for speed — reduces TTFB for external assets */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://eduschoolsaathi.org" />
        <link rel="dns-prefetch" href="https://app.eduschoolsaathi.org" />
        {/* Preload critical logo image for LCP (Largest Contentful Paint) boost */}
        <link rel="preload" href="/logo-optimized.png" as="image" type="image/png" />
        {/* Global JSON-LD Structured Data — Google Knowledge Graph + AI Overviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body>
        {/* Skip to main content — accessibility SEO signal (Google rewards this) */}
        <a href="#main-content" className="skip-to-main">Skip to main content</a>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js', { scope: '/' })
                    .then(function(reg) {
                      // Check for SW updates periodically
                      reg.addEventListener('updatefound', function() {
                        var newWorker = reg.installing;
                        if (newWorker) {
                          newWorker.addEventListener('statechange', function() {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                              console.log('[EduSchool Saathi] New version available. Refresh to update.');
                            }
                          });
                        }
                      });
                    })
                    .catch(function(err) {
                      console.log('[EduSchool Saathi] SW registration failed:', err);
                    });
                });
              }
              // Preconnect to official domain on user interaction
              document.addEventListener('pointerdown', function preconnect() {
                var link = document.createElement('link');
                link.rel = 'preconnect';
                link.href = 'https://app.eduschoolsaathi.org';
                document.head.appendChild(link);
                document.removeEventListener('pointerdown', preconnect);
              }, { once: true });
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
