import { Droplets, Pickaxe, Waves, ChartNoAxesCombined , Mountain, FileText } from "lucide-react";
import { useLang } from "@/lib/i18n"; // 🎯 Dil sistemi bağlandı

export function Services() {
  const { t } = useLang(); // 🎯 t fonksiyonu çağrıldı

  // i18n entegrasyonu için ham veri dizisini fonksiyon içine alıp anahtarlarla eşleştirdik
  const services = [
    {
      icon: Mountain,
      title: t("services.s1.title"),
      desc: t("services.s1.desc"),
      features: [
        t("services.s1.f1"),
        t("services.s1.f2"),
        t("services.s1.f3"),
        t("services.s1.f4"),
        t("services.s1.f5"),
        t("services.s1.f6"),
        t("services.s1.f7"),
        t("services.s1.f8"),
        t("services.s1.f9"),
      ]
    },
    {
      icon: Waves, 
      title: t("services.s2.title"),
      desc: t("services.s2.desc"),
      features: [
        t("services.s2.f1"),
        t("services.s2.f2"),
        t("services.s2.f3"),
        t("services.s2.f4"),
        t("services.s2.f5"),
      ],
    },
    {
      icon: Pickaxe,
      title: t("services.s3.title"),
      desc: t("services.s3.desc"),
      features: [
        t("services.s3.f1"),
        t("services.s3.f2"),
        t("services.s3.f3"),
        t("services.s3.f4"),
        t("services.s3.f5"),
        t("services.s3.f6"),
        t("services.s3.f7"),
      ]
    },
    {
      icon: Droplets,
      title: t("services.s4.title"),
      desc: t("services.s4.desc"),
      features: [
        t("services.s4.f1"),
        t("services.s4.f2"),
        t("services.s4.f3"),
        t("services.s4.f4"),
        t("services.s4.f5"),
      ]
    },
    {
      icon: ChartNoAxesCombined,
      title: t("services.s5.title"),
      desc: t("services.s5.desc"),
      features: [
        t("services.s5.f1"),
        t("services.s5.f2"),
        t("services.s5.f3"),
        t("services.s5.f4"),
        t("services.s5.f5"),
      ]
    },
    {
      icon: FileText,
      title: t("services.s6.title"),
      desc: t("services.s6.desc"),
      features: [
        t("services.s6.f1"),
        t("services.s6.f2"),
        t("services.s6.f3"),
        t("services.s6.f4"),
        t("services.s6.f5"),
        t("services.s6.f6"),
        t("services.s6.f7"),
      ]
    },
  ];

  return (
    <section id="services" className="relative border-t border-border bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-aqua">
              {t("services.badge")} {/* 🎯 Çevrildi */}
            </p>
            <h2 className="mt-2 font-display text-4xl md:text-6xl">
              {t("services.title")} {/* 🎯 Çevrildi */}
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-card md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xs text-muted-foreground">
                  /0{i + 1}
                </span>
                <s.icon className="h-5 w-5 text-aqua transition-transform group-hover:scale-110" />
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl">{s.title}</h3>
              
              <p className="text-sm text-muted-foreground">{s.desc}</p>

              {/* 🛠️ HOVER DURUMUNDA AÇILAN MADDELER */}
              {s.features && (
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <ul className="space-y-2 text-xs text-muted-foreground border-t border-border/50 pt-4 mt-2">
                      {s.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <span className="text-aqua mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              <div className="mt-auto h-px w-0 bg-aqua transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}