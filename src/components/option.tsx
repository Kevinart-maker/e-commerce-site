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
        <div className=' p-4 flex gap-8 justify-center'>
            {
                options.map((item, index)=>(
                    <div key={index} className='flex flex-col gap-2 items-center text-xs'>
                        <item.img size={30} className='rounded-[50%] bg-black text-white p-[0.3rem]'/>
                        <h3 className='text-xl font-bold'>{item.title}</h3>
                        <span>{item.content}</span>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Option;