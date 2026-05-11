/**
 * CLINIC CONFIG — single source of truth.
 * Edit per clinic. Bilingual (EN/AR). All copy is generic placeholder.
 * To deploy: update brand, contact, and content fields below.
 */

export type Bilingual = { en: string; ar: string };
export type PortraitVariant = "terracotta" | "sand" | "sage" | "dark";

export interface ClinicConfig {
  brand: { name: Bilingual; tagline: Bilingual; established: number };
  contact: {
    phone: string;
    whatsapp: string;
    whatsappLink: string;
    email: string;
    address: Bilingual;
    hours: Bilingual;
    parking?: Bilingual;
  };
  seo: { title: Bilingual; description: Bilingual; keywords: string[] };
  navigation: { items: { key: string; label: Bilingual; href: string }[]; bookCta: Bilingual };
  footer: {
    tagline: Bilingual;
    chips: Bilingual[];
    columns: { title: Bilingual; links: { label: Bilingual; href: string }[] }[];
    colophon: Bilingual;
  };
  // ── Homepage sections ─────────────────────────────────────────────────────
  hero: {
    eyebrow: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    headlinePartB?: Bilingual;
    leadItalic: Bilingual;
    lead: Bilingual;
    primaryCta: Bilingual;
    secondaryCta: Bilingual;
    pullQuote: Bilingual;
    pullQuoteAttribution: Bilingual;
    stats: { value: Bilingual; label: Bilingual }[];
  };
  marqueeStrip: { line1: Bilingual; line2: Bilingual };
  founder: {
    chapterRoman: string;
    chapterTitle: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    paragraphs: Bilingual[];
    name: string;
    role: Bilingual;
    cta: Bilingual;
  };
  services: {
    eyebrow: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    description: Bilingual;
    items: { num: string; name: Bilingual; description: Bilingual; variant: PortraitVariant }[];
  };
  tailoredCare: {
    chapterRoman: string;
    chapterTitle: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    description: Bilingual;
    points: { num: string; label: Bilingual }[];
    cta: Bilingual;
    badge: Bilingual;
  };
  beforeAfter: {
    chapterRoman: string;
    chapterTitle: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    description: Bilingual;
    cta: Bilingual;
    beforeLabel: Bilingual;
    afterLabel: Bilingual;
  };
  reviews: {
    eyebrow: Bilingual;
    pullQuote: Bilingual;
    items: { quote: Bilingual; name: Bilingual; role: Bilingual; variant: PortraitVariant }[];
    cta: Bilingual;
  };
  team: {
    eyebrow: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    items: { name: string; tag: Bilingual; variant: PortraitVariant }[];
  };
  bookCta: {
    eyebrow: Bilingual;
    headline: Bilingual;
    description: Bilingual;
    primary: Bilingual;
    secondary: Bilingual;
  };
  faq: {
    eyebrow: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    description: Bilingual;
    cta: Bilingual;
    items: { q: Bilingual; a: Bilingual }[];
  };
  journal: {
    eyebrow: Bilingual;
    headline: Bilingual;
    description: Bilingual;
    items: { tag: Bilingual; title: Bilingual; date: Bilingual; variant: PortraitVariant }[];
  };
  // ── Inner pages ───────────────────────────────────────────────────────────
  departmentsPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    items: {
      num: string;
      name: Bilingual;
      sub: Bilingual;
      blurb: Bilingual;
      treatments: Bilingual[];
      pricing: Bilingual;
      variant: PortraitVariant;
    }[];
    equipment: { name: string; description: Bilingual }[];
    bookCta: { headline: Bilingual; description: Bilingual };
  };
  doctorsPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    items: {
      name: string;
      role: Bilingual;
      bio: Bilingual;
      credentials: string[];
      variant: PortraitVariant;
    }[];
  };
  aboutPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    chapters: { n: string; title: Bilingual; body: Bilingual; variant: PortraitVariant }[];
    commitments: { n: string; title: Bilingual; description: Bilingual }[];
    location: { eyebrow: Bilingual; headlinePartA: Bilingual; headlineEm: Bilingual; description: Bilingual };
  };
  galleryPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    categories: { id: string; label: Bilingual }[];
    cases: { id: number; cat: string; treatment: Bilingual; weeks: number; before: PortraitVariant; after: PortraitVariant; name: string }[];
    disclaimer: Bilingual;
  };
  reviewsPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    rating: string;
    reviewCount: Bilingual;
    items: { shortQuote: Bilingual; longQuote: Bilingual; name: string; date: Bilingual; variant: PortraitVariant; stars: number }[];
  };
  journalPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    featured: { tag: Bilingual; title: Bilingual; excerpt: Bilingual; author: string; date: Bilingual; variant: PortraitVariant };
    posts: { tag: Bilingual; title: Bilingual; author: string; date: Bilingual; variant: PortraitVariant }[];
    newsletter: { headline: Bilingual; description: Bilingual; placeholder: Bilingual; cta: Bilingual };
  };
  bookingPage: {
    hero: { roman: string; eyebrow: Bilingual; title: Bilingual; titleEm: Bilingual; sub: Bilingual };
    services: { id: string; name: Bilingual; duration: Bilingual }[];
    slots: string[];
    steps: { choose: Bilingual; when: Bilingual; details: Bilingual; confirmed: Bilingual }[];
    labels: { name: Bilingual; phone: Bilingual; email: Bilingual; note: Bilingual; back: Bilingual; continue: Bilingual; confirm: Bilingual; bookAnother: Bilingual; namePrompt: Bilingual; emailPrompt: Bilingual; notePrompt: Bilingual };
    confirmed: { title: Bilingual; body: Bilingual };
    contact: { chapter: string; title: Bilingual; quote: Bilingual };
  };
}

export const clinicConfig: ClinicConfig = {
  brand: {
    name: { en: "Bright Specialized Clinics", ar: "عيادات برايت التخصصية" },
    tagline: { en: "Excellence is our title.", ar: "للتميّز عنوان." },
    established: 2018,
  },
  contact: {
    phone: "920024428",
    whatsapp: "+966 55 733 7555",
    whatsappLink: "https://wa.me/966557337555",
    email: "info@brightclinics.sa",
    address: { en: "Prince Faisal Bin Fahd Rd, Al Hada District, Al Khobar 34439 — branch in Al Ahsa (Mubarraz)", ar: "شارع الأمير فيصل بن فهد، حي الهدا، الخبر ٣٤٤٣٩ — وفرع في الأحساء (المبرز)" },
    hours: { en: "Sat – Thu · 9 AM – 11 PM · Friday after Asr prayer", ar: "السبت – الخميس · ٩ صباحاً – ١١ مساءً · الجمعة بعد صلاة العصر" },
    parking: { en: "Dedicated parking at both branches", ar: "مواقف خاصة في كلا الفرعين" },
  },
  seo: {
    title: { en: "Bright Specialized Clinics — Eastern Province, Saudi Arabia", ar: "عيادات برايت التخصصية — المنطقة الشرقية، السعودية" },
    description: {
      en: "Ten specialty departments under one roof — dermatology, plastic surgery, cosmetic dentistry, OB/GYN, paediatrics, bariatric, day surgery, laser, and more. Two branches: Al Khobar HQ + Al Ahsa.",
      ar: "عشرة أقسام تخصّصية تحت سقف واحد — الجلدية، التجميل، الأسنان، النساء والولادة، الأطفال، السمنة، الجراحة، الليزر، وأكثر. فرعان: المركز الرئيسي في الخبر + الأحساء.",
    },
    keywords: ["عيادات برايت", "Bright Specialized Clinics", "الخبر", "Al Khobar", "الأحساء", "Al Ahsa", "تجميل", "Eastern Province aesthetic", "cosmetic dentistry", "dermatology Khobar", "veneers Saudi", "filler Eastern Province"],
  },
  navigation: {
    items: [
      { key: "services", label: { en: "Departments", ar: "الأقسام" }, href: "/services" },
      { key: "doctors", label: { en: "Our Clinicians", ar: "أطبّاؤنا" }, href: "/doctors" },
      { key: "branches", label: { en: "Branches", ar: "الفروع" }, href: "/about" },
      { key: "trust", label: { en: "Trust", ar: "موثوقية" }, href: "/trust" },
      { key: "journal", label: { en: "Journal", ar: "المجلّة" }, href: "/journal" },
      { key: "contact", label: { en: "Contact", ar: "تواصل" }, href: "/booking" },
    ],
    bookCta: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" },
  },
  footer: {
    tagline: {
      en: "Ten specialty departments. Two branches. One promise: excellence as the only standard.",
      ar: "عشرة أقسام تخصّصية. فرعان. وعدٌ واحد: التميّز كمعيارٍ وحيد.",
    },
    chips: [
      { en: "MOH Licensed", ar: "مرخّصة من وزارة الصحة" },
      { en: "Saudi Arabia · Eastern Province", ar: "المملكة العربية السعودية · المنطقة الشرقية" },
    ],
    columns: [
      {
        title: { en: "Departments", ar: "الأقسام" },
        links: [
          { label: { en: "Dermatology & Laser", ar: "الجلدية والليزر" }, href: "/services" },
          { label: { en: "Plastic Surgery", ar: "جراحة التجميل" }, href: "/services" },
          { label: { en: "Cosmetic Dentistry", ar: "تجميل الأسنان" }, href: "/services" },
          { label: { en: "OB/GYN", ar: "النساء والولادة" }, href: "/services" },
          { label: { en: "Paediatrics", ar: "طب الأطفال" }, href: "/services" },
          { label: { en: "Bariatric Surgery", ar: "جراحة السمنة" }, href: "/services" },
        ],
      },
      {
        title: { en: "The Clinic", ar: "العيادة" },
        links: [
          { label: { en: "Branches", ar: "الفروع" }, href: "/about" },
          { label: { en: "Our Clinicians", ar: "أطبّاؤنا" }, href: "/doctors" },
          { label: { en: "Trust & Credentials", ar: "موثوقية وشهادات" }, href: "/trust" },
          { label: { en: "Journal", ar: "المجلّة" }, href: "/journal" },
        ],
      },
      {
        title: { en: "Reach Us", ar: "تواصل" },
        links: [
          { label: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" }, href: "/booking" },
          { label: { en: "Khobar HQ", ar: "الخبر — المركز الرئيسي" }, href: "/about" },
          { label: { en: "Al Ahsa branch", ar: "فرع الأحساء" }, href: "/about" },
          { label: { en: "Call 920024428", ar: "اتصل ٩٢٠٠٢٤٤٢٨" }, href: "tel:920024428" },
        ],
      },
    ],
    colophon: {
      en: "Bright Specialized Clinics — Al-Maha Bright Skin Medical Complex.",
      ar: "عيادات برايت التخصصية — مجمّع الماها برايت الطبي للبشرة.",
    },
  },

  // ══ HOMEPAGE SECTIONS ═══════════════════════════════════════════════════
  hero: {
    eyebrow: { en: "✦ Eastern Province · Since 2018", ar: "✦ المنطقة الشرقية · منذ ٢٠١٨" },
    headlinePartA: { en: "Excellence", ar: "للتميّز" },
    headlineEm: { en: "is our only title.", ar: "عنوانٌ واحد." },
    headlinePartB: { en: "", ar: "" },
    leadItalic: { en: "Ten specialty departments. Two branches. One standard.", ar: "عشرة أقسام تخصّصية. فرعان. ومعيارٌ واحد." },
    lead: {
      en: "Dermatology, plastic surgery, cosmetic dentistry, OB/GYN, paediatrics, bariatric and more — under one quiet roof in Al Khobar and Al Ahsa.",
      ar: "الجلدية وجراحة التجميل وتجميل الأسنان والنساء والولادة وطب الأطفال وجراحة السمنة — تحت سقف هادئٍ واحد في الخبر والأحساء.",
    },
    primaryCta: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" },
    secondaryCta: { en: "Our departments", ar: "أقسامنا" },
    pullQuote: { en: "\"They explained three options, then said the simplest one suited me best.\"", ar: "«شرحوا لي ثلاث خيارات، ثم قالوا إنّ الخيار الأبسط هو الأنسب لي.»" },
    pullQuoteAttribution: { en: "Patient · Khobar", ar: "مريضة · الخبر" },
    stats: [
      { value: { en: "10 departments", ar: "١٠ أقسام" }, label: { en: "Under one roof", ar: "تحت سقفٍ واحد" } },
      { value: { en: "4.4 ★", ar: "٤٫٤ ★" }, label: { en: "1,500+ patient reviews", ar: "أكثر من ١٬٥٠٠ تقييم" } },
      { value: { en: "2 branches", ar: "فرعان" }, label: { en: "Al Khobar · Al Ahsa", ar: "الخبر · الأحساء" } },
    ],
  },
  marqueeStrip: {
    line1: { en: "Dermatology · Plastic Surgery · Cosmetic Dentistry · OB/GYN · Paediatrics · Bariatric · Day Surgery · Laser", ar: "الجلدية · التجميل · الأسنان · النساء والولادة · الأطفال · السمنة · الجراحة · الليزر" },
    line2: { en: "Al Khobar HQ · Al Ahsa branch · One hotline 920024428", ar: "المركز الرئيسي في الخبر · فرع الأحساء · الخط الموحّد ٩٢٠٠٢٤٤٢٨" },
  },
  founder: {
    chapterRoman: "II",
    chapterTitle: { en: "Leadership", ar: "القيادة" },
    headlinePartA: { en: "An operation built", ar: "مؤسّسةٌ بُنيت" },
    headlineEm: { en: "around the patient.", ar: "حول المريضة." },
    paragraphs: [
      {
        en: "Bright Specialized Clinics opened in Al Khobar with a single principle: treat every patient like the only patient. From a small dermatology practice, we grew into ten specialty departments — dermatology, plastic surgery, cosmetic dentistry, OB/GYN, paediatrics, bariatric, day surgery, laser, interventional radiology, and psychiatry — all in one place.",
        ar: "افتُتحت عيادات برايت التخصصية في الخبر بمبدأٍ واحد: عاملي كل مريضة كأنّها المريضة الوحيدة. من ممارسة جلدية صغيرة، نمونا إلى عشرة أقسام تخصّصية — الجلدية، التجميل، الأسنان، النساء والولادة، الأطفال، السمنة، الجراحة اليومية، الليزر، الأشعّة التداخلية، والطب النفسي — كلّها في مكانٍ واحد.",
      },
      {
        en: "In 2025 we opened a second branch in Al Ahsa to serve the families of Mubarraz, with the same standard. The promise hasn't changed since day one: excellence is our only title.",
        ar: "وفي عام ٢٠٢٥ افتتحنا فرعنا الثاني في الأحساء لخدمة عوائل المبرّز بنفس المعيار. الوعد لم يتغيّر منذ اليوم الأول: للتميّز عنوانٌ واحد.",
      },
    ],
    name: "Mr. Manea El Manea",
    role: { en: "General Manager · Bright Specialized Clinics", ar: "المدير العام · عيادات برايت التخصصية" },
    cta: { en: "About our clinic", ar: "عن العيادة" },
  },
  services: {
    eyebrow: { en: "✦ Ten departments. One promise.", ar: "✦ عشرة أقسام. وعدٌ واحد." },
    headlinePartA: { en: "Everything you need,", ar: "كلّ ما تحتاجينه،" },
    headlineEm: { en: "under one roof.", ar: "في مكانٍ واحد." },
    description: {
      en: "Ten integrated specialty departments led by named clinicians. From dermatology to maxillofacial surgery to women's health — your visit covers the family.",
      ar: "عشرة أقسام تخصّصية متكاملة يقودها أطبّاء بأسمائهم. من الجلدية إلى جراحة الفم والوجه والفكين إلى صحّة المرأة — زيارتكِ تشمل العائلة.",
    },
    items: [
      { num: "01", name: { en: "Dermatology & Laser", ar: "الجلدية والليزر" }, description: { en: "Medical and cosmetic dermatology — acne, pigmentation, vascular, laser hair removal, anti-aging.", ar: "الجلدية الطبّية والتجميلية — حبّ الشباب، التصبّغ، الأوعية، إزالة الشعر بالليزر، مكافحة الشيخوخة." }, variant: "terracotta" },
      { num: "02", name: { en: "Plastic & Aesthetic Surgery", ar: "جراحة التجميل" }, description: { en: "Maxillofacial, body contouring, and aesthetic surgical procedures — by board-certified surgeons.", ar: "جراحة الفم والوجه والفكين، نحت الجسم، والإجراءات التجميلية الجراحية — على يد جرّاحين معتمَدين." }, variant: "sand" },
      { num: "03", name: { en: "Cosmetic Dentistry", ar: "تجميل الأسنان" }, description: { en: "Smile design, veneers, Hollywood smile, whitening — restoring teeth and confidence together.", ar: "تصميم الابتسامة، الفينير، ابتسامة هوليوود، التبييض — استعادة الأسنان والثقة معاً." }, variant: "sage" },
    ],
  },
  tailoredCare: {
    chapterRoman: "III",
    chapterTitle: { en: "The care", ar: "الرعاية" },
    headlinePartA: { en: "Care held to a", ar: "رعاية بمعيارٍ" },
    headlineEm: { en: "standard, not a trend.", ar: "لم يتغيّر." },
    description: { en: "Every treatment we offer must be safe, effective, and beautiful. That rule has not changed since day one.", ar: "كل علاج نقدّمه يجب أن يكون آمناً، فعّالاً، وجميلاً. هذه القاعدة لم تتغيّر منذ اليوم الأول." },
    points: [
      { num: "I", label: { en: "Consultation with the relevant specialist", ar: "استشارة مع أخصّائي القسم المعني" } },
      { num: "II", label: { en: "A written plan, backed by diagnostics", ar: "خطّة مكتوبة، مدعومة بالتشخيص" } },
      { num: "III", label: { en: "Regular follow-up, never rushed", ar: "متابعة منتظمة، بلا استعجال" } },
      { num: "IV", label: { en: "Cross-department coordination when needed", ar: "تنسيق بين الأقسام عند اللزوم" } },
    ],
    cta: { en: "Learn how we work", ar: "تعرّفي على طريقتنا" },
    badge: { en: "How we work", ar: "كيف نعمل" },
  },
  beforeAfter: {
    chapterRoman: "IV",
    chapterTitle: { en: "Results", ar: "النتائج" },
    headlinePartA: { en: "Real results,", ar: "نتائج حقيقية،" },
    headlineEm: { en: "documented honestly.", ar: "موثَّقة بالصور." },
    description: { en: "A page of honest moments — how skin changes, and how people feel after. No filters, no grand promises.", ar: "صفحة من اللحظات الصادقة — كيف تتغيّر البشرة، وكيف يشعر الناس بعد ذلك. لا فلاتر ولا وعود." },
    cta: { en: "Browse the gallery", ar: "تصفّح المعرض" },
    beforeLabel: { en: "Before", ar: "قبل" },
    afterLabel: { en: "After · 8 wks", ar: "بعد · ٨ أسابيع" },
  },
  reviews: {
    eyebrow: { en: "★ 4.4 / 5 — 1,500+ verified reviews", ar: "★ ٤٫٤ / ٥ — أكثر من ١٬٥٠٠ تقييم موثَّق" },
    pullQuote: { en: "The trusted name across the Eastern Province.", ar: "الاسم الموثوق في المنطقة الشرقية." },
    items: [
      {
        quote: { en: "\"I came for one consultation and stayed for everything. They explained three options, then said the simplest one suited me best — no upsell, just honest care.\"", ar: "«أتيت لاستشارة واحدة وبقيت لكل شيء. شرحوا ثلاث خيارات، ثم قالوا إنّ الخيار الأبسط هو الأنسب — بلا بيع، رعاية صادقة فقط.»" },
        name: { en: "Patient · Khobar", ar: "مريضة · الخبر" },
        role: { en: "Filler · Dr. Marina Naddaf", ar: "فيلر · د. مارينا نداف" },
        variant: "terracotta",
      },
      {
        quote: { en: "\"My mother came with me to the first visit. By the third, she had booked her own. We're now a family of three patients here.\"", ar: "«أمّي أتت معي في الزيارة الأولى. وفي الثالثة، حجزت موعدها الخاص. أصبحنا الآن ثلاث مريضات من نفس العائلة.»" },
        name: { en: "Patient · Al Ahsa", ar: "مريضة · الأحساء" },
        role: { en: "Hydrafacial · Dr. Wafaa Saeed", ar: "هيدرافيشيال · د. وفاء سعيد" },
        variant: "sage",
      },
    ],
    cta: { en: "Read all reviews", ar: "اقرئي كل الآراء" },
  },
  team: {
    eyebrow: { en: "✦ Our clinicians", ar: "✦ أطبّاؤنا" },
    headlinePartA: { en: "Named clinicians.", ar: "أطبّاء بأسمائهم." },
    headlineEm: { en: "Verifiable credentials.", ar: "شهاداتٌ قابلة للتحقّق." },
    items: [
      { name: "Dr. Hassan Nazzal", tag: { en: "Maxillofacial Surgery · Jordanian Board + RCSI Fellowship", ar: "جراحة الفم والوجه · زمالة الكلية الملكية للجرّاحين أيرلندا" }, variant: "terracotta" },
      { name: "Dr. Marina Naddaf", tag: { en: "Senior Dermatology · AAD member since 2004", ar: "الجلدية · عضوة الأكاديمية الأمريكية للأمراض الجلدية" }, variant: "sand" },
      { name: "Dr. Wafaa Saeed", tag: { en: "Dermatology · Al Ahsa branch lead", ar: "الجلدية · رئيسة فرع الأحساء" }, variant: "sage" },
    ],
  },
  bookCta: {
    eyebrow: { en: "✦ Two branches. One number.", ar: "✦ فرعان. خطٌّ موحَّد." },
    headline: { en: "Reach us today.", ar: "تواصلي معنا اليوم." },
    description: { en: "Al Khobar HQ · Al Ahsa branch · Saturday – Thursday 9 AM – 11 PM · Friday after Asr. Same-day WhatsApp confirmation.", ar: "المركز الرئيسي في الخبر · فرع الأحساء · السبت – الخميس ٩ صباحاً – ١١ مساءً · الجمعة بعد العصر. تأكيد عبر واتساب في نفس اليوم." },
    primary: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" },
    secondary: { en: "Call 920024428", ar: "اتصلي ٩٢٠٠٢٤٤٢٨" },
  },
  faq: {
    eyebrow: { en: "✦ Frequent questions", ar: "✦ أسئلة متكرّرة" },
    headlinePartA: { en: "We've got", ar: "لدينا" },
    headlineEm: { en: "answers.", ar: "الإجابات." },
    description: { en: "Short answers to the questions we hear most. Don't find yours? Message us on WhatsApp.", ar: "إجابات قصيرة لأكثر الأسئلة تكراراً. لا تجدين سؤالك؟ راسلينا على واتساب." },
    cta: { en: "WhatsApp us", ar: "تواصل عبر واتساب" },
    items: [
      { q: { en: "What departments do you offer?", ar: "ما الأقسام التي تقدّمونها؟" }, a: { en: "Ten specialty departments under one roof: dermatology and laser, plastic and aesthetic surgery, cosmetic dentistry and maxillofacial, OB/GYN, paediatrics, bariatric surgery, day surgery, interventional radiology, psychiatry, and a dedicated laser center.", ar: "عشرة أقسام تخصّصية تحت سقف واحد: الجلدية والليزر، جراحة التجميل، الأسنان والفم والوجه، النساء والولادة، طب الأطفال، جراحة السمنة، الجراحة اليومية، الأشعّة التداخلية، الطب النفسي، ومركز ليزر متخصّص." } },
      { q: { en: "Which branches do you have?", ar: "ما هي فروعكم؟" }, a: { en: "Two confirmed branches in Saudi Arabia's Eastern Province: Al Khobar headquarters (Prince Faisal Bin Fahd Road, Al Hada district) and Al Ahsa branch (Khalid Ibn Al-Walid Street, Mubarraz).", ar: "فرعان مؤكّدان في المنطقة الشرقية بالسعودية: المركز الرئيسي في الخبر (شارع الأمير فيصل بن فهد، حي الهدا) وفرع الأحساء (شارع خالد بن الوليد، المبرّز)." } },
      { q: { en: "How do I book?", ar: "كيف أحجز؟" }, a: { en: "WhatsApp 0557337555, call our unified hotline 920024428, or use the booking form. Same-day confirmation on WhatsApp during business hours.", ar: "راسلينا على واتساب ٠٥٥٧٣٣٧٥٥٥، أو اتّصلي على الخط الموحّد ٩٢٠٠٢٤٤٢٨، أو استخدمي نموذج الحجز. التأكيد عبر واتساب في نفس اليوم خلال ساعات العمل." } },
      { q: { en: "What should I expect on my first visit?", ar: "ماذا أتوقّع في زيارتي الأولى؟" }, a: { en: "A consultation with the specialist of the relevant department. We listen first, run any needed diagnostics, then propose a written plan. No commitment to treatment on the first visit.", ar: "استشارة مع أخصّائي القسم المعني. نُصغي أوّلاً، نُجري التشخيص اللازم، ثم نقترح خطّة مكتوبة. لا التزام بالعلاج في الزيارة الأولى." } },
      { q: { en: "What are your hours?", ar: "ما هي ساعات العمل؟" }, a: { en: "Saturday – Thursday, 9 AM to 11 PM. Friday after Asr prayer for selected clinics. Prayer-time pauses respected.", ar: "السبت – الخميس، من ٩ صباحاً إلى ١١ مساءً. الجمعة بعد صلاة العصر لبعض العيادات. نحترم أوقات الصلاة." } },
      { q: { en: "Do you offer female-only sessions?", ar: "هل تقدّمون جلسات للسيدات فقط؟" }, a: { en: "Yes. Our team includes female specialists in dermatology, OB/GYN, and aesthetics. Request a female-only session at booking — WhatsApp 0557337555.", ar: "نعم. فريقنا يضمّ طبيبات متخصّصات في الجلدية والنساء والولادة والتجميل. اطلبي جلسة نسائية فقط عند الحجز — واتساب ٠٥٥٧٣٣٧٥٥٥." } },
      { q: { en: "Do you accept Tabby and Tamara?", ar: "هل تقبلون تابي وتمارا؟" }, a: { en: "Yes — both Tabby and Tamara are available for treatments within the SAMA SAR 10,000 BNPL cap. Mada, Visa, Mastercard, and Apple Pay also accepted.", ar: "نعم — تابي وتمارا متاحان للعلاجات ضمن سقف ١٠٬٠٠٠ ريال المعتمَد من ساما. كما نقبل مدى، فيزا، ماستركارد، وآبل باي." } },
    ],
  },
  journal: {
    eyebrow: { en: "✦ The Bright Journal", ar: "✦ مجلّة برايت" },
    headline: { en: "Notes from our clinicians.", ar: "مقالات من أطبّائنا." },
    description: { en: "Practical writing from our team on what works in dermatology, dental, and women's health — and what we'd choose for our own families.", ar: "كتابات عملية من فريقنا حول ما يعمل فعلاً في الجلدية وطبّ الأسنان وصحّة المرأة — وما نختاره لعائلاتنا نحن." },
    items: [
      { tag: { en: "Dermatology", ar: "جلدية" }, title: { en: "Eid prep without panic — a six-week glow plan", ar: "تجهيز العيد بدون قلق — خطّة إشراقة لستّة أسابيع" }, date: { en: "May 2026", ar: "مايو ٢٠٢٦" }, variant: "sand" },
      { tag: { en: "Dental", ar: "أسنان" }, title: { en: "When veneers are the right call (and when they're not)", ar: "متى يكون الفينير الخيار الصحيح (ومتى لا يكون)" }, date: { en: "April 2026", ar: "أبريل ٢٠٢٦" }, variant: "terracotta" },
      { tag: { en: "Women's Health", ar: "صحّة المرأة" }, title: { en: "Three questions to ask your OB/GYN this year", ar: "ثلاثة أسئلة لطبيبة النساء والولادة في هذا العام" }, date: { en: "March 2026", ar: "مارس ٢٠٢٦" }, variant: "sage" },
    ],
  },

  // ══ INNER PAGES ═══════════════════════════════════════════════════════════
  departmentsPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Departments", ar: "✦ الأقسام" },
      title: { en: "Ten specialties,", ar: "عشرة تخصّصات،" },
      titleEm: { en: "two branches.", ar: "فرعان." },
      sub: { en: "A full index of what Bright Specialized Clinics offers across the Eastern Province — Al Khobar HQ and Al Ahsa branch, since 2018.", ar: "فهرس كامل لما تقدّمه عيادات برايت التخصصية عبر المنطقة الشرقية — المركز الرئيسي بالخبر وفرع الأحساء، منذ ٢٠١٨." },
    },
    items: [
      {
        num: "I",
        name: { en: "Department I — Dermatology", ar: "القسم الأوّل — الجلدية" },
        sub: { en: "Skin & Laser", ar: "البشرة والليزر" },
        blurb: { en: "Two decades of dermatology expertise. Cosmetic and medical, under specialist supervision.", ar: "عقدان من الخبرة الجلدية. تجميلية وطبّية، تحت إشراف أخصّائيين." },
        treatments: [
          { en: "Botox & Dermal Fillers", ar: "البوتوكس والفيلر" },
          { en: "Laser Hair Removal", ar: "إزالة الشعر بالليزر" },
          { en: "Laser Tattoo Removal", ar: "إزالة الوشم بالليزر" },
          { en: "Skin Rejuvenation (IPL & Fraxel)", ar: "تجديد البشرة (IPL و Fraxel)" },
          { en: "Body Contouring (RF / Accent)", ar: "نحت الجسم (RF / Accent)" },
          { en: "Stretch Mark Reduction", ar: "تقليل علامات التمدّد" },
          { en: "Mesotherapy", ar: "الميزوثيرابي" },
          { en: "Acne Therapy", ar: "علاج حب الشباب" },
          { en: "Brown Spot Removal", ar: "إزالة البقع البنّية" },
          { en: "Microdermabrasion", ar: "التقشير الدقيق" },
          { en: "Chemical Peeling", ar: "التقشير الكيميائي" },
          { en: "Skin Cancer Screening", ar: "فحص سرطان الجلد" },
        ],
        pricing: { en: "Contact for consultation", ar: "تواصل للاستشارة" },
        variant: "terracotta",
      },
      {
        num: "II",
        name: { en: "Department II — Cosmetic Dentistry", ar: "القسم الثاني — الأسنان التجميلية" },
        sub: { en: "The smile you deserve", ar: "الابتسامة التي تستحقّينها" },
        blurb: { en: "The smile you deserve. Crafted in one of the region's leading dental practices.", ar: "الابتسامة التي تستحقّينها. مصنوعة في إحدى أرقى ممارسات الأسنان في المنطقة." },
        treatments: [
          { en: "Hollywood Smile", ar: "ابتسامة هوليوود" },
          { en: "Veneers & Lumineers", ar: "الفينير واللومينير" },
          { en: "Crowns & Bridges", ar: "التيجان والجسور" },
          { en: "Dental Implants", ar: "زراعة الأسنان" },
          { en: "Teeth Whitening (chair-side, home, laser)", ar: "تبييض الأسنان (في العيادة، منزلي، ليزر)" },
          { en: "Laser Gingival Whitening", ar: "تبييض اللثة بالليزر" },
          { en: "Composite Fillings", ar: "حشوات تجميلية" },
          { en: "Root Canal", ar: "علاج عصب الأسنان" },
          { en: "Periodontics", ar: "علاج اللثة" },
          { en: "Paediatric Dentistry", ar: "طبّ أسنان الأطفال" },
        ],
        pricing: { en: "Contact for consultation", ar: "تواصل للاستشارة" },
        variant: "sand",
      },
      {
        num: "III",
        name: { en: "Department III — Medspa", ar: "القسم الثالث — المنتجع الصحي" },
        sub: { en: "Wellness, Beauty, Balance", ar: "العافية، الجمال، التوازن" },
        blurb: { en: "Wellness, beauty, balance. Sixteen facial protocols, twelve massage modalities, full medspa packages.", ar: "عافية، جمال، توازن. ستة عشر بروتوكول وجه، اثنا عشر أسلوب تدليك، باقات منتجع صحي كاملة." },
        treatments: [
          { en: "16 Facial Protocols (Acne, Oxygen, Bridal, Anti-aging, Whitening, VIP)", ar: "١٦ بروتوكولاً للوجه (حب الشباب، أكسجين، عرائس، مكافحة الشيخوخة، تبييض، VIP)" },
          { en: "4 Eye Treatments", ar: "٤ علاجات للعينين" },
          { en: "13 Massage Modalities (Thai, Hot Stone, Swedish, Aromatherapy, Deep Tissue, Pregnancy)", ar: "١٣ أسلوب تدليك (تايلندي، أحجار ساخنة، سويدي، عطري، عميق، حوامل)" },
          { en: "9 Body Scrubs", ar: "٩ تقشيرات للجسم" },
          { en: "Hand & Foot Care", ar: "العناية بالأيدي والأقدام" },
          { en: "Detox Programs", ar: "برامج إزالة السموم" },
          { en: "Hydrotherapy", ar: "العلاج المائي" },
          { en: "Oxygen Therapy", ar: "العلاج بالأكسجين" },
          { en: "Postnatal Programs", ar: "برامج ما بعد الولادة" },
          { en: "Bridal Packages", ar: "باقات العرائس" },
        ],
        pricing: { en: "Contact for consultation", ar: "تواصل للاستشارة" },
        variant: "sage",
      },
      {
        num: "IV",
        name: { en: "Department IV — Lab & Skin Analysis", ar: "القسم الرابع — المختبر وتحليل البشرة" },
        sub: { en: "Diagnostic precision", ar: "دقّة تشخيصية" },
        blurb: { en: "Science-backed plans. Diagnostic precision before any treatment.", ar: "خطط مدعومة بالعلم. دقّة تشخيصية قبل أي علاج." },
        treatments: [
          { en: "Skin Imaging", ar: "تصوير البشرة" },
          { en: "Diagnostic Testing", ar: "الفحوصات التشخيصية" },
          { en: "Custom Treatment Design", ar: "تصميم العلاج المخصّص" },
          { en: "Photo-progress Tracking", ar: "متابعة التقدّم بالصور" },
        ],
        pricing: { en: "Included with consultation", ar: "مشمول مع الاستشارة" },
        variant: "dark",
      },
    ],
    equipment: [
      { name: "ALMA Prime / Accent", description: { en: "RF + Ultrasound body contouring", ar: "نحت الجسم بترددات الراديو والموجات فوق الصوتية" } },
      { name: "Fraxel Laser", description: { en: "FDA-cleared skin resurfacing, all skin types", ar: "إعادة تسطيح البشرة، معتمد من FDA، لكل أنواع البشرة" } },
      { name: "Q-Switch ND:YAG", description: { en: "Tattoo removal", ar: "إزالة الوشم" } },
      { name: "IPL Ellipse", description: { en: "Vascular & pigmentation", ar: "الأوعية الدمويّة والتصبّغ" } },
      { name: "Zoom 3 Advanced Power", description: { en: "Chair-side teeth whitening", ar: "تبييض الأسنان في العيادة" } },
    ],
    bookCta: {
      headline: { en: "Not sure which department fits?", ar: "غير متأكّدة أي قسم يناسبك؟" },
      description: { en: "WhatsApp us — we will help you book with the right specialist.", ar: "راسلينا على واتساب — نُساعدك على اختيار الموعد المناسب مع الأخصّائي الصحيح." },
    },
  },

  doctorsPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Our Clinicians", ar: "✦ أطبّاؤنا" },
      title: { en: "Named clinicians.", ar: "أطبّاءٌ بأسمائهم." },
      titleEm: { en: "Verifiable credentials.", ar: "شهاداتٌ قابلة للتحقّق." },
      sub: { en: "Eight specialist physicians and a full medical team across two branches. Every name listed here is publicly verifiable.", ar: "ثمانية أطبّاء تخصّصيين وفريق طبّي كامل عبر فرعين. كل اسم هنا قابل للتحقّق علناً." },
    },
    items: [
      {
        name: "Dr. Hassan Nazzal",
        role: { en: "Maxillofacial Surgery · Senior partner", ar: "جراحة الفم والوجه والفكين · شريك أول" },
        bio: { en: "Jordanian Board–certified maxillofacial surgeon with Fellowship from the Royal College of Surgeons in Ireland. Featured as the senior partner of the Khobar HQ.", ar: "جرّاح فم ووجه وفكّين معتمَد من المجلس الأردني، حاصل على زمالة الكلية الملكية للجرّاحين في أيرلندا. الشريك الأوّل في المركز الرئيسي بالخبر." },
        credentials: ["MD · Jordanian Board of Maxillofacial Surgery", "FRCS · Royal College of Surgeons in Ireland", "Senior partner · Bright Specialized Clinics"],
        variant: "terracotta",
      },
      {
        name: "Dr. Marina Naddaf",
        role: { en: "Senior Dermatology · Laser specialist", ar: "الجلدية · أخصّائية ليزر" },
        bio: { en: "American Academy of Dermatology member since 2004. Canadian Laser Diploma. Twenty-five years of patient care across the Gulf — quiet results, never theatrical.", ar: "عضوة الأكاديمية الأمريكية للأمراض الجلدية منذ ٢٠٠٤. دبلوم الليزر الكندي. خمسة وعشرون عاماً من العناية بالمريضات في الخليج — نتائج هادئة، بلا مبالغة." },
        credentials: ["MD · MSc Dermatology", "AAD member since 2004", "Canadian Laser Diploma", "25+ years in practice"],
        variant: "sand",
      },
      {
        name: "Dr. Wafaa Saeed",
        role: { en: "Dermatology · Al Ahsa branch lead", ar: "الجلدية · رئيسة فرع الأحساء" },
        bio: { en: "Egyptian Fellowship in dermatology. Leads the Al Ahsa branch as its face and primary clinician. Specialises in full-face aesthetic protocols.", ar: "زمالة مصرية في الأمراض الجلدية. تقود فرع الأحساء كوجهه الأوّل وطبيبته الرئيسية. متخصّصة في بروتوكولات تجميل الوجه الكامل." },
        credentials: ["MD · Egyptian Fellowship Dermatology", "Al Ahsa branch lead since 2025"],
        variant: "sage",
      },
      {
        name: "Dr. Doaa Goda",
        role: { en: "Cosmetic Aesthetics · Injectables", ar: "تجميل · حقن" },
        bio: { en: "Specialist in fillers, Botox, and body cosmetic procedures. Patient-favourite for natural, undetectable results.", ar: "متخصّصة في الفيلر والبوتوكس والإجراءات التجميلية للجسم. مفضّلة المريضات للنتائج الطبيعية غير الملحوظة." },
        credentials: ["MD · Cosmetic Aesthetics", "Filler & Botox specialist"],
        variant: "terracotta",
      },
      {
        name: "Dr. Nadeen Kabboura",
        role: { en: "OB/GYN · Intimate health", ar: "النساء والولادة · الصحّة الحميمة" },
        bio: { en: "Consultant in gynecology and intimate health. Provides discreet, women-only consultations.", ar: "استشاريّة في النساء والولادة والصحّة الحميمة. تقدّم استشارات نسائية بسرية تامّة." },
        credentials: ["MD · OB/GYN Consultant"],
        variant: "sand",
      },
      {
        name: "Dr. Amirah Mohannadi",
        role: { en: "Aesthetic injectables · Lip work", ar: "حقن تجميلية · شفاه" },
        bio: { en: "Specialist in lip filler artistry. Known for restrained volumes that respect natural facial proportions.", ar: "متخصّصة في فيلر الشفاه. مشهورة بكميّات معتدلة تحترم تناسق الوجه الطبيعي." },
        credentials: ["MD · Aesthetic Medicine"],
        variant: "sage",
      },
    ],
  },

  aboutPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ About Bright", ar: "✦ عن برايت" },
      title: { en: "Two branches.", ar: "فرعان." },
      titleEm: { en: "One standard.", ar: "ومعيارٌ واحد." },
      sub: { en: "Bright Specialized Clinics opened in Al Khobar in 2018. Today we serve Eastern Province families across ten specialty departments and two branches — Al Khobar HQ and Al Ahsa.", ar: "افتُتحت عيادات برايت التخصصية في الخبر عام ٢٠١٨. اليوم نخدم عوائل المنطقة الشرقية عبر عشرة أقسام تخصّصية وفرعين — المركز الرئيسي بالخبر والأحساء." },
    },
    chapters: [
      { n: "I", title: { en: "The Beginning", ar: "البداية" }, body: { en: "Our founder opened Atelier with a single conviction: that beauty should never require surgery to be real. What started as one dermatology room would become one of the region's leading anti-aging institutions.", ar: "فتحت مؤسِّستنا العيادة بقناعةٍ واحدة: أنّ الجمال يجب ألّا يحتاج إلى جراحة ليكون حقيقياً. ما بدأ كغرفة جلدية واحدة سيصبح مؤسّسة رائدة في علاج التقدّم في السنّ." }, variant: "sand" },
      { n: "II", title: { en: "The Evolution", ar: "التطوّر" }, body: { en: "Over the years, the clinic grew from a single specialty into three medical departments — Dermatology, Cosmetic Dentistry, and Medspa — supported by an in-house Lab. The philosophy never changed. Every treatment must be safe, effective, and beautiful.", ar: "على مدى السنوات، نمت العيادة من تخصّص واحد إلى ثلاثة أقسام طبّية — الجلدية، والأسنان التجميلية، والمنتجع الصحي — مدعومة بمختبر داخلي. لم تتغيّر الفلسفة أبداً." }, variant: "terracotta" },
      { n: "III", title: { en: "The Team", ar: "الفريق" }, body: { en: "With decades of combined experience, our team is led by specialist physicians, supported by internationally trained therapists, registered nurses, and certified beauticians.", ar: "بخبرة مجتمعة على مدى عقود، يقود فريقنا أطبّاء أخصّائيون، يدعمهم معالجون مدرَّبون دولياً، وممرّضات مسجَّلات، وأخصّائيو تجميل معتمَدون." }, variant: "sage" },
      { n: "IV", title: { en: "The Promise", ar: "الوعد" }, body: { en: "Beauty Without Surgery. This is not a slogan. It is the standard we have held since opening — and the promise we make to every patient who walks through our doors.", ar: "الجمال بدون جراحة. هذا ليس شعاراً. إنّه المعيار الذي نلتزم به منذ الافتتاح — والوعد الذي نقدّمه لكل مريضةٍ تدخل أبوابنا." }, variant: "dark" },
    ],
    commitments: [
      { n: "I", title: { en: "Heritage", ar: "الإرث" }, description: { en: "Years of standards, never compromised.", ar: "سنوات من المعايير، لم تتنازل أبداً." } },
      { n: "II", title: { en: "Expertise", ar: "الخبرة" }, description: { en: "Specialists, not generalists. Every department led by qualified physicians.", ar: "أخصّائيون، لا أطبّاء عامّون. كل قسم يقوده طبيب مؤهَّل." } },
      { n: "III", title: { en: "Discretion", ar: "التحفّظ" }, description: { en: "A private experience, premium location, no theater.", ar: "تجربة خاصّة، موقع متميّز، بلا استعراض." } },
      { n: "IV", title: { en: "Results", ar: "النتائج" }, description: { en: "Safe, effective, visible — measured against you, not against trends.", ar: "آمنة، فعّالة، مرئيّة — تُقاس بكِ، لا بالموضة." } },
    ],
    location: {
      eyebrow: { en: "✦ Visit", ar: "✦ زورونا" },
      headlinePartA: { en: "Two branches.", ar: "فرعان." },
      headlineEm: { en: "Same standard.", ar: "نفس المعيار." },
      description: { en: "Khobar HQ — Prince Faisal Bin Fahd Rd, Al Hada district (opposite Toyota agency), Al Khobar 34439. Al Ahsa branch — Khalid Ibn Al-Walid Street, Mubarraz. Unified hotline 920024428. Same-day WhatsApp confirmation on 0557337555.", ar: "المركز الرئيسي بالخبر — شارع الأمير فيصل بن فهد، حي الهدا (مقابل وكالة تويوتا)، الخبر ٣٤٤٣٩. فرع الأحساء — شارع خالد بن الوليد، المبرّز. الخط الموحّد ٩٢٠٠٢٤٤٢٨. تأكيد عبر واتساب في نفس اليوم على ٠٥٥٧٣٣٧٥٥٥." },
    },
  },

  galleryPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Before & After", ar: "✦ قبل وبعد" },
      title: { en: "Moments", ar: "لحظات" },
      titleEm: { en: "of honest change.", ar: "صادقة." },
      sub: { en: "No filters, no hype. Every case is shared with patient consent — every result verifiable.", ar: "لا فلاتر، لا مبالغة. كل حالة موافق عليها من المريض، وكل نتيجة قابلة للتحقّق." },
    },
    categories: [
      { id: "all", label: { en: "All", ar: "الكل" } },
      { id: "skin", label: { en: "Skin", ar: "البشرة" } },
      { id: "body", label: { en: "Body", ar: "الجسم" } },
      { id: "laser", label: { en: "Laser", ar: "الليزر" } },
      { id: "injectables", label: { en: "Injectables", ar: "الحقن" } },
    ],
    cases: [
      { id: 1, cat: "skin", treatment: { en: "Skin rejuvenation", ar: "تجديد البشرة" }, weeks: 8, before: "sand", after: "terracotta", name: "Case 001" },
      { id: 2, cat: "laser", treatment: { en: "Hair removal", ar: "إزالة الشعر" }, weeks: 12, before: "sage", after: "sand", name: "Case 012" },
      { id: 3, cat: "injectables", treatment: { en: "Lip fillers", ar: "فيلر الشفاه" }, weeks: 2, before: "terracotta", after: "sand", name: "Case 023" },
      { id: 4, cat: "body", treatment: { en: "Waist contouring", ar: "نحت الخصر" }, weeks: 16, before: "dark", after: "terracotta", name: "Case 041" },
      { id: 5, cat: "skin", treatment: { en: "Acne treatment", ar: "علاج حب الشباب" }, weeks: 10, before: "sand", after: "sage", name: "Case 055" },
      { id: 6, cat: "laser", treatment: { en: "Pigmentation", ar: "إزالة التصبّغ" }, weeks: 6, before: "terracotta", after: "sand", name: "Case 067" },
    ],
    disclaimer: {
      en: "Results vary by person. Images shared with written consent.",
      ar: "النتائج تختلف من شخص لآخر. الصور مشاركة بموافقة كتابية.",
    },
  },

  reviewsPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Reviews", ar: "✦ الآراء" },
      title: { en: "Their words,", ar: "كلماتهم،" },
      titleEm: { en: "not ours.", ar: "لا كلماتنا." },
      sub: { en: "Selections from Google and firsthand experience. We chose only honesty.", ar: "مقتطفات من غوغل وتجارب حقيقية. لم نختَر سوى الحقيقة." },
    },
    rating: "4.9",
    reviewCount: { en: "From 324 verified reviews", ar: "من ٣٢٤ تقييماً" },
    items: [
      { shortQuote: { en: "\"First clinician who actually listens.\"", ar: "«أوّل طبيبة تُصغي إليّ فعلاً.»" }, longQuote: { en: "A quiet room, a handwritten plan, and quiet results too. I don't feel like a number anymore.", ar: "غرفة هادئة، وخطّة مكتوبة بخطّ اليد، ونتائج هادئة أيضاً. لم أعد أشعر بأنني رقم." }, name: "Sara M.", date: { en: "Feb 2026", ar: "فبراير ٢٠٢٦" }, variant: "terracotta", stars: 5 },
      { shortQuote: { en: "\"A rare kind of place.\"", ar: "«مكان نادر.»" }, longQuote: { en: "No selling, no pressure. She explained three options, then said the simplest one suited me best.", ar: "لا بيع، لا ضغط. الطبيبة شرحت ثلاث خيارات، ثم قالت إن الخيار الأبسط هو الأنسب لي." }, name: "Omar L.", date: { en: "Jan 2026", ar: "يناير ٢٠٢٦" }, variant: "sage", stars: 5 },
      { shortQuote: { en: "\"The last stop on a long search.\"", ar: "«الأخيرة في رحلة طويلة.»" }, longQuote: { en: "I tried four clinics before I found this one. The difference isn't the machines — it's the conversation.", ar: "جرّبت أربع عيادات قبل أن أجدها. الفرق ليس في الأجهزة، بل في الكلام." }, name: "Yasmine K.", date: { en: "Dec 2025", ar: "ديسمبر ٢٠٢٥" }, variant: "sand", stars: 5 },
      { shortQuote: { en: "\"The plan was written in my own language.\"", ar: "«الخطّة كانت مكتوبة بلغتي.»" }, longQuote: { en: "No jargon. Just words. That's all I need from an aesthetic doctor.", ar: "لا مصطلحات طبّية. كلمات فقط. هذا كل ما أحتاجه من طبيبة تجميل." }, name: "Karim B.", date: { en: "Nov 2025", ar: "نوفمبر ٢٠٢٥" }, variant: "terracotta", stars: 5 },
      { shortQuote: { en: "\"Three years with them.\"", ar: "«ثلاث سنوات معهم.»" }, longQuote: { en: "Started with one session. Now it's monthly. Can't imagine going anywhere else.", ar: "بدأت بجلسة واحدة. اليوم أذهب شهرياً. لا أتخيّل العودة لغيرهم." }, name: "Leila M.", date: { en: "Nov 2025", ar: "نوفمبر ٢٠٢٥" }, variant: "sage", stars: 5 },
      { shortQuote: { en: "\"Results without drama.\"", ar: "«نتائج بلا دراما.»" }, longQuote: { en: "Nobody noticed I'd done anything. They just said I looked rested. That's the whole point.", ar: "لم يلاحظ أحد أنني فعلت شيئاً. فقط قالوا إنّي أبدو مرتاحة. هذا هو الهدف." }, name: "Amina S.", date: { en: "Oct 2025", ar: "أكتوبر ٢٠٢٥" }, variant: "sand", stars: 5 },
    ],
  },

  journalPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Journal", ar: "✦ المجلّة" },
      title: { en: "Essays", ar: "مقالات" },
      titleEm: { en: "from the clinic.", ar: "من العيادة." },
      sub: { en: "Long-form writing on care, beauty, and science. A new piece every two weeks.", ar: "كتابات طويلة عن الرعاية، والجمال، والعلم. نشر جديد كل أسبوعين." },
    },
    featured: {
      tag: { en: "Featured essay", ar: "مقال مميّز" },
      title: { en: "What does listening look like in a treatment room?", ar: "ما الذي يبدو عليه الإصغاء في غرفة علاج؟" },
      excerpt: { en: "We've spent years writing our notes by hand. We explain why we won't stop.", ar: "قضينا سنوات نكتب ملاحظاتنا بخطّ اليد. نشرح لماذا لن نتوقّف." },
      author: "Dr. [Name]",
      date: { en: "17 March 2026", ar: "١٧ مارس ٢٠٢٦" },
      variant: "terracotta",
    },
    posts: [
      { tag: { en: "Practice", ar: "ممارسة" }, title: { en: "The science behind laser hair removal", ar: "العلم خلف إزالة الشعر بالليزر" }, author: "Dr. [Name]", date: { en: "10 Mar", ar: "١٠ مارس" }, variant: "sand" },
      { tag: { en: "Beauty", ar: "جمال" }, title: { en: "Five benefits of skin rejuvenation", ar: "خمس فوائد لتجديد البشرة" }, author: "Dr. [Name]", date: { en: "03 Mar", ar: "٠٣ مارس" }, variant: "sage" },
      { tag: { en: "Research", ar: "أبحاث" }, title: { en: "Understanding acne treatment", ar: "فهم علاج حب الشباب" }, author: "Dr. [Name]", date: { en: "22 Feb", ar: "٢٢ فبراير" }, variant: "terracotta" },
      { tag: { en: "Essays", ar: "مقالات" }, title: { en: "On the difference between care and service", ar: "عن الفرق بين الرعاية والخدمة" }, author: "Atelier Clinic", date: { en: "14 Feb", ar: "١٤ فبراير" }, variant: "sand" },
      { tag: { en: "Practice", ar: "ممارسة" }, title: { en: "When to say no to a patient", ar: "متى تقول «لا» لمريض" }, author: "Dr. [Name]", date: { en: "06 Feb", ar: "٠٦ فبراير" }, variant: "dark" },
      { tag: { en: "Research", ar: "أبحاث" }, title: { en: "Fillers — what's proven and what's myth", ar: "الفيلر: ما المثبت وما الأسطورة" }, author: "Dr. [Name]", date: { en: "28 Jan", ar: "٢٨ يناير" }, variant: "sage" },
    ],
    newsletter: {
      headline: { en: "A letter, once a month.", ar: "رسائل، مرة كل شهر." },
      description: { en: "No promotions. Just what we've written and what we've been reading.", ar: "لا إعلانات. فقط ما كتبناه وما قرأناه." },
      placeholder: { en: "your@email.com", ar: "بريدك الإلكتروني" },
      cta: { en: "Subscribe", ar: "اشترك" },
    },
  },

  bookingPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Book", ar: "✦ احجز" },
      title: { en: "Book a visit,", ar: "احجز" },
      titleEm: { en: "or write to us.", ar: "أو اكتب لنا." },
      sub: { en: "Three short steps. We confirm by SMS right away.", ar: "ثلاث خطوات قصيرة. نرسل التأكيد في الحال عبر رسالة نصّية." },
    },
    services: [
      { id: "consult", name: { en: "Free consultation", ar: "استشارة مجانية" }, duration: { en: "1 hr · free", ar: "ساعة · مجانية" } },
      { id: "botox", name: { en: "Botox & fillers", ar: "بوتوكس وفيلر" }, duration: { en: "45 min", ar: "٤٥ دقيقة" } },
      { id: "laser", name: { en: "Laser", ar: "ليزر" }, duration: { en: "30–60 min", ar: "٣٠-٦٠ دقيقة" } },
      { id: "skin", name: { en: "Skin treatment", ar: "علاج البشرة" }, duration: { en: "1 hr", ar: "ساعة" } },
      { id: "body", name: { en: "Body contouring", ar: "نحت الجسم" }, duration: { en: "1 hr", ar: "ساعة" } },
      { id: "acne", name: { en: "Acne treatment", ar: "حب الشباب" }, duration: { en: "45 min", ar: "٤٥ دقيقة" } },
    ],
    slots: [
      "Tue · Apr 28 · 10:00",
      "Wed · Apr 29 · 14:30",
      "Thu · Apr 30 · 09:00",
      "Sat · May 02 · 16:00",
      "Mon · May 04 · 11:00",
      "Tue · May 05 · 15:30",
    ],
    steps: [
      { choose: { en: "Step 1 of 3 · Choose a treatment", ar: "خطوة ١ من ٣ · اختَر العلاج" }, when: { en: "Step 2 of 3 · Choose a time", ar: "خطوة ٢ من ٣ · اختَر الوقت" }, details: { en: "Step 3 of 3 · Your details", ar: "خطوة ٣ من ٣ · تفاصيلك" }, confirmed: { en: "Confirmed", ar: "تمّ التأكيد" } },
    ],
    labels: {
      name: { en: "Name", ar: "الاسم" },
      phone: { en: "Phone", ar: "الهاتف" },
      email: { en: "Email (optional)", ar: "البريد الإلكتروني (اختياري)" },
      note: { en: "Note (optional)", ar: "ملاحظة (اختياري)" },
      back: { en: "← Back", ar: "← رجوع" },
      continue: { en: "Continue →", ar: "متابعة →" },
      confirm: { en: "Confirm booking", ar: "تأكيد الحجز" },
      bookAnother: { en: "Book another visit", ar: "احجز موعداً آخر" },
      namePrompt: { en: "Your name", ar: "اسمك الكريم" },
      emailPrompt: { en: "you@example.com", ar: "you@example.com" },
      notePrompt: { en: "Anything you'd like us to know in advance.", ar: "أي شيء تريديننا أن نعرفه مسبقاً." },
    },
    confirmed: {
      title: { en: "You're on the calendar.", ar: "تمّ الحجز." },
      body: { en: "A short confirmation is on its way to your phone.", ar: "تأكيد قصير في طريقه إلى هاتفك." },
    },
    contact: {
      chapter: "II",
      title: { en: "Or reach us directly.", ar: "أو تواصل مباشرةً." },
      quote: { en: "\"Most patients reach us on WhatsApp. Messages are read the same day.\"", ar: "«معظم مرضانا يصلوننا عبر واتساب. الرسائل تُقرأ في نفس اليوم.»" },
    },
  },
};
