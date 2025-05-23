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
        title: 'FREE AND FAST DELIVERY',
        content: 'Free delivery for all orders over $140',
    },
    {
        img: RiCustomerService2Fill,
        title: '24/7 CUSTOMER SERVICE',
        content: 'Friendly 24/7 customer support',
    },
    {
        img: GoShieldCheck,
        title: 'MONEY BACK GUARANTEE',
        content: 'We return money within 30 days',
    },
]

const Option = () => {
    return ( 
        <div className='py-[5rem] flex gap-[5rem] justify-center'>
            {
                options.map((item, index)=>(
                    <div key={index} className='flex flex-col gap-4 items-center text-xs'>
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
 
export default Option;