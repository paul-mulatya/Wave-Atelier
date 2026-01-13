import heroImg1 from '@assets/1000280934_1768329361253.jpg';
import heroImg2 from '@assets/1000280935_1768329361255.jpg';
import heroImg3 from '@assets/1000280936_1768329361256.jpg';

import prodDress1 from '@assets/1000280943_1768329361259.jpg';
import prodDress2 from '@assets/1000280939_1768329361257.jpg';

import prodDenim1 from '@assets/1000280940_1768329361258.jpg';
import prodDenim2 from '@assets/1000280941_1768329361259.jpg';

import prodHoodie1 from '@assets/1000280950_1768329375979.jpg';
import prodSetCream1 from '@assets/1000280945_1768329375976.jpg';
import prodSetCream2 from '@assets/1000280946_1768329375977.jpg';
import prodSetBlue1 from '@assets/1000280948_1768329375978.jpg';

// New images for Tie-Dye Lounge Set (Cream)
import prodSetCream3 from '@assets/IMG-20260113-WA0379(1)_1768331516354.jpg';
import prodSetCream4 from '@assets/IMG-20260113-WA0395_1768331516356.jpg';
import prodSetCream5 from '@assets/IMG-20260113-WA0373(1)_1768331516357.jpg';

// Exporting the best hero image directly
export const MAIN_HERO_IMAGE = heroImg1;

export const BRAND = {
  name: "Wave Kenya",
  email: "gracemwaniki09@gmail.com",
  phone: "+254 759 556 794",
  address: "Nairobi Kenya",
  instagram: "@The_wave.kenya",
  tiktok: "@The_wave.kenya",
  description: "Modern street luxury. Rooted in authenticity and crafted with precision.",
};

export const COLLECTIONS = [
  {
    id: "vintage-revival",
    title: "Vintage Revival",
    description: "A bold nod to vintage denim, reimagined for today's wardrobe. Structured silhouettes with relaxed comfort.",
    image: prodDenim1,
  },
  {
    id: "clean-aesthetic",
    title: "Clean Aesthetic",
    description: "Soft hue, strong statement. Where less becomes more. Clean silhouettes, muted tones, and timeless design.",
    image: heroImg3, 
  }
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Terracotta Kaftan Maxi",
    price: 4500,
    category: "Dresses",
    collection: "Clean Aesthetic",
    image: heroImg2, // Changed to the one with bag for variety in grid
    images: [heroImg1, heroImg2, heroImg3],
    isNew: true,
  },
  {
    id: 2,
    name: "Signature Denim Set",
    price: 6500,
    category: "Sets",
    collection: "Vintage Revival",
    image: prodDenim2,
    images: [prodDenim1, prodDenim2],
    isNew: true,
  },
  {
    id: 3,
    name: "Wave Tunic Dress",
    price: 3800,
    category: "Dresses",
    collection: "Clean Aesthetic",
    image: prodDress1,
    images: [prodDress1, prodDress2],
    isNew: false,
  },
  {
    id: 4,
    name: "Tie-Dye Lounge Set (Cream)",
    price: 5500,
    category: "Streetwear",
    collection: "Clean Aesthetic",
    image: prodSetCream2,
    images: [prodSetCream1, prodSetCream2, prodSetCream3, prodSetCream4, prodSetCream5],
    isNew: true,
  },
  {
    id: 5,
    name: "Tie-Dye Lounge Set (Blue)",
    price: 5500,
    category: "Streetwear",
    collection: "Clean Aesthetic",
    image: prodSetBlue1,
    images: [prodSetBlue1],
    isNew: false,
  },
  {
    id: 6,
    name: "Wave Classic Hoodie",
    price: 3500,
    category: "Streetwear",
    collection: "Clean Aesthetic",
    image: prodHoodie1,
    images: [prodHoodie1],
    isNew: false,
  },
];
