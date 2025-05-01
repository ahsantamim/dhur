import React from "react";
import { useRouter } from "next/router";
import MainLayout from "@/layouts/MainLayout";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps } from "next";

// Import product detail component with client-side rendering
const ProductDetail = dynamic(
  () => import("@/components/products/ProductDetail"),
  {
    ssr: false,
  }
);

// Product data matching the list view
export const products = [
  {
    id: 1,
    name: "Cotton Poplin",
    slug: "cotton-poplin",
    fabricConstruction: "100% Cotton 40x40/133x72",
    category: "Cotton",
    images: [
      "/images/home/hero-1.png",
      "/images/home/hero-2.png",
      "/images/home/hero-3.png",
    ],
    hasStretch: false,
    price: {
      min: 4.99,
      max: 6.5,
    },
    description:
      "Crisp, lightweight cotton fabric with a tight plain weave, perfect for shirts and dresses with excellent breathability. Our premium cotton poplin offers exceptional smoothness and a clean finish that works beautifully for both casual and formal garments. The high thread count provides a subtle luster and superior drape while maintaining shape throughout wear.",
    features: [
      "100% cotton construction",
      "Plain weave with high thread count",
      "Lightweight (3.5-4 oz)",
      "Available in 25+ colors",
      "Width: 58-60 inches",
      "Excellent color retention",
      "Resists wrinkles better than pure cotton",
    ],
    applications: [
      "Dress shirts and blouses",
      "Summer dresses and skirts",
      "Children's clothing",
      "Shirting and lightweight uniforms",
      "Quilting and crafts",
    ],
    colors: ["White", "Black", "Navy", "Sky Blue", "Pink", "Khaki", "Olive"],
    minimumOrder: "50 yards",
    availability: "In stock",
    leadTime: "1-2 weeks",
  },
  {
    id: 2,
    name: "Cotton Denim",
    slug: "cotton-denim",
    fabricConstruction: "100% Cotton 10x8/73x46",
    category: "Denim",
    images: [
      "/images/home/hero-2.png",
      "/images/home/hero-1.png",
      "/images/home/hero-3.png",
    ],
    hasStretch: false,
    price: {
      min: 6.99,
      max: 9.5,
    },
    description:
      "Durable, heavy-duty cotton fabric with a characteristic diagonal ribbing, used primarily for jeans and workwear. Our premium cotton denim is renowned for its strength and classic indigo appearance. The tight twill weave creates a rugged texture that softens with wear while maintaining integrity even under tough conditions.",
    features: [
      "100% cotton construction",
      "3×1 twill weave",
      "Medium-heavyweight (10-12 oz)",
      "Indigo dyed with vintage character",
      "Width: 56-58 inches",
      "Excellent durability",
      "Ages beautifully with wear",
    ],
    applications: [
      "Jeans and denim pants",
      "Jackets and outerwear",
      "Work aprons and heavy-duty bags",
      "Upholstery and home décor accents",
      "Fashion accessories",
    ],
    colors: ["Indigo", "Light Wash", "Dark Wash", "Black", "Raw"],
    minimumOrder: "40 yards",
    availability: "In stock",
    leadTime: "2 weeks",
  },
  {
    id: 3,
    name: "Cotton Twill",
    slug: "cotton-twill",
    fabricConstruction: "100% Cotton 16x12/108x56",
    category: "Cotton",
    images: [
      "/images/home/hero-3.png",
      "/images/home/hero-1.png",
      "/images/home/hero-2.png",
    ],
    hasStretch: false,
    price: {
      min: 5.99,
      max: 7.5,
    },
    description:
      "Versatile medium to heavyweight fabric with a distinctive diagonal weave pattern, suitable for pants, jackets and workwear. Our premium cotton twill offers exceptional durability while maintaining comfort. The classic twill construction provides excellent drape and structure, making it ideal for both professional and casual applications.",
    features: [
      "100% cotton construction",
      "2×1 twill weave pattern",
      "Medium weight (7-9 oz)",
      "Available in 15+ colors",
      "Width: 58-60 inches",
      "Excellent durability and color retention",
      "Easy to care for and maintain",
    ],
    applications: [
      "Chinos and casual pants",
      "Work uniforms and scrubs",
      "Jackets and structured garments",
      "Bags and accessories",
      "Home décor items",
    ],
    colors: ["Khaki", "Navy", "Olive", "Black", "Burgundy", "Charcoal", "Tan"],
    minimumOrder: "35 yards",
    availability: "In stock",
    leadTime: "1-2 weeks",
  },
  {
    id: 4,
    name: "Corduroy",
    slug: "corduroy",
    fabricConstruction: "100% Cotton 21/2x16 16W",
    category: "Cotton",
    images: [
      "/images/home/hero-1.png",
      "/images/home/hero-2.png",
      "/images/home/hero-3.png",
    ],
    hasStretch: false,
    price: {
      min: 7.99,
      max: 10.5,
    },
    description:
      "Distinctive cotton fabric with raised parallel cords, known for its warmth and durability, perfect for autumn and winter garments. Our premium corduroy offers exceptional texture and visual interest with its characteristic wales. The plush texture provides excellent insulation and a comfortable hand feel that's perfect for colder seasons.",
    features: [
      "100% cotton construction",
      "Distinctive wale pattern (16 wale - medium)",
      "Medium weight (8-10 oz)",
      "Rich color palette with depth",
      "Width: 56-58 inches",
      "Excellent warmth and durability",
      "Soft hand with minimal shrinkage",
    ],
    applications: [
      "Pants and trousers",
      "Jackets and blazers",
      "Skirts and dresses",
      "Children's clothing",
      "Upholstery and cushions",
    ],
    colors: [
      "Brown",
      "Olive",
      "Navy",
      "Burgundy",
      "Forest Green",
      "Camel",
      "Gray",
    ],
    minimumOrder: "30 yards",
    availability: "Seasonal availability",
    leadTime: "2-3 weeks",
  },
  {
    id: 5,
    name: "Cotton Flannel",
    slug: "cotton-flannel",
    fabricConstruction: "100% Cotton 20x10/40x42",
    category: "Cotton",
    images: [
      "/images/home/hero-2.png",
      "/images/home/hero-3.png",
      "/images/home/hero-1.png",
    ],
    hasStretch: false,
    price: {
      min: 5.5,
      max: 7.99,
    },
    description:
      "Soft, warm fabric with a napped finish on one or both sides, ideal for comfortable shirts and sleepwear. Our premium cotton flannel undergoes a special brushing process that creates an exceptionally soft surface while maintaining durability. The light, fuzzy texture traps air for superior insulation while remaining breathable.",
    features: [
      "100% cotton construction",
      "Brushed on both sides for maximum softness",
      "Medium weight (5-6 oz)",
      "Available in classic plaids and solids",
      "Width: 44-45 inches",
      "Pre-shrunk for minimal shrinkage",
      "Gets softer with each wash",
    ],
    applications: [
      "Casual shirts and pajamas",
      "Loungewear and sleepwear",
      "Children's clothing",
      "Quilting and crafts",
      "Winter garments and linings",
    ],
    colors: [
      "Classic Plaid",
      "Buffalo Check",
      "Red/Black",
      "Blue/Black",
      "Green/Black",
      "Solid Colors",
    ],
    minimumOrder: "25 yards",
    availability: "Seasonal availability",
    leadTime: "1-2 weeks",
  },
  {
    id: 6,
    name: "Cotton Linen",
    slug: "cotton-linen",
    fabricConstruction: "55% Cotton 45% Linen 21x18/52x58",
    category: "Blends",
    images: [
      "/images/home/hero-3.png",
      "/images/home/hero-2.png",
      "/images/home/hero-1.png",
    ],
    hasStretch: false,
    price: {
      min: 8.99,
      max: 12.5,
    },
    description:
      "Natural fiber blend offering breathability with reduced wrinkles, perfect for warm-weather clothing and home textiles. Our cotton-linen blend combines the best properties of both fibers: the softness and affordability of cotton with the breathability and texture of linen. This versatile fabric performs exceptionally well in warm climates while offering a refined appearance.",
    features: [
      "55% cotton, 45% linen construction",
      "Natural slub texture with visual interest",
      "Medium weight (6-7 oz)",
      "Available in earthy, natural tones",
      "Width: 54-56 inches",
      "Excellent breathability",
      "Less prone to wrinkling than pure linen",
    ],
    applications: [
      "Summer shirts and blouses",
      "Dresses and skirts",
      "Lightweight pants and shorts",
      "Home décor and curtains",
      "Table linens and napkins",
    ],
    colors: [
      "Natural",
      "Ivory",
      "Flax",
      "Sand",
      "Dusty Blue",
      "Sage",
      "Terracotta",
    ],
    minimumOrder: "30 yards",
    availability: "In stock",
    leadTime: "2 weeks",
  },
  {
    id: 7,
    name: "TC Poplin",
    slug: "tc-poplin",
    fabricConstruction: "65% Polyester 35% Cotton 45x45/110x76",
    category: "Blends",
    images: [
      "/images/home/hero-1.png",
      "/images/home/hero-3.png",
      "/images/home/hero-2.png",
    ],
    hasStretch: false,
    price: {
      min: 3.99,
      max: 5.5,
    },
    description:
      "Durable poly-cotton blend with excellent color fastness and wrinkle resistance, suitable for uniforms and workwear. Our TC Poplin combines the durability of polyester with the comfort of cotton in a smooth, tight weave that resists wrinkling. This practical fabric requires minimal maintenance while providing consistent appearance wash after wash.",
    features: [
      "65% polyester, 35% cotton blend",
      "Fine plain weave construction",
      "Lightweight (3-4 oz)",
      "Wide range of colors including neutrals",
      "Width: 58-60 inches",
      "Excellent wrinkle and shrink resistance",
      "Minimal ironing required",
    ],
    applications: [
      "Business shirts and blouses",
      "Uniforms and workwear",
      "Medical scrubs",
      "Aprons and culinary apparel",
      "Promotional items",
    ],
    colors: [
      "White",
      "Black",
      "Navy",
      "Light Blue",
      "Pink",
      "Mint",
      "Burgundy",
    ],
    minimumOrder: "50 yards",
    availability: "In stock",
    leadTime: "1 week",
  },
  {
    id: 8,
    name: "Cotton/Spandex Stretch Twill",
    slug: "cotton-spandex-stretch-twill",
    fabricConstruction: "98% Cotton 2% Spandex 16x12/108x56",
    category: "Stretch",
    images: [
      "/images/home/hero-2.png",
      "/images/home/hero-1.png",
      "/images/home/hero-3.png",
    ],
    hasStretch: true,
    price: {
      min: 6.99,
      max: 9.5,
    },
    description:
      "Comfortable cotton fabric with spandex for stretch and recovery, perfect for fitted garments and activewear. Our Cotton/Spandex Stretch Twill combines the natural comfort of cotton with just the right amount of stretch for excellent movement and shape retention. The added spandex provides 15-20% stretch in all directions while maintaining the classic twill appearance.",
    features: [
      "98% cotton, 2% spandex construction",
      "Twill weave with mechanical stretch",
      "Medium weight (7-8 oz)",
      "Available in fashion-forward colors",
      "Width: 58-60 inches",
      "15-20% 4-way stretch",
      "Excellent recovery and shape retention",
    ],
    applications: [
      "Fitted pants and chinos",
      "Stretch jeans and jeggings",
      "Performance workwear",
      "Golf and active apparel",
      "Structured garments requiring comfort",
    ],
    colors: [
      "Black",
      "Navy",
      "Khaki",
      "Olive",
      "Charcoal",
      "Burgundy",
      "Stone",
    ],
    minimumOrder: "35 yards",
    availability: "In stock",
    leadTime: "1-2 weeks",
  },
];

import { FC } from "react";

interface Product {
  id: number;
  name: string;
  slug: string;
  fabricConstruction: string;
  category: string;
  images: string[];
  hasStretch: boolean;
  price: {
    min: number;
    max: number;
  };
  description: string;
  features: string[];
  applications: string[];
  colors: string[];
  minimumOrder: string;
  availability: string;
  leadTime: string;
}

interface ProductPageProps {
  product: Product | null;
}

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();

  // If the page is still generating via fallback, show loading
  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  // If no product was found with the given slug
  if (!product) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you're looking for does not exist or has been removed.
          </p>
          <a
            href="/products"
            className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors"
          >
            View All Products
          </a>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ProductDetail product={product} />
    </MainLayout>
  );
};

// Generate static paths for known products
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: "blocking" };
};

// Generate static props for each product
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
    // Revalidate every 24 hours
    revalidate: 86400,
  };
};

export default ProductPage;
