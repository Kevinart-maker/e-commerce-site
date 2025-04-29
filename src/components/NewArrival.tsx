// import Image from 'next/image';
// import image from './homeframe.jpg'

// const NewArrivalSection = () => {
//   return (
//     <section className="bg-white py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-6">
//           <span className="text-sm text-red-500 font-semibold uppercase">Featured</span>
//           <h2 className="text-4xl font-bold mt-2">New Arrival</h2>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Product 1 */}
//           <div className="relative group overflow-hidden rounded-lg shadow-lg">
//             <Image
//               src={image} // Replace with the image URL
//               alt="PlayStation 5"
//               width={500}
//               height={500}
//               className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
//               <h3 className="text-white text-xl font-semibold">PlayStation 5</h3>
//               <p className="text-gray-300 text-sm">Black and White version of the PS5 coming out on sale.</p>
//               <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
//             </div>
//           </div>

//           {/* Product 2 */}
//           <div className="relative group overflow-hidden rounded-lg shadow-lg">
//             <Image
//               src={image} // Replace with the image URL
//               alt="Women's Collections"
//               width={500}
//               height={500}
//               className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
//               <h3 className="text-white text-xl font-semibold">Women's Collections</h3>
//               <p className="text-gray-300 text-sm">Featured woman collections that give you another vibe.</p>
//               <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
//             </div>
//           </div>

//           {/* Product 3 */}
//           <div className="relative group overflow-hidden rounded-lg shadow-lg">
//             <Image
//               src={image} // Replace with the image URL
//               alt="Speakers"
//               width={500}
//               height={500}
//               className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
//               <h3 className="text-white text-xl font-semibold">Speakers</h3>
//               <p className="text-gray-300 text-sm">Amazon wireless speakers</p>
//               <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
//             </div>
//           </div>

//           {/* Product 4 */}
//           <div className="relative group overflow-hidden rounded-lg shadow-lg">
//             <Image
//               src={image} // Replace with the image URL
//               alt="Perfume"
//               width={500}
//               height={500}
//               className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
//               <h3 className="text-white text-xl font-semibold">Perfume</h3>
//               <p className="text-gray-300 text-sm">GUCCI INTENSE OUD EDP</p>
//               <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewArrivalSection;


// import Image from 'next/image';

// const NewArrivalSection = () => {
//   return (
//     <section className="bg-white py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="mb-6">
//           <span className="text-sm text-red-500 font-semibold uppercase">Featured</span>
//           <h2 className="text-4xl font-bold mt-2">New Arrival</h2>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Left Side: PlayStation */}
//           <div className="relative group overflow-hidden rounded-lg shadow-lg">
//             <Image
//               src="/images/ps5.jpg" // Replace with actual image URL
//               alt="PlayStation 5"
//               width={800}
//               height={800}
//               className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
//               <h3 className="text-white text-xl font-semibold">PlayStation 5</h3>
//               <p className="text-gray-300 text-sm">Black and White version of the PS5 coming out on sale.</p>
//               <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
//             </div>
//           </div>

//           {/* Top Right: Women's Collections */}
//           <div className="relative group overflow-hidden rounded-lg shadow-lg">
//             <Image
//               src="/images/womens-collection.jpg" // Replace with actual image URL
//               alt="Women's Collections"
//               width={400}
//               height={400}
//               className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
//               <h3 className="text-white text-xl font-semibold">Women's Collections</h3>
//               <p className="text-gray-300 text-sm">Featured woman collections that give you another vibe.</p>
//               <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
//             </div>
//           </div>

//           {/* Bottom Right: Speakers */}
//           <div className="relative group overflow-hidden rounded-lg shadow-lg">
//             <Image
//               src="/images/speakers.jpg" // Replace with actual image URL
//               alt="Speakers"
//               width={400}
//               height={400}
//               className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
//               <h3 className="text-white text-xl font-semibold">Speakers</h3>
//               <p className="text-gray-300 text-sm">Amazon wireless speakers</p>
//               <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
//             </div>
//           </div>

//           {/* Bottom Right: Perfume */}
//           <div className="relative group overflow-hidden rounded-lg shadow-lg">
//             <Image
//               src="/images/perfume.jpg" // Replace with actual image URL
//               alt="Perfume"
//               width={400}
//               height={400}
//               className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
//               <h3 className="text-white text-xl font-semibold">Perfume</h3>
//               <p className="text-gray-300 text-sm">GUCCI INTENSE OUD EDP</p>
//               <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewArrivalSection;'

import Image from 'next/image';
import image from './homeframe.jpg'
import ps5 from './ps5.png'
import woman from './woman.png'
import speaker from './speaker.png'
import perf from './perf.png'

const NewArrivalSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <span className="text-sm text-red-500 font-semibold uppercase">Featured</span>
          <h2 className="text-4xl font-bold mt-2">New Arrival</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side: PlayStation */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg bg-black h-[35rem]">
            <Image
              src={ps5} // Replace with actual image URL
              alt="PlayStation 5"
              className="object-contain transform transition duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 transition duration-300 flex flex-col justify-end items-start gap-2">
              <h3 className="text-white text-xl font-semibold">PlayStation 5</h3>
              <p className="text-gray-300 text-sm w-[50%] py-2">Black and White version of the PS5 coming out on sale.</p>
              <button className="mt-2 border-b border-white text-white">Shop Now</button>
            </div>
          </div>

          {/* Right Side: Women, Speakers, Perfume */}
          <div className="grid grid-rows-2 gap-6">
            {/* Top Row: Women's Collections */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg bg-black">
              <Image
                src={woman} // Replace with actual image URL
                alt="Women's Collections"
                className="object-cover transform group-hover:scale-105 transition duration-300 absolute right-[1rem]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex gap-2 flex-col justify-end items-start p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-xl font-semibold">Women's Collections</h3>
                <p className="text-gray-300 text-sm w-[45%]">Featured woman collections that give you another vibe.</p>
                <button className="mt-2 text-white border-b border-white rounded">Shop Now</button>
              </div>
            </div>

            {/* Bottom Row: Speakers and Perfume */}
            <div className="grid grid-cols-2 gap-6">
              {/* Speakers */}
              <div className="relative group overflow-hidden rounded-lg shadow-lg bg-black">
                <Image
                  src={speaker} // Replace with actual image URL
                  alt="Speakers"
                  className="object-cover transform group-hover:scale-105 transition duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white text-xl font-semibold">Speakers</h3>
                  <p className="text-gray-300 text-sm">Amazon wireless speakers</p>
                  <button className="mt-2 bg-white text-black px-4 py-2 rounded">Shop Now</button>
                </div>
              </div>

              {/* Perfume */}
              <div className="relative h-full group overflow-hidden rounded-lg shadow-lg bg-black">
                <Image
                  src={perf} // Replace with actual image URL
                  alt="Perfume"
                  className="object-cover transform group-hover:scale-105 transition duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <div className="absolute flex flex-col items-start justify-end gap-1 inset-0 bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white text-xl font-semibold">Perfume</h3>
                  <p className="text-gray-300 text-sm">GUCCI INTENSE OUD EDP</p>
                  <button className="text-white border-b border-white">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;