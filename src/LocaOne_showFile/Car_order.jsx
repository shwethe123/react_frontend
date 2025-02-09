import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Car_order() {

    const [ car_orders, setCar_order ] = useState([]);

    useEffect(() => {
        const car_orderFecth = async () => {
            const respons = await fetch('https://dashboard-yfuz.onrender.com/api/car_order');
            const data = await respons.json();
            setCar_order(data);
        };
        car_orderFecth();
    },[]);

  return (
    <>
        <div>
            <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">ကားအော်ဒါ</h3>
            {
                car_orders.length && (car_orders.map((car_order, index) => (
                <Link to={`/CarOrder1/Edit/${car_order._id}`} key={car_order._id}>
                <div className={`
                    rounded-md m-1
                        ${car_order.condition === 'အလုပ်နောက်ကျ' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                        ${car_order.condition === 'ခွင့်တစ်ပိုင်း' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                        ${car_order.condition === 'ခွင့်တစ်ရက်' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                        ${car_order.condition === 'ခွင့်ရက်ရှည်' ? 'bg-green-600 border-l-4 border-black text-white' : ''} 
                        ${car_order.condition === 'ခွင့်မဲ့' ? 'bg-red-400 border-l-4 border-red-600 text-white' : ''} 
                        ${car_order.condition === 'ဖိုင်းအပြစ်ပေး' ? 'bg-pink-400 border-l-4 border-pink-700 ... text-white' : ''}
                        ${car_order.condition === 'အလုပ်ထွက်မည့်သူ' ? 'bg-gray-400 border-l-4 border-black ... text-white' : ''}
                        ${car_order.condition === 'အလုပ်ထွက်သူ' ? 'bg-black border-l-4 border-gray-400 text-white' : ''} '} 
                        ${car_order.condition === 'ကြိုတင်ခွင့်တိုင်သူ' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                    p-2 cursor-pointer font-bold
                    `}><div className='flex'>
                        ({index + 1}) <p className='ml-1'>{car_order.Name}</p>
                    </div>
                    {car_order.condition !== 'Normal' && 
                        <p className='ml-1 mt-2 border-l-4 border-r-4 border-red-600 rounded-full bg-orange-100 text-black p-2 shadow-xl'>
                            {car_order.condition}
                        </p>}
                    </div>
                </Link>
                )))
            }
        </div>
    </>
  )
}
