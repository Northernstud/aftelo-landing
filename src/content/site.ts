/**
 * Content layer.
 *
 * All copy and structured data for the landing page lives here, kept
 * separate from presentation. Sections read from this module; they never
 * hard-code marketing copy. This is the in-most layer of the architecture:
 * nothing here imports React or any component.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  /** Short id for keys. */
  id: string;
  title: string;
  body: string;
  /** Icon name resolved by the IconBadge component. */
  icon: IconName;
}

export interface Stat {
  id: string;
  /** Numeric target the count-up animates toward. */
  value: number;
  /** Rendered after the number, e.g. "k", "%", "min". */
  suffix?: string;
  /** Rendered before the number. */
  prefix?: string;
  label: string;
  /** Some values aren't integers (e.g. 4.9 rating). */
  decimals?: number;
}

export type IconName =
  | "feather"
  | "spark"
  | "compass"
  | "waveform"
  | "lock"
  | "moon";

export interface AboutValue {
  id: string;
  icon: IconName;
  title: string;
  body: string;
}

export interface CommunityChannel {
  id: string;
  icon: IconName;
  title: string;
  body: string;
  cta: NavLink;
}

export const site = {
  brand: {
    name: "Aftelo",
    /** Used in the nav + footer mark. */
    tagline: "A journal that listens back.",
  },

  nav: {
    links: [
      { label: "How it works", href: "#how" },
      { label: "Features", href: "#features" },
      { label: "Echo", href: "#echo" },
      { label: "About", href: "#about" },
      { label: "Community", href: "#community" },
      { label: "Numbers", href: "#numbers" },
    ] as NavLink[],
    cta: { label: "Get the app", href: "#download" },
  },

  hero: {
    eyebrow: "Mental-wellness journaling",
    /** `accent` words are rendered as gradient text. */
    headlineLead: "Journal with your",
    headlineAccent: "future self.",
    sub: "Aftelo reads what you write — your entries, your goals, your patterns — and talks it through with you. A calm voice grounded in your own words, like a conversation with a wiser version of you.",
    primaryCta: { label: "Download Aftelo", href: "#download" },
    secondaryCta: { label: "See how it works", href: "#how" },
    note: "Free to start · iOS & Android · Your entries stay yours",
  },

  how: {
    eyebrow: "How it works",
    title: "Three quiet steps",
    sub: "No streaks to chase, no dashboards to manage. Write, and let Echo do the listening.",
    steps: [
      {
        n: "01",
        title: "Write what's there",
        body: "Open the app and put down whatever's on your mind — a sentence or a page. Plain text, no prompts to perform for.",
      },
      {
        n: "02",
        title: "Echo reads it back",
        body: "Echo takes in your entry alongside everything you've written before and the goals you've set, then reflects — never generic, always yours.",
      },
      {
        n: "03",
        title: "Talk it through",
        body: "Ask Echo a question, or let it ask you one. It's a conversation with someone who remembers everything you've been working toward.",
      },
    ],
  },

  features: {
    eyebrow: "What's inside",
    title: "Built for the inner life",
    sub: "Every detail is tuned for calm — quiet enough to think in, smart enough to keep up.",
    items: [
      {
        id: "grounded",
        icon: "feather",
        title: "Grounded in your words",
        body: "Echo never makes things up about you. Every reflection is anchored to entries you've actually written and goals you've actually set.",
      },
      {
        id: "memory",
        icon: "spark",
        title: "It remembers",
        body: "Months of journaling become context. Echo notices the threads you'd forget — the worry that keeps returning, the win you brushed past.",
      },
      {
        id: "goals",
        icon: "compass",
        title: "Goals that stay close",
        body: "Set what matters to you. Echo keeps your goals in view and gently connects today's entry to where you said you wanted to go.",
      },
      {
        id: "voice",
        icon: "waveform",
        title: "Speak or type",
        body: "Some days writing flows; some days it doesn't. Talk to your journal out loud and Echo meets you the same way either way.",
      },
      {
        id: "private",
        icon: "lock",
        title: "Private by design",
        body: "Your journal is yours. Entries are encrypted, never sold, never used to train anything outside your own companion.",
      },
      {
        id: "calm",
        icon: "moon",
        title: "Calm by default",
        body: "No badges, no guilt, no red dots. The whole app is built to lower your shoulders, not raise your heart rate.",
      },
    ] as Feature[],
  },

  showcase: {
    eyebrow: "The app",
    title: "Quiet on the surface, deep underneath",
    sub: "Frosted glass, deep space, one warm gradient. The same feeling whether you're writing at midnight or reading Echo back over coffee.",
    captions: [
      {
        title: "The journal",
        body: "A blank, unhurried page. Write a line or a thousand — Echo is reading either way.",
      },
      {
        title: "Echo, in conversation",
        body: "Replies that quote you back to yourself, grounded in what you actually wrote.",
      },
    ],
  },

  echo: {
    eyebrow: "Meet Echo",
    title: "The voice is yours,",
    titleAccent: "echoed forward.",
    body: "Echo isn't a chatbot wearing a wellness costume. It's the part of you that's been paying attention — patient, a little wiser, speaking from everything you've ever trusted the page with. On the hard days, it sounds like the person you're becoming. On the good ones, it helps you notice why.",
    pullquote:
      "“You wrote three weeks ago that you wanted to call your brother. You did. That mattered to you — it might be worth holding onto today.”",
    pullquoteAttribution: "— Echo, reading you back",
  },

  stats: {
    eyebrow: "The quiet proof",
    title: "Small habit, real shift",
    sub: "What people tell us after journaling with Echo for a month.",
    items: [
      { id: "entries", value: 2, suffix: "M+", label: "Entries written with Echo" },
      { id: "calmer", value: 87, suffix: "%", label: "Feel calmer after a session" },
      { id: "streak", value: 21, suffix: " days", label: "Average journaling streak" },
      { id: "rating", value: 4.9, decimals: 1, suffix: "★", label: "Average app rating" },
    ] as Stat[],
  },

  about: {
    eyebrow: "Who we are",
    title: "Built with intention, not appetite.",
    sub: "We make tools for the inner life. Every decision starts with one question: does this make the person calmer, clearer, or more themselves? If the answer is no, we don't ship it.",
    values: [
      {
        id: "intention",
        icon: "feather",
        title: "Made with intention",
        body: "We don't add features because we can. Every line of EchoMe was put there because someone on the team could feel the difference it made to a person's quiet Tuesday.",
      },
      {
        id: "private",
        icon: "lock",
        title: "Private by design",
        body: "Your journal is not a dataset. Your words train nothing, profile nothing, and go nowhere. That's not a policy — it's the architecture.",
      },
      {
        id: "noaddiction",
        icon: "moon",
        title: "No addiction by design",
        body: "We removed every dark pattern that turns a healthy habit into a compulsion. No streaks, no guilt loops, no notifications engineered to hook you. The app is meant to be put down.",
      },
    ] as AboutValue[],
  },

  community: {
    eyebrow: "Find your people",
    title: "The conversation",
    titleAccent: "keeps going.",
    body: "EchoMe is quieter than most apps, but the people building and using it are anything but. Find the community in the place that suits you.",
    channels: [
      {
        id: "discord",
        icon: "waveform",
        title: "Discord",
        body: "Live threads on journaling, product feedback, and the occasional 2 a.m. conversation about what clarity actually feels like.",
        cta: { label: "Join the server", href: "#" },
      },
      {
        id: "newsletter",
        icon: "feather",
        title: "Newsletter",
        body: "One email, every few weeks. Quiet reading on reflection, writing, and the craft of paying attention. No sales, no noise.",
        cta: { label: "Subscribe", href: "#" },
      },
      {
        id: "social",
        icon: "spark",
        title: "Twitter / X",
        body: "Product updates, small thoughts on inner life, and the occasional glimpse of what Echo said that made someone stop and breathe.",
        cta: { label: "Follow @echome", href: "#" },
      },
    ] as CommunityChannel[],
  },

  contact: {
    eyebrow: "Get in touch",
    title: "We read every word.",
    body: "There's no ticket system, no chatbot, no queue. Write to us and a person reads it — usually the same day.",
    email: "hello@echome.app",
    links: [
      { label: "Twitter / X", href: "#" },
      { label: "Press kit", href: "#" },
      { label: "Instagram", href: "#" },
    ] as NavLink[],
  },

  finalCta: {
    eyebrow: "Start tonight",
    title: "Your future self is",
    titleAccent: "already listening.",
    sub: "Write one honest line tonight. See what Echo hears in it. The first conversation is free, and it stays between the two of you.",
    primaryCta: { label: "Download Aftelo", href: "#download" },
    note: "iOS 16+ and Android 10+ · No account required to start",
  },

  footer: {
    columns: [
      {
        heading: "Product",
        links: [
          { label: "How it works", href: "#how" },
          { label: "Features", href: "#features" },
          { label: "Meet Echo", href: "#echo" },
          { label: "Download", href: "#download" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Manifesto", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Press", href: "#" },
        ],
      },
      {
        heading: "Community",
        links: [
          { label: "Discord", href: "#community" },
          { label: "Newsletter", href: "#community" },
          { label: "Twitter / X", href: "#community" },
        ],
      },
      {
        heading: "Trust",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Security", href: "#" },
          { label: "Your data", href: "#" },
          { label: "Contact", href: "#contact" },
        ],
      },
    ],
    legal: "© 2026 Aftelo. Made quietly, for the inner life.",
  },
} as const;
