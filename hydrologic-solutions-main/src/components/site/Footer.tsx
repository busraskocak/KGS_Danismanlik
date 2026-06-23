import { useLang } from "@/lib/i18n"; // 🎯 Dil sistemi bağlandı

export function Footer() {
  const { t } = useLang(); // 🎯 t fonksiyonu çağrıldı

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-8">
        <p className="font-display text-2xl">
          {t("footer.brand")} {/* 🎯 Çevrildi */}
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t("footer.copyright")} {/* 🎯 Çevrildi */}
        </p>
        <div className="flex gap-6 text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#about" className="hover:text-foreground">
            {t("nav.about")} {/* 🎯 Mevcut nav çevirisini kullandık */}
          </a>
          <a href="#services" className="hover:text-foreground">
            {t("footer.services")} {/* 🎯 Çevrildi */}
          </a>
          <a href="#contact" className="hover:text-foreground">
            {t("nav.contact")} {/* 🎯 Mevcut nav çevirisini kullandık */}
          </a>
        </div>
      </div>
    </footer>
  );
}