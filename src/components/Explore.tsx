'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ProductCard from '@/ui/ProductCard';

interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    stock: number;
    images: string[];
}

async function fetchProducts(param: void): Promise<Product[]> {
    const { data } = await axios.get('https://etemplate-backend.vercel.app/api/products/');
    return data;
}

const Explore = () => {
    const { data, error, isLoading } = useQuery<Product[], Error>({
        queryKey: ['explore-products'],
        queryFn: () => fetchProducts(),
    });

    if (isLoading) return <p>Loading... </p>;
    if (error) return <p>Error: {error.message} </p>;

    const mapProducts = data?.map((product: Product) => (
        <ProductCard key={product._id} product={product} />
    )) || [];

    return (
        <section className=" p-4 explore-products col-container">
            <h3 className="round-line-container">
                <div className="round-line"></div>
                <div className="round-line-text">Our Products</div>
            </h3>
            
            <h1 className="font-bold text-[1.5rem]">Explore Our Products</h1>

            <div className="flex gap-4 overflow-hidden w-[100%]">
                {mapProducts}
            </div>
            <div className='green-btn'>View All Products</div>
        </section>
    );
};

export default Explore;