import React from "react";
import MainLayout from "@/layouts/MainLayout";
import dynamic from "next/dynamic";

// Import product list component with client-side rendering only
const ProductList = dynamic(
  () => import("@/components/products/ProductList"),
  {
    ssr: false,
  }
);

export default function ProductsPage() {
  return (
    <MainLayout>
      <ProductList />
    </MainLayout>
  );
}
