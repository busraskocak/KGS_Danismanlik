import heroImg from "@/assets/hero-water.jpg";
import {
  ArrowDown,
  FlaskConical,
  Layers3,
  Waves,
  ClipboardCheck,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { lang } = useLang();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt={
            lang === "tr"
              ? "Kıvrılan bir nehir ve katmanlı kayaçlar"
              : "A winding river and stratified rocks"
          }
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-16 pt-48 md:pt-56">
        <h1 className="font-display text-5xl leading-[0.95] text-balance text-foreground md:text-8xl lg:text-9xl">
          {lang === "tr" ? (
            <>
              Yeraltısuyu yönetiminde
              <br />
              <em className="italic text-aqua">
                bilimsel ve sürdürülebilir
              </em>{" "}
              çözümler.
            </>
          ) : (
            <>
              <em className="italic text-aqua">
                Scientific and sustainable
              </em>
              <br />
              solutions in groundwater
              <br />
              management.
            </>
          )}
        </h1>

        <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
          {lang === "tr"
            ? "Çevre ve insan odaklı, yeraltısularının korunmasına yönelik teknik, yenilikçi ve bağımsız mühendislik ve danışmanlık hizmetleri sunuyoruz."
            : "We provide technical, innovative, and independent engineering and consultancy services focused on the protection of groundwater, with an environmental and people-centered approach."}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#services"
            className="group inline-flex items-center gap-3 rounded-full bg-aqua px-6 py-3 text-sm font-medium text-aqua-foreground transition-transform hover:-translate-y-0.5"
          >
            {lang === "tr"
              ? "Uzmanlık Alanlarımızı İnceleyin"
              : "Explore Our Expertise"}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-background/40 px-6 py-3 text-sm text-foreground backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {lang === "tr" ? "İletişime Geçin" : "Contact Us"}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <FlaskConical className="mb-4 h-8 w-8 text-aqua" />
            <h3 className="font-display text-xl text-foreground md:text-2xl">
              {lang === "tr" ? "Hidrojeokimya" : "Hydrogeochemistry"}
            </h3>
           
          </div>

          <div className="flex flex-col items-center text-center">
            <Layers3 className="mb-4 h-8 w-8 text-aqua" />
            <h3 className="font-display text-xl text-foreground md:text-2xl">
              {lang === "tr"
                ? "Coğrafi Bilgi Sistemleri"
                : "Geographic Information Systems"}
            </h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <Waves className="mb-4 h-8 w-8 text-aqua" />
            <h3 className="font-display text-xl text-foreground md:text-2xl">
              {lang === "tr"
                ? "Nümerik Yeraltısuyu Akım Modellemesi"
                : "Numerical Groundwater Flow Modeling"}
            </h3>
          </div>

          <div className="flex flex-col items-center text-center">
            <ClipboardCheck className="mb-4 h-8 w-8 text-aqua" />
            <h3 className="font-display text-xl text-foreground md:text-2xl">
              {lang === "tr"
                ? "Ulusal ve Uluslararası Standartlarda Raporlama"
                : "National & International Standards Compliant Reports"}
            </h3>
         
          </div>
        </div>
      </div>
    </section>
  );
}