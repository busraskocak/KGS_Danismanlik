import { useLang } from "@/lib/i18n"; // 🎯 Dil sistemi bağlandı
import hmtLogo from "@/assets/HMT.png";
import preusLogo from "@/assets/preusbw.png";
import fonteviaLogo from "@/assets/Fontevia.jpeg";
import hidrowellLogo from "@/assets/hidrowell.jpeg";
import jetaLogo from "@/assets/jeta logo.jpg";
import geodesLogo from "@/assets/GEODES1.jpeg";

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
    logo: geodesLogo ,
  },
];

export function Projects() {
  const { t } = useLang(); // 🎯 t fonksiyonu çağrıldı

  return (
    <section id="references" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-aqua">
            {t("projects.badge")} {/* 🎯 Çevrildi */}
          </p>
        </div>

        {/* KATEGORİ SARMALAYICI (Tüm grupları alt alta ve ortalı dizer) */}
        <div className="mt-16 space-y-12 w-full flex flex-col items-center">
          
          {/* 1. KATEGORİ: AR-GE Danışmanlık */}
          <div className="w-full flex flex-col items-center">
           <h3 className="w-full text-center text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground/80 border-b border-border/60 pb-3 mb-6">
              {t("projects.cat1")} {/* 🎯 Çevrildi */}
            </h3>
          <div className="w-full flex justify-center">
              {references
                .filter((ref) => ref.category === "Akademik Danışmanlık")
                .map((ref) => (
                  <a
                    key={ref.name}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  className="group w-full max-w-xs flex flex-col justify-between rounded-xl border border-border bg-surface/40 p-4 transition-all hover:border-aqua/55 hover:bg-surface text-center"
                  >
                    <div className="flex h-24 w-full items-center justify-center rounded-lg bg-foreground/[0.02] p-3 transition-colors group-hover:bg-foreground/[0.05]">
                      <img
                        src={ref.logo}
                        alt={`${ref.name} Logo`}
                        className="max-h-full max-w-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 scale-100 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <span className="font-display text-base leading-snug text-card-foreground group-hover:text-aqua transition-colors line-clamp-2">
                        {ref.name}
                      </span>
                      <span className="text-lg text-aqua transition-transform group-hover:translate-x-1 shrink-0">→</span>
                    </div>
                  </a>
                ))}
            </div>
          </div>

{/* 2. KATEGORİ: Hidrojeolojik Etütler ve Maden Hidrojeolojisi */}
<div className="w-full flex flex-col items-center">
  <h3 className="w-full text-center text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground/80 border-b border-border/60 pb-3 mb-6">
    {t("projects.cat2")}
  </h3>

  <div className="grid w-full max-w-3xl gap-6 md:grid-cols-2 mx-auto">
    {references
      .filter((ref) => ref.category === "Hidrojeolojik Etütler ve Maden Hidrojeolojisi")
      .map((ref, index) => (
        <a
          key={ref.name}
          href={ref.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex flex-col justify-between rounded-xl border border-border bg-surface/40 p-4 transition-all hover:border-aqua/55 hover:bg-surface text-center ${
            index === 2 ? "md:col-span-2 justify-self-center w-full max-w-xs" : ""
          }`}
        >
          <div className="flex h-24 w-full items-center justify-center rounded-lg bg-foreground/[0.02] p-3 transition-colors group-hover:bg-foreground/[0.05]">
            <img
              src={ref.logo}
              alt={`${ref.name} Logo`}
              className="max-h-full max-w-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 scale-100 group-hover:scale-105"
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="font-display text-lg md:text-xl leading-snug text-card-foreground group-hover:text-aqua transition-colors line-clamp-2">
              {ref.name}
            </span>
            <span className="text-xl text-aqua transition-transform group-hover:translate-x-1 shrink-0">→</span>
          </div>
        </a>
      ))}
  </div>
</div>


          {/* 3. KATEGORİ: Jeoteknik */}
          <div className="w-full flex flex-col items-center">
           <h3 className="w-full text-center text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground/80 border-b border-border/60 pb-3 mb-6">
              {t("projects.cat3")} {/* 🎯 Çevrildi */}
            </h3>
            <div className="w-full flex justify-center">
              {references
                .filter((ref) => ref.category === "Jeoteknik")
                .map((ref) => (
                  <a
                    key={ref.name}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full max-w-xs flex flex-col justify-between rounded-xl border border-border bg-surface/40 p-4 transition-all hover:border-aqua/55 hover:bg-surface text-center"
                  >
                    <div className="flex h-24 w-full items-center justify-center rounded-lg bg-foreground/[0.02] p-3 transition-colors group-hover:bg-foreground/[0.05]">
                      <img
                        src={ref.logo}
                        alt={`${ref.name} Logo`}
                        className="max-h-full max-w-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 scale-100 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <span className="font-display text-base leading-snug text-card-foreground group-hover:text-aqua transition-colors line-clamp-2">
                        {ref.name}
                      </span>
                      <span className="text-lg text-aqua transition-transform group-hover:translate-x-1 shrink-0">→</span>
                    </div>
                  </a>
                ))}
            </div>
          </div>

          {/* 4. KATEGORİ: Sondaj ve Maden Arama */}
          <div className="w-full flex flex-col items-center">
           <h3 className="w-full text-center text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground/80 border-b border-border/60 pb-3 mb-6">
              {t("projects.cat4")} {/* 🎯 Çevrildi */}
            </h3>
            <div className="w-full flex justify-center">
              {references
                .filter((ref) => ref.category === "Sondaj ve Maden Arama")
                .map((ref) => (
                  <a
                    key={ref.name}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  className="group w-full max-w-xs flex flex-col justify-between rounded-xl border border-border bg-surface/40 p-4 transition-all hover:border-aqua/55 hover:bg-surface text-center"
                  >
                    <div className="flex h-24 w-full items-center justify-center rounded-lg bg-foreground/[0.02] p-3 transition-colors group-hover:bg-foreground/[0.05]">
                      <img
                        src={ref.logo}
                        alt={`${ref.name} Logo`}
                        className="max-h-full max-w-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 scale-100 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <span className="font-display text-base leading-snug text-card-foreground group-hover:text-aqua transition-colors line-clamp-2">
                        {ref.name}
                      </span>
                      <span className="text-lg text-aqua transition-transform group-hover:translate-x-1 shrink-0">→</span>
                    </div>
                  </a>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}