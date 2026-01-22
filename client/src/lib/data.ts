export const MAIN_HERO_IMAGE = "/assets/1000280934_1768329361253.jpg";

export const BRAND = {
  name: "Wave Kenya",
  email: "gracemwaniki09@gmail.com",
  phone: "+254 759 556 794",
  address: "Nairobi Kenya",
  instagram: "https://www.instagram.com/the_wave.kenya?igsh=MWVoejZ2OWNuMmM5aQ==",
  tiktok: "https://www.tiktok.com/@the_wave.kenya?_r=1&_t=ZM-934fxNIEJB5",
  description: "Modern street luxury. Rooted in authenticity and crafted with precision.",
};

export const COLLECTIONS = [
  {
    id: "vintage-revival",
    title: "Vintage Revival",
    description: "A bold nod to vintage denim, reimagined for today's wardrobe. Structured silhouettes with relaxed comfort.",
    image: "/assets/1000280940_1768329361258.jpg",
  },
  {
    id: "clean-aesthetic",
    title: "Clean Aesthetic",
    description: "Soft hue, strong statement. Where less becomes more. Clean silhouettes, muted tones, and timeless design.",
    image: "/assets/1000280936_1768329361256.jpg", 
  }
];

export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  category: string;
  collection: string;
  image: string;
  images: string[];
  isNew: boolean;
  onOffer?: boolean;
  status?: string;
  availableSizes?: string[];
}

export let PRODUCTS: Product[] = [];

export const loadProducts = async (): Promise<Product[]> => {
  const productFiles = [
    'earth-tone-maxi-dress.json',
    'dada-dress.json',
    'mocha-luxury-utility-set.json',
    'mbisu-tunic-brown.json',
    'mbisu-tunic-blue.json',
    'ocean-mist-women.json',
    'ocean-mist-men.json',
    'terracotta-kaftan-maxi.json',
    'signature-denim-set.json',
    'tie-dye-lounge-set-cream.json',
    'wave-classic-hoodie.json'
  ];

  const loadedProducts = await Promise.all(
    productFiles.map(file => fetch(`/content/products/${file}`).then(res => res.json()))
  );
  
  PRODUCTS = loadedProducts;
  return loadedProducts;
};
