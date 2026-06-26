import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useLang } from "@/lib/i18n"; 

export function Contact() {
  const { t } = useLang(); // 🎯 t fonksiyonunu çağırdık

  // Kart verilerini çeviri anahtarlarına (key) bağlayarak dinamik hale getirdik
  const contactItems = [
    { 
      Icon: Mail, 
      label: t("contact.email"), 
      value: "info@kgsdanismanlik.com.tr", 
      href: "mailto:info@kgsdanismanlik.com.tr" 
    },
    { 
      Icon: Phone, 
      label: t("contact.phone"), 
      value: "+90 506 645 13 33", 
      href: "tel:+905066451333" 
    },
    { 
      Icon: MapPin, 
      label: t("contact.address"), 
      value: t("contact.addressValue"), 
      href: undefined 
    },
   {
  Icon: Linkedin,
  label: t("contact.linkedin"),
  value: "KGS Danışmanlık ve Mühendislik",
  href: "https://www.linkedin.com/company/kgsconsulting/posts/?feedView=all",
},
  ];

  return (
    <section id="contact" className="relative border-t border-border bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Başlık alanı */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-aqua">
            {t("contact.title")} {/* 🎯 "Bize Ulaşın" başlığı */}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:items-stretch">
          
          {/* 1. SOL TARAF: HARİTA KUTUSU */}
          <div className="md:col-span-6 flex flex-col h-full">
            <div className="flex-1 min-h-[350px] w-full overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.5266680416894!2d32.66151597648753!3d39.884839187839454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d339feefbc6b3b%3A0x67d020253f8258f7!2sSiSa%20Kule!5e0!3m2!1str!2str!4v1782163220609!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "var(--map-filter)" }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map - SiSa Kule"
              />
            </div>
          </div>

          {/* 2. SAĞ TARAF: İLETİŞİM KARTLARI */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <div className="grid gap-4 w-full">
              {contactItems.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href ?? "#"}
                  target={label === t("contact.linkedin") ? "_blank" : undefined}
                  rel={label === t("contact.linkedin") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 rounded-2xl border border-border bg-background p-5 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-aqua shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
                    <span className="mt-1 block font-display text-lg sm:text-xl break-words leading-tight">{value}</span>
                  </span>
                  <span className="text-aqua opacity-0 transition-opacity group-hover:opacity-100 shrink-0">→</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}