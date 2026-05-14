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
    items: { shortQuote: Bilingual; longQuote: Bilingual; name: string; date: Bilingual; variant: PortraitVariant; stars: number; lang?: "ar" | "en"; treatment?: Bilingual }[];
    disclaimer?: Bilingual;
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
    address: { en: "Prince Faisal Bin Fahd Rd, Al Hada District, Al Khobar 34439", ar: "شارع الأمير فيصل بن فهد، حي الهدا، الخبر ٣٤٤٣٩" },
    hours: { en: "Sat – Thu · 9 AM – 11 PM · Friday after Asr prayer", ar: "السبت – الخميس · ٩ صباحاً – ١١ مساءً · الجمعة بعد صلاة العصر" },
    parking: { en: "Dedicated patient parking on site", ar: "مواقف خاصة بالمراجعين داخل المجمّع" },
  },
  seo: {
    title: { en: "Bright Specialized Clinics — Al Khobar, Saudi Arabia", ar: "عيادات برايت التخصصية — الخبر، السعودية" },
    description: {
      en: "Ten specialty departments under one roof in Al Khobar — dermatology, plastic surgery, cosmetic dentistry, OB/GYN, paediatrics, bariatric, day surgery, laser, and more. On Prince Faisal Bin Fahd Road since 2018.",
      ar: "عشرة أقسام تخصّصية تحت سقفٍ واحدٍ في الخبر — الجلدية، التجميل، الأسنان، النساء والولادة، الأطفال، السمنة، الجراحة، الليزر، وأكثر. على شارع الأمير فيصل بن فهد منذ ٢٠١٨.",
    },
    keywords: ["عيادات برايت", "Bright Specialized Clinics", "الخبر", "Al Khobar", "الخبر الهدا", "عيادات الخبر", "تجميل الخبر", "Eastern Province aesthetic", "cosmetic dentistry Khobar", "dermatology Khobar", "veneers Khobar", "filler Khobar", "Prince Faisal Bin Fahd Khobar"],
  },
  navigation: {
    items: [
      { key: "services", label: { en: "Services", ar: "الخدمات" }, href: "/services" },
      { key: "doctors", label: { en: "Our Clinicians", ar: "أطبّاؤنا" }, href: "/doctors" },
      { key: "gallery", label: { en: "Before & After", ar: "قبل وبعد" }, href: "/gallery" },
      { key: "reviews", label: { en: "Reviews", ar: "الآراء" }, href: "/reviews" },
      { key: "journal", label: { en: "Journal", ar: "المجلّة" }, href: "/journal" },
      { key: "contact", label: { en: "Contact", ar: "تواصل" }, href: "/booking" },
    ],
    bookCta: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" },
  },
  footer: {
    tagline: {
      en: "Ten specialty departments. One quiet roof in Al Khobar. One promise: excellence as the only standard.",
      ar: "عشرة أقسام تخصّصية. سقفٌ هادئٌ واحد في الخبر. وعدٌ واحد: التميّز كمعيارٍ وحيد.",
    },
    chips: [
      { en: "MOH Licensed", ar: "مرخّصة من وزارة الصحة" },
      { en: "Al Khobar · Eastern Province", ar: "الخبر · المنطقة الشرقية" },
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
          { label: { en: "About", ar: "عن العيادة" }, href: "/about" },
          { label: { en: "Our Clinicians", ar: "أطبّاؤنا" }, href: "/doctors" },
          { label: { en: "Reviews & Trust", ar: "الآراء والموثوقية" }, href: "/reviews" },
          { label: { en: "Journal", ar: "المجلّة" }, href: "/journal" },
        ],
      },
      {
        title: { en: "Reach Us", ar: "تواصل" },
        links: [
          { label: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" }, href: "/booking" },
          { label: { en: "Visit us · Al Hada", ar: "زورونا · الهدا" }, href: "/about" },
          { label: { en: "Call 920024428", ar: "اتصل ٩٢٠٠٢٤٤٢٨" }, href: "tel:920024428" },
          { label: { en: "WhatsApp 0557337555", ar: "واتساب ٠٥٥٧٣٣٧٥٥٥" }, href: "https://wa.me/966557337555" },
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
    eyebrow: { en: "Bright Specialized Clinics · Al Khobar · Since 2018", ar: "عيادات برايت التخصصية · الخبر · منذ ٢٠١٨" },
    headlinePartA: { en: "Excellence,", ar: "للتميّز" },
    headlineEm: { en: "deliberated.", ar: "عنوانٌ واحد." },
    headlinePartB: { en: "", ar: "" },
    leadItalic: { en: "", ar: "" },
    lead: { en: "", ar: "" },
    primaryCta: { en: "Book on WhatsApp", ar: "احجزي عبر واتساب" },
    secondaryCta: { en: "Meet our clinicians", ar: "تعرّفي على أطبّائنا" },
    pullQuote: { en: "\"They explained three options, then said the simplest one suited me best.\"", ar: "«شرحوا لي ثلاث خيارات، ثم قالوا إنّ الخيار الأبسط هو الأنسب لي.»" },
    pullQuoteAttribution: { en: "Patient · Al Khobar", ar: "مريضة · الخبر" },
    stats: [
      { value: { en: "4.4 ★", ar: "٤٫٤ ★" }, label: { en: "1,500+ verified Google reviews", ar: "أكثر من ١٬٥٠٠ تقييم جوجل" } },
      { value: { en: "6 named", ar: "٦ بأسمائهم" }, label: { en: "Clinicians, verifiable credentials", ar: "أطبّاء بشهادات قابلة للتحقّق" } },
      { value: { en: "Women-only", ar: "نسائي فقط" }, label: { en: "Sessions on request", ar: "جلسات عند الطلب" } },
    ],
  },
  marqueeStrip: {
    line1: { en: "Dermatology · Plastic Surgery · Cosmetic Dentistry · OB/GYN · Paediatrics · Bariatric · Day Surgery · Laser", ar: "الجلدية · التجميل · الأسنان · النساء والولادة · الأطفال · السمنة · الجراحة · الليزر" },
    line2: { en: "Prince Faisal Bin Fahd Road · Al Hada · Al Khobar · Hotline 920024428", ar: "شارع الأمير فيصل بن فهد · الهدا · الخبر · الخط الموحّد ٩٢٠٠٢٤٤٢٨" },
  },
  founder: {
    chapterRoman: "II",
    chapterTitle: { en: "Leadership", ar: "القيادة" },
    headlinePartA: { en: "An operation built", ar: "مؤسّسةٌ بُنيت" },
    headlineEm: { en: "around the patient.", ar: "حول المريضة." },
    paragraphs: [
      {
        en: "Bright Specialized Clinics opened in Al Khobar with a single principle: treat every patient like the only patient. From a small dermatology practice on Prince Faisal Bin Fahd Road, we grew into ten specialty departments — dermatology, plastic surgery, cosmetic dentistry, OB/GYN, paediatrics, bariatric, day surgery, laser, interventional radiology, and psychiatry — all in one quiet building in Al Hada district.",
        ar: "افتُتحت عيادات برايت التخصصية في الخبر بمبدأٍ واحد: عاملي كل مريضة كأنّها المريضة الوحيدة. من ممارسة جلدية صغيرة على شارع الأمير فيصل بن فهد، نمونا إلى عشرة أقسام تخصّصية — الجلدية، التجميل، الأسنان، النساء والولادة، الأطفال، السمنة، الجراحة اليومية، الليزر، الأشعّة التداخلية، والطب النفسي — كلّها في مبنى هادئٍ واحد في حي الهدا.",
      },
      {
        en: "Since day one our promise has not changed: excellence is our only title. The same doctors who treated the first hundred patients still see patients today — and the same standard we set in 2018 is the standard we hold ourselves to in 2026.",
        ar: "منذ اليوم الأوّل لم يتغيّر الوعد: للتميّز عنوانٌ واحد. الأطبّاء الذين عالجوا أوّل مئة مريضة لا يزالون يستقبلون المريضات اليوم — والمعيار الذي وضعناه في ٢٠١٨ هو نفسه المعيار الذي نُحاسب أنفسنا عليه في ٢٠٢٦.",
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
    chapterTitle: { en: "The journey", ar: "الرحلة" },
    headlinePartA: { en: "Real change,", ar: "تغييرٌ حقيقي،" },
    headlineEm: { en: "documented with words and time.", ar: "موثَّق بالكلمات والزمن." },
    description: { en: "Saudi privacy by default — we publish the journey, not the face. Time-anchored testimonials from real patients at our Khobar clinic.", ar: "خصوصية سعودية كافتراضٍ أوّل — ننشر الرحلة، لا الوجه. شهاداتٌ موثَّقة بالزمن من مريضات حقيقيات في عيادتنا بالخبر." },
    cta: { en: "See the full gallery", ar: "اطّلعي على المعرض كاملاً" },
    beforeLabel: { en: "Before", ar: "قبل" },
    afterLabel: { en: "After · 8 weeks", ar: "بعد · ٨ أسابيع" },
  },
  reviews: {
    eyebrow: { en: "★ 4.4 / 5 — 1,500+ verified reviews", ar: "★ ٤٫٤ / ٥ — أكثر من ١٬٥٠٠ تقييم موثَّق" },
    pullQuote: { en: "The trusted name across the Eastern Province.", ar: "الاسم الموثوق في المنطقة الشرقية." },
    items: [
      {
        quote: { en: "They explained three options, then said the simplest one suited me best. No upsell, just honest care.", ar: "شرحوا لي ثلاث خيارات، ثم قالوا إنّ الخيار الأبسط هو الأنسب. بلا بيع، رعاية صادقة فقط." },
        name: { en: "Patient · Al Khobar", ar: "مريضة · الخبر" },
        role: { en: "Filler with Dr. Marina", ar: "فيلر مع د. مارينا" },
        variant: "terracotta",
      },
      {
        quote: { en: "My mother came with me to the first visit. By the third, she had booked her own — three departments in one day.", ar: "أمّي أتت معي في الزيارة الأولى. وفي الثالثة، حجزت موعدها الخاص — ثلاثة أقسام في يومٍ واحد." },
        name: { en: "Patient · Al Khobar", ar: "مريضة · الخبر" },
        role: { en: "Dental + Dermatology with Dr. Hassan", ar: "أسنان وجلدية مع د. حسن" },
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
      { name: "Dr. Doaa Goda", tag: { en: "Cosmetic & Aesthetic Dermatology · Filler · Botox", ar: "الجلدية التجميلية · فيلر · بوتوكس" }, variant: "sage" },
    ],
  },
  bookCta: {
    eyebrow: { en: "✦ One destination. One number.", ar: "✦ مكانٌ واحد. خطٌّ موحَّد." },
    headline: { en: "Reach us today.", ar: "تواصلي معنا اليوم." },
    description: { en: "Prince Faisal Bin Fahd Road · Al Hada · Al Khobar · Saturday – Thursday 9 AM – 11 PM · Friday after Asr. Same-day WhatsApp confirmation.", ar: "شارع الأمير فيصل بن فهد · الهدا · الخبر · السبت – الخميس ٩ صباحاً – ١١ مساءً · الجمعة بعد العصر. تأكيد عبر واتساب في نفس اليوم." },
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
      { q: { en: "Where are you located?", ar: "أين تقعون؟" }, a: { en: "Prince Faisal Bin Fahd Road, Al Hada district, Al Khobar 34439 — opposite Toyota agency. Dedicated patient parking on site.", ar: "شارع الأمير فيصل بن فهد، حي الهدا، الخبر ٣٤٤٣٩ — مقابل وكالة تويوتا. مواقف خاصّة بالمراجعين داخل المجمّع." } },
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
      titleEm: { en: "one quiet building.", ar: "مبنى هادئٌ واحد." },
      sub: { en: "A full index of what Bright Specialized Clinics offers on Prince Faisal Bin Fahd Road in Al Khobar, since 2018.", ar: "فهرس كامل لما تقدّمه عيادات برايت التخصصية على شارع الأمير فيصل بن فهد بالخبر، منذ ٢٠١٨." },
    },
    items: [
      {
        num: "I",
        name: { en: "Department I — Dermatology & Laser", ar: "القسم الأوّل — الجلدية والليزر" },
        sub: { en: "Skin science under Dr. Marina Naddaf", ar: "علم البشرة تحت إشراف د. مارينا نداف" },
        blurb: { en: "Medical and cosmetic dermatology led by Dr. Marina Naddaf — AAD member since 2004, Canadian Laser Diploma, twenty-five years across the Gulf. Restrained protocols that age gracefully.", ar: "الجلدية الطبّية والتجميلية بقيادة د. مارينا نداف — عضوة الأكاديمية الأمريكية للأمراض الجلدية منذ ٢٠٠٤، دبلوم الليزر الكندي، خمسة وعشرون عاماً في الخليج. بروتوكولات معتدلة تشيخ بكرامة." },
        treatments: [
          { en: "Hydrafacial", ar: "هيدرافيشيال" },
          { en: "Laser Hair Removal", ar: "إزالة الشعر بالليزر" },
          { en: "Plasma · PRP Therapy", ar: "البلازما · علاج بـ PRP" },
          { en: "Skin Rejuvenation", ar: "تجديد البشرة" },
          { en: "Acne Therapy", ar: "علاج حب الشباب" },
          { en: "Pigmentation & Brown Spots", ar: "علاج التصبّغ والبقع البنّية" },
          { en: "Mesotherapy", ar: "الميزوثيرابي" },
          { en: "Chemical Peeling", ar: "التقشير الكيميائي" },
          { en: "Microneedling", ar: "الإبر الدقيقة" },
        ],
        pricing: { en: "From SAR 199 · packages available", ar: "تبدأ من ١٩٩ ر.س · باقات متاحة" },
        variant: "terracotta",
      },
      {
        num: "II",
        name: { en: "Department II — Plastic & Aesthetic Surgery", ar: "القسم الثاني — جراحة التجميل" },
        sub: { en: "Maxillofacial under Dr. Hassan Nazzal", ar: "الفم والوجه تحت إشراف د. حسن نزال" },
        blurb: { en: "Aesthetic and reconstructive surgery led by Dr. Hassan Nazzal — Jordanian Board, Royal College of Surgeons in Ireland Fellowship. Restraint and proportion over volume.", ar: "جراحة التجميل والترميم بقيادة د. حسن نزال — المجلس الأردني، زمالة الكلية الملكية للجرّاحين في أيرلندا. الاعتدال والتناسق فوق الحجم." },
        treatments: [
          { en: "Full-face Filler", ar: "فيلر الوجه الكامل" },
          { en: "Lip Filler", ar: "فيلر الشفاه" },
          { en: "Botox", ar: "البوتوكس" },
          { en: "Thread Lift", ar: "الشدّ بالخيوط" },
          { en: "Body Contouring", ar: "نحت الجسم" },
          { en: "Maxillofacial Surgery", ar: "جراحة الفم والوجه والفكّين" },
          { en: "Reconstructive consultation", ar: "استشارات الجراحة الترميمية" },
        ],
        pricing: { en: "Consultation-based · SAR 800–8,000+", ar: "حسب الاستشارة · ٨٠٠–٨٬٠٠٠+ ر.س" },
        variant: "sand",
      },
      {
        num: "III",
        name: { en: "Department III — Cosmetic Dentistry", ar: "القسم الثالث — تجميل الأسنان" },
        sub: { en: "Smile design & Hollywood Smile", ar: "تصميم الابتسامة وابتسامة هوليوود" },
        blurb: { en: "Cosmetic and restorative dentistry. Hollywood Smile, veneers, whitening, dental implants, and gummy-smile correction — designed around your face proportions.", ar: "تجميل وترميم الأسنان. ابتسامة هوليوود، فينير، تبييض، زراعة، وتصحيح الابتسامة اللثوية — مصمَّمة حول تناسق وجهكِ." },
        treatments: [
          { en: "Hollywood Smile · Veneers", ar: "ابتسامة هوليوود · فينير" },
          { en: "Teeth Whitening (chair-side & laser)", ar: "تبييض الأسنان (في العيادة وبالليزر)" },
          { en: "Gummy Smile Correction", ar: "تصحيح الابتسامة اللثوية" },
          { en: "Dental Implants", ar: "زراعة الأسنان" },
          { en: "Composite Fillings", ar: "حشوات تجميلية" },
          { en: "Crowns & Bridges", ar: "التيجان والجسور" },
          { en: "Root Canal · Endodontics", ar: "علاج عصب الأسنان" },
          { en: "Periodontics", ar: "علاج اللثة" },
          { en: "Paediatric Dentistry", ar: "طبّ أسنان الأطفال" },
        ],
        pricing: { en: "From SAR 250 · Hollywood Smile up to SAR 16,000", ar: "تبدأ من ٢٥٠ ر.س · ابتسامة هوليوود تصل إلى ١٦٬٠٠٠ ر.س" },
        variant: "sage",
      },
      {
        num: "IV",
        name: { en: "Department IV — OB/GYN & Women's Health", ar: "القسم الرابع — النساء والولادة وصحّة المرأة" },
        sub: { en: "Discreet, women-only consultations", ar: "استشارات نسائية بسرّية تامّة" },
        blurb: { en: "Gynecology, intimate health, and women's wellness led by Dr. Nadeen Kabboura. Female-only sessions available on request — booking via WhatsApp 0557337555.", ar: "أمراض النساء والولادة والصحّة الحميمة وعافية المرأة بقيادة د. نادين كبورا. جلسات نسائية فقط متاحة عند الطلب — الحجز عبر واتساب ٠٥٥٧٣٣٧٥٥٥." },
        treatments: [
          { en: "Gynecological consultation", ar: "استشارة نسائية" },
          { en: "Intimate health treatments", ar: "علاجات الصحّة الحميمة" },
          { en: "Postnatal recovery", ar: "تعافي ما بعد الولادة" },
          { en: "Women's wellness check-ups", ar: "فحوصات عافية المرأة" },
        ],
        pricing: { en: "Consultation from SAR 250", ar: "الاستشارة تبدأ من ٢٥٠ ر.س" },
        variant: "terracotta",
      },
      {
        num: "V",
        name: { en: "Department V — Paediatrics", ar: "القسم الخامس — طب الأطفال" },
        sub: { en: "Family medicine for the youngest", ar: "طب العائلة للأصغر سنّاً" },
        blurb: { en: "General paediatrics and family-coordinated care. Convenient for families booking multiple members on the same visit.", ar: "طب أطفال عام ورعاية منسّقة على مستوى العائلة. مناسب للعوائل التي تحجز أكثر من فرد في زيارة واحدة." },
        treatments: [
          { en: "Paediatric general consultation", ar: "استشارة طب أطفال عامّة" },
          { en: "Vaccination & developmental check-ups", ar: "اللقاحات وفحوصات النمو" },
          { en: "Paediatric dermatology referral", ar: "إحالة جلدية أطفال" },
        ],
        pricing: { en: "Consultation from SAR 200", ar: "الاستشارة تبدأ من ٢٠٠ ر.س" },
        variant: "sand",
      },
      {
        num: "VI",
        name: { en: "Department VI — Bariatric Surgery", ar: "القسم السادس — جراحة السمنة" },
        sub: { en: "Weight & metabolic management", ar: "إدارة الوزن والاستقلاب" },
        blurb: { en: "Bariatric and metabolic surgical consultations. Pre-operative workup, surgical procedures, and structured post-operative follow-up.", ar: "استشارات جراحة السمنة والاستقلاب. الفحص ما قبل العملية، الإجراءات الجراحية، والمتابعة المنظَّمة بعدها." },
        treatments: [
          { en: "Bariatric consultation", ar: "استشارة جراحة السمنة" },
          { en: "Sleeve & bypass procedures", ar: "إجراءات تكميم وتحويل المسار" },
          { en: "Pre/post-operative care", ar: "الرعاية قبل وبعد الجراحة" },
        ],
        pricing: { en: "Quote at consultation", ar: "السعر يُحدَّد بعد الاستشارة" },
        variant: "sage",
      },
      {
        num: "VII",
        name: { en: "Department VII — Day Surgery", ar: "القسم السابع — الجراحة اليومية" },
        sub: { en: "Same-day surgical procedures", ar: "إجراءات جراحية في نفس اليوم" },
        blurb: { en: "Outpatient surgical procedures in a fully equipped facility. Discharge same day in most cases.", ar: "إجراءات جراحية للمرضى الخارجيّين في منشأة مجهّزة بالكامل. خروج في نفس اليوم في معظم الحالات." },
        treatments: [
          { en: "Outpatient surgical consultations", ar: "استشارات الجراحة الخارجية" },
          { en: "Minor surgical procedures", ar: "إجراءات جراحية صغيرة" },
        ],
        pricing: { en: "Quote at consultation", ar: "السعر يُحدَّد بعد الاستشارة" },
        variant: "dark",
      },
      {
        num: "VIII",
        name: { en: "Department VIII — Interventional Radiology", ar: "القسم الثامن — الأشعّة التداخلية" },
        sub: { en: "Image-guided diagnosis & therapy", ar: "تشخيص وعلاج موجّه بالصورة" },
        blurb: { en: "Diagnostic imaging and image-guided minimally invasive procedures. Available by referral.", ar: "تصوير تشخيصي وإجراءات أقل توغّلاً موجّهة بالصورة. متاح بالإحالة." },
        treatments: [
          { en: "Diagnostic imaging", ar: "تصوير تشخيصي" },
          { en: "Image-guided interventions", ar: "تدخّلات موجّهة بالصورة" },
        ],
        pricing: { en: "Referral-based", ar: "حسب الإحالة" },
        variant: "terracotta",
      },
      {
        num: "IX",
        name: { en: "Department IX — Psychiatry", ar: "القسم التاسع — الطب النفسي" },
        sub: { en: "Confidential mental-health care", ar: "رعاية صحّة نفسية بسرّية" },
        blurb: { en: "Adult psychiatric consultation in a private, discreet setting. Bilingual care.", ar: "استشارة نفسية للبالغين في بيئة خاصّة وسرّية. رعاية ثنائية اللغة." },
        treatments: [
          { en: "Psychiatric consultation", ar: "استشارة نفسية" },
          { en: "Therapy referral", ar: "إحالة للعلاج النفسي" },
        ],
        pricing: { en: "Consultation from SAR 350", ar: "الاستشارة تبدأ من ٣٥٠ ر.س" },
        variant: "sand",
      },
      {
        num: "X",
        name: { en: "Department X — Laser Centre", ar: "القسم العاشر — مركز الليزر" },
        sub: { en: "Dedicated laser & energy-based therapies", ar: "علاجات الليزر والطاقة المكرَّسة" },
        blurb: { en: "Dedicated laser room with SFDA-registered devices spanning hair removal, vascular, pigmentation, and skin resurfacing.", ar: "غرفة ليزر مكرَّسة مع أجهزة مسجَّلة لدى الهيئة العامة للغذاء والدواء، تشمل إزالة الشعر والأوعية والتصبّغ وإعادة تسطيح البشرة." },
        treatments: [
          { en: "Laser hair removal — all skin types", ar: "إزالة الشعر بالليزر — لكل أنواع البشرة" },
          { en: "Vascular laser (broken capillaries)", ar: "ليزر الأوعية (الشعيرات المكسورة)" },
          { en: "Pigmentation laser", ar: "ليزر التصبّغ" },
          { en: "Laser skin resurfacing", ar: "إعادة تسطيح البشرة بالليزر" },
          { en: "Laser tattoo removal", ar: "إزالة الوشم بالليزر" },
        ],
        pricing: { en: "Per-session from SAR 250", ar: "الجلسة تبدأ من ٢٥٠ ر.س" },
        variant: "sage",
      },
    ],
    equipment: [
      { name: "SFDA-registered laser fleet", description: { en: "Hair removal, vascular, pigmentation, and skin resurfacing devices — all SFDA registered.", ar: "أجهزة ليزر مسجَّلة لدى الهيئة العامة للغذاء والدواء — إزالة الشعر، الأوعية، التصبّغ، إعادة تسطيح البشرة." } },
      { name: "Hydrafacial system", description: { en: "Three-step facial protocol — cleanse, extract, hydrate.", ar: "بروتوكول وجه من ثلاث مراحل — تنظيف، استخراج، ترطيب." } },
      { name: "RF / Ultrasound body contouring", description: { en: "Non-invasive body shaping for face and body.", ar: "نحت غير جراحي للوجه والجسم." } },
      { name: "Chair-side teeth-whitening unit", description: { en: "In-clinic whitening with same-day results.", ar: "تبييض في العيادة بنتائج في نفس اليوم." } },
      { name: "Maxillofacial surgical suite", description: { en: "Full surgical setup for Dr. Hassan Nazzal's procedures.", ar: "غرفة جراحية كاملة لإجراءات د. حسن نزال." } },
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
      sub: { en: "Six specialist physicians and a full medical team under one roof in Al Khobar. Every name listed here is publicly verifiable.", ar: "ستة أطبّاء تخصّصيين وفريق طبّي كامل تحت سقفٍ واحد في الخبر. كل اسم هنا قابل للتحقّق علناً." },
    },
    items: [
      {
        name: "Dr. Hassan Nazzal",
        role: { en: "Maxillofacial Surgery · Senior partner", ar: "جراحة الفم والوجه والفكين · شريك أول" },
        bio: { en: "Jordanian Board–certified maxillofacial surgeon with Fellowship from the Royal College of Surgeons in Ireland. Senior partner of Bright Specialized Clinics since the early years.", ar: "جرّاح فم ووجه وفكّين معتمَد من المجلس الأردني، حاصل على زمالة الكلية الملكية للجرّاحين في أيرلندا. الشريك الأوّل في عيادات برايت التخصصية منذ السنوات الأولى." },
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
        name: "Dr. Doaa Goda",
        role: { en: "Cosmetic Aesthetics · Injectables", ar: "تجميل · حقن" },
        bio: { en: "Specialist in fillers, Botox, and body cosmetic procedures. Patient-favourite for natural, undetectable results.", ar: "متخصّصة في الفيلر والبوتوكس والإجراءات التجميلية للجسم. مفضّلة المريضات للنتائج الطبيعية غير الملحوظة." },
        credentials: ["MD · Cosmetic Aesthetics", "Filler & Botox specialist"],
        variant: "sage",
      },
      {
        name: "Dr. Nadeen Kabboura",
        role: { en: "OB/GYN · Intimate health", ar: "النساء والولادة · الصحّة الحميمة" },
        bio: { en: "Consultant in gynecology and intimate health. Provides discreet, women-only consultations.", ar: "استشاريّة في النساء والولادة والصحّة الحميمة. تقدّم استشارات نسائية بسرية تامّة." },
        credentials: ["MD · OB/GYN Consultant"],
        variant: "terracotta",
      },
      {
        name: "Dr. Amirah Mohannadi",
        role: { en: "Aesthetic injectables · Lip work", ar: "حقن تجميلية · شفاه" },
        bio: { en: "Specialist in lip filler artistry. Known for restrained volumes that respect natural facial proportions.", ar: "متخصّصة في فيلر الشفاه. مشهورة بكميّات معتدلة تحترم تناسق الوجه الطبيعي." },
        credentials: ["MD · Aesthetic Medicine"],
        variant: "sand",
      },
      {
        name: "Dr. Dina Abdul Halim",
        role: { en: "Aesthetic Dermatology · Microblading", ar: "الجلدية التجميلية · مايكروبليدنغ" },
        bio: { en: "Specialist in microblading, Botox, and aesthetic dermatology procedures. Detail-oriented practitioner with a precision-first approach.", ar: "متخصّصة في المايكروبليدنغ والبوتوكس وإجراءات الجلدية التجميلية. ممارسة دقيقة بمنهج يضع الإتقان أوّلاً." },
        credentials: ["MD · Aesthetic Dermatology", "Microblading & Botox specialist"],
        variant: "sage",
      },
    ],
  },

  aboutPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ About Bright", ar: "✦ عن برايت" },
      title: { en: "Al Khobar, since 2018.", ar: "الخبر، منذ ٢٠١٨." },
      titleEm: { en: "One standard.", ar: "ومعيارٌ واحد." },
      sub: { en: "Bright Specialized Clinics opened in Al Khobar in 2018. Today we serve Eastern Province families across ten specialty departments — all under one quiet roof on Prince Faisal Bin Fahd Road.", ar: "افتُتحت عيادات برايت التخصصية في الخبر عام ٢٠١٨. اليوم نخدم عوائل المنطقة الشرقية عبر عشرة أقسام تخصّصية — كلّها تحت سقفٍ هادئٍ واحد على شارع الأمير فيصل بن فهد." },
    },
    chapters: [
      { n: "I", title: { en: "Khobar, 2018", ar: "الخبر، ٢٠١٨" }, body: { en: "Bright opened on Prince Faisal Bin Fahd Road in Al Hada district with a simple operational principle: treat every patient as if she were the only patient. The first department was dermatology, under the eye of Dr. Marina Naddaf, already an American Academy of Dermatology member since 2004.", ar: "افتُتحت برايت في شارع الأمير فيصل بن فهد بحي الهدا بمبدأٍ تشغيليّ بسيط: عاملي كل مريضة كأنّها المريضة الوحيدة. القسم الأوّل كان الجلدية، تحت إشراف د. مارينا نداف، التي كانت آنذاك عضوة الأكاديمية الأمريكية للأمراض الجلدية منذ ٢٠٠٤." }, variant: "sand" },
      { n: "II", title: { en: "Ten departments", ar: "عشرة أقسام" }, body: { en: "Over the next years, the clinic expanded into ten specialty departments under one roof — dermatology, plastic surgery, cosmetic dentistry, OB/GYN, paediatrics, bariatric surgery, day surgery, interventional radiology, psychiatry, and a dedicated laser centre. Dr. Hassan Nazzal joined as senior partner, bringing his Royal College of Surgeons in Ireland Fellowship to the maxillofacial wing.", ar: "وعلى مدى السنوات التالية، توسّعت العيادة لتشمل عشرة أقسام تخصّصية تحت سقفٍ واحد — الجلدية، التجميل، الأسنان، النساء والولادة، الأطفال، السمنة، الجراحة اليومية، الأشعّة التداخلية، الطب النفسي، ومركز ليزر متخصّص. د. حسن نزال انضمّ شريكاً أوّل، حاملاً معه زمالته من الكلية الملكية للجرّاحين في أيرلندا إلى قسم الفمّ والوجه." }, variant: "terracotta" },
      { n: "III", title: { en: "The team grew", ar: "الفريق توسّع" }, body: { en: "Dr. Doaa Goda joined the aesthetic injectables team. Dr. Nadeen Kabboura built out women's health with a discreet, women-only consultation flow. Dr. Amirah Mohannadi brought a lip-filler precision style that respects natural face proportions. Dr. Dina Abdul Halim added microblading and aesthetic dermatology. A complete clinical team — every doctor named, every credential verifiable.", ar: "د. دعاء جودة انضمّت لفريق الحقن التجميلية. د. نادين كبورا بنت قسم صحّة المرأة باستشارات نسائية سرّية. د. أميرة المهنّدي جاءت بأسلوب فيلر شفاه دقيق يحترم تناسق الوجه. د. دينا عبد الحليم أضافت المايكروبليدنغ والجلدية التجميلية. فريق سريريّ كامل — كل طبيبة باسمها، كل شهادة قابلة للتحقّق." }, variant: "sage" },
      { n: "IV", title: { en: "What stays the same", ar: "ما يبقى ثابتاً" }, body: { en: "Ten departments, six named clinicians, and thousands of patients — the promise hasn't moved since day one. Excellence is our only title. We listen first, run diagnostics second, treat third, and follow up always. No upsell. No theatre. No claim we cannot verify.", ar: "عشرة أقسام، ستة أطبّاء بأسمائهم، وآلاف المريضات — الوعد لم يتحرّك منذ اليوم الأوّل. للتميّز عنوانٌ واحد. نُصغي أولاً، نُشخّص ثانياً، نُعالج ثالثاً، ونتابع دائماً. لا بيع. لا استعراض. لا ادّعاء لا نستطيع إثباته." }, variant: "dark" },
    ],
    commitments: [
      { n: "I", title: { en: "Specialist-led", ar: "بإشراف الأخصّائيين" }, description: { en: "Every department led by a board-certified or fellowship-trained specialist physician — not a general practitioner.", ar: "كل قسم يقوده طبيب أخصّائي معتمَد أو حاصل على زمالة — لا طبيب عام." } },
      { n: "II", title: { en: "Verifiable credentials", ar: "شهادات قابلة للتحقّق" }, description: { en: "Every credential we display is independently checkable through the issuing authority — RCSI, AAD, SCFHS, SFDA.", ar: "كل شهادة نعرضها قابلة للتحقّق المستقل عبر الجهة المُصدِرة — RCSI، AAD، الهيئة السعودية للتخصّصات الصحية، الهيئة العامة للغذاء والدواء." } },
      { n: "III", title: { en: "Saudi privacy first", ar: "الخصوصية السعودية أولاً" }, description: { en: "No patient face photographs. No biometric data. Female-only sessions on request. PDPL-compliant data handling.", ar: "لا صور وجوه مريضات. لا بيانات حيوية. جلسات نسائية فقط عند الطلب. تعامل مع البيانات متوافق مع قانون حماية البيانات الشخصية." } },
      { n: "IV", title: { en: "Same standard, every visit", ar: "نفس المعيار، في كل زيارة" }, description: { en: "From first consultation to follow-up, the standard does not bend. Whether you visit dermatology, OB/GYN, or dental — the same listen-first, written-plan, follow-up-always protocol applies.", ar: "من الاستشارة الأولى إلى المتابعة، المعيار لا ينحني. سواء زرتِ الجلدية، النساء والولادة، أو الأسنان — نفس بروتوكول الإصغاء أوّلاً، الخطّة المكتوبة، والمتابعة الدائمة." } },
    ],
    location: {
      eyebrow: { en: "✦ Visit", ar: "✦ زورونا" },
      headlinePartA: { en: "Al Hada district.", ar: "حي الهدا." },
      headlineEm: { en: "Al Khobar.", ar: "الخبر." },
      description: { en: "Prince Faisal Bin Fahd Road, Al Hada district (opposite Toyota agency), Al Khobar 34439. Dedicated patient parking on site. Unified hotline 920024428. Same-day WhatsApp confirmation on 0557337555.", ar: "شارع الأمير فيصل بن فهد، حي الهدا (مقابل وكالة تويوتا)، الخبر ٣٤٤٣٩. مواقف خاصّة بالمراجعين داخل المجمّع. الخط الموحّد ٩٢٠٠٢٤٤٢٨. تأكيد عبر واتساب في نفس اليوم على ٠٥٥٧٣٣٧٥٥٥." },
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
    rating: "4.4",
    reviewCount: { en: "From 1,500+ Google reviews", ar: "من أكثر من ١٬٥٠٠ تقييم جوجل" },
    disclaimer: {
      en: "These experiences are shared with each patient's written consent — names withheld for privacy. Results vary by person, condition, and treatment plan.",
      ar: "تمت مشاركة هذه التجارب بعد موافقة أصحابها، مع الحفاظ على خصوصية الأسماء. وقد تختلف النتائج من شخص لآخر حسب الحالة والخطة العلاجية.",
    },
    items: [
      // ── Existing English reviews ─────────────────────────────────
      { shortQuote: { en: "\"They explained three options, then said the simplest one suited me best.\"", ar: "" }, longQuote: { en: "No upsell, no pressure. Dr. Marina walked me through three filler approaches, then recommended the most conservative one. Six weeks later my husband noticed I 'looked rested' — that's the whole point.", ar: "" }, name: "Patient · Khobar", date: { en: "Apr 2026", ar: "أبريل ٢٠٢٦" }, variant: "terracotta", stars: 5, lang: "en" },
      { shortQuote: { en: "\"My mother came with me, then she booked for herself.\"", ar: "" }, longQuote: { en: "First visit was for me — Hydrafacial with Dr. Marina. By my third visit my mother had her own appointment with Dr. Doaa. We're now three patients from the same family.", ar: "" }, name: "Patient · Khobar", date: { en: "Mar 2026", ar: "" }, variant: "sage", stars: 5, lang: "en" },
      { shortQuote: { en: "\"Dr. Hassan rebuilt my smile around my face, not a template.\"", ar: "" }, longQuote: { en: "I went to two clinics for veneer consultations — both showed me the same six-shape templates. Dr. Hassan Nazzal photographed my face and designed the veneers around my actual proportions. Different conversation.", ar: "" }, name: "Patient · Khobar", date: { en: "Feb 2026", ar: "" }, variant: "sand", stars: 5, lang: "en" },
      { shortQuote: { en: "\"Female-only session — they made it normal, not exceptional.\"", ar: "" }, longQuote: { en: "Asked for an all-female team at booking. The receptionist confirmed without questions. Female specialist, female nurse, female receptionist on the floor that day. No drama, no extra fee.", ar: "" }, name: "Patient · Khobar", date: { en: "Jan 2026", ar: "" }, variant: "terracotta", stars: 5, lang: "en" },

      // ── New Arabic reviews (Khaleeji, real patients, written consent) ─
      { lang: "ar", variant: "sand", stars: 5, name: "سارة ع.", date: { en: "May 2026", ar: "مايو ٢٠٢٦" }, treatment: { en: "Skin radiance", ar: "نضارة وبهتان البشرة" }, shortQuote: { en: "", ar: "«كنت أحس بشرتي مرهقة وباهتة، خصوصاً لما أصور نفسي.»" }, longQuote: { en: "", ar: "جيت وأنا أحس بشرتي مرهقة وباهتة، خصوصاً لما أصور نفسي أحس وجهي ما فيه حياة حتى لو حاطة مكياج. اللي ريّحني من أول زيارة إن الدكتورة ما استعجلت علي، سألتني عن بشرتي وروتيني وشرحت لي وش يناسبني ووش الأفضل أتجنبه. بعد العلاج بأيام بدأت ألاحظ إن وجهي صار أهدى وأنظف، وبعد ما شفت صورتي قبل وبعد استوعبت الفرق فعلاً. النتيجة مو مبالغ فيها أبداً، بس بشرتي صارت أنضر وأصفى وكأني مرتاحة. أكثر شي عجبني إن التغيير واضح بالصورة لكن طبيعي على وجهي." } },
      { lang: "ar", variant: "sage", stars: 5, name: "نورة ق.", date: { en: "May 2026", ar: "مايو ٢٠٢٦" }, treatment: { en: "Acne scars & uneven tone", ar: "آثار حبوب وتفاوت لون" }, shortQuote: { en: "", ar: "«حسّيت إن الموضوع مو جلسة وخلاص، شرحت لي الخطة بطريقة واقعية.»" }, longQuote: { en: "", ar: "كنت أعاني من آثار حبوب قديمة وتفاوت بسيط بلون البشرة، وكنت متعودة أغطيها بالكونسيلر وما أحس بشرتي صافية. في الاستشارة حسّيت إن الموضوع مو جلسة وخلاص، الدكتورة شرحت لي الخطة بطريقة واقعية وقالت لي إن التحسن يكون تدريجي. هذا الشي خلاني أثق أكثر لأن ما كان فيه وعود مبالغ فيها. بعد فترة بدأت أشوف ملمس البشرة أهدى واللون أوضح، وحتى المكياج صار يطلع أنعم. بصراحة حسّيت إن بشرتي رجعت تتنفس، والفرق بالصور كان أكبر من اللي توقعته." } },
      { lang: "ar", variant: "terracotta", stars: 5, name: "ريم ح.", date: { en: "May 2026", ar: "مايو ٢٠٢٦" }, treatment: { en: "Natural Botox", ar: "بوتكس طبيعي" }, shortQuote: { en: "", ar: "«اللي حولي قالوا شكلك مرتاحة، وما أحد حس إني مسوية شي.»" }, longQuote: { en: "", ar: "كنت متخوفة جداً من البوتكس لأني ما أحب شكل الوجه الجامد أو التعابير اللي تختفي. قلت للدكتورة من البداية إني أبي شكلي يبقى طبيعي، بس التعب اللي بالجبهة وحول العين يخف. أعجبني إنها فهمتني بسرعة وما حاولت تقنعني بزيادة. بعد النتيجة حسّيت وجهي صار أهدى ونظرتي أفتح، بس لسه تعابيري موجودة وشكلي أنا. اللي حولي قالوا لي شكلك مرتاحة ومنتعشة، وما أحد حس إني مسوية شي واضح. هذي بالضبط النتيجة اللي كنت أبيها." } },
      { lang: "ar", variant: "sand", stars: 5, name: "الجوهرة د.", date: { en: "May 2026", ar: "مايو ٢٠٢٦" }, treatment: { en: "Light lip filler (under 1ml)", ar: "فيلر شفايف خفيف أقل من 1ml" }, shortQuote: { en: "", ar: "«الهدف ترطيب وتحديد، مو تكبير.»" }, longQuote: { en: "", ar: "أنا من زمان كنت أبي أرتب الشفايف بس كنت خايفة من الحجم الزائد، لأن ملامحي ناعمة وما أحب أي شي يطلع واضح بزيادة. الدكتورة قالت لي إننا نحتاج لمسة بسيطة جداً، الهدف ترطيب وتحديد مو تكبير. بعد ما راح التورم، شفت النتيجة الحقيقية وكانت أجمل من توقعي. الشفايف صارت مرتبة، التحديد أنعم، والابتسامة أحلى بدون ما يتغير شكل وجهي. أكثر شي عجبني إن النتيجة أنثوية وراقية، ما فيها مبالغة ولا شكل مصطنع." } },
      { lang: "ar", variant: "sage", stars: 5, name: "العنود م.", date: { en: "May 2026", ar: "مايو ٢٠٢٦" }, treatment: { en: "Salmon DNA injections", ar: "إبر السالمون" }, shortQuote: { en: "", ar: "«النضارة باينة حتى بدون فلتر.»" }, longQuote: { en: "", ar: "سمعت كثير عن إبر السالمون بس ما كنت فاهمة هل فعلاً تناسبني أو لا. كان عندي بهتان وجفاف بسيط، وحسيت إن بشرتي فقدت حيويتها. بالاستشارة شرحوا لي النتيجة المتوقعة بوضوح، وإنها ما تكون تغيير مفاجئ بقدر ما هي تحسين بجودة البشرة. بعد فترة لاحظت إن وجهي صار أنعم، المكياج يمسك أفضل، والنضارة صارت باينة حتى بدون فلتر. أجمل شي إن النتيجة طبيعية جداً، كأن بشرتي تحسنت من الداخل مو كأني سويت إجراء واضح." } },
      { lang: "ar", variant: "terracotta", stars: 5, name: "مها ش.", date: { en: "Apr 2026", ar: "أبريل ٢٠٢٦" }, treatment: { en: "Hydrafacial · deep cleanse", ar: "هايدرافيشل وتنظيف عميق" }, shortQuote: { en: "", ar: "«مناسب جداً للي تبغى نتيجة سريعة قبل مناسبة.»" }, longQuote: { en: "", ar: "حجزت تنظيف بشرة وكنت متوقعة يكون مثل أي تنظيف عادي، لكن التجربة كانت أرتب بكثير. قبل الجلسة سألوني عن حساسية بشرتي والمشاكل اللي أعاني منها، وكل خطوة كانت مشروحة بطريقة مريحة. بعد الجلسة حسّيت بشرتي خفيفة ونظيفة، وفيها لمعة صحية بدون احمرار مزعج. ثاني يوم تحديداً لاحظت الفرق أكثر، المسام شكلها أهدى والوجه أنعم. مناسب جداً للي تبغى نتيجة سريعة قبل مناسبة، بس بدون ما تدخل في إجراءات قوية." } },
      { lang: "ar", variant: "sand", stars: 5, name: "خلود ش.", date: { en: "Apr 2026", ar: "أبريل ٢٠٢٦" }, treatment: { en: "Active acne treatment", ar: "علاج حبوب نشطة" }, shortQuote: { en: "", ar: "«التحسن كان منطقي وثابت، مو نتيجة يومين وتروح.»" }, longQuote: { en: "", ar: "جيت وأنا نفسياً تعبت من الحبوب، مو بس من شكلها لكن من الإحساس إن كل شي أجربه ما ينفع. اللي فرق معي إن الدكتورة ما حكمت على بشرتي بسرعة، أخذت وقتها وسألتني عن الأكل، الروتين، المنتجات، وحتى متى تزيد الحبوب. الخطة كانت واضحة ومناسبة لي، وما حسّيت إنهم يعطوني أشياء كثيرة بدون سبب. بعد الالتزام بدأت الحبوب تهدأ، والالتهاب خف بشكل واضح. أكثر شي خلاني أرتاح إن التحسن كان منطقي وثابت، مو نتيجة يومين وتروح." } },
      { lang: "ar", variant: "sage", stars: 5, name: "دلال ع.", date: { en: "Apr 2026", ar: "أبريل ٢٠٢٦" }, treatment: { en: "Brightening & even tone", ar: "تفتيح وتوحيد لون" }, shortQuote: { en: "", ar: "«توحيد ونضارة بطريقة صحية وطبيعية.»" }, longQuote: { en: "", ar: "كان عندي تفاوت لون خصوصاً حول الفم والخدود، وكنت أتجنب التصوير بإضاءة قوية لأن اللون يبان أكثر. جربت كريمات كثيرة لكن ما كنت أشوف فرق واضح. في الاستشارة قالوا لي أهم شي نشتغل بهدوء ونحافظ على حاجز البشرة، وهذا الكلام طمني لأن بشرتي حساسة. بعد الجلسات لاحظت إن اللون صار أهدى والوجه صار أصفى، بدون تقشير قوي أو تهيج مزعج. النتيجة مو تغيير لون، لكنها توحيد ونضارة بطريقة صحية وطبيعية." } },
      { lang: "ar", variant: "terracotta", stars: 5, name: "ليان س.", date: { en: "Apr 2026", ar: "أبريل ٢٠٢٦" }, treatment: { en: "Under-eye refresh", ar: "تحت العين" }, shortQuote: { en: "", ar: "«ملامحي رجعت ناعمة بدون ما يتغير شكلي.»" }, longQuote: { en: "", ar: "كنت أعاني من شكل التعب تحت العين، حتى لو نمت كويس يظل وجهي يبين مرهق. كنت خايفة من أي إجراء بهالمنطقة لأنها حساسة، لكن الدكتورة كانت صريحة جداً وقالت لي وش ينفع ووش ما يناسب حالتي. ما حسّيت إنها تحاول تسوي لي أكثر من اللازم، بالعكس كانت محافظة. بعد النتيجة صار وجهي أفتح والنظرة أهدى، والفرق واضح بالصور بس مو بطريقة تلفت الانتباه. حسّيت إن ملامحي رجعت ناعمة بدون ما يتغير شكلي." } },
      { lang: "ar", variant: "sand", stars: 5, name: "أمل غ.", date: { en: "Apr 2026", ar: "أبريل ٢٠٢٦" }, treatment: { en: "Light face contouring", ar: "تحديد وجه خفيف" }, shortQuote: { en: "", ar: "«الشغل كان محسوب وناعم، مو مجرد تعبئة.»" }, longQuote: { en: "", ar: "كنت أبي تحسين بسيط بالوجه لأن التصوير كان يبين وجهي متعب شوي، لكن ما أبي فيلر واضح أو ملامح حادة بزيادة. الدكتورة فهمت علي من البداية وقالت لي إن أجمل نتيجة هي اللي تعطي توازن بدون ما الناس تعرف وش تغير. فعلاً بعد الإجراء حسّيت وجهي صار أرتب، خصوصاً من الجنب وبالصور. ما صار فيه تغيير قوي، بس الملامح صارت متناسقة أكثر. أعجبني جداً إن الشغل كان محسوب وناعم، مو مجرد تعبئة." } },
      { lang: "ar", variant: "sage", stars: 5, name: "هند ر.", date: { en: "Mar 2026", ar: "مارس ٢٠٢٦" }, treatment: { en: "Natural smile design", ar: "ابتسامة طبيعية" }, shortQuote: { en: "", ar: "«النتيجة طلعت راقية وطبيعية، بدون ما أفقد شكلي.»" }, longQuote: { en: "", ar: "راجعت طبيب الأسنان لأن ابتسامتي كانت مضايقتني من ناحية اللون والشكل، لكن خوفي الأكبر كان أطلع بابتسامة بيضاء بزيادة أو شكل صناعي. الدكتور أخذ وقت في الشرح، وراني خيارات تناسب وجهي ولون بشرتي، وما حسّيت إنه مستعجل. النتيجة طلعت راقية وطبيعية، الأسنان أرتب والابتسامة أوضح، لكن بدون ما أفقد شكلي الطبيعي. أكثر شي عجبني إنهم اهتموا بالتفاصيل الصغيرة، لأن هذي التفاصيل هي اللي تخلي النتيجة تبان فخمة مو مبالغ فيها." } },
      { lang: "ar", variant: "dark", stars: 5, name: "بدور م.", date: { en: "Mar 2026", ar: "مارس ٢٠٢٦" }, treatment: { en: "Teeth cleaning & polish", ar: "تنظيف أسنان وتلميع" }, shortQuote: { en: "", ar: "«تجربة بسيطة لكنها فرقت معي كثير.»" }, longQuote: { en: "", ar: "كنت أحس أسناني مو بنفس نظافة أول، خصوصاً مع القهوة، وكنت أبي شي بسيط يرجع الانتعاش للابتسامة. الموعد كان مريح والدكتور شرح لي وين أماكن التصبغات وكيف أحافظ على النتيجة. التنظيف كان دقيق وما حسّيت بألم مثل تجارب سابقة. بعد الجلسة ابتسامتي صارت أنظف واللون أهدى، حتى الإحساس بالفم صار أخف وأنظف. تجربة بسيطة لكنها فرقت معي كثير، خصوصاً إن التعامل كان محترم وهادئ." } },
      { lang: "ar", variant: "terracotta", stars: 5, name: "مشاعل ي.", date: { en: "Mar 2026", ar: "مارس ٢٠٢٦" }, treatment: { en: "Conservative Hollywood smile", ar: "ابتسامة هوليوود محافظة" }, shortQuote: { en: "", ar: "«ابتسامة تناسب وجهي مو نسخة مكررة.»" }, longQuote: { en: "", ar: "كنت أفكر بابتسامة هوليوود من فترة، لكن كل ما أشوف نتائج مبالغ فيها أتراجع. اللي خلاني أقرر إن الدكتور كان واضح من البداية: الهدف ابتسامة تناسب وجهي مو نسخة مكررة. اخترنا لون وشكل قريب من الطبيعي، واهتموا بالتفاصيل قبل التنفيذ. لما شفت النتيجة النهائية حسّيت بثقة كبيرة، الابتسامة صارت أجمل وأرتب لكن مو صادمة أو مصطنعة. حتى أهلي قالوا التغيير واضح وحلو، بس طبيعي عليك." } },
      { lang: "ar", variant: "sage", stars: 5, name: "غادة ز.", date: { en: "Mar 2026", ar: "مارس ٢٠٢٦" }, treatment: { en: "Laser sessions", ar: "ليزر" }, shortQuote: { en: "", ar: "«يحسسك إنك مو رقم، خصوصاً في إجراءات تحتاج دقة.»" }, longQuote: { en: "", ar: "تجربتي مع الليزر كانت مريحة أكثر مما توقعت. من البداية كان فيه شرح واضح لنوع الجهاز والإعدادات المناسبة لبشرتي، وهذا خلاني أحس بأمان. الجلسة كانت منظمة، والفريق كان يسألني عن الإحساس خلال الجلسة وما كان فيه استعجال. بعد كذا لاحظت إن النتيجة تتحسن من جلسة لجلسة، ومع كل زيارة أحس إنهم يعرفون حالتي ويتابعونها. أحب المكان اللي يحسسك إنك مو رقم، خصوصاً في إجراءات تحتاج دقة واهتمام." } },
      { lang: "ar", variant: "sand", stars: 5, name: "عبير ح.", date: { en: "Mar 2026", ar: "مارس ٢٠٢٦" }, treatment: { en: "Honest consultation", ar: "استشارة صادقة" }, shortQuote: { en: "", ar: "«الأفضل نبدأ بخطوة بسيطة ونشوف النتيجة.»" }, longQuote: { en: "", ar: "جيت وأنا في بالي أسوي أكثر من إجراء، وكنت متوقعة إنهم بيوافقون على كل شي، لكن اللي صار العكس. الدكتورة قالت لي بصراحة إن بعض الأشياء ما أحتاجها حالياً، وإن الأفضل نبدأ بخطوة بسيطة ونشوف النتيجة. هذا الموقف خلاني أثق فيها أكثر من أي كلام تسويقي. حسّيت إن الهدف فعلاً نتيجة حلوة ومناسبة لي، مو بيع خدمات. طلعت من الموعد وأنا مرتاحة لأن الخطة كانت واقعية ومحترمة." } },
      { lang: "ar", variant: "terracotta", stars: 5, name: "نجلاء ب.", date: { en: "Feb 2026", ar: "فبراير ٢٠٢٦" }, treatment: { en: "Botox + glow", ar: "بوتكس + نضارة" }, shortQuote: { en: "", ar: "«التعابير صارت أنعم، والبشرة فيها صفاء ولمعة صحية.»" }, longQuote: { en: "", ar: "كنت أبي وجهي يبين أهدى، خصوصاً إن التعب كان واضح عند الجبهة وحول العين، وبنفس الوقت بشرتي كانت تحتاج نضارة. الدكتورة رتبت لي الخطة بشكل بسيط، وما حسّيت إن الإجراءات كثيرة أو مبالغ فيها. بعد النتيجة شفت فرق جميل: التعابير صارت أنعم، والبشرة فيها صفاء ولمعة صحية. اللي عجبني إن شكلي ما تغير، بس صار في وجهي ترتيب وراحة. هذي النوعية من النتائج هي اللي تخليك ترجعين بثقة." } },
      { lang: "ar", variant: "sage", stars: 5, name: "لطيفة م.", date: { en: "Feb 2026", ar: "فبراير ٢٠٢٦" }, treatment: { en: "Skin texture & old scars", ar: "ملمس البشرة وآثار قديمة" }, shortQuote: { en: "", ar: "«النتيجة تدريجية لكنها حقيقية، وهذا أهم شي بالنسبة لي.»" }, longQuote: { en: "", ar: "مشكلتي ما كانت حبوب واضحة، كانت أكثر شي ملمس البشرة وآثار قديمة تخلي المكياج ما يطلع ناعم. في البداية كنت أبي حل سريع، لكن الدكتورة شرحت لي إن جودة البشرة تحتاج خطة مو جلسة وحدة وخلاص. أعجبني الصدق لأن هذا خلاني أكون واقعية وألتزم. بعد فترة بدأت ألاحظ إن الملمس صار أهدى، والمناطق اللي كانت تبان بالتصوير صارت أقل وضوح. النتيجة تدريجية لكنها حقيقية، وهذا أهم شي بالنسبة لي." } },
      { lang: "ar", variant: "sand", stars: 5, name: "رغد ت.", date: { en: "Feb 2026", ar: "فبراير ٢٠٢٦" }, treatment: { en: "Previous filler correction", ar: "تعديل شفايف سابق" }, shortQuote: { en: "", ar: "«النتيجة رجعت طبيعية، وهذا اللي كنت أبحث عنه.»" }, longQuote: { en: "", ar: "كنت مسوية شفايف قبل في مكان ثاني، وما كنت مرتاحة للتوازن، حسيتها مو راكبة على ملامحي. كنت خايفة أعدل وأزيد المشكلة، لكن الدكتورة كانت هادئة جداً وشرحت لي وش ممكن يتحسن ووش الأفضل ما نلمسه. حسّيت إن عندها ذوق محافظ وهذا طمني. بعد التعديل صار الشكل أنعم، التحديد مرتب، والحجم أخف من قبل بطريقة تناسبني. أكثر شي عجبني إن النتيجة رجعت طبيعية، وهذا اللي كنت أبحث عنه." } },
      { lang: "ar", variant: "dark", stars: 5, name: "شهد ف.", date: { en: "Feb 2026", ar: "فبراير ٢٠٢٦" }, treatment: { en: "Pre-event care", ar: "عناية قبل مناسبة" }, shortQuote: { en: "", ar: "«أجمل نتيجة هي اللي تبين طبيعية ومرتبة.»" }, longQuote: { en: "", ar: "كان عندي مناسبة مهمة وكنت أبي بشرتي تبان نضرة بدون ما أسوي شي قوي أو يخلي وجهي متورم. شرحت لهم الوقت اللي عندي، والدكتورة اختارت لي شي مناسب وآمن قبل المناسبة. النتيجة كانت بالضبط اللي أحتاجها: صفاء، نعومة، ولمعة صحية خفيفة. يوم المناسبة الكل لاحظ إن بشرتي حلوة، لكن محد قال شكلك مسوية إجراء. بالنسبة لي هذا نجاح، لأن أجمل نتيجة هي اللي تبين طبيعية ومرتبة." } },
      { lang: "ar", variant: "terracotta", stars: 5, name: "فاطمة د.", date: { en: "Feb 2026", ar: "فبراير ٢٠٢٦" }, treatment: { en: "Overall experience", ar: "تجربة عامة واهتمام" }, shortQuote: { en: "", ar: "«العناية مو بس إجراء، هي ذوق ودقة واهتمام.»" }, longQuote: { en: "", ar: "أكثر شي يخليني أرجع لأي مكان هو الإحساس إنهم يسمعون لك فعلاً، وهذا اللي حسّيته هنا. من أول تواصل كان التعامل واضح ومحترم، وفي الموعد ما حسّيت باستعجال أو ضغط. الدكتورة سألتني عن توقعاتي وشرحت لي الخيارات بطريقة بسيطة، والفريق كان مهتم بالتفاصيل الصغيرة. النتيجة عجبتني، لكن اللي عجبني أكثر إن التجربة كلها كانت مريحة. تحس إن العناية مو بس إجراء، هي ذوق ودقة واهتمام." } },
      { lang: "ar", variant: "sand", stars: 5, name: "هيا ع.", date: { en: "Jan 2026", ar: "يناير ٢٠٢٦" }, treatment: { en: "Light filler", ar: "فيلر خفيف للملامح" }, shortQuote: { en: "", ar: "«هذا النوع من الشغل يحتاج ذوق، وفعلاً النتيجة كانت راقية.»" }, longQuote: { en: "", ar: "كنت أشوف وجهي بالصور وأحس فيه تعب بسيط، لكن ما كنت أعرف بالضبط وش أحتاج. كنت خايفة أسوي فيلر ويبين وجهي متغير، لذلك طلبت نتيجة خفيفة جداً. الدكتورة شرحت لي إن الهدف مو نغير الملامح، الهدف نرجع توازن بسيط للوجه. بعد النتيجة حسّيت إن وجهي صار أرتب وأنعم، خصوصاً بالتصوير، لكن محد حس إن فيه شي واضح. هذا النوع من الشغل يحتاج ذوق، وفعلاً النتيجة كانت راقية." } },
      { lang: "ar", variant: "sage", stars: 5, name: "مريم ع.", date: { en: "Jan 2026", ar: "يناير ٢٠٢٦" }, treatment: { en: "Sensitive skin", ar: "حساسية البشرة" }, shortQuote: { en: "", ar: "«التعامل كان بحذر ووعي، وهذا أهم من أي نتيجة سريعة.»" }, longQuote: { en: "", ar: "بشرتي حساسة وأتردد كثير قبل أي علاج، لأن تجارب سابقة سببت لي احمرار وتهيج. اللي ريّحني إن الدكتورة ما بدأت بأي شي قبل ما تفهم تاريخ بشرتي والمنتجات اللي أستخدمها. الخطة كانت هادئة ومناسبة، وكان فيه شرح واضح للعناية بعد الجلسة. النتيجة طلعت جميلة بدون تهيج مزعج، والبشرة صارت أهدى وأنعم. حسّيت إن التعامل كان بحذر ووعي، وهذا بالنسبة لي أهم من أي نتيجة سريعة." } },
      { lang: "ar", variant: "terracotta", stars: 5, name: "منيرة ق.", date: { en: "Jan 2026", ar: "يناير ٢٠٢٦" }, treatment: { en: "Light face contour", ar: "كونتور بسيط للوجه" }, shortQuote: { en: "", ar: "«تهتم بالنتيجة أكثر من الإجراء نفسه.»" }, longQuote: { en: "", ar: "كنت أبي وجهي يبان أنعم ومتناسق أكثر، خصوصاً إن عندي مناسبة وتصوير، لكن ما أحب التغيير الواضح. الدكتورة اقترحت لمسات بسيطة جداً، وقالت لي نوقف عند الحد اللي يحافظ على ملامحي. بعد النتيجة شفت الفرق في الصور أكثر: الوجه صار مرتب، والزوايا أنعم، لكن ما فيه مبالغة. أحببت إن الدكتورة كانت تقول «هذا يكفي» بدل ما تزيد. هذا الشي خلاني أحس إنها تهتم بالنتيجة أكثر من الإجراء نفسه." } },
      { lang: "ar", variant: "sand", stars: 5, name: "أريج س.", date: { en: "Jan 2026", ar: "يناير ٢٠٢٦" }, treatment: { en: "Light pigmentation", ar: "علاج تصبغات خفيفة" }, shortQuote: { en: "", ar: "«النتيجة اللي شفتها كانت واقعية وجميلة.»" }, longQuote: { en: "", ar: "كان عندي تصبغات خفيفة بسبب الشمس وبعض آثار الحبوب، وكنت أحس لون وجهي مو موحد. ما كنت أبي علاج قوي يعطلني، فشرحت للدكتورة إني أحتاج شي يناسب دوامي وروتيني. الخطة كانت واضحة وبسيطة، ومع الوقت بدأت أشوف التصبغات تهدأ والوجه يصير أنظف. أكثر شي عجبني إنهم ما وعدوني بنتيجة خيالية، لكن النتيجة اللي شفتها كانت واقعية وجميلة. حسّيت إن بشرتي صارت صحية أكثر، وهذا بالضبط اللي كنت أبيه." } },
      { lang: "ar", variant: "sage", stars: 5, name: "دانة ح.", date: { en: "Jan 2026", ar: "يناير ٢٠٢٦" }, treatment: { en: "Light dental restoration", ar: "ترميم تجميلي بسيط للأسنان" }, shortQuote: { en: "", ar: "«حل صغير لكنه فرق في ثقتي بالابتسامة.»" }, longQuote: { en: "", ar: "كان عندي فراغ بسيط وشكل سن مضايقني بالابتسامة، وكنت مترددة لأن ما أبي أغير أسناني كلها. الدكتور شرح لي خيار بسيط يناسب حالتي بدون مبالغة، ووراني كيف ممكن النتيجة تطلع طبيعية. بعد الإجراء حسّيت إن الابتسامة صارت أرتب بكثير، مع إن التغيير كان بسيط. هذا أكثر شي عجبني: حل صغير لكنه فرق في ثقتي بالابتسامة. التعامل كان مهني وواضح من البداية للنهاية." } },
    ],
  },

  journalPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ The Bright Journal", ar: "✦ مجلّة برايت" },
      title: { en: "Notes", ar: "ملاحظات" },
      titleEm: { en: "from our clinicians.", ar: "من أطبّائنا." },
      sub: { en: "Practical writing from our team on dermatology, dentistry, women's health, and Saudi-specific care — what we'd choose for our own families.", ar: "كتابات عملية من فريقنا حول الجلدية، الأسنان، صحّة المرأة، والرعاية الخاصّة بالسوق السعودي — ما نختاره لعائلاتنا نحن." },
    },
    featured: {
      tag: { en: "Featured essay", ar: "مقال مميّز" },
      title: { en: "Eid prep without panic — a six-week glow plan", ar: "تجهيز العيد بدون قلق — خطّة إشراقة لستّة أسابيع" },
      excerpt: { en: "What I recommend for patients booking their first visit four to six weeks before Eid — restraint over rush, science over season.", ar: "ما أوصي به للمريضات اللاتي يحجزن أوّل موعد قبل العيد بأربعة إلى ستة أسابيع — الاعتدال فوق الاستعجال، العلم فوق الموسم." },
      author: "Dr. Marina Naddaf",
      date: { en: "May 2026", ar: "مايو ٢٠٢٦" },
      variant: "terracotta",
    },
    posts: [
      { tag: { en: "Dentistry", ar: "أسنان" }, title: { en: "When veneers are the right call (and when they're not)", ar: "متى يكون الفينير الخيار الصحيح (ومتى لا يكون)" }, author: "Dr. Hassan Nazzal", date: { en: "12 Apr 2026", ar: "١٢ أبريل ٢٠٢٦" }, variant: "sand" },
      { tag: { en: "Women's Health", ar: "صحّة المرأة" }, title: { en: "Three questions to ask your OB/GYN this year", ar: "ثلاثة أسئلة لطبيبة النساء والولادة في هذا العام" }, author: "Dr. Nadeen Kabboura", date: { en: "28 Mar 2026", ar: "٢٨ مارس ٢٠٢٦" }, variant: "sage" },
      { tag: { en: "Dermatology", ar: "جلدية" }, title: { en: "Laser hair removal in summer — what actually works in Saudi heat", ar: "إزالة الشعر بالليزر في الصيف — ما يعمل فعلاً في حرارة السعودية" }, author: "Dr. Marina Naddaf", date: { en: "14 Mar 2026", ar: "١٤ مارس ٢٠٢٦" }, variant: "terracotta" },
      { tag: { en: "Aesthetics", ar: "تجميل" }, title: { en: "Lip filler — three volumes I recommend, and the one I refuse", ar: "فيلر الشفاه — ثلاثة أحجام أوصي بها، وحجمٌ واحد أرفضه" }, author: "Dr. Amirah Mohannadi", date: { en: "01 Mar 2026", ar: "١ مارس ٢٠٢٦" }, variant: "sand" },
      { tag: { en: "Practice", ar: "ممارسة" }, title: { en: "When we say no — three cases we declined this month", ar: "متى نقول «لا» — ثلاث حالات رفضناها هذا الشهر" }, author: "Bright Clinical Team", date: { en: "14 Feb 2026", ar: "١٤ فبراير ٢٠٢٦" }, variant: "dark" },
      { tag: { en: "Saudi Care", ar: "رعاية سعودية" }, title: { en: "Cross-department visits — what we learned from 1,500 patients", ar: "زيارات متعدّدة الأقسام — ما تعلّمناه من ١٬٥٠٠ مريضة" }, author: "Bright Clinical Team", date: { en: "28 Jan 2026", ar: "٢٨ يناير ٢٠٢٦" }, variant: "sage" },
    ],
    newsletter: {
      headline: { en: "A letter, once a month.", ar: "رسائل، مرة كل شهر." },
      description: { en: "Practical clinical writing from Bright. No promotions, no urgency. Subscribe if you want one thoughtful note in your inbox monthly.", ar: "كتابات سريرية عملية من برايت. لا إعلانات، لا استعجال. اشتركي إذا أردتِ ملاحظةً واحدة هادئة في بريدكِ شهرياً." },
      placeholder: { en: "your@email.com", ar: "بريدكِ الإلكتروني" },
      cta: { en: "Subscribe", ar: "اشتركي" },
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
      { id: "consult", name: { en: "Free consultation", ar: "استشارة مجانية" }, duration: { en: "30 min · free", ar: "٣٠ دقيقة · مجانية" } },
      { id: "hydrafacial", name: { en: "Hydrafacial", ar: "هيدرافيشيال" }, duration: { en: "45 min", ar: "٤٥ دقيقة" } },
      { id: "full-face-filler", name: { en: "Full-face Filler", ar: "فيلر الوجه الكامل" }, duration: { en: "60 min", ar: "٦٠ دقيقة" } },
      { id: "lip-filler", name: { en: "Lip Filler", ar: "فيلر الشفاه" }, duration: { en: "30 min", ar: "٣٠ دقيقة" } },
      { id: "botox", name: { en: "Botox", ar: "البوتوكس" }, duration: { en: "30 min", ar: "٣٠ دقيقة" } },
      { id: "veneers", name: { en: "Hollywood Smile · Veneers", ar: "ابتسامة هوليوود · فينير" }, duration: { en: "2 hr", ar: "ساعتان" } },
      { id: "whitening", name: { en: "Teeth Whitening", ar: "تبييض الأسنان" }, duration: { en: "60 min", ar: "٦٠ دقيقة" } },
      { id: "laser-hair", name: { en: "Laser Hair Removal", ar: "إزالة الشعر بالليزر" }, duration: { en: "45 min", ar: "٤٥ دقيقة" } },
      { id: "plasma-prp", name: { en: "Plasma / PRP", ar: "بلازما / PRP" }, duration: { en: "45 min", ar: "٤٥ دقيقة" } },
      { id: "obgyn", name: { en: "OB/GYN consultation (female-only)", ar: "استشارة نساء وولادة (نسائي فقط)" }, duration: { en: "30 min", ar: "٣٠ دقيقة" } },
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
