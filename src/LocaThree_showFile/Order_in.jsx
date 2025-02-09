import React, { useEffect, useState } from 'react'

export default function Order_in() {
    const [ orderIn, setOrderIn ] = useState('');

    useEffect(() => {
        const fetchOrderIn = async () => {
            const response = await fetch('https://dashboard-yfuz.onrender.com/api/orderIn_three');
            const data = await response.json();
            setOrderIn(data);
        };
        fetchOrderIn();
    }, []);

  return (
    <>
    <div>
    <h3 className='text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer'>အဝင်ပိုင်း</h3>
        {
            Array.isArray(orderIn) && orderIn.length > 0 ? (orderIn.map((orderIn_data, index) => (
                <div key={orderIn_data._id}>
                    <p className={`
                        rounded-md m-1
                            ${orderIn_data.condition === 'အလုပ်နောက်ကျ' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${orderIn_data.condition === 'ခွင့်တစ်ပိုင်း' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${orderIn_data.condition === 'ခွင့်တစ်ရက်' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${orderIn_data.condition === 'ခွင့်ရက်ရှည်' ? 'bg-green-600 border-l-4 border-black text-white' : ''} 
                            ${orderIn_data.condition === 'ခွင့်မဲ့' ? 'bg-red-400 border-l-4 border-red-600 text-white' : ''} 
                            ${orderIn_data.condition === 'ဖိုင်းအပြစ်ပေး' ? 'bg-pink-400 border-l-4 border-pink-700 ... text-white' : ''}
                            ${orderIn_data.condition === 'အလုပ်ထွက်မည့်သူ' ? 'bg-gray-400 border-l-4 border-black ... text-white' : ''}
                            ${orderIn_data.condition === 'အလုပ်ထွက်သူ' ? 'bg-black border-l-4 border-gray-400 text-white' : ''} '} 
                            ${orderIn_data.condition === 'ကြိုတင်ခွင့်တိုင်သူ' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}>({index + 1}) {orderIn_data.Name}</p>
                </div>
            ))) : (
                <p className='text-red-500'>! No Data</p>
            )
        }
    </div>
    </>
  )
}
