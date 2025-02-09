import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sale_in() {
  const [saleInData, setSaleInData] = useState([]);

  useEffect(() => {
    const fetchSaleInData = async () => {
      const response = await fetch('https://dashboard-yfuz.onrender.com/api/sales_in');
      const data = await response.json();
      setSaleInData(data);
    };

    fetchSaleInData();
  }, []);

  return (
    <div>
      <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">လက်ကားပိုင်း</h3>
      {saleInData.map((item, index) => (
        <div key={item._id}>
          <Link to={`/Sale_in_edit/edit/${item._id}`}>
          <div className={`
                rounded-md m-1
                    ${item.condition === 'အလုပ်နောက်ကျ' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                    ${item.condition === 'ခွင့်တစ်ပိုင်း' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                    ${item.condition === 'ခွင့်တစ်ရက်' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                    ${item.condition === 'ခွင့်ရက်ရှည်' ? 'bg-green-600 border-l-4 border-black text-white' : ''} 
                    ${item.condition === 'ခွင့်မဲ့' ? 'bg-red-400 border-l-4 border-red-600 text-white' : ''} 
                    ${item.condition === 'ဖိုင်းအပြစ်ပေး' ? 'bg-pink-400 border-l-4 border-pink-700 ... text-white' : ''}
                    ${item.condition === 'အလုပ်ထွက်မည့်သူ' ? 'bg-gray-400 border-l-4 border-black ... text-white' : ''}
                    ${item.condition === 'အလုပ်ထွက်သူ' ? 'bg-black border-l-4 border-gray-400 text-white' : ''} '} 
                    ${item.condition === 'ကြိုတင်ခွင့်တိုင်သူ' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                p-2 cursor-pointer font-bold
                `}><div className='flex'>
                    ({index + 1}) <p className='ml-1'>{item.Name}</p>
                </div>
                {item.condition !== 'Normal' && 
                    <p className='ml-1 mt-2 border-l-4 border-r-4 border-red-600 rounded-full bg-orange-100 text-black p-2 shadow-xl'>
                        {item.condition}
                    </p>}
                </div>
          </Link >
        </div>
      ))}
    </div>
  );
}
