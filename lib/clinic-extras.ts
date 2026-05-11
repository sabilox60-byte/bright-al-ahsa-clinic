/**
 * CLINIC EXTRAS — signature features & structured-data fields.
 * Extends `clinic-config.ts` without touching existing pages.
 *
 * Edit per clinic. Bilingual (EN/AR) throughout.
 *
 * Sections:
 *  ① identity        — legal entity, registrations, geo
 *  ② structuredData  — for JSON-LD schema generators
 *  ③ trustVault      — verifiable credentials (Maaroof, MOH, SCFHS, SFDA, SAMA)
 *  ④ goals           — outcome-first navigation entries
 *  ⑤ saudiCalendar   — Eid / Ramadan / National Day theming
 *  ⑥ livingPulse     — real-time clinic signals
 *  ⑦ voiceConcierge  — Arabic AI voice assistant copy
 *  ⑧ aftercare       — post-treatment portal flow
 *  ⑨ pricing         — Tabby/Tamara BNPL, currency, ranges
 *  ⑩ social          — handles for AEO entity strengthening
 *  ⑪ aeo             — answer-engine optimization metadata
 */

import type { Bilingual, PortraitVariant } from "./clinic-config";

// ─────────────────────────────────────────────────────────────────────────────
// ① Identity & legal entity
// ─────────────────────────────────────────────────────────────────────────────
export interface ClinicIdentity {
  legalName: Bilingual;
  /** Saudi Commercial Registration number */
  crNumber?: string;
  /** Ministry of Health facility license number */
  mohLicense?: string;
  /** Maaroof Golden Certificate URL */
  maaroofUrl?: string;
  vatNumber?: string;
  /** Branches array — first branch is primary HQ */
  branches: Array<{
    name: Bilingual;
    address: Bilingual;
    city: Bilingual;
    region: Bilingual;
    postalCode?: string;
    countryCode: string; // e.g. "SA"
    geo: { lat: number; lng: number };
    phone: string;
    whatsapp: string;
    googleMapsUrl?: string;
    googlePlaceId?: string;
    isHQ?: boolean;
  }>;
  /** Founding year (number) */
  foundedYear: number;
  /** Number of clinic owners/partners — used in About page authority signals */
  partnerCount?: number;
  /** Total staff including doctors, nurses, admin */
  staffCount?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// ② Structured-data (JSON-LD source)
// ─────────────────────────────────────────────────────────────────────────────
export interface StructuredData {
  /** Doctor entries with SCFHS verification */
  doctors: Array<{
    slug: string;
    nameEn: string;
    nameAr: string;
    /** Saudi Commission for Health Specialties registration number */
    scfhsNumber?: string;
    medicalSpecialty: string; // e.g. "Dermatology", "MaxillofacialSurgery"
    yearsExperience?: number;
    languages: string[]; // ISO codes: "ar", "en", "fr"
    education?: string[];
    certifications?: string[];
    photoUrl?: string;
    portraitVariant?: PortraitVariant;
    bio: Bilingual;
    /** For Physician schema sameAs property */
    socialUrls?: string[];
  }>;
  /** Treatment/procedure entries with MedicalProcedure schema fields */
  procedures: Array<{
    slug: string;
    nameEn: string;
    nameAr: string;
    procedureType: string; // e.g. "Cosmetic", "Therapeutic", "Diagnostic"
    bodyLocation?: string;
    preparation?: Bilingual;
    followup?: Bilingual;
    howPerformed?: Bilingual;
    typicalDurationMinutes?: number;
    estimatedPriceMin?: number;
    estimatedPriceMax?: number;
    currency?: string; // "SAR"
  }>;
  /** Reviews used for AggregateRating schema */
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ③ Trust Vault — verifiable credentials page
// ─────────────────────────────────────────────────────────────────────────────
export interface TrustVault {
  hero: {
    eyebrow: Bilingual;
    title: Bilingual;
    titleEm: Bilingual;
    sub: Bilingual;
  };
  badges: Array<{
    id: string;
    name: Bilingual;
    issuer: Bilingual;
    description: Bilingual;
    /** Public URL where credential can be independently verified */
    verifyUrl?: string;
    /** Optional credential number to display */
    credentialNumber?: string;
    /** Icon hint: "maaroof" | "moh" | "scfhs" | "sfda" | "sama" | "vision2030" | "iso" | "custom" */
    iconKind: string;
  }>;
  philosophy: Bilingual;
  reviewsBlock: {
    eyebrow: Bilingual;
    headline: Bilingual;
    /** External Maaroof / Google reviews embed URL */
    embedUrl?: string;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ④ Goals — outcome-first navigation
// ─────────────────────────────────────────────────────────────────────────────
export interface Goal {
  slug: string; // "glow" | "contour" | "smile" | "restore" | "longevity"
  /** Single emoji-free symbol — Unicode mark like ✦ ✧ ✱ ❖ ❋ */
  symbol: string;
  name: Bilingual;
  /** Outcome-led tagline shown under name */
  tagline: Bilingual;
  /** Hero copy when user lands on /goals/[slug] */
  hero: {
    eyebrow: Bilingual;
    headlinePartA: Bilingual;
    headlineEm: Bilingual;
    sub: Bilingual;
  };
  /** Treatments mapped to this goal — references procedures by slug */
  procedureSlugs: string[];
  /** Doctor slugs recommended for this goal */
  doctorSlugs: string[];
  /** Companion goals shown in cross-sell */
  relatedSlugs?: string[];
  /** FAQ specific to this goal */
  faqs: Array<{ q: Bilingual; a: Bilingual }>;
  /** Color accent override for this goal page (CSS color) */
  accentColor?: string;
  variant: PortraitVariant;
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑤ Saudi Calendar Engine — auto-themes for occasions
// ─────────────────────────────────────────────────────────────────────────────
export interface SaudiOccasion {
  /** Stable id used in URLs and analytics */
  id: string;
  /** Display name */
  name: Bilingual;
  /** YYYY-MM-DD start of THE OCCASION (not the campaign) */
  date: string;
  /** Days BEFORE the occasion when the campaign engine activates */
  campaignWindow: number;
  /** Banner copy when campaign is live */
  banner: {
    eyebrow: Bilingual;
    line: Bilingual;
    cta: Bilingual;
  };
  /** Procedure slugs to feature during this occasion */
  featuredProcedureSlugs: string[];
  /** Color palette override during this campaign */
  palette?: {
    accent: string;
    surface: string;
  };
  /** Optional custom hero replacement for /book during this occasion */
  bookOverride?: {
    headline: Bilingual;
    sub: Bilingual;
    fastTrack: Bilingual;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑥ Living Pulse — real-time clinic signals (homepage band)
// ─────────────────────────────────────────────────────────────────────────────
export interface LivingPulseConfig {
  enabled: boolean;
  /** Static fallback when API is unreachable — must read believable */
  fallback: {
    consultationsTodayLabel: Bilingual;
    consultationsTodayValue: string; // "47"
    nextAvailableLabel: Bilingual;
    nextAvailableValue: Bilingual;
    mostBookedLabel: Bilingual;
    mostBookedValue: Bilingual;
  };
  /** Cal.com or Supabase endpoint to fetch live values from (server-side) */
  endpoint?: string;
  refreshSeconds?: number; // default 300
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑦ Voice Concierge — Arabic AI assistant
// ─────────────────────────────────────────────────────────────────────────────
export interface VoiceConciergeConfig {
  enabled: boolean;
  /** Floating button label */
  triggerLabel: Bilingual;
  /** Welcome line spoken when opened */
  greeting: Bilingual;
  /** Suggested prompts shown to user */
  suggestedPrompts: Bilingual[];
  /** ElevenLabs voice ID for Arabic Saudi female */
  voiceId?: string;
  /** Disclosure shown in modal — "AI assistant, may not have latest schedule" */
  disclosure: Bilingual;
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑧ Aftercare Portal
// ─────────────────────────────────────────────────────────────────────────────
export interface AftercareConfig {
  enabled: boolean;
  hero: {
    eyebrow: Bilingual;
    headline: Bilingual;
    sub: Bilingual;
  };
  /** Treatment-specific aftercare templates by procedure slug */
  templates: Array<{
    procedureSlug: string;
    title: Bilingual;
    immediateInstructions: Bilingual[]; // first 24h
    weekInstructions: Bilingual[]; // first 7 days
    redFlags: Bilingual[]; // when to call us
    nextStepCopy: Bilingual; // "We'll see you for follow-up in X days"
    nextStepDays: number;
  }>;
  /** Daily check-in microcopy */
  checkIn: {
    prompt: Bilingual;
    options: Array<{ value: number; label: Bilingual; emoji?: string }>;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑨ Pricing & payments
// ─────────────────────────────────────────────────────────────────────────────
export interface PricingConfig {
  currency: "SAR" | "AED" | "KWD" | "BHD" | "OMR" | "QAR" | "USD" | "EUR";
  currencySymbol: Bilingual;
  /** Tabby integration enabled — MUST honor SAR 10K cap (SAMA constraint) */
  tabby?: { enabled: boolean; minAmount?: number; maxAmount: number };
  tamara?: { enabled: boolean; minAmount?: number; maxAmount: number };
  /** Stripe / Mada / Apple Pay availability for direct payments */
  cards?: { mada: boolean; visa: boolean; mastercard: boolean; applePay: boolean };
  /** Public price-range hint shown on booking page */
  priceRangeLabel: Bilingual;
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑩ Social entity strengthening
// ─────────────────────────────────────────────────────────────────────────────
export interface SocialPresence {
  instagram?: string;
  snapchat?: string;
  tiktok?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  facebook?: string;
  /** Wikipedia URL if entity exists */
  wikipedia?: string;
  /** Wikidata Q-ID if entity exists */
  wikidata?: string;
  /** Google Knowledge Panel URL if claimed */
  googleKnowledgePanel?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑪ AEO — answer-engine optimization
// ─────────────────────────────────────────────────────────────────────────────
export interface AEOConfig {
  /** llms.txt content — markdown body */
  llmsTxt: string;
  /** Bots to explicitly allow in robots.txt */
  allowedBots: string[];
  /** Bots to explicitly deny */
  deniedBots?: string[];
  /** "Quick answer" boilerplate — used as 40-60 word intro on treatment pages */
  quickAnswerTemplate: Bilingual;
  /** Default OpenGraph image URL (1200x630) */
  ogImage: string;
  /** Default Twitter card image */
  twitterImage?: string;
  /** Twitter handle for cards */
  twitterHandle?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ⑫ Cultural privacy defaults — women-focused KSA constraint
// ─────────────────────────────────────────────────────────────────────────────
export interface PrivacyDefaults {
  /** When true, the entire site avoids identifiable patient face imagery */
  noPatientFaces: boolean;
  /** Show separate Arabic-only women-staff routing in booking flow */
  womenStaffRoutingEnabled: boolean;
  /** Allow anonymous price-range inquiry without name */
  anonymousInquiryEnabled: boolean;
  /** Default WhatsApp-first contact (versus phone-first) */
  whatsappFirst: boolean;
}

// ═════════════════════════════════════════════════════════════════════════════
// FULL EXTRAS INTERFACE
// ═════════════════════════════════════════════════════════════════════════════
export interface ClinicExtras {
  identity: ClinicIdentity;
  structuredData: StructuredData;
  trustVault: TrustVault;
  goals: Goal[];
  saudiOccasions: SaudiOccasion[];
  livingPulse: LivingPulseConfig;
  voiceConcierge: VoiceConciergeConfig;
  aftercare: AftercareConfig;
  pricing: PricingConfig;
  social: SocialPresence;
  aeo: AEOConfig;
  privacy: PrivacyDefaults;
}

// ═════════════════════════════════════════════════════════════════════════════
// DEFAULT EXPORT — placeholder values, edit per clinic
// ═════════════════════════════════════════════════════════════════════════════
export const clinicExtras: ClinicExtras = {
  identity: {
    legalName: { en: "Atelier Medical Company", ar: "شركة أتيلييه الطبية" },
    crNumber: "1010000000",
    mohLicense: "01-XXXXX",
    foundedYear: 2019,
    branches: [
      {
        name: { en: "Olaya Flagship", ar: "الفرع الرئيسي — العليا" },
        address: { en: "Olaya District, Riyadh", ar: "حي العليا، الرياض" },
        city: { en: "Riyadh", ar: "الرياض" },
        region: { en: "Riyadh Province", ar: "منطقة الرياض" },
        countryCode: "SA",
        geo: { lat: 24.7136, lng: 46.6753 },
        phone: "+966 11 000 0000",
        whatsapp: "+966 50 000 0000",
        isHQ: true,
      },
    ],
  },

  structuredData: {
    doctors: [
      {
        slug: "founder",
        nameEn: "Dr. Founder",
        nameAr: "د. المؤسِّسة",
        scfhsNumber: "00000000",
        medicalSpecialty: "Dermatology",
        yearsExperience: 12,
        languages: ["ar", "en"],
        education: ["MD, [University]"],
        certifications: ["Fellowship in aesthetic dermatology"],
        portraitVariant: "terracotta",
        bio: {
          en: "Founded the clinic on the idea that listening is, itself, a treatment.",
          ar: "أسّست العيادة على فكرة أن الإصغاء علاجٌ في حدّ ذاته.",
        },
      },
    ],
    procedures: [
      {
        slug: "botox",
        nameEn: "Botox & Dermal Fillers",
        nameAr: "البوتوكس والفيلر",
        procedureType: "Cosmetic",
        bodyLocation: "Face",
        typicalDurationMinutes: 45,
        estimatedPriceMin: 800,
        estimatedPriceMax: 3500,
        currency: "SAR",
      },
    ],
    aggregateRating: { ratingValue: 4.9, reviewCount: 324, bestRating: 5, worstRating: 1 },
  },

  trustVault: {
    hero: {
      eyebrow: { en: "✦ Verified", ar: "✦ موثَّق" },
      title: { en: "Every claim,", ar: "كل ادّعاء،" },
      titleEm: { en: "verifiable.", ar: "قابل للتحقّق." },
      sub: {
        en: "We publish our license numbers, our doctors' SCFHS registrations, and our regulatory standing — so you can check us before trusting us.",
        ar: "ننشر أرقام تراخيصنا وتسجيلات أطبّائنا في الهيئة السعودية للتخصّصات الصحية وحالتنا التنظيمية — لتتحقّقي منّا قبل أن تثقي بنا.",
      },
    },
    badges: [
      {
        id: "moh",
        name: { en: "Ministry of Health License", ar: "ترخيص وزارة الصحة" },
        issuer: { en: "Saudi Ministry of Health", ar: "وزارة الصحة السعودية" },
        description: {
          en: "Full clinic license, renewed annually.",
          ar: "ترخيص عيادة كامل، يُجدَّد سنوياً.",
        },
        credentialNumber: "01-XXXXX",
        iconKind: "moh",
      },
      {
        id: "maaroof",
        name: { en: "Maaroof Golden Certificate", ar: "شهادة معروف الذهبية" },
        issuer: { en: "Saudi Ministry of Commerce", ar: "وزارة التجارة السعودية" },
        description: {
          en: "E-business trustmark with verified consumer reviews.",
          ar: "علامة موثوقية للتجارة الإلكترونية بمراجعات مستهلكين موثَّقة.",
        },
        verifyUrl: "https://maroof.sa",
        iconKind: "maaroof",
      },
      {
        id: "sfda",
        name: { en: "SFDA-registered devices", ar: "أجهزة مسجَّلة لدى الهيئة العامة للغذاء والدواء" },
        issuer: { en: "Saudi Food & Drug Authority", ar: "الهيئة العامة للغذاء والدواء" },
        description: {
          en: "Every laser, ultrasound, and RF device on the floor is SFDA-registered.",
          ar: "كل جهاز ليزر وموجات فوق صوتية وترددات راديو لدينا مسجَّل لدى الهيئة.",
        },
        iconKind: "sfda",
      },
      {
        id: "pdpl",
        name: { en: "PDPL-compliant", ar: "متوافق مع قانون حماية البيانات" },
        issuer: { en: "SDAIA", ar: "الهيئة السعودية للبيانات والذكاء الاصطناعي" },
        description: {
          en: "Patient data stored on Saudi sovereign infrastructure. No cross-border transfers.",
          ar: "بيانات المرضى مخزّنة على بنية تحتية سعودية. لا تنقل عبر الحدود.",
        },
        iconKind: "pdpl",
      },
      {
        id: "tabby",
        name: { en: "Tabby — SAMA-licensed BNPL", ar: "تابي — التقسيط المرخَّص من ساما" },
        issuer: { en: "Saudi Central Bank", ar: "البنك المركزي السعودي" },
        description: {
          en: "Instalments up to SAR 10,000 — under the SAMA consumer-protection cap.",
          ar: "تقسيط حتى ١٠٬٠٠٠ ريال — ضمن حد حماية المستهلك من ساما.",
        },
        iconKind: "sama",
      },
    ],
    philosophy: {
      en: "Trust isn't a logo. It's a number you can verify, an authority you can call, a license number you can check.",
      ar: "الثقة ليست شعاراً. إنّها رقم تستطيعين التحقّق منه، وسلطة تستطيعين الاتصال بها، وترخيص تستطيعين فحصه.",
    },
    reviewsBlock: {
      eyebrow: { en: "✦ External reviews", ar: "✦ مراجعات خارجية" },
      headline: { en: "Read what others wrote, not what we wrote.", ar: "اقرئي ما كتبه الآخرون، لا ما كتبناه نحن." },
    },
  },

  goals: [
    {
      slug: "glow",
      symbol: "✦",
      name: { en: "Glow", ar: "إشراقة" },
      tagline: { en: "Brighter, calmer skin.", ar: "بشرة أكثر إشراقاً وهدوءاً." },
      hero: {
        eyebrow: { en: "✦ Goal · Glow", ar: "✦ الهدف · الإشراقة" },
        headlinePartA: { en: "For the skin that feels", ar: "للبشرة التي تشعر" },
        headlineEm: { en: "tired of hiding.", ar: "بالتعب من الاختباء." },
        sub: {
          en: "From hydrafacials and chemical peels to laser rejuvenation — a single goal, multiple paths.",
          ar: "من الهيدرافيشيال والتقشير الكيميائي إلى تجديد البشرة بالليزر — هدف واحد، طُرق متعدّدة.",
        },
      },
      procedureSlugs: ["hydrafacial", "skin-rejuvenation", "chemical-peel", "mesotherapy"],
      doctorSlugs: ["founder"],
      relatedSlugs: ["restore"],
      faqs: [
        {
          q: { en: "How long until I see results?", ar: "كم من الوقت حتى أرى النتائج؟" },
          a: { en: "First glow shows after one session. Lasting brightness builds over 4–8 weeks across multiple sessions.", ar: "تظهر الإشراقة الأولى بعد جلسة واحدة. والإشراقة الدائمة تتراكم عبر ٤–٨ أسابيع وعدّة جلسات." },
        },
      ],
      accentColor: "#d4b87a",
      variant: "sand",
    },
    {
      slug: "contour",
      symbol: "❖",
      name: { en: "Contour", ar: "نحت" },
      tagline: { en: "Subtle definition without surgery.", ar: "تحديد هادئ بلا جراحة." },
      hero: {
        eyebrow: { en: "✦ Goal · Contour", ar: "✦ الهدف · النحت" },
        headlinePartA: { en: "Definition you choose,", ar: "تحديد تختاريه،" },
        headlineEm: { en: "drop by drop.", ar: "قطرة بقطرة." },
        sub: {
          en: "Filler, ultrasound, and radiofrequency for the face and body — gradual, reversible, never theatrical.",
          ar: "فيلر وموجات فوق صوتية وترددات راديو للوجه والجسم — تدريجي، قابل للعكس، بلا استعراض.",
        },
      },
      procedureSlugs: ["dermal-filler", "body-contouring", "thread-lift", "rf-tightening"],
      doctorSlugs: ["founder"],
      relatedSlugs: ["glow"],
      faqs: [
        {
          q: { en: "Will it look natural?", ar: "هل ستبدو طبيعية؟" },
          a: { en: "Yes — we work with small volumes across multiple visits. The goal is that no one notices what you did, only that you look rested.", ar: "نعم — نعمل بكميّات صغيرة عبر عدّة زيارات. الهدف ألّا يلاحظ أحد ما فعلتِ، فقط أنّكِ تبدين مرتاحة." },
        },
      ],
      accentColor: "#b8935a",
      variant: "terracotta",
    },
    {
      slug: "smile",
      symbol: "✧",
      name: { en: "Smile", ar: "ابتسامة" },
      tagline: { en: "A smile that fits your face.", ar: "ابتسامة تليق بوجهك." },
      hero: {
        eyebrow: { en: "✦ Goal · Smile", ar: "✦ الهدف · الابتسامة" },
        headlinePartA: { en: "The smile we build", ar: "الابتسامة التي نصنعها" },
        headlineEm: { en: "is the smile you keep.", ar: "هي الابتسامة التي تبقى لكِ." },
        sub: {
          en: "Veneers, whitening, alignment — designed around your face, not a template.",
          ar: "فينير وتبييض وتقويم — مصمَّمة حول وجهكِ، لا حول قالب.",
        },
      },
      procedureSlugs: ["veneers", "whitening", "smile-design", "implants"],
      doctorSlugs: [],
      relatedSlugs: ["glow"],
      faqs: [],
      accentColor: "#9a7847",
      variant: "sand",
    },
    {
      slug: "restore",
      symbol: "❋",
      name: { en: "Restore", ar: "استعادة" },
      tagline: { en: "Repair, recovery, and rest.", ar: "إصلاح، تعافٍ، وراحة." },
      hero: {
        eyebrow: { en: "✦ Goal · Restore", ar: "✦ الهدف · الاستعادة" },
        headlinePartA: { en: "After the noise,", ar: "بعد الضجيج،" },
        headlineEm: { en: "the quiet work.", ar: "العمل الهادئ." },
        sub: {
          en: "Post-acne, post-procedure, post-sun — protocols designed around what skin needs to come back.",
          ar: "بعد حب الشباب، بعد الإجراءات، بعد الشمس — بروتوكولات مصمَّمة حول ما تحتاجه البشرة لتعود.",
        },
      },
      procedureSlugs: ["acne-therapy", "scar-revision", "post-sun-recovery"],
      doctorSlugs: [],
      relatedSlugs: ["glow"],
      faqs: [],
      accentColor: "#7a8471",
      variant: "sage",
    },
    {
      slug: "longevity",
      symbol: "✱",
      name: { en: "Longevity", ar: "طول العمر" },
      tagline: { en: "Care that compounds.", ar: "رعاية تتراكم." },
      hero: {
        eyebrow: { en: "✦ Goal · Longevity", ar: "✦ الهدف · طول العمر" },
        headlinePartA: { en: "What you do today,", ar: "ما تفعلينه اليوم،" },
        headlineEm: { en: "your skin will remember.", ar: "ستتذكّره بشرتكِ." },
        sub: {
          en: "Preventive protocols and yearly diagnostics — for skin you want to keep, not just fix.",
          ar: "بروتوكولات وقائية وتشخيصات سنوية — لبشرة تريدين الاحتفاظ بها، لا فقط إصلاحها.",
        },
      },
      procedureSlugs: ["skin-imaging", "diagnostic-testing", "preventive-protocol"],
      doctorSlugs: [],
      relatedSlugs: ["glow"],
      faqs: [],
      accentColor: "#0a1f2e",
      variant: "dark",
    },
  ],

  saudiOccasions: [
    {
      id: "ramadan-2026",
      name: { en: "Ramadan 1447", ar: "رمضان ١٤٤٧" },
      date: "2026-02-17",
      campaignWindow: 30,
      banner: {
        eyebrow: { en: "✦ Ramadan window open", ar: "✦ نافذة رمضان مفتوحة" },
        line: { en: "Pre-Ramadan rituals — gentle protocols before the month begins.", ar: "طقوس ما قبل رمضان — بروتوكولات لطيفة قبل بداية الشهر." },
        cta: { en: "See Ramadan menu", ar: "تصفّحي قائمة رمضان" },
      },
      featuredProcedureSlugs: ["hydrafacial", "skin-rejuvenation"],
    },
    {
      id: "eid-al-fitr-2026",
      name: { en: "Eid Al-Fitr 1447", ar: "عيد الفطر ١٤٤٧" },
      date: "2026-03-19",
      campaignWindow: 19,
      banner: {
        eyebrow: { en: "✦ Eid Al-Fitr — booking window", ar: "✦ عيد الفطر — نافذة الحجز" },
        line: { en: "Same-day confirmations for Eid week. Slots fill 2 weeks ahead.", ar: "تأكيدات في نفس اليوم لأسبوع العيد. المواعيد تُحجز قبل أسبوعين." },
        cta: { en: "Book Eid slot", ar: "احجزي موعد العيد" },
      },
      featuredProcedureSlugs: ["hydrafacial", "veneers", "whitening", "dermal-filler"],
    },
    {
      id: "eid-al-adha-2026",
      name: { en: "Eid Al-Adha 1447", ar: "عيد الأضحى ١٤٤٧" },
      date: "2026-05-27",
      campaignWindow: 19,
      banner: {
        eyebrow: { en: "✦ Eid Al-Adha — fast-track booking", ar: "✦ عيد الأضحى — حجز سريع" },
        line: { en: "19 days until Eid. Slots filling — same-day confirmation.", ar: "١٩ يوماً حتى العيد. المواعيد تمتلئ — تأكيد في نفس اليوم." },
        cta: { en: "Reserve Eid time", ar: "احجزي وقت العيد" },
      },
      featuredProcedureSlugs: ["hydrafacial", "veneers", "whitening", "dermal-filler", "skin-rejuvenation"],
      bookOverride: {
        headline: { en: "Eid week — fast-track", ar: "أسبوع العيد — حجز سريع" },
        sub: { en: "Skip the questions. Pick a slot, we confirm in 11 minutes.", ar: "تجاوزي الأسئلة. اختاري موعداً، نؤكّده في ١١ دقيقة." },
        fastTrack: { en: "Eid fast-track", ar: "حجز عيد سريع" },
      },
    },
    {
      id: "saudi-national-day-2026",
      name: { en: "Saudi National Day", ar: "اليوم الوطني السعودي" },
      date: "2026-09-23",
      campaignWindow: 14,
      banner: {
        eyebrow: { en: "✦ National Day window", ar: "✦ نافذة اليوم الوطني" },
        line: { en: "Two weeks of pride — and a few quiet rituals before the celebrations.", ar: "أسبوعان من الفخر — وقليل من الطقوس الهادئة قبل الاحتفالات." },
        cta: { en: "Book National Day", ar: "احجزي لليوم الوطني" },
      },
      featuredProcedureSlugs: ["hydrafacial", "dermal-filler"],
    },
    {
      id: "founding-day-2026",
      name: { en: "Founding Day", ar: "يوم التأسيس" },
      date: "2026-02-22",
      campaignWindow: 14,
      banner: {
        eyebrow: { en: "✦ Founding Day", ar: "✦ يوم التأسيس" },
        line: { en: "Heritage week — quiet protocols rooted in Najdi calm.", ar: "أسبوع الإرث — بروتوكولات هادئة متجذّرة في الهدوء النجدي." },
        cta: { en: "See Founding menu", ar: "تصفّحي قائمة التأسيس" },
      },
      featuredProcedureSlugs: ["hydrafacial", "skin-rejuvenation"],
    },
    {
      id: "school-start-2026",
      name: { en: "Back-to-school", ar: "العودة للمدارس" },
      date: "2026-08-23",
      campaignWindow: 21,
      banner: {
        eyebrow: { en: "✦ Mom-time window", ar: "✦ نافذة وقت الأمّهات" },
        line: { en: "Three weeks before school starts — that hour is for you.", ar: "ثلاثة أسابيع قبل بداية الدراسة — تلك الساعة لكِ." },
        cta: { en: "Book mom-time", ar: "احجزي وقتكِ" },
      },
      featuredProcedureSlugs: ["hydrafacial", "dermal-filler", "body-contouring"],
    },
  ],

  livingPulse: {
    enabled: true,
    fallback: {
      consultationsTodayLabel: { en: "Today at the clinic", ar: "اليوم في العيادة" },
      consultationsTodayValue: "—",
      nextAvailableLabel: { en: "Next available", ar: "أقرب موعد متاح" },
      nextAvailableValue: { en: "Tomorrow · 2:30 pm", ar: "غداً · ٢:٣٠ مساءً" },
      mostBookedLabel: { en: "Most booked this week", ar: "الأكثر حجزاً هذا الأسبوع" },
      mostBookedValue: { en: "Hydrafacial", ar: "هيدرافيشيال" },
    },
    refreshSeconds: 300,
  },

  voiceConcierge: {
    enabled: true,
    triggerLabel: { en: "Ask the clinic", ar: "اسألي العيادة" },
    greeting: {
      en: "Hello — ask anything. Hours, pricing range, what to expect on first visit.",
      ar: "أهلاً — اسألي أي شيء. المواعيد، نطاق الأسعار، ماذا تتوقّعين في الزيارة الأولى.",
    },
    suggestedPrompts: [
      { en: "What treatments fit my skin?", ar: "ما العلاجات التي تناسب بشرتي؟" },
      { en: "What's open for Eid week?", ar: "ما المتاح في أسبوع العيد؟" },
      { en: "Do you offer female-only sessions?", ar: "هل تقدّمون جلسات للنساء فقط؟" },
      { en: "Can I pay with Tabby?", ar: "هل أستطيع الدفع بتابي؟" },
    ],
    disclosure: {
      en: "AI assistant. For binding answers, message us on WhatsApp.",
      ar: "مساعد ذكاء اصطناعي. للإجابات الملزمة، راسلينا على واتساب.",
    },
  },

  aftercare: {
    enabled: true,
    hero: {
      eyebrow: { en: "✦ Aftercare", ar: "✦ ما بعد العلاج" },
      headline: { en: "Your recovery, in your pocket.", ar: "تعافيكِ في جيبكِ." },
      sub: {
        en: "A private link, daily check-ins, photo upload — your clinician follows your recovery without you having to drive.",
        ar: "رابط خاص، تسجيل يومي، رفع صور — يتابع طبيبكِ تعافيكِ دون أن تحتاجي للقيادة.",
      },
    },
    templates: [
      {
        procedureSlug: "botox",
        title: { en: "Botox aftercare", ar: "ما بعد البوتوكس" },
        immediateInstructions: [
          { en: "Stay upright for 4 hours — no lying flat.", ar: "ابقي منتصبة لمدة ٤ ساعات — لا استلقاء." },
          { en: "No makeup for 6 hours.", ar: "لا مكياج لمدة ٦ ساعات." },
          { en: "Avoid touching or massaging the area today.", ar: "تجنّبي لمس المنطقة أو تدليكها اليوم." },
        ],
        weekInstructions: [
          { en: "Skip strenuous exercise for 24 hours.", ar: "تجنّبي التمارين الشاقّة لمدة ٢٤ ساعة." },
          { en: "Effects begin in 3–5 days; full result by day 14.", ar: "يبدأ التأثير خلال ٣–٥ أيام؛ النتيجة الكاملة في اليوم ١٤." },
        ],
        redFlags: [
          { en: "Persistent drooping or asymmetry beyond expected.", ar: "ترهّل مستمر أو عدم تناظر أكثر من المتوقع." },
          { en: "Severe headache, vision changes, or difficulty swallowing.", ar: "صداع شديد، تغيّر في الرؤية، أو صعوبة في البلع." },
        ],
        nextStepCopy: { en: "We'll see you for follow-up in 2 weeks.", ar: "سنراكِ للمتابعة بعد أسبوعين." },
        nextStepDays: 14,
      },
    ],
    checkIn: {
      prompt: { en: "How does it feel today?", ar: "كيف تشعرين اليوم؟" },
      options: [
        { value: 1, label: { en: "Sore", ar: "مؤلم" } },
        { value: 2, label: { en: "Tender", ar: "حسّاس" } },
        { value: 3, label: { en: "Calm", ar: "هادئ" } },
        { value: 4, label: { en: "Better", ar: "أفضل" } },
        { value: 5, label: { en: "Wonderful", ar: "رائع" } },
      ],
    },
  },

  pricing: {
    currency: "SAR",
    currencySymbol: { en: "SAR", ar: "ر.س" },
    tabby: { enabled: true, maxAmount: 10000 },
    tamara: { enabled: true, maxAmount: 10000 },
    cards: { mada: true, visa: true, mastercard: true, applePay: true },
    priceRangeLabel: {
      en: "Most consultations: 200–400 SAR · treatments from 800 SAR",
      ar: "معظم الاستشارات: ٢٠٠–٤٠٠ ر.س · العلاجات تبدأ من ٨٠٠ ر.س",
    },
  },

  social: {
    instagram: "@atelier",
    snapchat: "@atelier",
    twitter: "@atelier",
  },

  aeo: {
    llmsTxt: `# Atelier Clinic

> Premium aesthetic medicine in Riyadh — dermatology, cosmetic dentistry, and medspa.

## Authoritative pages
- [Departments](/services): full treatment menu
- [Doctors](/doctors): clinician roster with credentials
- [Trust](/trust): license numbers, regulatory standing
- [FAQ](/faq): direct answers to common questions
- [Booking](/booking): same-day confirmation

## About
Atelier opened in 2019. Specialist-led, bilingual care. Licensed by the Saudi Ministry of Health. Maaroof Golden Certificate. Devices SFDA-registered. PDPL-compliant.
`,
    allowedBots: [
      "GPTBot",
      "ClaudeBot",
      "PerplexityBot",
      "ChatGPT-User",
      "OAI-SearchBot",
      "Google-Extended",
      "Googlebot",
      "Bingbot",
      "Applebot",
      "BingPreview",
      "FacebookExternalHit",
      "Twitterbot",
      "LinkedInBot",
      "Anthropic-AI",
    ],
    deniedBots: ["CCBot", "GPTBot-User"],
    quickAnswerTemplate: {
      en: "A 40-60 word direct answer goes here. Lead with what the treatment is, who it's for, and the typical session duration. Keep clinical claims modest and verifiable. End with a single sentence on what makes our protocol different.",
      ar: "إجابة مباشرة من ٤٠–٦٠ كلمة هنا. ابدئي بما هو العلاج، ولمن، ومدّة الجلسة. حافظي على الادّعاءات الطبية متواضعة وقابلة للتحقّق. اختمي بجملة واحدة عمّا يميّز بروتوكولنا.",
    },
    ogImage: "/og-default.jpg",
    twitterImage: "/og-default.jpg",
    twitterHandle: "@atelier",
  },

  privacy: {
    noPatientFaces: true,
    womenStaffRoutingEnabled: true,
    anonymousInquiryEnabled: true,
    whatsappFirst: true,
  },
};
