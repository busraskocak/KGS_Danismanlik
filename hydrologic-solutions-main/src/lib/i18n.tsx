import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "tr" | "en";

// Dict tipini dinamik dize (string) kabul edecek şekilde esnettik ki uzun paragraflarda TypeScript hata vermesin
type Dict = Record<string, { tr: string; en: string }>;

export const dict: Dict = {
  // Mevcut Navigasyon ve Genel Çeviriler
  "nav.home": { tr: "Ana Sayfa", en: "Home" },
  "nav.about": { tr: "Hakkımızda", en: "About" },
  "nav.services": { tr: "Hizmetlerimiz", en: "Services" },
  "nav.coverage": { tr: "Çalışmalarımız", en: "Our Work" },
  "nav.projects": {
  tr: "Çözüm Ortaklarımız",
  en: "Our Partners",
},
  "nav.contact": { tr: "Bize Ulaşın", en: "Contact" },
  "contact.title": {
  tr: "Bize Ulaşın",
  en: "Contact",
},
  "menu.title": { tr: "Menü", en: "Menu" },
  "contact.email": { tr: "E-posta", en: "Email" },
  "contact.phone": { tr: "Telefon", en: "Phone" },
  "contact.address": { tr: "Adres", en: "Address" },
  "contact.addressValue": {
  tr: "Konutkent Mahallesi, Dumlupınar Bulvarı No:381AK Çankaya/ANKARA",
  en: "Konutkent Mahallesi, Dumlupınar Bulvarı No:381AK Çankaya/ANKARA",
  },
  "contact.linkedin": {
  tr: "LinkedIn",
  en: "LinkedIn",
},

  "brand.tagline": { tr: "KGS Danışmanlık", en: "KGS Consulting" },
  // --- PROJECTS (ÇÖZÜM ORTAKLARIMIZ) ÇEVİRİLERİ ---
  "projects.badge": { tr: "ÇÖZÜM ORTAKLARIMIZ", en: "OUR SOLUTION PARTNERS" },
  "projects.cat1": { tr: "AR-GE Danışmanlığı", en: "R&D Consultancy" },
  "projects.cat2": { tr: "Hidrojeolojik Etütler ve Maden Hidrojeolojisi", en: "Hydrogeological Surveys and Mine Hydrogeology" },
  "projects.cat3": { tr: "Jeoteknik", en: "Geotechnics" },
  "projects.cat4": { tr: "Sondaj ve Maden Arama", en: "Drilling and Mineral Exploration" },

  // --- SERVICES (HİZMETLERİMİZ) ÇEVİRİLERİ ---
  "services.badge": { tr: "Hizmetlerimiz", en: "Our Services" },
  "services.title": { tr: "Uzmanlık Alanlarımız", en: "Areas of Expertise" },
  
  // Hizmet 1: Hidrojeolojik Etüt & Değerlendirme
  "services.s1.title": { tr: "Hidrojeolojik Etüt & Değerlendirme", en: "Hydrogeological Survey & Evaluation" },
  "services.s1.desc": { tr: "Yeraltısuyu sistemlerinin karakterizasyonu ve sürdürülebilir yönetimi amacıyla kapsamlı hidrojeolojik etüt ve değerlendirme hizmetleri sunuyoruz.", en: "We provide comprehensive hydrogeological survey and evaluation services for the characterization and sustainable management of groundwater systems." },
  "services.s1.f1": { tr: "Hidrosensus çalışmaları (kuyu-kaynak envanter)", en: "Hydrosensus studies (well-spring inventory)" },
  "services.s1.f2": { tr: "Su kimyası ve izotop hidrolojisi çalışmaları", en: "Water chemistry and isotope hydrology studies" },
  "services.s1.f3": { tr: "Yeraltısuyu potansiyelinin belirlenmesi, bütçe çalışmaları", en: "Determination of groundwater potential, water budget studies" },
  "services.s1.f4": { tr: "Akifer karakterizasyonu", en: "Aquifer characterization" },
  "services.s1.f5": { tr: "Hidrojeolojik risk-hassasiyet analizleri", en: "Hydrogeological risk-sensitivity analyses" },
  "services.s1.f6": { tr: "Su temini çalışmaları", en: "Water supply studies" },
  "services.s1.f7": { tr: "Hidrojeolojik etüt ve değerlendirme raporları", en: "Hydrogeological survey and evaluation reports" },
  "services.s1.f8": { tr: "Havza bazlı hidrojeolojik çalışmalar", en: "Basin-based hydrogeological studies" },
  "services.s1.f9": { tr: "ÇED ve izin süreçlerine yönelik hidrojeolojik çalışmalar", en: "Hydrogeological studies for EIA and licensing processes" },

  // Hizmet 2: Yeraltısuyu Modelleme ve Sayısal Analiz
  "services.s2.title": { tr: "Yeraltısuyu Modelleme ve Sayısal Analiz", en: "Groundwater Modeling & Numerical Analysis" },
  "services.s2.desc": { tr: "Bilimsel temelli sayısal modelleme teknikleriyle kompleks yeraltısuyu sistemlerini analiz ediyor, farklı senaryolar altında güvenilir mühendislik çözümleri geliştiriyoruz.", en: "We analyze complex groundwater systems using science-based numerical modeling techniques and develop reliable engineering solutions under different scenarios." },
  "services.s2.f1": { tr: "Nümerik yeraltısuyu akım modellemesi", en: "Numerical groundwater flow modeling" },
  "services.s2.f2": { tr: "Kirletici taşınım modellemesi", en: "Contaminant transport modeling" },
  "services.s2.f3": { tr: "Gelecek projeksiyonu senaryo analizleri", en: "Future projection scenario analyses" },
  "services.s2.f4": { tr: "İklim değişikliği etkilerinin yeraltısuyu kaynakları üzerindeki değerlendirilmesi", en: "Assessment of climate change impacts on groundwater resources" },
  "services.s2.f5": { tr: "Karar destek modellemeleri", en: "Decision support modeling" },

  // Hizmet 3: Madencilik Hidrojeolojisi
  "services.s3.title": { tr: "Maden Hidrojeolojisi", en: "Mine Hydrogeology" },
  "services.s3.desc": { tr: "Madencilik, tünel vb. projelerde yeraltısuyunun güvenli ve sürdürülebilir yönetimine yönelik mühendislik çözümleri sunuyoruz.", en: "We offer engineering solutions for the safe and sustainable management of groundwater in mining, tunneling, and similar infrastructure projects." },
  "services.s3.f1": { tr: "Maden susuzlaştırma (Dewatering) tasarımı", en: "Mine dewatering system design" },
  "services.s3.f2": { tr: "ÇED kapsamında hidrojeolojik değerlendirmeler", en: "Hydrogeological assessments within the scope of EIA" },
  "services.s3.f3": { tr: "Yeraltısuyu kontrolü ve yönetimi", en: "Groundwater control and management" },
  "services.s3.f4": { tr: "Drenaj sistemlerinin tasarımı", en: "Design of surface and subsurface drainage systems" },
  "services.s3.f5": { tr: "Şev ve kazı hidrojeolojisi", en: "Slope and excavation hydrogeology" },
  "services.s3.f6": { tr: "Maden kapama süreci yeraltısuyu yönetimi", en: "Groundwater management during mine closure stages" },
  "services.s3.f7": { tr: "3B katı model ve nümerik yeraltısuyu model çalışmaları", en: "3D solid modeling and numerical groundwater studies" },

  // Hizmet 4: Su Kaynakları Koruma Alanı Çalışmaları
  "services.s4.title": { tr: "Su Kaynakları Koruma Alanı Çalışmaları", en: "Water Resources Protection Zone Studies" },
  "services.s4.desc": { tr: "Su kaynaklarının sürdürülebilir kullanımı amacıyla ulusal ve uluslararası standartlarda koruma ve planlama çalışmaları gerçekleştiriyoruz.", en: "We conduct protection and planning activities at national and international standards for the sustainable use of water resources." },
  "services.s4.f1": { tr: "İçme suyu koruma alanlarının belirlenmesi", en: "Delineation of drinking water protection zones" },
  "services.s4.f2": { tr: "Kaynak, göl ve gölet koruma çalışmaları", en: "Protection studies for water springs, lakes, and ponds" },
  "services.s4.f3": { tr: "Yeraltısuyu koruma stratejileri", en: "Groundwater protection strategies" },
  "services.s4.f4": { tr: "Su kaynakları potansiyel-tüketim değerlendirmeleri", en: "Water resource potential vs. consumption assessments" },
  "services.s4.f5": { tr: "Koruma alanı yönetim planlarının hazırlanmesi", en: "Preparation of protection zone management action plans" },

  // Hizmet 5: CBS, Veri Yönetimi ve Mekânsal Analiz
  "services.s5.title": { tr: "CBS, Veri Yönetimi ve Mekânsal Analiz", en: "GIS, Data Management & Spatial Analysis" },
  "services.s5.desc": { tr: "Coğrafi Bilgi Sistemleri (CBS) teknolojilerini mühendislik analizleriyle entegre ederek güvenilir karar destek altyapıları oluşturuyoruz.", en: "We integrate Geographic Information Systems (GIS) technologies with engineering analysis to create reliable decision-support infrastructures." },
  "services.s5.f1": { tr: "CBS tabanlı analizler", en: "GIS-based multi-criteria analyses" },
  "services.s5.f2": { tr: "Hidrojeolojik veri tabanı oluşturulması", en: "Creation of professional hydrogeological databases" },
  "services.s5.f3": { tr: "Jeolojik ve hidrojeolojik haritalama", en: "Geological and hydrogeological mapping" },
  "services.s5.f4": { tr: "Uzaktan algılama destekli analizler", en: "Remote sensing integrated spatial analyses" },
  "services.s5.f5": { tr: "Jeoistatistiksel analizler", en: "Geostatistical analyses" },

  // Hizmet 6: Saha Uygulamaları ve Teknik Danışmanlık
  "services.s6.title": { tr: "Saha Uygulamaları ve Teknik Danışmanlık", en: "Field Applications & Technical Consultancy" },
  "services.s6.desc": { tr: "Projelerin planlama, uygulama ve izleme süreçlerinde saha çalışmaları ile teknik danışmanlık hizmetleri sunuyoruz.", en: "We provide field operations and technical consulting services during the planning, implementation, and monitoring processes of projects." },
  "services.s6.f1": { tr: "Akifer testleri", en: "Aquifer pumping tests" },
  "services.s6.f2": { tr: "Pompa testleri", en: "Pumping tests" },
  "services.s6.f3": { tr: "Boya (Tracer) deneyleri", en: "Dye (Tracer) tracing tests" },
  "services.s6.f4": { tr: "Hidrojeokimyasal değerlendirmeler", en: "Hydrogeochemical evaluations" },
  "services.s6.f5": { tr: "İzotop hidrolojisi çalışmaları", en: "Isotope hydrology implementations" },
  "services.s6.f6": { tr: "Yeraltısuyu seviye izleme", en: "Groundwater level monitoring networks" },
  "services.s6.f7": { tr: "Teknik raporlama ve proje danışmanlığı", en: "Technical reporting and senior project consultancy" },

  // --- ABOUT (HAKKIMIZDA) ÇEVİRİLERİ ---
  "about.badge": { 
    tr: "Hakkımızda", 
    en: "About Us" 
  },
  "about.titlePart1": { 
    tr: "Bilimsel doğruluk", 
    en: "Scientific accuracy" 
  },
  "about.titleItalic": { 
    tr: "savunulabilir", 
    en: "defensible" 
  },
  "about.titlePart2": { 
    tr: "teknik çözümler.", 
    en: "technical solutions." 
  },
  "about.description": { 
    tr: "; hidrojeoloji, yeraltısuyu yönetimi ve mühendislik danışmanlığı alanlarında uzmanlaşmış bağımsız bir mühendislik şirketidir. Bilimsel yaklaşımı, analitik bakış açısını ve uluslararası mühendislik standartlarını temel alan KGS; doğal kaynakların sürdürülebilir yönetimine katkı sağlayan, güvenilir ve uygulanabilir çözümler üretmeyi amaçlamaktadır.", 
    en: " is an independent engineering company specializing in hydrogeology, groundwater management, and engineering consultancy. Based on scientific approach, analytical perspective, and international engineering standards, KGS aims to produce reliable and applicable solutions contributing to the sustainable management of natural resources." 
  },
  "about.featuresTitle": { 
    tr: "Faaliyet alanlarımız;", 
    en: "Our fields of activity;" 
  },
  "about.featuresContent": { 
    tr: "hidrojeolojik etüt ve değerlendirme çalışmaları, havza bazlı hidrojeolojik analizler, yeraltısuyu akım ve kirletici taşınımının nümerik modellemesi, içme suyu kaynakları ile göl ve göletler için koruma alanlarının belirlenmesi, maden projelerinde susuzlaştırma ve yeraltısuyu yönetimi, tünel ve yol projeleri için hidrojeolojik değerlendirmeler, drenaj sistemlerinin tasarımı, çevresel etki değerlendirme süreçleri, hidrojeolojik risk analizleri ile Coğrafi Bilgi Sistemleri (CBS) tabanlı mekânsal analiz ve karar destek çalışmalarını kapsamaktadır. Bu kapsamda; hidrojeokimyasal analizler, izotop hidrolojisi, akifer testleri, boya izleme deneyleri  diğer ileri saha uygulamalarını gerçekleştirerek kapsamlı değerlendirme ve mühendislik danışmanlığı hizmetleri sunmaktayız.", 
    en: "include hydrogeological investigation and evaluation studies, basin-based hydrogeological analyses, numerical modeling of groundwater flow and contaminant transport, determination of protection zones for drinking water resources, lakes, and ponds, dewatering and groundwater management in mining projects, hydrogeological evaluations for tunnel and road projects, drainage system design, environmental impact assessment processes, hydrogeological risk analyses, and Geographic Information Systems (GIS) based spatial analysis and decision support studies. In this context, we provide comprehensive evaluation and engineering consultancy services by performing hydrogeochemical analyses, isotope hydrology, aquifer tests, dye tracing tests, and other advanced field applications." 
  },
  "about.principlesContent": { 
    tr: "her projeyi yalnızca mevcut ihtiyaçları karşılayan bir çalışma olarak değil, uzun vadeli çevresel, teknik ve ekonomik etkileri gözeten bütüncül bir mühendislik süreci olarak ele almaktadır. Projelere disiplinler arası bir bakış açısıyla yaklaşmakta ve farklı mühendislik alanlarındaki uzman çözüm ortaklarıyla koordineli çalışmalar yürütmektedir. Tüm çalışmalarımızda bilimsel doğruluğun yanı sıra mühendislik etiği, meslek ahlakı, bağımsızlık ve şeffaflık ilkelerini esas alarak güvenilir, sürdürülebilir ve kamu yararını gözeten çözümler üretmeyi temel ilkemiz olarak benimsiyoruz.", 
    en: "approaches each project not merely as a study to meet current needs, but as a holistic engineering process considering long-term environmental, technical, and economic impacts. We approach projects with an interdisciplinary perspective and conduct coordinated studies with expert solution partners in different engineering fields. In all our work, beside scientific accuracy, we embrace the core principles of engineering ethics, professional integrity, independence, and transparency to deliver reliable, sustainable, and public-interest oriented solutions." 
  }, // <--- BURADAKİ ERKEN KAPANAN KÜLÜT PARANTEZ (};) DÜZELTİLDİ, VİRGÜL KONULDU

  // --- HERO ÇEVİRİLERİ ---
  "hero.imgAlt": {
    tr: "Kıvrılan bir nehir ve katmanlı kayaçlar",
    en: "A winding river and stratified rocks"
  },
  "hero.titlePart1": {
    tr: "Yeraltısularını",
    en: "Carrying"
  },
  "hero.titleItalic": {
    tr: "nümerik",
    en: "numerical"
  },
  "hero.titlePart2": {
    tr: "modellerle geleceğe taşıyoruz.",
    en: "groundwater into the future with models."
  },
  "hero.titleTr": {
    tr: "Yeraltısularını nümerik modellerle geleceğe taşıyoruz.",
    en: "Carrying groundwater into the future with numerical models."
  },
  "hero.description": {
    tr: "Akifer karakterizasyonundan havza ölçekli 3D jeolojik modellemeye, maden susuzlaştırma tasarımlarından MODFLOW tabanlı akım ve kirletici taşınım modellerine kadar; 13 yıllık kıdemli saha ve proje tecrübesiyle uluslararası standartlarda bağımsız mühendislik ve danışmanlık hizmeti sunuyoruz.",
    en: "From aquifer characterization to basin-scale 3D geological modeling, and from mine dewatering designs to MODFLOW-based flow and contaminant transport models; we provide independent engineering and consultancy services at international standards with 13 years of senior field and project experience."
  },
  "hero.btnExpertise": {
    tr: "Uzmanlık Alanlarımızı İnceleyin",
    en: "Explore Our Expertise"
  },
  "hero.btnContact": {
    tr: "İletişime Geçin",
    en: "Contact Us"
  },
  // --- HARİTA ÇEVİRİLERİ (Bunların olduğundan emin ol) ---
  "map.badge": { tr: "Çalışmalarımız", en: "Our Work" },
  "map.title": { tr: "Proje Sahalarımız", en: "Our Project Sites" },
  // --- HARİTA ŞEHİR PROJELERİ ÇEVİRİLERİ ---
  "map.ankara": { 
    tr: "Merkez ve Havza Yönetimi Projeleri", 
    en: "Headquarters and Basin Management Projects" 
  },
  "map.yozgat": { 
    tr: "Hidrojeolojik Etüt ve Saha Çalışmaları", 
    en: "Hydrogeological Investigation and Fieldwork Studies" 
  },
  "map.kayseri": { 
    tr: "Beslenim-Boşalım ve Akifer Analizleri", 
    en: "Recharge-Discharge and Aquifer Analyses" 
  },
  "map.urfa": { 
    tr: "Yeraltı Suyu Akım Modellemesi", 
    en: "Groundwater Flow Modeling" 
  },
  "map.sakarya": { 
    tr: "İçme Suyu Kaynak Koruma Alanları", 
    en: "Drinking Water Source Protection Zones" 
  },
  "map.burdur": { 
    tr: "Karstik Akifer ve Göl Koruma Etütleri", 
    en: "Karstic Aquifer and Lake Protection Investigations" 
  },
  "map.kocaeli": { 
    tr: "Endüstriyel Yeraltı Suyu Yönetimi", 
    en: "Industrial Groundwater Management" 
  },
  "map.denizli": { 
    tr: "Jeotermal Akifer Değerlendirmeleri", 
    en: "Geothermal Aquifer Assessments" 
  },
  "map.balikesir": { 
    tr: "Maden Susuzlaştırma ve Risk Analizleri", 
    en: "Mine Dewatering and Risk Analyses" 
  },
  "map.malatya": { 
    tr: "Havza Ölçekli Hidrojeolojik Analizler", 
    en: "Basin-Scale Hydrogeological Analyses" 
  },
  "map.mugla": { 
    tr: "Çatlaklı ve Karstik Sistem Yönetimi", 
    en: "Fractured and Karstic System Management" 
  },
  "map.zonguldak": { 
    tr: "Tünel ve Altyapı Hidrojeolojisi", 
    en: "Tunnel and Infrastructure Hydrogeology" 
  },
  // --- FOOTER ÇEVİRİLERİ ---
  "footer.brand": { tr: "KGS Danışmanlık ve Mühendislik", en: "KGS Consultancy and Engineering" },
  "footer.copyright": { tr: "KGS Danışmanlık ve Mühendislik. Tüm hakları saklıdır.", en: "KGS Consultancy and Engineering. All rights reserved." },
  "footer.services": { tr: "Hizmetler", en: "Services" },
  
  // İstatistik Kartları Anahtarları
  "hero.stat1.num": { tr: "13 Yıl", en: "13 Years" },
  "hero.stat1.lbl": { tr: "Saha ve Proje Tecrübesi", en: "Field & Project Experience" },
  "hero.stat2.num": { tr: "3D", en: "3D" },
  "hero.stat2.lbl": { tr: "Jeolojik Modelleme", en: "Geological Modeling" },
  "hero.stat3.num": { tr: "MODFLOW", en: "MODFLOW" },
  "hero.stat3.lbl": { tr: "Sayısal Akım Modelleri", en: "Numerical Flow Models" },
  "hero.stat4.num": { tr: "WFD", en: "WFD" },
  "hero.stat4.lbl": { tr: "Uyumlu Raporlama", en: "Compliant Reporting" }
}; // <--- NESNE (DICT) ŞİMDİ DOĞRU YERDE KAPANDI

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict | string) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || null;
    if (saved === "tr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  const t = (k: keyof typeof dict | string) => dict[k]?.[lang] ?? String(k);

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}