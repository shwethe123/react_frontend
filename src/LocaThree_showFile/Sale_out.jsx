import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Sale_out() {
    const [saleOut, setSaleOut ] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchSaleOut = async () => {
            try {
                const response = await fetch('https://dashboard-yfuz.onrender.com/api/saleOut_three');
                if (!response.ok) {
                    throw new Error('not response api');
                };
                const data = await response.json();
                setSaleOut(data);
            } catch (error) {
                console.error('Error fetching saleOut data:', error);
            }
        };
        fetchSaleOut();
    }, [setSaleOut]);

  return (
    <>
    <div>
    <h3 className='text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer'>လက်ကားပိုင်း</h3>
        {
            Array.isArray(saleOut) && saleOut.length > 0 ? (saleOut.map((saleOutData, index) => (
                <Link to={`/Sale_out3/Edit/${saleOutData._id}`} key={saleOutData._id}>
                    <div className={`
                        rounded-md m-1
                            ${saleOutData.condition === 'အလုပ်နောက်ကျ' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${saleOutData.condition === 'ခွင့်တစ်ပိုင်း' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${saleOutData.condition === 'ခွင့်တစ်ရက်' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${saleOutData.condition === 'ခွင့်ရက်ရှည်' ? 'bg-green-600 border-l-4 border-black text-white' : ''} 
                            ${saleOutData.condition === 'ခွင့်မဲ့' ? 'bg-red-400 border-l-4 border-red-600 text-white' : ''} 
                            ${saleOutData.condition === 'ဖိုင်းအပြစ်ပေး' ? 'bg-pink-400 border-l-4 border-pink-700 ... text-white' : ''}
                            ${saleOutData.condition === 'အလုပ်ထွက်မည့်သူ' ? 'bg-gray-400 border-l-4 border-black ... text-white' : ''}
                            ${saleOutData.condition === 'အလုပ်ထွက်သူ' ? 'bg-black border-l-4 border-gray-400 text-white' : ''} '} 
                            ${saleOutData.condition === 'ကြိုတင်ခွင့်တိုင်သူ' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}><div className='flex'>
                            ({index + 1}) <p className='ml-1'>{saleOutData.Name}</p>
                        </div>
                        {saleOutData.condition !== 'Normal' && 
                            <p className='ml-1 mt-2 border-l-4 border-r-4 border-red-600 rounded-full bg-orange-100 text-black p-2 shadow-xl'>
                            {saleOutData.condition}
                            </p>}
                        </div>
                </Link>
            ))) : (
                <p className='text-red-500'>!No Data</p>
            )
        }
    </div>
    </>
  )
}
