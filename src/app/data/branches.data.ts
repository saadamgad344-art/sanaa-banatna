import { Branch } from '../core/models/branch.model';

export const BRANCHES: Branch[] = [
  {
    slug: 'sulaiman-farsi-riyadh',
    name: 'فرع سلمان الفارسي',
    city: 'الرياض',
    isMain: true,
    address: 'سلمان الفارسي، النهضة، الرياض 13221',
    workingHours: 'يوميًا من 12 ظهرًا حتى 12 منتصف الليل',
    phone: '+966542459137',
    whatsapp: '+966542459137',
    coordinates: { lat: 24.7644181, lng: 46.8091119 },
    googleMapsUrl: 'https://maps.app.goo.gl/mDzxzoqRGqRWoosP9',
  // سلمان الفارسي
heroImage: '/branches/s1-00.jpeg',
galleryImages: ['/branches/s1-0.jpeg','/branches/s1-00.jpeg','/branches/s1-1.jpeg', '/branches/s1-2.jpeg', '/branches/s1-3.jpeg', '/branches/s1-4.jpeg', '/branches/s1-5.jpeg', '/branches/s1-6.jpeg'],

    featuredProductIds: [],
    seo: {
      title: 'سنع بناتنا — فرع سلمان الفارسي | الرياض',
      description: 'زوروا فرع سلمان الفارسي بالرياض، حلويات ومعجنات طازجة يوميًا.',
      h1: 'فرع سلمان الفارسي — الرياض'
    }
  },
  {
    slug: 'dharma',
    name: 'فرع ضرما',
    city: 'ضرما',
    address: 'ضرما 19824',
    workingHours: 'يوميًا من 11 صباحًا حتى 11 مساءً',
    phone: '+966597993329',
    whatsapp: '+966597993329',
    coordinates: { lat: 24.5928522, lng: 46.1458711 },
    googleMapsUrl: 'https://maps.app.goo.gl/9V9LyRRZHVSRsBwb7',
   heroImage: '/branches/s2-1.jpeg',
galleryImages: ['/branches/s2-1.jpeg', '/branches/s2-2.jpeg', '/branches/s2-3.jpeg', '/branches/s2-4.jpeg', '/branches/s2-5.jpeg', '/branches/s2-6.jpeg', '/branches/s2-7.jpeg', '/branches/s2-8.jpeg', '/branches/s2-9.jpeg'],

    featuredProductIds: [],
    seo: {
      title: 'سنع بناتنا — فرع ضرما',
      description: 'زوروا فرع ضرما، حلويات ومعجنات طازجة يوميًا.',
      h1: 'فرع ضرما'
    }
  },
  {
    slug: 'ramah',
    name: 'فرع رماح',
    city: 'رماح',
    address: 'العام، شارع، رماح 15852',
    workingHours: 'يوميًا من 4 عصرًا حتى 9 مساءً',
    phone: '+966555203266',
    whatsapp: '+966555203266',
    coordinates: { lat: 25.5509687, lng: 47.1660641 },
    googleMapsUrl: 'https://maps.app.goo.gl/iYWZewKfeBhznjqJ6',
   heroImage: '/s3.jpeg',
galleryImages: ['/s3.jpeg'],

    featuredProductIds: [],
    seo: {
      title: 'سنع بناتنا — فرع رماح',
      description: 'زوروا فرع رماح، حلويات ومعجنات طازجة يوميًا.',
      h1: 'فرع رماح'
    }
  },
  {
    slug: 'dammam',
    name: 'فرع الدمام',
    city: 'الدمام',
    address: 'شارع أبو بكر الصديق، بدر، الدمام 12472',
    workingHours: 'يوميًا من 12 ظهرًا حتى 12 منتصف الليل',
    phone: '+966561465901',
    whatsapp: '+966561465901',
    coordinates: { lat: 26.4098844, lng: 50.034071 },
    googleMapsUrl: 'https://maps.app.goo.gl/m87qdh4wPTwjnKDM9',
heroImage: '/s4.jpeg',
galleryImages: ['/branches/s4-1.jpeg', '/branches/s4-2.jpeg', '/branches/s4-3.jpeg', '/branches/s4-4.jpeg', '/branches/s4-5.jpeg', '/branches/s4-6.jpeg', '/branches/s4-7.jpeg', '/branches/s4-8.jpeg', '/branches/s4-9.jpeg'],
    featuredProductIds: [],
    seo: {
      title: 'سنع بناتنا — فرع الدمام',
      description: 'زوروا فرع الدمام، حلويات ومعجنات طازجة يوميًا.',
      h1: 'فرع الدمام'
    }
  }
];