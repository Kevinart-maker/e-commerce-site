import Image from "next/image";
import HomeFrame from "@/components/HomeFrame";
import FlashSales from "@/components/FlashSales";
import BrowseCategory from "@/components/BrowseCategory";
import Explore from "@/components/explore";
import Option from "@/components/option";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-[2rem]" >
      <div className="home-hero  p-4">
        <HomeFrame />
      </div>
      <FlashSales />
      <div className="line w-[100%] h-[1px] bg-slate-300"></div>
      <BrowseCategory />
      <div className="line w-[100%] h-[1px] bg-slate-300"></div>
      <Explore />
      <Option />
      <Footer />

      {/* how to use the image upload method */}

      {/* const formData = new FormData();
formData.append('make', make);
// ... other fields ...
for (let i = 0; i < imageFiles.length; i++) {
    formData.append('images', imageFiles[i]);
}

await fetch('/api/products', {
    method: 'POST',
    body: formData
}); */}


{/* making the rating work.. */}
{/* fetch('/api/products/[product_id]/reviews', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        // Include your auth token header
    },
    body: JSON.stringify({
        comment: "Great product!",
        rating: 5
    })
}); */}

{/* get request for the rating and reviews */}
{/* fetch('/api/products/[product_id]/reviews')
    .then(response => response.json())
    .then(reviews => console.log(reviews)); */}
    </div>
  );
}
