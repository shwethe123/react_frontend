import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Car_order() {
    const [ carOrder, setCarOrder ] = useState('');
    
    useEffect(() => {
        const fetchCarOrder = async () => {
            const response = await fetch('https://dashboard-yfuz.onrender.com/api/carOrder_two');
            const data = await response.json();
            setCarOrder(data);
        };
        fetchCarOrder();
    }, []);

  return (
    <>
    <div>
        <h3 className='text-base font-semibold p-2 bg-gray-900 text-white mb02 cursor-pointer'>ကားအော်ဒါ</h3>
        {
            Array.isArray(carOrder) && carOrder.length > 0 ? (carOrder.map((carOrder_data, index) => (
                <Link to={`/CarOrdr2/Edit/${carOrder_data._id}`} key={carOrder_data._id}>
                    <div className={`
                        rounded-md m-1
                            ${carOrder_data.condition === 'အလုပ်နောက်ကျ' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${carOrder_data.condition === 'ခွင့်တစ်ပိုင်း' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${carOrder_data.condition === 'ခွင့်တစ်ရက်' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${carOrder_data.condition === 'ခွင့်ရက်ရှည်' ? 'bg-green-600 border-l-4 border-black text-white' : ''} 
                            ${carOrder_data.condition === 'ခွင့်မဲ့' ? 'bg-red-400 border-l-4 border-red-600 text-white' : ''} 
                            ${carOrder_data.condition === 'ဖိုင်းအပြစ်ပေး' ? 'bg-pink-400 border-l-4 border-pink-700 ... text-white' : ''}
                            ${carOrder_data.condition === 'အလုပ်ထွက်မည့်သူ' ? 'bg-gray-400 border-l-4 border-black ... text-white' : ''}
                            ${carOrder_data.condition === 'အလုပ်ထွက်သူ' ? 'bg-black border-l-4 border-gray-400 text-white' : ''} '} 
                            ${carOrder_data.condition === 'ကြိုတင်ခွင့်တိုင်သူ' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}><div className='flex'>
                            ({index + 1}) <p className='ml-1'>{carOrder_data.Name}</p>
                        </div>
                        {carOrder_data.condition !== 'Normal' && 
                            <p className='ml-1 mt-2 border-l-4 border-r-4 border-red-600 rounded-full bg-orange-100 text-black p-2 shadow-xl'>
                            {carOrder_data.condition}
                            </p>}
                        </div>
                </Link>
            ))) : (
                <p className='text-red-500'>! ကားအော်ဒါ Data မရှိပါ။</p>
            )
        }
    </div>
    </>
  )
}
