/* ============================================================================
 * SITE CONFIGURATION — EDIT THIS FILE FIRST
 * ----------------------------------------------------------------------------
 * Everything a non-developer needs to change lives here: phone numbers,
 * addresses, hours, social links, the WhatsApp destination for bookings.
 *
 * Values marked TODO are placeholders. Search this file for "TODO" before
 * going live — `npm run typecheck` will not catch a wrong phone number, but
 * the dev-only banner in <PlaceholderNotice /> will remind you on screen.
 * ==========================================================================*/

export const site = {
  /** Short brand used in the navbar, titles and the wordmark. */
  name: 'Movement Team',
  /** Full registered/searchable name — used in schema.org and page titles. */
  legalName: 'Movement Team Physio Sports Fitness',
  /** Lockup line under the wordmark. */
  lockup: 'Physio · Sports · Fitness',

  positioning: 'Recover. Rebuild. Perform.',
  descriptor:
    '1-to-1 Physiotherapy · Advanced Recovery · Personal Training · Sports Performance',

  description:
    'A hybrid physiotherapy, recovery and human-performance centre in Ahmedabad. Every session is 1-to-1 — personalised rehabilitation, advanced recovery, strength, mobility and sports performance under one roof.',

  /** TODO: replace with the live domain once it is registered. */
  url: 'https://www.movementteam.in',

  city: 'Ahmedabad',
  region: 'Gujarat',
  country: 'IN',

  /**
   * The single number used by the header, footer and floating call button.
   * Each centre also has its own number — see `locations` below.
   *
   * ASSUMPTION: Naranpura is treated as the primary line. If Maninagar should
   * be the number visitors see site-wide, swap this for +91 97379 33336.
   */
  phone: {
    display: '+91 70966 33936',
    tel: '+917096633936',
  },

  /** WhatsApp business number, international format, digits only, no '+'. */
  whatsapp: '917096633936',

  /** TODO: real inbox — this address does not exist yet. */
  email: 'hello@movementteam.in',

  socials: {
    instagram: 'https://www.instagram.com/movement.team.physio.fitness',
    /** TODO: add if these exist, otherwise leave empty and they are hidden. */
    facebook: '',
    youtube: '',
  },

  /**
   * Google Places ID for the build-time review fetch.
   * Find it at https://developers.google.com/maps/documentation/places/web-service/place-id
   * TODO: paste the Place ID for the primary centre.
   */
  googlePlaceId: '',

  openingHours: [
    { days: 'Monday — Saturday', hours: '9:00 AM — 10:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],

  /**
   * Machine-readable equivalent, for schema.org.
   * Sunday is omitted rather than listed — an absent day means closed, which
   * is what Google expects. Do not add a Sunday entry with equal open/close.
   */
  openingHoursSpec: [
    { days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], opens: '09:00', closes: '22:00' },
  ],
} as const;

export type Location = {
  id: string;
  name: string;
  addressLines: string[];
  locality: string;
  postalCode: string;
  phoneDisplay: string;
  phoneTel: string;
  /** Google Maps embed URL (the `pb=` src from Share → Embed a map). */
  mapEmbedUrl: string;
  /** Plain link used by the "Get directions" button. */
  mapLink: string;
  note?: string;
};

/**
 * Both centres, as listed on Google.
 *
 * The map embeds are address-search based, which drops the pin on the building
 * from the postal address. For an exact pin, open your Google Business listing
 * → Share → Embed a map, and paste the `src` value from the iframe here.
 */
export const locations: Location[] = [
  {
    id: 'naranpura',
    name: 'Naranpura',
    addressLines: [
      'A/4, Second Floor, Ankur Road',
      'Near Kalupur Bank, Prahalad Society',
      'Rang Jyot Society, Naranpura',
    ],
    locality: 'Ahmedabad',
    postalCode: '380013',
    phoneDisplay: '+91 70966 33936',
    phoneTel: '+917096633936',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=A%2F4%2C%20Second%20Floor%2C%20Ankur%20Rd%2C%20near%20Kalupur%20Bank%2C%20Prahalad%20Society%2C%20Naranpura%2C%20Ahmedabad%2C%20Gujarat%20380013&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=A%2F4%2C%20Second%20Floor%2C%20Ankur%20Rd%2C%20near%20Kalupur%20Bank%2C%20Prahalad%20Society%2C%20Naranpura%2C%20Ahmedabad%2C%20Gujarat%20380013',
  },
  {
    id: 'maninagar',
    name: 'Maninagar',
    addressLines: [
      '2nd Floor, Block-A, No. 7/B',
      'Rajratna Arcade, opp. Satyam Tower',
      'Near Maninagar Railway Station Road, Maninagar',
    ],
    locality: 'Ahmedabad',
    postalCode: '380008',
    phoneDisplay: '+91 97379 33336',
    phoneTel: '+919737933336',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Rajratna%20Arcade%2C%20opp.%20Satyam%20Tower%2C%20Maninagar%20Railway%20Station%20Road%2C%20Maninagar%2C%20Ahmedabad%2C%20Gujarat%20380008&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=Rajratna%20Arcade%2C%20opp.%20Satyam%20Tower%2C%20Maninagar%20Railway%20Station%20Road%2C%20Maninagar%2C%20Ahmedabad%2C%20Gujarat%20380008',
  },
];

/**
 * True while any placeholder remains — drives the dev-only on-screen reminder.
 * Addresses, phones and hours are now real; the email and domain are not.
 */
export const hasPlaceholders =
  site.email.startsWith('hello@movementteam.in') || site.url.includes('movementteam.in');
