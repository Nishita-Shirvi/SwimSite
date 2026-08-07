/**
 * Blog content carried over from sofpour.com.
 *
 * The source posts carry no publish dates and are all authored by the WordPress
 * admin account, so dates are omitted rather than fabricated. Bodies are the
 * original text, lightly corrected for typos and broken into paragraphs.
 */

export type Post = {
  slug: string
  title: string
  category: string
  excerpt: string
  /** Paragraphs of body copy. */
  body: string[]
}

export const posts: Post[] = [
  {
    slug: 'water-softening-what-it-is-all-about',
    title: 'Water softening — what it is all about',
    category: 'Water Softener',
    excerpt:
      'Hard water clogs pipes, wastes detergent and quietly adds fifteen to twenty percent to your water heating bill. Here is what softening actually does about it.',
    body: [
      'Water that contains a significant amount of calcium and magnesium is called hard water. Hard water is known to clog pipes and to complicate the process of soap and detergent dissolving in water. Water softening is a technique that serves the removal of the ions that cause the water to be hard — in most cases calcium and magnesium ions. Iron ions may also be removed during softening. The best way to soften water is to use a water softener unit and connect it directly to the water supply.',
      'A water softener is a unit that is used to soften water by removing the minerals that cause the water to be hard.',
      'Water softening is an important process, because the hardness of water in households and companies is reduced during this process. When water is hard, it can clog pipes and soap will dissolve in it less easily. Hard water causes a higher risk of lime scale deposits in household water systems. Due to this lime scale build-up, pipes are blocked and the efficiency of hot boilers and tanks is reduced. This increases the cost of domestic water heating by about fifteen to twenty percent.',
      'Another negative effect of lime scale is that it has damaging effects on household machinery, such as laundry machines. Water softening means expanding the life span of household machines and the life span of pipelines. It also contributes to the improved working and longer lifespan of solar heating systems, air conditioning units and many other water-based applications.',
      "Water softeners are specific ion exchangers that are designed to remove ions which are positively charged. Softeners mainly remove calcium (Ca2+) and magnesium (Mg2+) ions — often referred to as 'hardness minerals'. Softeners are sometimes even applied to remove iron; the devices are able to remove up to five milligrams per litre of dissolved iron. Softeners can operate automatically, semi-automatically, or manually. Each type is rated on the amount of hardness it can remove before regeneration is necessary.",
      'A water softener collects hardness minerals within its conditioning tank and from time to time flushes them away to drain. When an ion exchanger is applied for water softening, it will replace the calcium and magnesium ions in the water with other ions — for instance sodium or potassium. The exchanger ions are added to the ion exchanger reservoir as sodium and potassium salts.',
      'A good water softener will last many years. Softeners that were supplied in the 1980s may still work, and many need little maintenance beyond periodic salt replenishment.',
    ],
  },
  {
    slug: 'water-purification-industry-the-future-is-very-promising',
    title: 'Water purification industry — the future is very promising',
    category: 'Industry',
    excerpt:
      'From a standing start in 1984 to double-digit growth and water ATMs in tier-II cities — a look at where the Indian purification market is heading.',
    body: [
      'The Indian water purifiers industry began in 1984, with initially stagnant growth due to limited electricity access and low consumer purchasing capacity. Over the past two decades, expansion accelerated significantly.',
      'Between 2014 and 2019 the market experienced double-digit compound annual growth rates in both revenue and volume, driven by heightened awareness regarding water quality deterioration and the benefits of purification. Major companies invested substantially in marketing to boost product recognition. By 2018, electric water purifier penetration reached 8.7%, while non-electronic purifiers achieved 3.5% penetration.',
      'The organised sector dominates revenue at more than half the market, despite the unorganised sector commanding more than half the volume through lower pricing. Offline retail channels remain the primary revenue source, supported by established distributor networks. Online sales have grown substantially while direct sales declined. Residential users represent the largest consumer segment, followed by industrial and commercial buyers, and the western and northern regions lead in sales performance.',
      'Looking forward, point-of-use water dispensers — including coin-operated machines and RFID water ATMs — will expand across urban and tier-II cities. Purified water bottles appeal to consumers who would rather avoid the maintenance demands of a home system. Technology integration is reducing operational costs, with companies offering purified water at rates as low as fifty paise per litre through improved efficiency and optimised supply chains.',
    ],
  },
  {
    slug: 'solar-water-heaters',
    title: 'Why should you own a solar water heater for your home?',
    category: 'Water Heating',
    excerpt:
      'A 100-litre system can save around 1,000 units of electricity a year and cut a geyser bill by up to 80%. Here is how the technology works.',
    body: [
      'Solar water heaters are devices that harness solar energy to heat water for household use. There are two main system types: close-coupled systems, where the storage tank mounts directly above the roof collectors and relies on natural thermosiphon flow, and pump-circulated systems, where a ground-mounted tank requires mechanical circulation.',
      'The electricity savings are substantial. A 100-litre capacity system can save approximately 1,000 electricity units annually, and users switching from a conventional geyser can reduce monthly bills by up to 80%. The technology also reduces environmental impact by eliminating reliance on fossil fuels and coal-generated electricity.',
      'A quality solar water heater functions effectively for about twenty years. The systems maintain efficiency even during cloudy periods and winter months through backup heating mechanisms, utilising at least 80% of available solar energy.',
      'Solar water heaters significantly reduce carbon dioxide emissions and help prevent the water pollution caused by toxic metals released during fossil fuel combustion — contributing to cleaner air and cleaner water alike.',
    ],
  },
]

export const getPost = (slug: string) => posts.find((p) => p.slug === slug)
