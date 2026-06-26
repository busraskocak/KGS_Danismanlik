import turkeyMap from "@/assets/turkey-provinces.svg";
import { useLang } from "@/lib/i18n";

const locations = [
  { city: "Ankara", workKey: "map.ankara", work: "Merkez ve Havza Yönetimi Projeleri", x: 36, y: 41.5 },
  { city: "Yozgat", workKey: "map.yozgat", work: "Hidrojeolojik Etüt ve Saha Çalışmaları", x: 50, y: 42.5 },
  { city: "Kayseri", workKey: "map.kayseri", work: "Beslenim-Boşalım ve Akifer Analizleri", x: 52.5, y: 58 },
  { city: "Urfa", workKey: "map.urfa", work: "Yeraltı Suyu Akım Modellemesi", x: 70, y: 77.0 },
  { city: "Sakarya", workKey: "map.sakarya", work: "İçme Suyu Kaynak Koruma Alanları", x: 25, y: 28.0 },
  { city: "Burdur", workKey: "map.burdur", work: "Karstik Akifer ve Göl Koruma Etütleri", x: 22, y: 72 },
  { city: "Kocaeli", workKey: "map.kocaeli", work: "Endüstriyel Yeraltı Suyu Yönetimi", x: 22, y: 25.5 },
  { city: "Denizli", workKey: "map.denizli", work: "Jeotermal Akifer Değerlendirmeleri", x: 18, y: 65 },
  { city: "Balıkesir", workKey: "map.balikesir", work: "Maden Susuzlaştırma ve Risk Analizleri", x: 12, y: 40 },
  { city: "Malatya", workKey: "map.malatya", work: "Havza Ölçekli Hidrojeolojik Analizler", x: 64, y: 58.5 },
  { city: "Muğla", workKey: "map.mugla", work: "Çatlaklı ve Karstik Sistem Yönetimi", x: 14, y: 80 },
  { city: "Zonguldak", workKey: "map.zonguldak", work: "Tünel ve Altyapı Hidrojeolojisi", x: 32, y: 22.5 },
];

export function WorkMap() {
  const { t } = useLang();

 
const getWorkDescription = (loc: { workKey: string; work: string }) => {
  const translation = t(loc.workKey);
  if (!translation || translation === loc.workKey) {
    return loc.work;
  }
  return translation;
};

  return (
    <section id="coverage" className="relative border-t border-border bg-black py-24 md:py-36 overflow-hidden min-h-[750px] flex flex-col justify-between">
      {/* Atmosferik arka plan ışıkları */}
      <div className="absolute inset-0 grain-overlay opacity-20" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-aqua/15 blur-[130px] rounded-full pointer-events-none" />

    
<div className="relative z-20 mx-auto max-w-7xl px-5 md:px-8 w-full pointer-events-none mb-12">
  <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
    <div className="pointer-events-auto">
      <p className="text-xs uppercase tracking-[0.25em] text-aqua font-semibold">
        {t("map.badge") || "Çalışmalarımız"} 
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
        {t("map.title") || "Proje Sahalarımız"} 
      </h2>
    </div>
  </div>
</div>

      {/* 🗺️ HARİTA ALANI */}
      <div className="relative w-full z-10 flex items-center justify-center pointer-events-none mt-auto pb-6">
        <div className="relative w-full max-w-5xl aspect-[2/1] px-5">
       
<div className="relative w-full h-full rounded-2xl border border-white/10 bg-zinc-900/50 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-sm overflow-hidden">
  <img
    src={turkeyMap}
    alt="Türkiye Haritası"
    className="w-full h-full object-cover opacity-60 invert-[0.2] brightness-[1.4] contrast-[1.2] sepia-[0.2] hue-rotate-[140deg]"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-aqua/15 via-transparent to-transparent pointer-events-none" />
</div>
          
          {/* ŞEHİR PİNLERİ */}
          {locations.map((location, index) => (
            <div
              key={location.city}
              className="group absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
                // @ts-ignore
                "--float-delay": `${index * 150}ms`,
              }}
            >
              <div className="relative flex flex-col items-center justify-center animate-map-float">
                
                {/* 📌 PİN NOKTASI */}
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-aqua opacity-50" />
                  <span className="relative h-2.5 w-2.5 rounded-full border border-black bg-aqua shadow-[0_0_15px_#00f2fe] transition-transform duration-300 group-hover:scale-130" />
                </span>
                </div>

              </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}