"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import ProductCard from '@/ui/ProductCard';
// import ProductCard from '../ui/productcard';
import ProductCard from "./productcard";
import coat from "./coat.png";
import { StaticImageData } from "next/image";

// interface Product {
//     _id: string;
//     name: string;
//     description: string;
//     price: number;
//     category: string;
//     brand: string;
//     stock: number;
//     images: string[];
// }

interface Dummy {
  _id: string;
  name: string;
  images: StaticImageData;
  price: number;
  rating: number;
}

// async function fetchProducts(param: void): Promise<Product[]> {
//     const { data } = await axios.get('https://etemplate-backend.vercel.app/api/products/')
//     return data;
// }

const FlashSales = () => {
  //     const { data, error, isLoading } = useQuery<Product[], Error>({
  //         queryKey: ['products'],
  //         queryFn: () => fetchProducts(),
  //     });

  //     if (isLoading) return <p>Loading... </p>;
  //     if (error) return <p>Error: {error.message} </p>;

  const dummyProducts: Dummy[] = [
    {
      _id: "a",
      images: coat,
      name: "The North Coat",
      price: 260,
      rating: 65,
    },
    {
      _id: "b",
      images: coat,
      name: "Gucci Duffle Bag",
      price: 260,
      rating: 65,
    },
    {
      _id: "c",
      images: coat,
      name: "RGB liquid CPU cooler",
      price: 260,
      rating: 65,
    },
    {
      _id: "d",
      images: coat,
      name: "Small Bookshelf",
      price: 260,
      rating: 65,
    },
    {
      _id: "e",
      images: coat,
      name: "Big Balloon",
      price: 260,
      rating: 65,
    },
  ];

  const mapSales =
    dummyProducts.map((items: Dummy) => (
      <ProductCard key={items._id} product={items} />
    )) || [];

  return (
    <section className="flashsales p-4 col-container">
      <h3 className="round-line-container">
        <div className="round-line"></div>
        <div className="round-line-text">Today's</div>
      </h3>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-[1.5rem]">Best Selling Products</h1>
        <button className="green-btn">View All</button>
      </div>

      <div className="grid grid-cols-5 gap-4">{mapSales}</div>
      <div className="red-btn">View All Products</div>
    </section>
  );
};

export default FlashSales;
