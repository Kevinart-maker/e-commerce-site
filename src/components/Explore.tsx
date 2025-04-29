'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import ProductCard from '@/components/productcard';
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

// async function fetchProducts(param: void): Promise<Product[]> {
//     const { data } = await axios.get('https://etemplate-backend.vercel.app/api/products/');
//     return data;
// }


interface Dummy {
    _id: string;
    name: string;
    images: StaticImageData;
    price: number;
    rating: number;
  }

const Explore = () => {
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
    // const { data, error, isLoading } = useQuery<Product[], Error>({
    //     queryKey: ['explore-products'],
    //     queryFn: () => fetchProducts(),
    // });

    // if (isLoading) return <p>Loading... </p>;
    // if (error) return <p>Error: {error.message} </p>;

    const mapProducts = dummyProducts.map((product: Dummy) => (
        <ProductCard key={product._id} product={product} />
    )) || [];

    return (
        <section className="p-4 explore-products col-container">
            <h3 className="round-line-container">
                <div className="round-line"></div>
                <div className="round-line-text">Our Products</div>
            </h3>
            
            <h1 className="font-bold text-[1.5rem]">Explore Our Products</h1>

            <div className="grid grid-cols-5 gap-4">
                {mapProducts}
            </div>
            <div className='red-btn'>View All Products</div>
        </section>
    );
};

export default Explore;