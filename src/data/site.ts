/**
 * Brand, contact and navigation content.
 *
 * Everything here is transcribed from sofpour.com. Values marked NEEDS-CONFIRM
 * were obscured or absent on the source site — check them before going live.
 */

export const brand = {
  name: 'Sofpour',
  positioning: 'The leading Water Management brand of India',
  tagline: 'Every Drop Is Important',
  subTagline: 'Crafting Sustainable Solutions Drop by Drop',
  mission:
    'To provide cutting-edge water management solutions that are environmentally sustainable, economically viable, and socially responsible.',
  vision:
    'To lead the way in revolutionising water management practices, inspiring a paradigm shift towards holistic, nature-inspired solutions.',
  philosophy:
    "Sofpour isn't just a technique; it's a philosophy that guides everything we do.",
  owners: [
    { name: 'Piyush Goyal', role: 'Owner' },
    { name: 'Shraddha Goyal', role: 'Owner' },
  ],
} as const

export const strengths = [
  {
    title: 'International technology',
    body: 'High-quality components sourced and integrated with international technology, so every unit performs the way it was engineered to.',
  },
  {
    title: 'Transparent policies',
    body: 'Strong business ethics and transparent policies — you know what you are buying, what it costs and what it will do.',
  },
  {
    title: 'Trustworthy products',
    body: 'Corrosion-resistant materials and fully automatic controls built to run for years with minimal intervention.',
  },
  {
    title: 'Growing distribution',
    body: 'An expanding distribution channel and experience centres across Madhya Pradesh, Maharashtra and Chhattisgarh.',
  },
  {
    title: 'Service that answers',
    body: 'A commitment to best-in-class customer service, backed by a toll-free line and regional branch offices.',
  },
  {
    title: 'Sustainable by design',
    body: 'Heat pump and softening technology chosen to cut running costs and energy use, not just solve the immediate problem.',
  },
] as const

export const contact = {
  tollFree: '1800 270 3701',
  mobile: '+91 97555 90240',
  /** Digits only, with country code — wa.me rejects spaces and '+'. */
  whatsapp: '919755590240',
  // NEEDS-CONFIRM: the source page masks this address behind Cloudflare.
  email: 'info@sofpour.com',
  // NEEDS-CONFIRM: not published on the source site.
  hours: 'Mon – Sat, 10:00 am – 7:00 pm',
} as const

export type Office = {
  label: string
  kind: 'head' | 'branch' | 'experience'
  address: string
  city: string
}

export const offices: Office[] = [
  {
    label: 'City Office',
    kind: 'head',
    address: '219, Devi Ahilya New Cloth Market, Kesar Bagh Road',
    city: 'Indore, Madhya Pradesh',
  },
  {
    label: 'Registered Office',
    kind: 'head',
    address: '76, Janki Nagar Extension, Near Talent School',
    city: 'Indore, Madhya Pradesh',
  },
  {
    label: 'Maharashtra Branch',
    kind: 'branch',
    address: 'C-705, Greenfield Society, Greenfield Road, Hadapsar',
    city: 'Pune, Maharashtra',
  },
  {
    label: 'Madhya Pradesh Branch',
    kind: 'branch',
    address: 'C-177, Emerald Park City, Bagh Sevania Road',
    city: 'Bhopal, Madhya Pradesh',
  },
  {
    label: 'Experience Centre I',
    kind: 'experience',
    address: 'LG-4, Samyak Park Building, 31, Nehru Park Road',
    city: 'Indore, Madhya Pradesh',
  },
  {
    label: 'Experience Centre II',
    kind: 'experience',
    address: 'Scheme No. 54, Plot No. 352, beside Krozzon Bakery, PU 4, Vijay Nagar',
    city: 'Indore, Madhya Pradesh 452001',
  },
  {
    label: 'Experience Centre III',
    kind: 'experience',
    address: '104, Om Heights Apartment, Vyapar Vihar Road, near Hotel Ananda Imperial',
    city: 'Bilaspur, Chhattisgarh 495001',
  },
]

export const socials = [
  { label: 'Facebook', href: 'https://facebook.com/Sofpour' },
  { label: 'Instagram', href: 'https://instagram.com/sofpour/' },
  // NEEDS-CONFIRM: source links to linkedin.com without a company handle.
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
] as const

export type NavItem = {
  label: string
  to: string
  children?: { label: string; to: string; description?: string }[]
}

export const navigation: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Residential',
    to: '/residential',
    children: [
      {
        label: 'Water Softeners',
        to: '/products/water-softeners',
        description: 'Aurize, Cleora, Zucion and Compact ranges',
      },
      {
        label: 'Heat Pump Water Heaters',
        to: '/products/heat-pump-water-heaters',
        description: '200 L to 500 L air source systems',
      },
    ],
  },
  {
    label: 'Commercial',
    to: '/commercial',
    children: [
      {
        label: 'Industrial Water Purification',
        to: '/products/industrial-water-purification',
        description: 'RO plants and bulk softening',
      },
      {
        label: 'Hydro Pneumatic Systems',
        to: '/products/pressure-boosters',
        description: 'Pressure boosting for constant supply',
      },
      {
        label: 'Commercial Water Heating',
        to: '/products/heat-pump-water-heaters',
        description: 'Hotels, resorts, hospitals and pools',
      },
    ],
  },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]
