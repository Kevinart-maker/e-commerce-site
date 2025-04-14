import Image from "next/image"
import homeImg from './homeframe.jpg';
export default function HomeFrame() {
  return (
    <div className="rounded-[1rem] relative flex justify-center items-center overflow-hidden h-[70vh]">
      <Image
        src={homeImg}
        alt="Home Frame"
        className="w-full h-full object-cover"
      />
        <div className="absolute sm:left-4 sm:bottom-4 bottom-0 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg text-center max-w-lg">
          <p className="text-[#9afc49]">Nivek Techs</p>
          <h2 className="text-white text-4xl font-bold mb-4">Check out Latest Techs</h2>
          <button className="border rounded-lg hover:bg-[#9afc49] hover:text-black hover:border-[#9afc49] text-sm text-white p-1 px-3">Shop Now</button>
        </div>
    </div>
  )
}