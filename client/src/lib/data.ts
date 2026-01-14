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

// Tie-Dye Lounge Set (Cream) extra images
import prodSetCream3 from '@assets/IMG-20260113-WA0379(1)_1768331516354.jpg';
import prodSetCream4 from '@assets/IMG-20260113-WA0395_1768331516356.jpg';
import prodSetCream5 from '@assets/IMG-20260113-WA0373(1)_1768331516357.jpg';

// Wave Classic Hoodie (Brown) extra images
import prodHoodie2 from '@assets/IMG-20260113-WA0403_1768332934218.jpg';
import prodHoodie3 from '@assets/IMG-20260113-WA0401_1768332934219.jpg';
import prodHoodie4 from '@assets/IMG-20260113-WA0405(1)_1768332934220.jpg';
import prodHoodie5 from '@assets/IMG-20260113-WA0370_1768332934221.jpg';
import prodHoodie6 from '@assets/IMG-20260113-WA0407_1768332934222.jpg';
import prodHoodie7 from '@assets/IMG-20260113-WA0405_1768332934223.jpg';

// Tie-Dye Lounge Set (Blue) extra images
import prodSetBlue2 from '@assets/IMG-20260113-WA0399_1768332934224.jpg';
import prodSetBlue3 from '@assets/IMG-20260113-WA0391_1768332934225.jpg';
import prodSetBlue6 from '@assets/IMG-20260113-WA0381_1768332934228.jpg';

// Offer Images
import prodSetBlue4 from '@assets/IMG-20260113-WA0389_1768420723498.jpg';
import prodSetBlue5 from '@assets/IMG-20260113-WA0383_1768420741816.jpg';

// New Offer Designs
import prodBrownMaxi1 from '@assets/1000284326_1768421766867.jpg';
import prodBrownMaxi2 from '@assets/1000284327_1768421766868.jpg';
import prodBrownMaxi3 from '@assets/1000284328_1768421766869.jpg';
import prodBrownMaxi4 from '@assets/1000284329_1768421766870.jpg';
import prodBrownMini1 from '@assets/1000284340_1768421766870.jpg';
import prodBrownMini2 from '@assets/1000284341_1768421766872.jpg';
import prodLuxuryDenimSet from '@assets/IMG-20260113-WA0409(1)_1768421855154.jpg';

// New Blue Mbisu Tunic
import prodMbisuBlue1 from '@assets/IMG-20260114-WA0481_1768423819736.jpg';
import prodMbisuBlue2 from '@assets/IMG-20260114-WA0482_1768423819737.jpg';
import prodMbisuBlue3 from '@assets/IMG-20260114-WA0483_1768423819738.jpg';

// Signature Denim Set extra images
import prodDenim3 from '@assets/IMG-20260113-WA0340_1768332934220.jpg';
import prodDenim4 from '@assets/IMG-20260113-WA0336_1768332934222.jpg';

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
    id: 7,
    name: "Earth-Tone Maxi Dress",
    price: 4800,
    discountPrice: 4080,
    category: "Dresses",
    collection: "Clean Aesthetic",
    image: prodBrownMaxi1,
    images: [prodBrownMaxi1, prodBrownMaxi2, prodBrownMaxi3, prodBrownMaxi4],
    isNew: true,
    onOffer: true,
  },
  {
    id: 8,
    name: "Dada Dress",
    price: 3900,
    discountPrice: 3315,
    category: "Dresses",
    collection: "Clean Aesthetic",
    image: prodBrownMini1,
    images: [prodBrownMini1, prodBrownMini2],
    isNew: true,
    onOffer: true,
  },
  {
    id: 9,
    name: "Mocha Luxury Utility Set",
    price: 6000,
    discountPrice: 5100,
    category: "Sets",
    collection: "Vintage Revival",
    image: prodLuxuryDenimSet,
    images: [prodLuxuryDenimSet],
    isNew: true,
    onOffer: true,
  },
  {
    id: 3,
    name: "Mbisu Tunic (Brown)",
    price: 3900,
    discountPrice: 3315,
    category: "Dresses",
    collection: "Clean Aesthetic",
    image: prodDress1,
    images: [prodDress1, prodDress2],
    isNew: false,
    onOffer: true,
  },
  {
    id: 11,
    name: "Mbisu Tunic (Blue)",
    price: 3900,
    discountPrice: 3315,
    category: "Dresses",
    collection: "Clean Aesthetic",
    image: prodMbisuBlue1,
    images: [prodMbisuBlue1, prodMbisuBlue2, prodMbisuBlue3],
    isNew: true,
    onOffer: true,
  },
  {
    id: 5,
    name: "Ocean Mist Women",
    price: 7000,
    discountPrice: 5950,
    category: "Streetwear",
    collection: "Clean Aesthetic",
    image: prodSetBlue5,
    images: [prodSetBlue5, prodSetBlue4, prodSetBlue1, prodSetBlue2, prodSetBlue3, prodSetBlue6],
    isNew: false,
    onOffer: true,
  },
  {
    id: 10,
    name: "Ocean Mist Men",
    price: 7500,
    discountPrice: 6375,
    category: "Streetwear",
    collection: "Clean Aesthetic",
    image: prodSetBlue4,
    images: [prodSetBlue4, prodSetBlue5, prodSetBlue1, prodSetBlue2, prodSetBlue3, prodSetBlue6],
    isNew: false,
    onOffer: true,
  },
  {
    id: 1,
    name: "Terracotta Kaftan Maxi",
    price: 4500,
    category: "Dresses",
    collection: "Clean Aesthetic",
    image: heroImg2,
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
    images: [prodDenim1, prodDenim2, prodDenim3, prodDenim4],
    isNew: true,
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
    id: 6,
    name: "Wave Classic Hoodie",
    price: 3500,
    category: "Streetwear",
    collection: "Clean Aesthetic",
    image: prodHoodie1,
    images: [prodHoodie1, prodHoodie2, prodHoodie3, prodHoodie4, prodHoodie5, prodHoodie6, prodHoodie7],
    isNew: false,
  },
];
