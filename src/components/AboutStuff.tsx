import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import { IconType } from "react-icons";


interface Option {
    img: IconType;
    title: string;
    content: string;
}

const options: Option[] = [
    {
        img: TbTruckDelivery,
        title: '10.5k',
        content: 'Sallers active our site',
    },
    {
        img: RiCustomerService2Fill,
        title: '33k',
        content: 'Mopnthly Produduct Sale',
    },
    {
        img: GoShieldCheck,
        title: '45.5k',
        content: 'Customer active in our site',
    },
    {
        img: GoShieldCheck,
        title: '25k',
        content: 'Anual gross sale in our site',
    },
]

const AboutStuff = () => {
    return ( 
        <div className='my-3 py-[5rem] flex gap-[3rem] justify-center'>
            {
                options.map((item, index)=>(
                    <div key={index} className='flex flex-col gap-4 items-center text-xs border py-10 px-12 cursor-pointer hover:bg-[#DB4444] hover:text-white'>
                        <div className="bg-gray-500 rounded-full p-2">
                        <item.img size={50} className='rounded-[50%] bg-black text-white p-[0.3rem]'/>
                        </div>
                        <div className="text-center">
                        <h3 className='text-lg font-bold mb-1'>{item.title}</h3>
                        <span>{item.content}</span>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
 
export default AboutStuff;