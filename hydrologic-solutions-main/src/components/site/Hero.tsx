import heroImg from "@/assets/hero-water.jpg";
import { ArrowDown } from "lucide-react";
import { useLang } from "@/lib/i18n"; // Global dil sistemi bağlı

export function Hero() {
  const { lang } = useLang(); // 🎯 t yerine aktif dil durumunu (lang) çekiyoruz

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt={lang === "tr" ? "Kıvrılan bir nehir ve katmanlı kayaçlar" : "A winding river and stratified rocks"}
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-16 pt-48 md:pt-56">
        
        {/* 🎯 Başlık Alanı Çevirisi */}
        <h1 className="font-display text-5xl leading-[0.95] text-balance text-foreground md:text-8xl lg:text-9xl">
          {lang === "tr" ? (
            <>
              Yeraltısularını <br />
              <em className="italic text-aqua">nümerik</em> modellerle <br />
              geleceğe taşıyoruz.
            </>
          ) : (
            <>
              Carrying <br />
              groundwater into the future <br />
              with <em className="italic text-aqua">numerical</em> models.
            </>
          )}
        </h1>

        {/* 🎯 Paragraf Çevirisi */}
        <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
          {lang === "tr" ? (
            "Akifer karakterizasyonundan havza ölçekli 3D jeolojik modellemeye, maden susuzlaştırma tasarımlarından MODFLOW tabanlı akım ve kirletici taşınım modellerine kadar; 13 yıllık kıdemli saha ve proje tecrübesiyle uluslararası standartlarda bağımsız mühendislik ve danışmanlık hizmeti sunuyoruz."
          ) : (
            "From aquifer characterization to basin-scale 3D geological modeling, and from mine dewatering designs to MODFLOW-based flow and contaminant transport models; we provide independent engineering and consultancy services at international standards with 13 years of senior field and project experience."
          )}
        </p>

        {/* 🎯 Butonların Çevirisi */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#services"
            className="group inline-flex items-center gap-3 rounded-full bg-aqua px-6 py-3 text-sm font-medium text-aqua-foreground transition-transform hover:-translate-y-0.5"
          >
            {lang === "tr" ? "Uzmanlık Alanlarımızı İnceleyin" : "Explore Our Expertise"}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-background/40 px-6 py-3 text-sm text-foreground backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {lang === "tr" ? "İletişime Geçin" : "Contact Us"}
          </a>
        </div>

        {/* 🎯 İstatistik Kartları Çevirisi */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
          {(lang === "tr" 
            ? [
                ["13 Yıl", "Saha ve Proje Tecrübesi"],
                ["3D", "Jeolojik Modelleme"],
                ["MODFLOW", "Sayısal Akım Modelleri"],
                ["WFD", "Uyumlu Raporlama"],
              ]
            : [
                ["13 Years", "Field & Project Experience"],
                ["3D", "Geological Modeling"],
                ["MODFLOW", "Numerical Flow Models"],
                ["WFD", "Compliant Reporting"],
              ]
          ).map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl text-foreground md:text-4xl">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}