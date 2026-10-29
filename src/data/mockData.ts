export interface NavItem {
  id: string;
  label: string;
  href: string;
  isAction?: boolean;
}

export interface CapsuleProduct {
  id: string;
  title: string;
  price: string;
  category: "all" | "silks" | "tailoring" | "outerwear";
  badge: string;
  material: string;
  fitNote: string;
  image: string;
  altText: string;
}

export interface BespokePhase {
  phaseNumber: string;
  phaseCode: string;
  title: string;
  subtitle: string;
  description: string;
  metadataLeft: string;
  metadataRight: string;
  image1: string;
  image2?: string;
  quote?: string;
}

export interface TextileSwatch {
  id: string;
  name: string;
  origin: string;
  gsm: string;
  drape: string;
  lusterOrFinish: { label: string; value: string };
  image: string;
}

export interface ClientReview {
  id: string;
  name: string;
  role?: string;
  location: string;
  event: string;
  garment: string;
  headline: string;
  quote: string;
  rating: number;
  image: string;
  statHighlight?: string;
}

export interface AtelierLocation {
  city: string;
  name: string;
  addressLines: string[];
  schedule: string;
}

export const NAV_LINKS: NavItem[] = [
  { id: "bespoke", label: "Atelier Bespoke", href: "#bespoke" },
  { id: "capsule", label: "Ready-to-Wear", href: "#capsule" },
  { id: "craft", label: "The Craft", href: "#craft" },
  { id: "archive", label: "Archive", href: "#archive" },
  { id: "textiles", label: "Textiles", href: "#textiles" },
];

export const HERO_DATA = {
  edition: "Spring / Summer Atelier · Edition 2025",
  headlineLine1: "Crafted to Silhouette.",
  headlineLine2: "Tailored to Move.",
  subtitle:
    "Bespoke bridal and couture commissions alongside small-batch ready-to-wear essentials, hand-finished in our London and Paris ateliers with uncompromising drape.",
  primaryCta: { label: "Commission Bespoke", href: "#booking" },
  secondaryCta: { label: "Explore The Capsule", href: "#capsule" },
  availability: "Mayfair Studio: Bespoke bookings open for Q3/Q4",
  virtualSuiteNote: "Worldwide Virtual Fitting Suites",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDgpsZ2UfpnBFQLNRXByXesoz--HssHZNkhG5a22LL5A0uYY52jdItuMDjofFGtbeiROo7LzHvf_l-fbNe6qnMOsRUoT4XPKK6158orFh2xLf7jemxdP7a3_Uoo3k3RmlEH7z2WHTuyvsGA-K9mX2-OVQSsabaWr0oHK-qnfRlgZDqdLcesfgjOt8kauxqeN_GTTerMHkr_cmwLC3RQUXyvVGsb8jHqWyB5oN3F1l3Hr2xAnfnFiZFB",
  heroAlt:
    "Editorial look of an elegant model wearing the sheer layered silk organza trench coat in an ivory minimal sunlit modern gallery archway",
  heroLookTag: "Look 04 — The Silk Organza Trench",
  monogramBadge: "Handcrafted in London",
};

export const CREDO_DATA = {
  label: "The Nerissa Atelier Credo",
  quote:
    "“Every seam begins with posture. We do not mass-produce garments; we sculpt pieces that honor presence, drape, and the quiet power of understated individuality.”",
  pillars: [
    {
      num: "01",
      columnHeader: "In-progress",
      columnIcon: "circle" as const,
      tagStatus: "In-progress",
      tagPriority: { label: "Low Tension", tone: "neutral" as const },
      title: "Proportional Architecture",
      description:
        "Every gown and suit begins with micro-anatomical posture analysis and custom draft muslins made precisely to the client's line.",
      date: "Nov 2, 2026",
      avatars: [
        { label: "PA", color: "bg-[#e8e1dd] text-[#1a1c1b]" },
        { label: "N", color: "bg-[#161412] text-white" },
      ],
      isHero: false,
    },
    {
      num: "02",
      columnHeader: "To-do",
      columnIcon: "dashed" as const,
      tagStatus: "To-do",
      tagPriority: { label: "High Drape", tone: "high" as const },
      title: "Hand-Basted Canvassing",
      description:
        "Traditional horsehair chest pieces, hand-felled French seams, and pure silk linings that respond naturally to bodily temperature.",
      date: "Oct 12, 2026",
      avatars: [
        { label: "N", color: "bg-[#161412] text-white" },
        { label: "MT", color: "bg-[#4c4640] text-white" },
        { label: "CL", color: "bg-[#cec5bd] text-[#1a1c1b]" },
      ],
      isHero: true,
    },
    {
      num: "03",
      columnHeader: "Review",
      columnIcon: "check" as const,
      tagStatus: "Review",
      tagPriority: { label: "Medium Fit", tone: "warm" as const },
      title: "Dual Fitting Workflows",
      description:
        "Private multi-session Mayfair atelier appointments paired seamlessly with global digital measurement calipers and courier toiles.",
      date: "Nov 15, 2026",
      avatars: [
        { label: "FD", color: "bg-[#e8e1dd] text-[#1a1c1b]" },
        { label: "N", color: "bg-[#161412] text-white" },
      ],
      isHero: false,
    },
  ],
};

export const CAPSULE_PRODUCTS: CapsuleProduct[] = [
  {
    id: "slip-dress",
    title: "The Bias-Cut Slip Dress",
    price: "$840 USD",
    category: "silks",
    badge: "100% Mulberry Silk",
    material: "Mulberry Silk Crêpe de Chine · Ivory Alabaster",
    fitNote: "Made to Measure",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBli5jNqU1w6u8ToAdYtMHyJPkHAXOpz07M2uKjvrf7PhLkLf9GydNzdeA08wD9dhNxCdbTUq0SAeoFohXcPZOgIJ2eGQOYvIsug2-mp_Tm4erXp_82b-k54_21FpNNlxt2x6d_jXXDc_1Ue3AfnMWn-_e3dWYlpykF7K1jQv7wF2QVZ4Redndlmgk9PnLz90Koyjq27Fd1JBBHzCcTmgkkQSQD0YKsdg-gxt5iqvecLPFdIiHC1mVP",
    altText:
      "Chic woman wearing a fluid ivory bias-cut cowl-neck mulberry silk slip maxi dress in a sunlit warm loft studio",
  },
  {
    id: "crepe-blazer",
    title: "Architectural Crepe Blazer",
    price: "$1,280 USD",
    category: "tailoring",
    badge: "Limited Edition (12 Made)",
    material: "Bonded Italian Wool Crepe · Roasted Espresso",
    fitNote: "Runs True to Fit",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkoLGUZk-X-3IpHaa1hCopr83xPmTNfIOPdmwjCVtC8e2wY0TjvXYbj6UEQjg586mGVSwiKd4oNHn414qT_FTVgzIavKYy9eNFA1nb7rrCh4zO04EpBl-JapAqswjBOcakEvD8_P1ji_zfnjQPRKENPtQC0KyWMdwuCRuM0ijKtKJZHVecT6Rr8rEw4QZgq6JFd_b_c40AxTvU-Beybfh63X0LqAi-WJN1lIXyPKYnrFoRBmrdEqY4",
    altText:
      "High-fashion model wearing an architectural deep espresso brown wool crepe power suit with sculpted waist",
  },
  {
    id: "organza-trench",
    title: "Bespoke Layered Trench",
    price: "$1,650 USD",
    category: "outerwear",
    badge: "Atelier Pre-Order",
    material: "Silk Organza & Taffeta · Alabaster Cream",
    fitNote: "Custom Sized",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbcj_9TAGN3bHRsyfzqtvPBScFOq84cJVcmKKc8VzfOgYru7CER6cgOGsimdjcrHYeOaD8pjj6zlDGcHadYJ6pnxd4r5TfspLGnurooi8BVXTMzWMlWBXro2f-JzDgbXRN86K8AENYJm3ITIE6XMHzReyK4xns7B-pLdD1J_DqKk-BwPGquqWn7inChyr-lTQFkN09IQ4pVOPDUgpeRTNIB1HnWHMLa2lGz6GZkzd3broSdZQXwcyH",
    altText:
      "Editorial look of woman in sheer layered silk organza trench coat with structured puff sleeves and tailored lapel",
  },
];

export const BESPOKE_PHASES: BespokePhase[] = [
  {
    phaseNumber: "01",
    phaseCode: "Phase 01 / Drafting",
    title: "Consultation & Form Analysis",
    subtitle: "London Atelier Studio",
    description:
      "Private silhouette consultation, bespoke body mapping of 34 distinct posture metrics, and hand-rendered watercolor croquis.",
    metadataLeft: "Documentation: 34 Anthropometric Measurements",
    metadataRight: "Croquis Ref #882",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPzHsY0ru6I9VV8fz7eayeFowiLEzHAvkcB6K_LK--qbOLtCzcy9NwNMAmIUH8Kkbw-rBH6_tUDR4AhP7JSFBUzKldZdSgRCmpU8YVpRcF8cA6OZcfQit7Asmf29KFq-4qiTiyeXNhG_wb-4O4tC7qL-J6kzLkAUuqdXCzxUKp-S8IcVvBX3-hcxW6E1vCyXq5A46oXQXL3fAYrxrKvnjUiKaZdj9vwKDt9IawG11TUWrsdI_CdoSv",
  },
  {
    phaseNumber: "02",
    phaseCode: "Phase 02 / The Toile Sculpture",
    title: "The Muslin Toile Fitting",
    subtitle: "Precision Muslin Fitting",
    description:
      "We cut a structural trial garment in calico muslin. Volume, internal boning placement, and seam balances are sculpted on your physical body.",
    metadataLeft: "Fitting Sessions: 2 to 3 In-Person / Virtual",
    metadataRight: "Calico Weight #14",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzGlLzhJnxj5PkJD2mGBDsy_z9XErdE4GDk6KRkmE2zS7XNsCji-oDz-in_5mvtbIRoTdCwojqZ305_0ql6gX6hgWboIs-fwFXZEQztvb3L5FiTKhag3LhvYHhfGEEfRHu2oSFiY3DlfipFEcSDPjfij8Q_4x2ATCy2jKhxxsQoirTkoOY7_hF8Ohr4xn8L0J-oABKik0eIPPIfDpB0gSy8CAVTxwbaRe_GZ-esDltOpqkmpWz9vfU",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLgSrLZIcIDDI4arTagTHO0bZ4DO-yZ5upnJDakyY-tjBePC_yUjz_mWmkNLIgYlfB8Z-Gq9084xosXlT4-8xXHWPLxxZKJykVQGvmdXDnrsglj2ZK3Z-PrfuYK6MOI2B6IuNLMSAoNOC2dzTcQCPD9G_MJ_WVCYVX60DAhhPTvsOZ40kVfNGrKpvpiTzRhj5E693Md7WuCTfPPE-DQd_CgdiKTNeNpwVMo2-iJ89TN76tioj9jt24",
    quote:
      "“We adjust volume millimetre by millimetre until the fabric breathes in rhythm with the client.” — Nerissa",
  },
  {
    phaseNumber: "03",
    phaseCode: "Phase 03 / Master Finishes",
    title: "Final Hand-Finished Fitting",
    subtitle: "Delivery & Archive Box",
    description:
      "Your final textiles are cut on bias or grain. French seams, interior waist stays, and weighted silk linings are completed by hand.",
    metadataLeft: "Hand-Crafted Archive Case Included",
    metadataRight: "Wax Seal Certificate",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtgYOJK7xm4yJAItB_IS1RL-eK_wZ3JinLusXcVgmbbPRJsNsPmyyHuUvC7jTF7Rcu15O8cWA_QG2ROiTizSva4mlv7ONGCQwVsiIEGer1m6dj09hKHhX6fYJ262jjDhzWuzkZtiEk5Ad2u_lV9r3j3hjKcVA9ASFhzdF5hSBhRS8moYwR1BTIH-6vGlNxOh6ykZulItVjo0xpxpBNDxJXGCWGsE8qSLH5qptjjSjV7pVR1Pnj29bV",
  },
];

export const TEXTILE_ARCHIVE: TextileSwatch[] = [
  {
    id: "mulberry-silk",
    name: "Mulberry Raw Silk",
    origin: "Como, Italy · Mill Established 1894",
    gsm: "120 GSM",
    drape: "Fluid & Caressing",
    lusterOrFinish: { label: "Luster", value: "Subdued Candlelight" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2zEH3mEn1FspApySaeQnODpvlYgUXm-cUyJphe3jU1RSig58FsFMm-MRWWQB6MaF295EQw7RDYOm1xRO_PMlHlMf4oXoy9uKdCBB6p7nDBPfQ_fVSj7tglaEL_E6bHSzNiy48zxAHvECHKjsBV5cp6bkUKzkuPUZwk8jXHNbxcI_AffaGno7H8deYaf-arwz_AS7CpIsXhTrW7W4EwkGnglpwNkYZGHtGfV5V9z2P4RvSJs_e-E6m",
  },
  {
    id: "duchesse-satin",
    name: "French Duchesse Satin",
    origin: "Lyon, France · Royal Silk Guild",
    gsm: "280 GSM",
    drape: "Heavy & Sculptural",
    lusterOrFinish: { label: "Luster", value: "Luminous Radiance" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKGj7h2IgOQKezj5w6LdvsgHg-NE75XKr87KZBYfzND96Orq2qqw-_xBThpo33jpRP-ZeO8S3mTv9soTpJXervIiRPjm55mOrWfOy50IQG3injnfv_Narzr_S3QfP9zdPs7O3Y-UoASO3dr9WZvhBVPhwMEIuuqkGlTExGiJHjVxl2QQYu1reLPMSzVx009E9rnlRKE1uXegfXm5RFGOQuimOoBs5Tg1kkuhMNMaj3LHaNgIwV-Vk5",
  },
  {
    id: "wool-crepe",
    name: "Bonded Wool Crepe",
    origin: "Biella, Italy · Pure Merino",
    gsm: "340 GSM",
    drape: "Sharp Architectural",
    lusterOrFinish: { label: "Finish", value: "Matte Granular" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnJ4_L9DnuoZLmsqcDshPSmMsF827H6XW3bykgNdkqkaY-9dbjKknxSSaE8c-fFvB6WRpVdK4OKYf55TXkbybzyac7gZMSsboLQhQUq8UC9QiZ1I9ykCmLmWGkqWc4F-AYxSyE0V9UfQKwI5d8ItWZpJVL0Y281cL_MRUCPniS4x4aRnZUzZhO76GNOo8mQ7Gr0okqT9uGMCQbXh34E6xhiw8E-bLkir6TNNfts5WB3RZNlIsLBbLT",
  },
  {
    id: "silk-organza",
    name: "Gossamer Silk Organza",
    origin: "Kyoto, Japan · Heritage Loom",
    gsm: "45 GSM",
    drape: "Airy Architectural",
    lusterOrFinish: { label: "Opacity", value: "Semi-Translucent" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxsBvffrcwYkYewgWaq7UKhv8v59_lv4drrCvyvcU_hulOAQBZUHI6Y89BQjiK5DBAjEM0NoHfKYv1KYhOnKasmB6GX1RyV_bNL8gGIBW9AbWCeB6VKYpcq2Ff7pqdOsmqTJr3EiN-z2OT1KWv-SwGmoxMfdmYGDENi2fXbUcLz2Jf-AEKPkoDJ3NTuEmcvxDIlf4GQxXSfO4hxvPLKP4usPdIvPPcTkpND2q1xdsbIUA97D4M3aQD",
  },
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: "amina",
    name: "Amina K.",
    role: "Private Patron",
    location: "London",
    event: "Bespoke Bridal Reception · Mayfair Fitting",
    garment: "Silk Mikado Gown",
    headline: "Flawless posture drape with zero tension or creasing.",
    statHighlight: "34-Point Posture Precision",
    quote:
      "“Nerissa transformed an abstract silhouette in my mind into an architectural masterpiece that felt like a second skin during our entire reception. It never creased, never pulled, and felt completely weightless.”",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBli5jNqU1w6u8ToAdYtMHyJPkHAXOpz07M2uKjvrf7PhLkLf9GydNzdeA08wD9dhNxCdbTUq0SAeoFohXcPZOgIJ2eGQOYvIsug2-mp_Tm4erXp_82b-k54_21FpNNlxt2x6d_jXXDc_1Ue3AfnMWn-_e3dWYlpykF7K1jQv7wF2QVZ4Redndlmgk9PnLz90Koyjq27Fd1JBBHzCcTmgkkQSQD0YKsdg-gxt5iqvecLPFdIiHC1mVP",
  },
  {
    id: "camille",
    name: "Camille D.",
    role: "Film Producer & Patron",
    location: "Cannes",
    event: "Film Premiere Evening · Paris Studio",
    garment: "Bespoke Crepe Suit",
    headline: "Commands the room with quiet architectural presence.",
    statHighlight: "100% Hand-Felled French Seams",
    quote:
      "“The drape of the espresso wool crepe set commands every room without saying a word. The shoulder structure provides instant presence while retaining complete ease of movement all evening.”",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkoLGUZk-X-3IpHaa1hCopr83xPmTNfIOPdmwjCVtC8e2wY0TjvXYbj6UEQjg586mGVSwiKd4oNHn414qT_FTVgzIavKYy9eNFA1nb7rrCh4zO04EpBl-JapAqswjBOcakEvD8_P1ji_zfnjQPRKENPtQC0KyWMdwuCRuM0ijKtKJZHVecT6Rr8rEw4QZgq6JFd_b_c40AxTvU-Beybfh63X0LqAi-WJN1lIXyPKYnrFoRBmrdEqY4",
  },
  {
    id: "helena",
    name: "Helena S.",
    role: "Gallery Curator",
    location: "Geneva",
    event: "Venice Biennale Gala · London Atelier",
    garment: "Gossamer Silk Trench",
    headline: "A second skin that breathes in rhythm with the body.",
    statHighlight: "Hand-Basted Pure Silk Organza",
    quote:
      "“Wearing Nerissa is an exercise in sublime tactility. The sheer silk layers shift with the light and contour effortlessly to your stride, honoring presence rather than following fleeting trends.”",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbcj_9TAGN3bHRsyfzqtvPBScFOq84cJVcmKKc8VzfOgYru7CER6cgOGsimdjcrHYeOaD8pjj6zlDGcHadYJ6pnxd4r5TfspLGnurooi8BVXTMzWMlWBXro2f-JzDgbXRN86K8AENYJm3ITIE6XMHzReyK4xns7B-pLdD1J_DqKk-BwPGquqWn7inChyr-lTQFkN09IQ4pVOPDUgpeRTNIB1HnWHMLa2lGz6GZkzd3broSdZQXwcyH",
  },
  {
    id: "margot",
    name: "Margot L.",
    role: "Architect & Collector",
    location: "Paris",
    event: "Private Salon Opening · Paris Studio",
    garment: "Sculpted Muslin Toile Gown",
    headline: "Sculptural calico toiles that eliminate all guesswork.",
    statHighlight: "Three Private Paris Toile Sessions",
    quote:
      "“As an architect, I scrutinize seam tension and structural volume. Nerissa’s muslin toile process is scientific artistry — every millimeter of bone placement was sculpted specifically to my posture.”",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPzHsY0ru6I9VV8fz7eayeFowiLEzHAvkcB6K_LK--qbOLtCzcy9NwNMAmIUH8Kkbw-rBH6_tUDR4AhP7JSFBUzKldZdSgRCmpU8YVpRcF8cA6OZcfQit7Asmf29KFq-4qiTiyeXNhG_wb-4O4tC7qL-J6kzLkAUuqdXCzxUKp-S8IcVvBX3-hcxW6E1vCyXq5A46oXQXL3fAYrxrKvnjUiKaZdj9vwKDt9IawG11TUWrsdI_CdoSv",
  },
  {
    id: "sophia",
    name: "Sophia T.",
    role: "Creative Director",
    location: "New York",
    event: "Met Gala Evening · International Fitting",
    garment: "Architectural Wool Evening Coat",
    headline: "The single most confident silhouette I have ever worn.",
    statHighlight: "Courier Toile Caliper Calibration",
    quote:
      "“Living between New York and London, the remote caliper calibration followed by the final Mayfair hand fitting was seamless. The balance across the shoulders and weighted hem is absolute perfection.”",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCzGlLzhJnxj5PkJD2mGBDsy_z9XErdE4GDk6KRkmE2zS7XNsCji-oDz-in_5mvtbIRoTdCwojqZ305_0ql6gX6hgWboIs-fwFXZEQztvb3L5FiTKhag3LhvYHhfGEEfRHu2oSFiY3DlfipFEcSDPjfij8Q_4x2ATCy2jKhxxsQoirTkoOY7_hF8Ohr4xn8L0J-oABKik0eIPPIfDpB0gSy8CAVTxwbaRe_GZ-esDltOpqkmpWz9vfU",
  },
];

export const ATELIER_LOCATIONS: AtelierLocation[] = [
  {
    city: "London",
    name: "Mayfair Atelier",
    addressLines: ["14 Savile Row", "Mayfair, London W1S 3JN", "United Kingdom"],
    schedule: "Tue – Sat: By Private Appt",
  },
  {
    city: "Paris",
    name: "Paris Studio",
    addressLines: [
      "28 Rue du Faubourg Saint-Honoré",
      "75008 Paris",
      "France",
    ],
    schedule: "Mon – Fri: By Private Appt",
  },
];

