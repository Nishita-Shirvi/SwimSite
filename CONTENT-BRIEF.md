# Sofpour — Content Brief

Source: https://sofpour.com (WordPress/Elementor). Used as a **content reference only** —
new site gets a fresh design + codebase.

## Brand

- **Name:** Sofpour
- **Positioning:** "The leading Water Management brand of India"
- **Taglines:** "Every Drop Is Important" · "Crafting Sustainable Solutions Drop by Drop"
- **Mission:** "To provide cutting-edge water management solutions that are environmentally
  sustainable, economically viable, and socially responsible."
- **Vision:** "Lead the way in revolutionizing water management practices, inspiring a paradigm
  shift towards holistic, nature-inspired solutions."
- **Philosophy:** "Sofpour isn't just a technique; it's a philosophy that guides everything we do."
- **Strengths:** high-quality components with international technology, transparent business
  practices, trustworthy products, growing distribution network, best-in-class customer service.
- **Owners:** Piyush Goyal, Shraddha Goyal

## Product taxonomy

### Residential
**Water Softeners** — "Sofpour fully automatic water softeners provide a hassle-free solution to
all your hard water problems."

| Range | Models | Sizing |
|---|---|---|
| Aurize (premium) | 1054, 1248, 1354 | 2–3 members (as listed on source) |
| Cleora (SPA) | SPA 1248, SPA 1354, SPA 1465, SPA 1665 | 2–3 / 4–5 / 6–8 / large + small commercial |
| Zucion | ZNA-1054, ZNA-1248, ZNA-1354 | 2–3 / 4–5 / 6–8 members |
| Compact | Sofpour Junior I, Junior II | 2–3 / 4–5 members, for flats |

**Softener benefits** (from SPA 1354 page): luxurious bathing; prevents hair fall and stains;
reduces soap/shampoo/detergent consumption; eliminates plumbing scale; zero maintenance
(corrosion-resistant FRP vessels + PVC fittings); improves water heater efficiency; protects
bathroom fixtures and appliances.

**How it works:** resin media coated with sodium ions; calcium/magnesium ions exchange for sodium
as hard water passes through. Once saturated, resin is recharged with brine — "manually or
automated."

**Air Source Heat Pump Water Heaters** — "a cost effective way to meet all your hot water
requirements."

| Model | Capacity | Purpose |
|---|---|---|
| SHP 200 SE/E/H | 200 L tank, outdoor unit options | Residential, small families |
| SHP 300 SE/E/H/X | 300 L tank, outdoor unit options | Residential, small families |
| SHP 500 E/H/X | 500 L tank, outdoor unit options | Residential, large families |
| Swimming Pool Heat Pumps | Small residential → Olympic-size pools | Hotels, resorts, hospitals, industry |

### Commercial
- **Water Softener** (commercial sizing)
- **Water Heating** (commercial)
- **Industrial Water Purification** — "additional treatment of fresh water for their particular
  processes." Sub-products: Industrial RO Plant, Industrial Water Softening.
- **Pressure Boosters & Hydro Pneumatic Systems** — "ensuring constant, uniform & pressurized
  supply."

| Series | Capacity | Purpose |
|---|---|---|
| PSS Series (domestic) | 0.37–1.1 kW | Residential pressure boosting |
| FSS Series (premium residential) | 0.37–1.1 kW | Residential pressure boosting |
| Economy Series (domestic) | 0.37 kW, 0.75 kW | Domestic pressure boosting |

## Contact

- **Toll-free:** 1800 270 3701 · **Mobile:** 9755590240
- **Email:** info@sofpour.com *(masked on source page — verify)*
- **City office:** 219, Devi Ahilya New Cloth Market, Kesar Bagh Road, Indore (M.P.)
- **Registered office:** 76, Janki Nagar Extension, Near Talent School, Indore (M.P.)
- **Branch — Maharashtra:** C-705, Greenfield Society, Greenfield Road, Hadapsar, Pune
- **Branch — Madhya Pradesh:** C-177, Emerald Park City, Bagh Sevania Road, Bhopal
- **Experience Centre I:** LG-4, Samyak Park Building, 31, Nehru Park Road, Indore
- **Experience Centre II:** Scheme No. 54, Plot No. 352, beside Krozzon Bakery, PU 4, Vijay Nagar,
  Indore, MP 452001
- **Experience Centre III:** 104, Om Heights Apartment, Vyapar Vihar Rd, near Hotel Ananda
  Imperial, Bilaspur, Chhattisgarh 495001
- **Social:** facebook.com/Sofpour · instagram.com/sofpour · LinkedIn
- **Contact form fields:** Name, Phone Number, Email, Location, Message

## Blog posts on source

- Water Purification Industry: The Future Is Very Promising
- Water Softening: What It Is All About
- Solar Water Heaters: Why Should You Own a Solar Water Heater for Your Home

## Assets to pull

Logo: `/wp-content/uploads/2024/07/logo-sofpour.png`

**Videos** — the source runs five Elementor background clips (URLs live in each section's
`data-settings`, not on the `<video>` tag). All five pulled into `public/video/`:

| Source file | Local | Size | Used by |
|---|---|---|---|
| `857131-hd_1920_1080_24fps.mp4` | `hero.mp4` | 4.6 MB | Home hero backdrop |
| `Water-Softener.mp4` | `softeners.mp4` | 3.1 MB | Showcase tab + softener range hero |
| `Air-Source-Heat-Pump-Water-Heater-.mp4` | `heatpumps.mp4` | 3.2 MB | Showcase tab + range hero |
| `Industrial-Water-Purification-.mp4` | `industrial.mp4` | 3.2 MB | Showcase tab + range hero |
| `Pressure-Boosters-and-Hydro-Pneumatic-Systems.mp4` | `boosters.mp4` | 10.5 MB | Showcase tab + range hero |

~25 MB total, none of it re-encoded (no ffmpeg on this machine). Worth compressing before
launch — `boosters.mp4` especially.

Product photography lives under `/wp-content/uploads/2024/07/` and `/2024/10/` — notable:
`Premium-Series-Softener-1025x1536.jpg`, `Sofpour-SPA-1354.png`, `Sofpour-SPA-1465.png`,
`Sofpour-SPA-1665-1536x1024.png`, `pic1-scaled.jpg`, `pic2-scaled.jpg`, `pic3-scaled.jpg`,
`Sofpour-Junior-I.png`, `Sofpour-Junior-II.png`, heat-pump shots
(`4uzir4997ul6dkr8ofzx.jpg`, `1nb5qnuo31dzd77u57o1.jpg`, `frhzdur0ch7qpcb21hal.jpg`,
`emovyb2mdvo1y1eudgse.jpg`), booster pumps (`qx11nm8muubg4dqu8sa4-scaled.jpg`,
`g73rrjil9k9aefn6uzgu-scaled.jpg`, `fkt8sl791r8eblcsb1e5.jpg`), RO plant
(`0oyhoexvpm0kkrde6khf-1.jpg`).

## Content gaps (source has no data — will need you or placeholders)

- Per-model spec tables: flow rate, hardness capacity, vessel size, port size, dimensions, price
- Warranty terms · founding year · staff count · installations completed
- Real customer testimonials · certifications (ISI/CE/ISO) · dealer list
- Working hours
