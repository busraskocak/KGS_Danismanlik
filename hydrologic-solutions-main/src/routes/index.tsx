import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WorkMap } from "@/components/site/WorkMap";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KGS Danışmalık ve Mühendislik" },
      {
        name: "description",
        content:
          "Hidrojeolojik etüt, yeraltı suyu modellemesi ve sürdürülebilir kaynak yönetimi konularında bağımsız danışmanlık veren bir mühendislik firmasıdır.",
      },
      { property: "og:title", content: "KGS Danışmalık ve Mühendislik" },
      {
        property: "og:description",
        content: "Hidrojeolojik etüt, akifer testleri, yeraltı suyu modellemesi ve ÇED raporları.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WorkMap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
