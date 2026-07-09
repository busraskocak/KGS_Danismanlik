import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WorkMap } from "@/components/site/WorkMap";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MissionVision } from "@/components/site/MissionVision";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KGS Danışmanlık ve Mühendislik" },
      {
        name: "description",
        content:
          "Hidrojeolojik Etüt Raporları, Maden Hidrojeolojisi, Yeraltısuyu Nümerik Modellemesi ve CBS Uygulamaları.",
      },
      { property: "og:title", content: "KGS Danışmanlık ve Mühendislik" },
      {
        property: "og:description",
        content: "Hidrojeolojik Etüt Raporları, Maden Hidrojeolojisi, Yeraltısuyu Nümerik Modellemesi ve CBS Uygulamaları.",
      },
    ],
  }),
  component: Index,
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KGS Danışmanlık ve Mühendislik",
  description:
    "Hidrojeolojik Etüt Raporları, Maden Hidrojeolojisi, Yeraltısuyu Nümerik Modellemesi ve CBS Uygulamaları.",
  url: "https://kgsdanismanlik.com.tr/",
  email: "info@kgsdanismanlik.com.tr",
  telephone: "+905066451333",
    areaServed: "Turkey",

  serviceType: [
    "Hidrojeolojik Etüt",
    "Yeraltısuyu Modelleme",
    "Maden Hidrojeolojisi",
    "Su Kaynakları Koruma Alanı Çalışmaları",
    "CBS Uygulamaları"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Konutkent Mahallesi, Dumlupınar Bulvarı No:381AK",
    addressLocality: "Çankaya/Ankara",
    addressCountry: "TR",
  },
  sameAs: ["https://www.linkedin.com/company/kgsconsulting/posts/?feedView=all"],
};


function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />  
      <Header />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <Projects />
        <WorkMap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
