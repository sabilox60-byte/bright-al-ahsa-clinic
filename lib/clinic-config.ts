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
    name: { en: "Atelier", ar: "أتيلييه" },
    tagline: { en: "Beauty Without Surgery.", ar: "الجمال بدون جراحة." },
    established: 2019,
  },
  contact: {
    phone: "+966 11 000 0000",
    whatsapp: "+966 50 000 0000",
    whatsappLink: "https://wa.me/966500000000",
    email: "hello@atelier-clinic.com",
    address: { en: "Olaya District, Riyadh, Saudi Arabia", ar: "حي العليا، الرياض، المملكة العربية السعودية" },
    hours: { en: "Sat – Thu · 11 AM – 9 PM", ar: "السبت – الخميس · ١١ صباحاً – ٩ مساءً" },
    parking: { en: "Dedicated parking on site", ar: "مواقف خاصة متوفرة" },
  },
  seo: {
    title: { en: "Atelier — Beauty Without Surgery", ar: "أتيلييه — الجمال بدون جراحة" },
    description: {
      en: "Premium aesthetic medicine — dermatology, cosmetic dentistry, and medspa under one roof. Specialist-led, bilingual care.",
      ar: "طبّ التجميل المتميّز — الجلدية والأسنان التجميلية والمنتجع الصحي. رعاية بإشراف الأخصائيين، بالعربية والإنجليزية.",
    },
    keywords: ["aesthetic", "dermatology", "cosmetic dentistry", "medspa", "Riyadh", "Saudi Arabia"],
  },
  navigation: {
    items: [
      { key: "services", label: { en: "Departments", ar: "الأقسام" }, href: "/services" },
      { key: "doctors", label: { en: "Clinicians", ar: "الأطباء" }, href: "/doctors" },
      { key: "gallery", label: { en: "Gallery", ar: "قبل وبعد" }, href: "/gallery" },
      { key: "about", label: { en: "About", ar: "عن العيادة" }, href: "/about" },
      { key: "journal", label: { en: "Journal", ar: "المجلّة" }, href: "/journal" },
      { key: "contact", label: { en: "Contact", ar: "تواصل" }, href: "/booking" },
    ],
    bookCta: { en: "Book on WhatsApp", ar: "احجز عبر واتساب" },
  },
  footer: {
    tagline: {
      en: "Care that reads like a good book — slow, generous, and written for you.",
      ar: "رعاية تُقرأ كأنها كتاب جيد — بطيئة، كريمة، وكُتبت من أجلك.",
    },
    chips: [
      { en: "Licensed clinic", ar: "مرخّصة" },
      { en: "Est. 2019", ar: "منذ ٢٠١٩" },
    ],
    columns: [
      {
        title: { en: "Departments", ar: "الأقسام" },
        links: [
          { label: { en: "Dermatology", ar: "الجلدية" }, href: "/services" },
          { label: { en: "Cosmetic Dentistry", ar: "الأسنان التجميلية" }, href: "/services" },
          { label: { en: "Medspa", ar: "المنتجع الصحي" }, href: "/services" },
          { label: { en: "Body Contouring", ar: "نحت الجسم" }, href: "/services" },
        ],
      },
      {
        title: { en: "The Clinic", ar: "العيادة" },
        links: [
          { label: { en: "About", ar: "عن العيادة" }, href: "/about" },
          { label: { en: "Clinicians", ar: "الأطباء" }, href: "/doctors" },
          { label: { en: "Gallery", ar: "قبل وبعد" }, href: "/gallery" },
          { label: { en: "Reviews", ar: "آراء" }, href: "/reviews" },
        ],
      },
      {
        title: { en: "Contact", ar: "تواصل" },
        links: [
          { label: { en: "Book on WhatsApp", ar: "احجز عبر واتساب" }, href: "/booking" },
          { label: { en: "WhatsApp", ar: "واتساب" }, href: "/booking" },
          { label: { en: "Location", ar: "العنوان" }, href: "/booking" },
          { label: { en: "Hours", ar: "المواعيد" }, href: "/booking" },
        ],
      },
    ],
    colophon: {
      en: "Set in Source Serif 4, Cormorant Garamond, Italiana & Inter Tight.",
      ar: "خُطّت بـ Source Serif 4 و Cormorant Garamond و Italiana و Inter Tight.",
    },
  },

  // ══ HOMEPAGE SECTIONS ═══════════════════════════════════════════════════
  hero: {
    eyebrow: { en: "✦ Established 2019", ar: "✦ منذ ٢٠١٩" },
    headlinePartA: { en: "Beauty Without", ar: "الجمال" },
    headlineEm: { en: "Surgery.", ar: "بدون" },
    headlinePartB: { en: "", ar: "جراحة." },
    leadItalic: { en: "A premium aesthetic institution, built on slow craft.", ar: "مؤسسة تجميلية متميزة، تُبنى على الحرفة البطيئة." },
    lead: {
      en: "From dermatology to cosmetic dentistry to medspa — three departments of trusted care under one quiet roof.",
      ar: "من الجلدية إلى الأسنان التجميلية إلى المنتجع الصحي — ثلاثة أقسام من الرعاية الموثوقة تحت سقف هادئ واحد.",
    },
    primaryCta: { en: "Book on WhatsApp", ar: "احجز عبر واتساب" },
    secondaryCta: { en: "Our departments", ar: "أقسامنا" },
    pullQuote: { en: "\"A standard, not a trend.\"", ar: "«معيار، لا موضة.»" },
    pullQuoteAttribution: { en: "Long-time patient", ar: "مريضة منذ سنوات" },
    stats: [
      { value: { en: "3 departments", ar: "٣ أقسام" }, label: { en: "Derma · Dental · Medspa", ar: "جلدية · أسنان · سبا" } },
      { value: { en: "Specialist-led", ar: "بإشراف الأخصائيين" }, label: { en: "Every consultation", ar: "كل استشارة" } },
      { value: { en: "Bilingual care", ar: "رعاية ثنائية" }, label: { en: "Arabic & English", ar: "العربية والإنجليزية" } },
    ],
  },
  marqueeStrip: {
    line1: { en: "Care that reads like a good book — slow, generous, written for you.", ar: "رعاية تُقرأ كأنها كتاب جيد — بطيئة، كريمة، وكُتبت من أجلك." },
    line2: { en: "Dermatology · Cosmetic Dentistry · Medspa", ar: "الجلدية · الأسنان التجميلية · المنتجع الصحي" },
  },
  founder: {
    chapterRoman: "II",
    chapterTitle: { en: "The founder", ar: "المؤسِّسة" },
    headlinePartA: { en: "A belief that began", ar: "إيمانٌ بدأت به" },
    headlineEm: { en: "everything.", ar: "كل شيء." },
    paragraphs: [
      {
        en: "Our practice opened with one belief — that real beauty doesn't require surgery. Years later, that belief has built a quiet institution committed to the slow craft of aesthetic medicine.",
        ar: "افتُتحت ممارستنا بإيمانٍ واحد — أنّ الجمال الحقيقي لا يحتاج إلى جراحة. وبعد سنوات، بنى ذلك الإيمان مؤسّسةً هادئة، ملتزمة بالحرفة البطيئة لطبّ التجميل.",
      },
      {
        en: "From a single dermatology room to three medical departments under one roof, the philosophy hasn't changed. Every treatment must be safe, effective, and beautiful.",
        ar: "من غرفة جلدية واحدة إلى ثلاثة أقسام طبّية تحت سقف واحد، لم تتغيّر الفلسفة. كل علاج يجب أن يكون آمناً، فعّالاً، وجميلاً.",
      },
    ],
    name: "Dr. [Founder Name]",
    role: { en: "Founder · Skin Specialist", ar: "المؤسِّسة · أخصّائية الجلدية" },
    cta: { en: "Read the full story", ar: "اقرأ القصّة كاملة" },
  },
  services: {
    eyebrow: { en: "✦ Three departments, one roof", ar: "✦ ثلاثة أقسام، سقفٌ واحد" },
    headlinePartA: { en: "Everything you need,", ar: "كلّ ما تحتاجينه،" },
    headlineEm: { en: "under one roof.", ar: "في مكانٍ واحد." },
    description: {
      en: "Three integrated medical departments, led by specialists. Dermatology, Cosmetic Dentistry, and Medspa.",
      ar: "ثلاثة أقسام طبّية متكاملة، يقودها أخصّائيون. الجلدية، والأسنان التجميلية، والمنتجع الصحي.",
    },
    items: [
      { num: "01", name: { en: "Dermatology", ar: "الجلدية" }, description: { en: "Skin science, laser, and aesthetic injectables, supervised by qualified specialists.", ar: "علم البشرة والليزر والحقن التجميلية، تحت إشراف أخصّائيين مؤهَّلين." }, variant: "terracotta" },
      { num: "02", name: { en: "Cosmetic Dentistry", ar: "الأسنان التجميلية" }, description: { en: "Smile design, veneers, and confident bites — crafted with precision.", ar: "تصميم الابتسامة، الفينير، وعضّة واثقة — مصنوعة بدقّة." }, variant: "sand" },
      { num: "03", name: { en: "Medspa", ar: "المنتجع الصحي" }, description: { en: "Curated facial protocols and massage modalities. Wellness, beauty, balance.", ar: "بروتوكولات وجه مختارة وأساليب تدليك متعددة. عافية، جمال، توازن." }, variant: "sage" },
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
    eyebrow: { en: "★★★★★ Trusted by patients", ar: "★★★★★ موثوقة من المرضى" },
    pullQuote: { en: "Trusted by families across the region.", ar: "موثوقة من العائلات في كل المنطقة." },
    items: [
      {
        quote: { en: "\"I came for a single concern and stayed for the experience. The team explained everything before doing anything.\"", ar: "«أتيت لمشكلة واحدة وبقيت من أجل التجربة. شرح لي الفريق كل شيء قبل فعل أي شيء.»" },
        name: { en: "Long-time patient", ar: "مريضة منذ سنوات" },
        role: { en: "Riyadh", ar: "الرياض" },
        variant: "terracotta",
      },
      {
        quote: { en: "\"The only place where I can do skin, dental, and a wellness session in one afternoon. Premium without the attitude.\"", ar: "«المكان الوحيد الذي يمكنني فيه إجراء علاج بشرة وأسنان وجلسة عافية في يومٍ واحد. تميّز بلا تكلّف.»" },
        name: { en: "Family patient", ar: "مريضة عائلية" },
        role: { en: "Riyadh", ar: "الرياض" },
        variant: "sage",
      },
    ],
    cta: { en: "Read all reviews", ar: "اقرأ كل الآراء" },
  },
  team: {
    eyebrow: { en: "✦ The team", ar: "✦ الفريق" },
    headlinePartA: { en: "Decades of", ar: "عقود من" },
    headlineEm: { en: "combined experience.", ar: "الخبرة المجتمعة." },
    items: [
      { name: "Dr. [Name]", tag: { en: "Skin Specialist · Founder", ar: "أخصّائية الجلدية · المؤسِّسة" }, variant: "terracotta" },
      { name: "Dr. [Name]", tag: { en: "Dermatologist · 15+ years", ar: "طبيبة جلدية · ١٥+ سنة" }, variant: "sand" },
      { name: "[Team]", tag: { en: "Therapists & Nursing", ar: "فريق العافية والتمريض" }, variant: "sage" },
    ],
  },
  bookCta: {
    eyebrow: { en: "✦ Book on WhatsApp", ar: "✦ احجز عبر واتساب" },
    headline: { en: "Reach us today.", ar: "تواصلي معنا اليوم." },
    description: { en: "Olaya District · Saturday – Thursday · 11 AM – 9 PM. We confirm same day.", ar: "حي العليا · السبت – الخميس · ١١ صباحاً – ٩ مساءً. نؤكّد في نفس اليوم." },
    primary: { en: "Book on WhatsApp", ar: "احجز عبر واتساب" },
    secondary: { en: "Call reception", ar: "اتصل بالاستقبال" },
  },
  faq: {
    eyebrow: { en: "✦ Frequent questions", ar: "✦ أسئلة متكرّرة" },
    headlinePartA: { en: "We've got", ar: "لدينا" },
    headlineEm: { en: "answers.", ar: "الإجابات." },
    description: { en: "Short answers to the questions we hear most. Don't find yours? Message us on WhatsApp.", ar: "إجابات قصيرة لأكثر الأسئلة تكراراً. لا تجدين سؤالك؟ راسلينا على واتساب." },
    cta: { en: "WhatsApp us", ar: "تواصل عبر واتساب" },
    items: [
      { q: { en: "What services do you offer?", ar: "ما الخدمات التي تقدّمونها؟" }, a: { en: "Three medical departments under one roof: Dermatology (laser, injectables, skincare), Cosmetic Dentistry (smile design, veneers, whitening), and Medspa (facial protocols and massage modalities).", ar: "ثلاثة أقسام طبّية تحت سقف واحد: الجلدية (ليزر، حقن تجميلية، علاج البشرة)، والأسنان التجميلية (تصميم الابتسامة، فينير، تبييض)، والمنتجع الصحي (بروتوكولات وجه وأساليب تدليك)." } },
      { q: { en: "How do I book an appointment?", ar: "كيف أحجز موعداً؟" }, a: { en: "WhatsApp us at the number in our contact section. We confirm same day.", ar: "راسلينا على واتساب الرقم الموجود في قسم التواصل. نؤكّد في نفس اليوم." } },
      { q: { en: "Where are you located?", ar: "أين تقعون؟" }, a: { en: "Olaya District, Riyadh, Saudi Arabia. Dedicated parking is available on site.", ar: "حي العليا، الرياض. مواقف خاصّة متوفّرة." } },
      { q: { en: "What should I expect on my first visit?", ar: "ماذا أتوقّع في زيارتي الأولى؟" }, a: { en: "A consultation with the specialist of the relevant department. We listen first, run any needed diagnostics, then propose a written plan. No commitment to treatment on the first visit.", ar: "استشارة مع أخصّائي القسم المعني. نُصغي أوّلاً، نُجري التشخيص اللازم، ثم نقترح خطّة مكتوبة. لا التزام بالعلاج في الزيارة الأولى." } },
      { q: { en: "What are your hours?", ar: "ما هي ساعات العمل؟" }, a: { en: "Saturday – Thursday, 11 AM to 9 PM. Friday closed.", ar: "السبت – الخميس، من ١١ صباحاً إلى ٩ مساءً. الجمعة مغلق." } },
    ],
  },
  journal: {
    eyebrow: { en: "✦ The Journal", ar: "✦ المجلّة" },
    headline: { en: "Notes from the team.", ar: "مقالات من الفريق." },
    description: { en: "Essays from our team on technology, practice, and the slow craft of aesthetic medicine.", ar: "مقالات من فريقنا حول التقنيات، والممارسات، والحرفة البطيئة لطبّ التجميل." },
    items: [
      { tag: { en: "Technology", ar: "تقنية" }, title: { en: "Choosing devices that age well", ar: "اختيار الأجهزة التي تشيخ بكرامة" }, date: { en: "March 2026", ar: "مارس ٢٠٢٦" }, variant: "sage" },
      { tag: { en: "Practice", ar: "علم" }, title: { en: "The science of non-surgical contouring", ar: "علم نحت الوجه بدون جراحة" }, date: { en: "March 2026", ar: "مارس ٢٠٢٦" }, variant: "terracotta" },
      { tag: { en: "Heritage", ar: "خبرة" }, title: { en: "What our patients have taught us", ar: "ما علّمنا إيّاه مرضانا" }, date: { en: "February 2026", ar: "فبراير ٢٠٢٦" }, variant: "sand" },
    ],
  },

  // ══ INNER PAGES ═══════════════════════════════════════════════════════════
  departmentsPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ Departments", ar: "✦ الأقسام" },
      title: { en: "Four departments,", ar: "أربعة أقسام،" },
      titleEm: { en: "one roof.", ar: "سقفٌ واحد." },
      sub: { en: "A full index of what we offer across Dermatology, Cosmetic Dentistry, Medspa, and our in-house Lab — since 2019.", ar: "فهرس كامل لما نقدّمه عبر الجلدية والأسنان والمنتجع الصحي والمختبر — منذ ٢٠١٩." },
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
      eyebrow: { en: "✦ Clinicians", ar: "✦ الأطباء" },
      title: { en: "The hands", ar: "الأيدي" },
      titleEm: { en: "that will care for you.", ar: "التي ستعتني بكِ." },
      sub: { en: "A small, carefully chosen team. Each of them listens first and works quietly.", ar: "فريق صغير مختار بعناية. كل واحد منهم يُصغي أوّلاً ويعمل بهدوء." },
    },
    items: [
      {
        name: "Dr. [Name]",
        role: { en: "Founder · Dermatologist", ar: "المؤسِّسة، طبيبة جلدية" },
        bio: { en: "Founded the clinic on the idea that listening is, itself, a treatment. Member of the European Academy of Dermatology.", ar: "أسّست العيادة على فكرة أن الإصغاء علاجٌ في حدّ ذاته. عضو الجمعية الأوروبية للأمراض الجلدية." },
        credentials: ["MD, [University]", "Fellowship in aesthetic dermatology", "12 years in practice"],
        variant: "terracotta",
      },
      {
        name: "Dr. [Name]",
        role: { en: "Aesthetic physician", ar: "طبيب تجميل" },
        bio: { en: "Specialist in aesthetic injectables. Believes the best work is the work you don't notice.", ar: "متخصّص في الحقن التجميلية. يعتقد أن أفضل عمل هو ذلك الذي لا يُلاحَظ." },
        credentials: ["MD, specialty in aesthetic medicine", "IMCAS certified", "8 years in practice"],
        variant: "sage",
      },
      {
        name: "Dr. [Name]",
        role: { en: "Laser specialist", ar: "أخصّائية ليزر" },
        bio: { en: "Works on protocols tailored to each skin type. No one-size-fits-all.", ar: "تعمل على بروتوكولات مخصّصة لكل نوع بشرة. لا مقاس واحد يناسب الجميع." },
        credentials: ["MD, dermatology", "Laser safety certified", "6 years in practice"],
        variant: "sand",
      },
      {
        name: "[Name]",
        role: { en: "Lead nurse practitioner", ar: "ممرِّضة أولى" },
        bio: { en: "Your eyes during every session — follow-up, explanation, reassurance.", ar: "عيناك خلال كل جلسة — تتابع، تشرح، وتطمئن." },
        credentials: ["RN, 10 years experience", "Aesthetic nursing certificate"],
        variant: "dark",
      },
    ],
  },

  aboutPage: {
    hero: {
      roman: "I",
      eyebrow: { en: "✦ About", ar: "✦ عن العيادة" },
      title: { en: "Twenty years.", ar: "عشرون عاماً." },
      titleEm: { en: "One clinic, written in chapters.", ar: "عيادة، مكتوبة في فصول." },
      sub: { en: "Atelier opened in 2019 with a single dermatology room and one belief. Today it remains one of the region's most trusted aesthetic institutions — built on the same philosophy that started it all.", ar: "افتُتحت عيادتنا عام ٢٠١٩ بغرفة جلدية واحدة وإيمانٍ واحد. اليوم، ما زالت من أكثر مؤسّسات التجميل موثوقيّةً في المنطقة." },
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
      headlinePartA: { en: "Olaya District,", ar: "حي العليا،" },
      headlineEm: { en: "Riyadh.", ar: "الرياض." },
      description: { en: "Olaya District, Riyadh, Saudi Arabia. Saturday – Thursday · 11 AM – 9 PM. Dedicated parking on site.", ar: "حي العليا، الرياض، المملكة العربية السعودية. السبت إلى الخميس · ١١ صباحاً – ٩ مساءً. مواقف خاصّة متوفّرة." },
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
