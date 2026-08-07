/**
 * Product catalogue, transcribed from sofpour.com.
 *
 * The source site publishes model names, sizing guidance and capacities but no
 * full specification tables. Where a spec is genuinely unknown it is simply
 * absent rather than invented — see `specsPending` on each range.
 */

export type Model = {
  slug: string
  name: string
  /** Short sizing line as written on the source site. */
  suits: string
  image: string
  imageAlt: string
  specs?: { label: string; value: string }[]
}

export type Range = {
  slug: string
  name: string
  /** Marketing line for cards and hero copy. */
  summary: string
  /** Longer body copy for the range page. */
  description: string
  segment: 'residential' | 'commercial' | 'both'
  heroImage: string
  heroImageAlt: string
  models: Model[]
  /** True when the source site publishes no detailed spec tables. */
  specsPending: boolean
}

export const softenerBenefits = [
  'A noticeably more luxurious bath and shower',
  'Less hair fall and fewer stains on cars, glass and tiles',
  'Lower soap, shampoo and detergent consumption',
  'No scale build-up in plumbing lines',
  'Zero maintenance — corrosion-resistant FRP vessels and PVC fittings',
  'Better water heater efficiency and lower running cost',
  'Longer life for bathroom fixtures and appliances',
] as const

export const softenerProcess = [
  {
    step: 'Hard water enters',
    body: 'Incoming supply carrying dissolved calcium and magnesium — the minerals responsible for scale — flows into the resin vessel.',
  },
  {
    step: 'Ion exchange',
    body: 'The resin media is coated with sodium ions. As water passes through, calcium and magnesium swap places with sodium and stay behind on the resin.',
  },
  {
    step: 'Soft water out',
    body: 'What leaves the vessel is soft water: no hardness minerals, no scale, and far kinder to skin, hair, fabric and appliances.',
  },
  {
    step: 'Regeneration',
    body: 'Once the resin saturates, a brine solution flushes the collected hardness to drain and recharges the sodium. This can be done manually or fully automatically.',
  },
] as const

export const ranges: Range[] = [
  {
    slug: 'water-softeners',
    name: 'Water Softeners',
    summary:
      'Fully automatic softeners that solve hard water at the source — for a single flat or a whole house.',
    description:
      'Sofpour fully automatic water softeners provide a hassle-free solution to all your hard water problems. Four ranges cover everything from a two-bedroom flat to a small commercial establishment, all built on corrosion-resistant FRP vessels and PVC fittings so there is effectively nothing to maintain.',
    segment: 'residential',
    heroImage: '/img/softeners/aurize-premium.webp',
    heroImageAlt: 'Sofpour premium series water softener installed against a tiled wall',
    specsPending: true,
    models: [
      {
        slug: 'aurize',
        name: 'Aurize',
        suits: 'Premium series — models 1054, 1248 and 1354',
        image: '/img/softeners/aurize-premium.webp',
        imageAlt: 'Sofpour Aurize premium series water softener',
        specs: [
          { label: 'Models', value: '1054 · 1248 · 1354' },
          { label: 'Positioning', value: 'Premium residential' },
          { label: 'Control', value: 'Fully automatic' },
        ],
      },
      {
        slug: 'cleora',
        name: 'Cleora',
        suits: 'SPA series — from 2–3 members up to small commercial',
        image: '/img/softeners/cleora-1354.webp',
        imageAlt: 'Sofpour Cleora SPA series water softener',
        specs: [
          { label: 'SPA 1248', value: 'Ideal for 2–3 family members' },
          { label: 'SPA 1354', value: 'Ideal for 4–5 family members' },
          { label: 'SPA 1465', value: 'Ideal for 6–8 family members' },
          { label: 'SPA 1665', value: 'Large families and small commercial' },
        ],
      },
      {
        slug: 'zucion',
        name: 'Zucion',
        suits: 'ZNA series — 1054, 1248 and 1354',
        image: '/img/softeners/zucion-1354.webp',
        imageAlt: 'Sofpour Zucion ZNA series water softener',
        specs: [
          { label: 'ZNA-1054', value: 'Ideal for 2–3 family members' },
          { label: 'ZNA-1248', value: 'Ideal for 4–5 family members' },
          { label: 'ZNA-1354', value: 'Ideal for 6–8 family members' },
        ],
      },
      {
        slug: 'compact',
        name: 'Compact',
        suits: 'Sofpour Junior I and II — purpose-built for flats',
        image: '/img/softeners/junior-1.webp',
        imageAlt: 'Sofpour Junior compact water softener for apartments',
        specs: [
          { label: 'Junior I', value: 'Ideal for 2–3 family members in flats' },
          { label: 'Junior II', value: 'Ideal for 4–5 family members in flats' },
        ],
      },
    ],
  },
  {
    slug: 'heat-pump-water-heaters',
    name: 'Air Source Heat Pump Water Heaters',
    summary:
      'A cost-effective way to meet all your hot water requirements — from a family bathroom to an Olympic pool.',
    description:
      'Air source heat pumps move heat rather than generate it, which is why they meet the same hot water demand at a fraction of the running cost of a conventional geyser. Sofpour supplies storage systems from 200 to 500 litres for homes, and dedicated pool heat pumps for hotels, resorts, hospitals and industry.',
    segment: 'both',
    heroImage: '/img/heatpumps/shp-300.webp',
    heroImageAlt: 'Sofpour air source heat pump water heater with storage tank',
    specsPending: true,
    models: [
      {
        slug: 'shp-200',
        name: 'SHP 200 SE/E/H',
        suits: 'Residential water heating for small families',
        image: '/img/heatpumps/shp-200.webp',
        imageAlt: 'Sofpour SHP 200 heat pump water heater',
        specs: [
          { label: 'Storage', value: '200 litres' },
          { label: 'Variants', value: 'SE · E · H' },
          { label: 'Outdoor unit', value: 'Optional' },
        ],
      },
      {
        slug: 'shp-300',
        name: 'SHP 300 SE/E/H/X',
        suits: 'Residential water heating for small families',
        image: '/img/heatpumps/shp-300.webp',
        imageAlt: 'Sofpour SHP 300 heat pump water heater',
        specs: [
          { label: 'Storage', value: '300 litres' },
          { label: 'Variants', value: 'SE · E · H · X' },
          { label: 'Outdoor unit', value: 'Optional' },
        ],
      },
      {
        slug: 'shp-500',
        name: 'SHP 500 E/H/X',
        suits: 'Residential water heating for large families',
        image: '/img/heatpumps/shp-500.webp',
        imageAlt: 'Sofpour SHP 500 heat pump water heater',
        specs: [
          { label: 'Storage', value: '500 litres' },
          { label: 'Variants', value: 'E · H · X' },
          { label: 'Outdoor unit', value: 'Optional' },
        ],
      },
      {
        slug: 'pool-heat-pumps',
        name: 'Swimming Pool Heat Pumps',
        suits: 'Hotels, resorts, hospitals and industry',
        image: '/img/heatpumps/pool.webp',
        imageAlt: 'Sofpour swimming pool heat pump unit',
        specs: [
          { label: 'Range', value: 'Small residential pools to Olympic size' },
          { label: 'Typical use', value: 'Hospitality, healthcare, industrial' },
        ],
      },
    ],
  },
  {
    slug: 'industrial-water-purification',
    name: 'Industrial Water Purification',
    summary:
      'Additional treatment of fresh water, engineered around what your particular process actually needs.',
    description:
      'Industries rarely need "clean" water in the abstract — they need water at a specific quality for a specific process. Sofpour designs and installs industrial RO plants and bulk softening systems sized to the process they feed, whether that is a boiler, a production line or a bottling operation.',
    segment: 'commercial',
    // NEEDS-ASSET: the source RO plant photo 404s. Falling back to a softener shot.
    heroImage: '/img/softeners/spa-1354-detail.webp',
    heroImageAlt: 'Sofpour water treatment installation',
    specsPending: true,
    models: [
      {
        slug: 'industrial-ro-plant',
        name: 'Industrial RO Plant',
        suits: 'Process water, boiler feed and bottling operations',
        image: '/img/softeners/spa-1354-detail.webp',
        imageAlt: 'Industrial reverse osmosis plant',
      },
      {
        slug: 'industrial-water-softening',
        name: 'Industrial Water Softening',
        suits: 'Bulk softening for commercial and industrial demand',
        image: '/img/softeners/cleora-1665.webp',
        imageAlt: 'Large capacity industrial water softening vessel',
      },
    ],
  },
  {
    slug: 'pressure-boosters',
    name: 'Pressure Boosters & Hydro Pneumatic Systems',
    summary:
      'Constant, uniform and pressurised supply to every outlet — no matter which floor it is on.',
    description:
      'Weak flow on the top floor is a pressure problem, not a plumbing one. Sofpour pressure boosters and hydro pneumatic systems hold a steady, uniform pressure across every outlet in the building, so a shower behaves the same way whether or not the tap downstairs is running.',
    segment: 'both',
    heroImage: '/img/boosters/pss.webp',
    heroImageAlt: 'Sofpour PSS series domestic pressure booster pump',
    specsPending: true,
    models: [
      {
        slug: 'pss-series',
        name: 'PSS Series',
        suits: 'Domestic pressure booster pump',
        image: '/img/boosters/pss.webp',
        imageAlt: 'Sofpour PSS series pressure booster pump',
        specs: [
          { label: 'Capacity', value: '0.37 kW – 1.1 kW' },
          { label: 'Purpose', value: 'Residential water pressure boosting' },
        ],
      },
      {
        slug: 'fss-series',
        name: 'FSS Series',
        suits: 'Premium residential pressure booster pump',
        image: '/img/boosters/fss.webp',
        imageAlt: 'Sofpour FSS series premium pressure booster pump',
        specs: [
          { label: 'Capacity', value: '0.37 kW – 1.1 kW' },
          { label: 'Purpose', value: 'Residential water pressure boosting' },
        ],
      },
      {
        slug: 'economy-series',
        name: 'Economy Series',
        suits: 'Domestic pressure booster pump',
        image: '/img/boosters/economy.webp',
        imageAlt: 'Sofpour Economy series pressure booster pump',
        specs: [
          { label: 'Capacity', value: '0.37 kW and 0.75 kW' },
          { label: 'Purpose', value: 'Domestic water pressure boosting' },
        ],
      },
    ],
  },
]

export const getRange = (slug: string) => ranges.find((r) => r.slug === slug)

export const rangesFor = (segment: 'residential' | 'commercial') =>
  ranges.filter((r) => r.segment === segment || r.segment === 'both')
