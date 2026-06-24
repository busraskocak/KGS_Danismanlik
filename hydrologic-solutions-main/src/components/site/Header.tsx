import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useLang } from "@/lib/i18n";
import logoDark from "@/assets/KGSLOGO.png";
import logoLight from "@/assets/KGS_w_logo.png";

interface LinkItem {
  href: string;
  label: string;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const links: LinkItem[] = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#coverage", label: t("nav.coverage") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      {/* max-w-7xl sınırını kaldırdık, w-full ile tam ekrana yaydık. İçerideki justify-between ise sol ve sağ kutuyu iki uca fırlatacak */}
      <div className="w-full flex items-center justify-between px-6 py-1 md:px-12">
        
        {/* 1. TAM SOL TARAF: LOGO ALANI */}
        <a href="#home" className="group flex items-center transition-transform hover:scale-[1.02]">
          <span className="flex items-center justify-center">
          <img
  src={logoDark}
  alt="KGS"
  className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-26 dark:hidden"
/>

<img
  src={logoLight}
  alt="KGS"
  className="hidden h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-26 dark:block"
/>
          </span>
        </a>

        {/* 2. TAM SAĞ TARAF: NAVBAR + AKSİYON BUTONLARI BİR ARADA */}
        <div className="flex items-center gap-6 lg:gap-10">
          
          {/* Masaüstü Linkleri (Butonların soluna, ama sağ bloğun içine yerleşti) */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground/80 tracking-wide transition-all hover:text-foreground hover:translate-y-[-1px] whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Dil, Tema ve Mobil Menü Butonları */}
          <div className="flex items-center gap-2.5">
            
            {/* Modern Dil Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
                className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-surface/40 px-3.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{lang}</span>
                <ChevronDown className={`h-3 w-3 text-muted-foreground transition-transform duration-300 ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-24 origin-top-right rounded-xl border border-border bg-background/95 p-1 shadow-lg backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <button
                    onClick={() => setLang("tr")}
                    className={`flex w-full items-center justify-center rounded-lg py-2 text-xs font-medium transition-colors ${
                      lang === "tr" ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                    }`}
                  >
                    Türkçe
                  </button>
                  <button
                    onClick={() => setLang("en")}
                    className={`flex w-full items-center justify-center rounded-lg py-2 text-xs font-medium transition-colors ${
                      lang === "en" ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                    }`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Tema Butonu */}
            <ThemeToggle />

            {/* Mobil Hamburger Butonu */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={lang === "tr" ? "Menüyü değiştir" : "Toggle menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/40 backdrop-blur-md transition-all hover:bg-accent hover:text-accent-foreground lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. MOBİL DROPDOWN MENÜ */}
      <div
        className={`absolute top-full left-0 right-0 border-b border-border bg-background/95 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 pointer-events-none invisible"
        }`}
      >
        <nav className="px-4 py-6 sm:px-6">
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/40 pb-2 text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-4 border-t border-border/60 pt-4 text-xs text-muted-foreground sm:grid-cols-3">
            <div>
              <p className="uppercase tracking-widest font-semibold text-[10px]">{t("contact.email")}</p>
              <p className="mt-0.5 text-foreground">info@kgs.com.tr</p>
            </div>
            <div>
              <p className="uppercase tracking-widest font-semibold text-[10px]">{t("contact.phone")}</p>
              <p className="mt-0.5 text-foreground">+90 312 000 00 00</p>
            </div>
            <div>
              <p className="uppercase tracking-widest font-semibold text-[10px]">{t("contact.address")}</p>
              <p className="mt-0.5 text-foreground">Çankaya, Ankara</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}