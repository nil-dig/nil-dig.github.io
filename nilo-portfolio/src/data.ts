import {
  Clapperboard,
  PenTool,
  Code2,
  type LucideIcon,
} from 'lucide-react';

export type ServiceCategory = 'video' | 'print' | 'web';

export interface Service {
  id: string;
  pillar: string;
  title: string;
  icon: LucideIcon;
  category: ServiceCategory;
  tagline: string;
  description: string;
  offerings: string[];
}

export const services: Service[] = [
  {
    id: 'ai-video',
    pillar: 'Multimedia',
    title: 'AI Video Production',
    icon: Clapperboard,
    category: 'video',
    tagline: 'Cinema-grade promotion, generated at studio speed.',
    description:
      'High-converting AI-generated promotional videos crafted for restaurants and local businesses. Story-led concepting, premium visuals, and platform-ready edits that turn views into footfall.',
    offerings: [
      'AI-generated promo & brand films',
      'Restaurant & menu showcase reels',
      'Short-form social ad cutdowns',
      'Voiceover, sound design & motion graphics',
    ],
  },
  {
    id: 'branding-print',
    pillar: 'Graphic Design',
    title: 'Digital Branding & Print',
    icon: PenTool,
    category: 'print',
    tagline: 'Identity systems and print collateral with timeless polish.',
    description:
      'Professional pamphlets, posters, menus, exhibition posters, and corporate CVs/resumes. Every piece is designed to look considered, on-brand, and ready for the boardroom or the dining room.',
    offerings: [
      'Brand identity & visual systems',
      'Menus, pamphlets & posters',
      'Exhibition & event posters',
      'Corporate CVs & executive resumes',
    ],
  },
  {
    id: 'digital-solutions',
    pillar: 'Technology',
    title: 'Digital Solutions',
    icon: Code2,
    category: 'web',
    tagline: 'Websites and software built around how your business runs.',
    description:
      'Custom business websites and tailored management software. From reservation-ready restaurant sites to internal tooling, built to be fast, reliable, and genuinely useful.',
    offerings: [
      'Custom business websites',
      'Reservation & booking systems',
      'Tailored business management software',
      'Integrations, dashboards & automation',
    ],
  },
];

export type ProjectFilter = 'all' | 'video' | 'print' | 'web';

export interface DemoProject {
  id: string;
  title: string;
  client: string;
  category: ServiceCategory;
  filterLabel: string;
  image: string;
  concept: string;
  solution: string;
  tags: string[];
}

export const projects: DemoProject[] = [
  {
    id: 'p1',
    title: 'Gourmet Bistro — AI Promo Film',
    client: 'Gourmet Bistro',
    category: 'video',
    filterLabel: 'Video',
    image:
      'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1200',
    concept:
      'A fine-dining bistro needed a 30-second film to launch their new seasonal tasting menu across social and in-lobby screens.',
    solution:
      'AI-generated cinematic sequences paired with a scripted voiceover and warm color grading — delivered in 16:9, 1:1, and 9:16 cutdowns.',
    tags: ['AI Video', 'Restaurant', 'Social Ads'],
  },
  {
    id: 'p2',
    title: 'Apex Corp — Exhibition Poster Series',
    client: 'Apex Corp',
    category: 'print',
    filterLabel: 'Print & Design',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    concept:
      'A B2B technology firm required a cohesive poster series for a three-day industry exhibition.',
    solution:
      'A modular grid system with a restrained navy-and-gold palette, printed at A1 and adapted into digital stand signage and handouts.',
    tags: ['Print', 'Exhibition', 'Brand System'],
  },
  {
    id: 'p3',
    title: 'Maison Verte — Restaurant Website',
    client: 'Maison Verte',
    category: 'web',
    filterLabel: 'Web & Software',
    image:
      'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200',
    concept:
      'A modern European restaurant wanted a website that matched the elegance of its interior and accepted reservations directly.',
    solution:
      'A fast, image-led site with an integrated booking flow, live menu, and a private-events inquiry path — no third-party booking fees.',
    tags: ['Website', 'Reservations', 'Restaurant'],
  },
  {
    id: 'p4',
    title: 'Saffron & Smoke — Menu & Pamphlet Suite',
    client: 'Saffron & Smoke',
    category: 'print',
    filterLabel: 'Print & Design',
    image:
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200',
    concept:
      'A new grill house needed a menu, takeaway pamphlet, and opening-week poster that felt premium without feeling stiff.',
    solution:
      'A typographic system built around a single display serif, with warm photography and a flexible layout that scales from table card to A2 poster.',
    tags: ['Menu', 'Pamphlet', 'Identity'],
  },
  {
    id: 'p5',
    title: 'Lumen Events — Brand Launch Film',
    client: 'Lumen Events',
    category: 'video',
    filterLabel: 'Video',
    image:
      'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    concept:
      'An event organizer launching a new venue brand wanted a hero film for their landing page and investor deck.',
    solution:
      'AI-composed scenes of atmospheric event setups, cut to a custom score, with a 60-second hero cut and three 15-second teaser variants.',
    tags: ['AI Video', 'Events', 'Brand Launch'],
  },
  {
    id: 'p6',
    title: 'Northwind Logistics — Management Software',
    client: 'Northwind Logistics',
    category: 'web',
    filterLabel: 'Web & Software',
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    concept:
      'A regional logistics firm was tracking shipments across spreadsheets and wanted a single source of truth.',
    solution:
      'A tailored management dashboard with shipment tracking, client portals, and automated status notifications — built to run alongside their existing tools.',
    tags: ['Software', 'Dashboard', 'B2B'],
  },
  {
    id: 'p7',
    title: 'Atelier Nine — Executive CV Suite',
    client: 'Atelier Nine',
    category: 'print',
    filterLabel: 'Print & Design',
    image:
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200',
    concept:
      'A boutique consultancy needed polished executive CVs for a leadership team pitching to enterprise clients.',
    solution:
      'A restrained, editorial CV template with a matching cover sheet and reference list — designed for both PDF and print.',
    tags: ['CV', 'Resume', 'Corporate'],
  },
  {
    id: 'p8',
    title: 'Harbor & Vine — Opening Campaign Reel',
    client: 'Harbor & Vine',
    category: 'video',
    filterLabel: 'Video',
    image:
      'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200',
    concept:
      'A waterfront wine bar opening a second location wanted a launch reel to drive pre-opening reservations.',
    solution:
      'A 45-second AI-generated reel evoking golden-hour coastal mood, with a clear reservation CTA and geo-targeted social cutdowns.',
    tags: ['AI Video', 'Restaurant', 'Launch'],
  },
  {
    id: 'p9',
    title: 'Veridian Studio — Portfolio & Booking Site',
    client: 'Veridian Studio',
    category: 'web',
    filterLabel: 'Web & Software',
    image:
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    concept:
      'A creative studio needed a portfolio site that doubled as a client booking and brief-intake tool.',
    solution:
      'A minimal, project-led site with a structured intake form, calendar-linked consultations, and a private client review area.',
    tags: ['Website', 'Booking', 'Studio'],
  },
];

export const filters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'video', label: 'Video' },
  { id: 'print', label: 'Print & Design' },
  { id: 'web', label: 'Web & Software' },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'A focused conversation about your business, audience, and goals. No jargon — just a clear picture of what success looks like.',
  },
  {
    number: '02',
    title: 'Concept',
    description:
      'I translate the brief into a creative direction: visual language, tone, and structure, shared early so we align before production.',
  },
  {
    number: '03',
    title: 'Craft',
    description:
      'Design, build, and production happen with regular check-ins. You see progress at every milestone, not just at the end.',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'Polished, production-ready assets — plus the source files, guidance, and support to use them confidently.',
  },
];
