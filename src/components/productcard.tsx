import Image, { StaticImageData } from "next/image";

// interface Product {
//     _id: string;
//     name: string;
//     description?: string;
//     price: number;
//     category?: string;
//     brand?: string;
//     stock?: number;
//     images: StaticImageData | string[];
//   }

interface Dummy {
  _id: string;
  name: string;
  images: StaticImageData;
  price: number;
  rating: number;
}

interface ProductCardProps {
  // product: Product;
  product: Dummy;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-gray-300 flex items-center justify-center relative w-full h-full cursor-pointer">
        <Image src={product.images} alt={product.name} className="" />

        <div className="flex flex-col gap-5 absolute right-[.9rem] top-[1rem]">
          <div className="w-6 h-6 bg-black cursor-pointer"></div>
          <div className="w-6 h-6 bg-black cursor-pointer"></div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[1rem] font-bold">{product.name}</p>
        <div className="flex items-center gap-3">
          <p className="text-[0.7rem] text-[#9afc49] font-bold">
            ${product.price}
          </p>
          <span className="text-xs text-gray-400 font-bold line-through">
            ${product.price}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-[3rem] h-[.7rem] bg-black rounded-full"></div>
          <span className="text-xs text-gray-500">({product.rating})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
