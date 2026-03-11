import type { Metadata } from "next";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react"; // run: npm install @vercel/analytics
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

export const metadata: Metadata = {
  title: "Sebastián Miñaya - Desarrollador & Analista de Datos",
  description: "Portafolio profesional de Sebastián Miñaya. Especializado en desarrollo web, análisis de datos y consultoría en machine learning. Servicios de consultoría para proyectos de datos y desarrollo.",
  keywords: ["desarrollador", "analista de datos", "machine learning", "consultoría", "R", "Python", "Next.js"],
  authors: [{ name: "Sebastián Miñaya" }],
  openGraph: {
    title: "Sebastián Miñaya - Desarrollador & Analista de Datos",
    description: "Portafolio profesional especializado en desarrollo web y análisis de datos",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Set theme before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <ErrorBoundary>
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
          {/* Analytics: install with `npm install @vercel/analytics`, then uncomment below */}
          {/* <Analytics /> */}
        </ErrorBoundary>
      </body>
    </html>
  );
}
