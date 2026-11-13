export interface Branch {
  slug: string;
  name: string;
  city: string;
  isMain?: boolean;
  address: string;
  workingHours: string;
  phone: string;
  whatsapp: string;
  coordinates: { lat: number; lng: number };
  googleMapsUrl: string;
  heroImage: string;
  galleryImages: string[];
  featuredProductIds: string[];
  seo: {
    title: string;
    description: string;
    h1: string;
  };
}