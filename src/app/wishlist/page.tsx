import React from 'react'
import PageLink from '@/components/PageLink'
import ProductCard from "../../components/productcard";
import coat from "../../components/coat.png";
import { StaticImageData } from "next/image";

interface Dummy {
    _id: string;
    name: string;
    images: StaticImageData;
    price: number;
    rating: number;
}

const WishList = () => {

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
        <div className='mb-10'>
            <PageLink link='Wishlist' />

            <div className='px-8 py-10 flex flex-col gap-16'>

                <div>
                    <div className='flex items-center justify-between mb-10'>
                        <h1 className='font-semibold'>Wishlist (4)</h1>
                        <button className='px-[2rem] py-[0.9rem] text-[0.7rem] border border-gray-800 font-semibold'>Move All To Bag</button>
                    </div>
                    <div className="grid grid-cols-5 gap-4">{mapSales}</div>

                </div>

                <div>
                    <div className='flex items-center justify-between mb-10'>
                        <h1 className='border-l border-red-400 border-l-[1rem] pl-3'>Just for you</h1>
                        <button className='px-[2rem] py-[0.9rem] text-[0.7rem] border border-gray-800 font-semibold'>See All</button>
                    </div>
                    <div className="grid grid-cols-5 gap-4">{mapSales}</div>
                </div>
            </div>
        </div>
    )
}

export default WishList