import React, { useEffect, useState } from 'react'

export default function Car_go() {
    const [ carGo, setCarGo ] = useState('');
    
    useEffect(() => {
        const fetchCarGo = async () => {
            const response = await fetch('https://dashboard-yfuz.onrender.com/api/cargo_three');
            const data = await response.json();
            setCarGo(data);
        };
        fetchCarGo();
    }, []);

  return (
    <>
    <div>
        <h3 className='text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer'>ကားတင်</h3>
        {
            Array.isArray(carGo) && carGo.length > 0 ? (carGo.map((carGo_data, index) => (
                <div key={carGo_data._id}>
                    <p className={`
                        rounded-md m-1
                            ${carGo_data.condition === 'အလုပ်နောက်ကျ' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${carGo_data.condition === 'ခွင့်တစ်ပိုင်း' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${carGo_data.condition === 'ခွင့်တစ်ရက်' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${carGo_data.condition === 'ခွင့်ရက်ရှည်' ? 'bg-green-600 border-l-4 border-black text-white' : ''} 
                            ${carGo_data.condition === 'ခွင့်မဲ့' ? 'bg-red-400 border-l-4 border-red-600 text-white' : ''} 
                            ${carGo_data.condition === 'ဖိုင်းအပြစ်ပေး' ? 'bg-pink-400 border-l-4 border-pink-700 ... text-white' : ''}
                            ${carGo_data.condition === 'အလုပ်ထွက်မည့်သူ' ? 'bg-gray-400 border-l-4 border-black ... text-white' : ''}
                            ${carGo_data.condition === 'အလုပ်ထွက်သူ' ? 'bg-black border-l-4 border-gray-400 text-white' : ''} '} 
                            ${carGo_data.condition === 'ကြိုတင်ခွင့်တိုင်သူ' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}>({index + 1}) {carGo_data.Name}</p>
                </div>
            ))) : (
                <p className='text-red-500'>! No data</p>
            )
        }
    </div>
    </>
  )
}
