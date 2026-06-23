import aboutVideo from "@/assets/about-simulation.mp4";
import { useLang } from "@/lib/i18n"; // 🎯 Dil sistemi bağlandı

export function About() {
  const { t, lang } = useLang(); // 🎯 t fonksiyonu ve mevcut lang durumunu aldık

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden py-24 md:py-32 bg-black">
      
      {/* 🎥 1. ARKA PLAN VİDEOSU VE GÖLGE MASKESİ */}
      <div className="absolute inset-0 z-0">
        <video
          src={aboutVideo}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
      </div>

      {/* 📝 2. YAN YANA İKİ SÜTUNLU YAZI ALANI */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 items-start text-white filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          
          {/* SOL SÜTUN (Hakkımızda & Ana Başlık) */}
          <div className="md:col-span-5 sticky md:top-36">
            <p className="text-xs uppercase tracking-[0.25em] text-aqua font-semibold">
              {t("about.badge")} {/* 🎯 Çevrildi */}
            </p>
            
            <h2 className="mt-4 font-display text-4xl text-balance md:text-5xl lg:text-6xl leading-[1.1] text-white">
              {t("about.titlePart1")}, <br />
              <em className="italic text-aqua">{t("about.titleItalic")}</em> {t("about.titlePart2")} {/* 🎯 Çevrildi */}
            </h2>
            
            <p className="mt-8 text-base text-white/95 md:text-lg leading-relaxed text-justify">
              {/* 🎯 Dil İngilizce ise KGS kelimesini başa alarak gramer uyumu sağladık */}
              {lang === "en" ? (
                <>
                  <strong>KGS Consultancy and Engineering</strong>
                  {t("about.description")}
                </>
              ) : (
                <>
                  <strong>KGS Danışmanlık ve Mühendislik</strong>
                  {t("about.description")}
                </>
              )}
            </p>
          </div>

          {/* SAĞ SÜTUN (Faaliyet Alanları & İlkeler) */}
          <div className="md:col-span-7 space-y-8 md:mt-8">
            
            {/* Faaliyet Alanları */}
            <p className="text-base text-white/95 md:text-lg leading-relaxed text-justify">
              <strong>{t("about.featuresTitle")}</strong> {t("about.featuresContent")} {/* 🎯 Çevrildi */}
            </p>

            {/* Çalışma İlkeleri */}
            <p className="text-base text-white/95 md:text-lg leading-relaxed text-justify">
              {/* 🎯 Dil İngilizce ise ilkeler paragrafının öznesini de düzeltiyoruz */}
              {lang === "en" ? (
                <>
                  <strong>KGS</strong> {t("about.principlesContent")}
                </>
              ) : (
                <>
                  <strong>KGS,</strong> {t("about.principlesContent")}
                </>
              )}
            </p>

          </div>

        </div>
      </div>

    </section>
  );
}