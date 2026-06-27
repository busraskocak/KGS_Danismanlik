import { useLang } from "@/lib/i18n";
import hmtLogo from "@/assets/HMT.png";
import preusLogo from "@/assets/preusbw.png";
import fonteviaLogo from "@/assets/Fontevia.png";
import hidrowellLogo from "@/assets/hidrowell.png";
import jetaLogo from "@/assets/Jeta.png";
import geodesLogo from "@/assets/GEODES1.png";

const references = [
  {
    category: "Akademik Danışmanlık",
    name: "Hacettepe Mineral Teknolojileri",
    url: "https://www.hmineral.com/",
    logo: hmtLogo,
    
  },
  {
    category: "Hidrojeolojik Etütler ve Maden Hidrojeolojisi",
    name: "PREUS Consulting",
    url: "https://www.preus.com.tr/",
    logo: preusLogo,
  },
  {
    category: "Hidrojeolojik Etütler ve Maden Hidrojeolojisi",
    name: "Fontevia Danışmanlık ve Mühendislik",
    url: "https://fontevia.com/fontevia",
    logo: fonteviaLogo,
  },
  {
    category: "Hidrojeolojik Etütler ve Maden Hidrojeolojisi",
    name: "Hidrowell Mühendislik",
    url: "https://www.hidrowell.com.tr/",
    logo: hidrowellLogo,
  },
  {
    category: "Jeoteknik",
    name: "JETA Mühendislik",
    url: "https://jetamuhendislik.com/",
    logo: jetaLogo,
  },
  {
    category: "Sondaj ve Maden Arama",
    name: "GEODES Mühendislik & Danışmanlık",
    url: "http://www.geodes.com.tr",
    logo: geodesLogo,
  },
];

function PartnerCard({ refItem }: { refItem: (typeof references)[number] }) {
  return (
    <a
      key={refItem.name}
      href={refItem.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-full max-w-sm flex-col items-center overflow-hidden rounded-3xl border border-border/60 bg-surface/45 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-aqua/60 hover:bg-surface hover:shadow-xl hover:shadow-aqua/15"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-aqua/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex h-32 w-32 items-center justify-center rounded-full border border-aqua/20 bg-white p-6 shadow-md shadow-black/5 transition-all duration-300 group-hover:scale-105 group-hover:border-aqua/50 group-hover:shadow-aqua/20">
        <img
          src={refItem.logo}
          alt={refItem.name}
          className="max-h-full max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        <span className="font-display text-lg leading-snug text-card-foreground transition-colors group-hover:text-aqua md:text-xl">
          {refItem.name}
        </span>

      </div>
    </a>
  );
}

export function Projects() {
  const { t } = useLang();

  const academicRefs = references.filter(
    (ref) => ref.category === "Akademik Danışmanlık"
  );

  const hydroRefs = references.filter(
    (ref) =>
      ref.category === "Hidrojeolojik Etütler ve Maden Hidrojeolojisi"
  );

  const geoRefs = references.filter((ref) => ref.category === "Jeoteknik");

  const drillingRefs = references.filter(
    (ref) => ref.category === "Sondaj ve Maden Arama"
  );

  return (
    <section id="references" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-aqua">
            {t("projects.badge")}
          </p>
        </div>

        <div className="mt-16 flex w-full flex-col items-center space-y-14">
          {/* 1. KATEGORİ */}
          <div className="flex w-full flex-col items-center">
            <h3 className="mb-8 w-full border-b border-border/60 pb-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/80 md:text-base">
              {t("projects.cat1")}
            </h3>

            <div className="flex w-full justify-center">
              {academicRefs.map((ref) => (
                <PartnerCard key={ref.name} refItem={ref} />
              ))}
            </div>
          </div>

          {/* 2. KATEGORİ */}
          <div className="flex w-full flex-col items-center">
            <h3 className="mb-8 w-full border-b border-border/60 pb-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/80 md:text-base">
              {t("projects.cat2")}
            </h3>

            <div className="mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-3">
              {hydroRefs.map((ref) => (
                <PartnerCard key={ref.name} refItem={ref} />
              ))}
            </div>
          </div>

          {/* 3-4. KATEGORİ */}
          <div className="grid w-full max-w-5xl gap-10 md:grid-cols-2">
            <div className="flex flex-col items-center">
              <h3 className="mb-8 w-full border-b border-border/60 pb-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/80 md:text-base">
                {t("projects.cat3")}
              </h3>

              {geoRefs.map((ref) => (
                <PartnerCard key={ref.name} refItem={ref} />
              ))}
            </div>

            <div className="flex flex-col items-center">
              <h3 className="mb-8 w-full border-b border-border/60 pb-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/80 md:text-base">
                {t("projects.cat4")}
              </h3>

              {drillingRefs.map((ref) => (
                <PartnerCard key={ref.name} refItem={ref} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}