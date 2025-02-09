import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Sale_in() {
    const [ saleIn, setSaleIn ] = useState('');

    useEffect(() => {
        const fetchSaleIn = async () => {
            const response = await fetch('https://dashboard-yfuz.onrender.com/api/salesIn_two');
            const data =await response.json();
            setSaleIn(data);
        };
        fetchSaleIn();
    }, []);

  return (
    <>
    <div>
        <h3 className='text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer'>လက်လီပိုင်း</h3>
        {
            Array.isArray(saleIn) && saleIn.length > 0 ? (saleIn.map((saleIn_data, index) => (
                <Link to={`/SaleIn2/Edit/${saleIn_data._id}`} key={saleIn_data._id}>
                    <div className={`
                        rounded-md m-1
                            ${saleIn_data.condition === 'အလုပ်နောက်ကျ' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${saleIn_data.condition === 'ခွင့်တစ်ပိုင်း' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${saleIn_data.condition === 'ခွင့်တစ်ရက်' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${saleIn_data.condition === 'ခွင့်ရက်ရှည်' ? 'bg-green-600 border-l-4 border-black text-white' : ''} 
                            ${saleIn_data.condition === 'ခွင့်မဲ့' ? 'bg-red-400 border-l-4 border-red-600 text-white' : ''} 
                            ${saleIn_data.condition === 'ဖိုင်းအပြစ်ပေး' ? 'bg-pink-400 border-l-4 border-pink-700 ... text-white' : ''}
                            ${saleIn_data.condition === 'အလုပ်ထွက်မည့်သူ' ? 'bg-gray-400 border-l-4 border-black ... text-white' : ''}
                            ${saleIn_data.condition === 'အလုပ်ထွက်သူ' ? 'bg-black border-l-4 border-gray-400 text-white' : ''} '} 
                            ${saleIn_data.condition === 'ကြိုတင်ခွင့်တိုင်သူ' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}><div className='flex'>
                            ({index + 1}) <p className='ml-1'>{saleIn_data.Name}</p>
                        </div>
                        {saleIn_data.condition !== 'Normal' && 
                            <p className='ml-1 mt-2 border-l-4 border-r-4 border-red-600 rounded-full bg-orange-100 text-black p-2 shadow-xl'>
                            {saleIn_data.condition}
                            </p>}
                        </div>
                </Link>
            ))) : (
                <p className='text-red-500'>! No data</p>
            )
        }
    </div>
    </>
  )
}
