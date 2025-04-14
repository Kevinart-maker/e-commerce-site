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
  
  interface ProductCardProps {
    product: Product;
  }
  
  const ProductCard = ({ product }: ProductCardProps) => {
    return (
      <div className="flex flex-col gap-[1rem]">
        <div className="bg-slate-100 flex items-center justify-center p-[1rem]">
          <img src={product.images[0]} alt={product.name} id='card-image'/>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-[0.7rem] font-bold">{product.name}</p>
          <p className="text-[0.7rem] text-[#9afc49] font-bold">${product.price}</p>
        </div>
      </div>
    );
  }; 
  
  export default ProductCard;  