import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Sale_out() {

const [ sale_outs, setSale_outs ] = useState([]);

useEffect(() => {
  const fetch_sale_out = async () => {
    const response = await fetch('https://dashboard-yfuz.onrender.com/api/sale_out');
    const data = await response.json();
    setSale_outs(data);
  };

  fetch_sale_out();
}, []);

  return (
    <div>
      <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">လက်လီပိုင်း</h3>
      {
        sale_outs.map((sale_out, index) => (
          <Link to={`/Sale_out/Edit/${sale_out._id}`} key={sale_out._id}>
              <p className={`
                rounded-md m-1
                  ${sale_out.condition === 'အလုပ်နောက်ကျ' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                  ${sale_out.condition === 'ခွင့်တစ်ပိုင်း' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                  ${sale_out.condition === 'ခွင့်တစ်ရက်' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                  ${sale_out.condition === 'ခွင့်ရက်ရှည်' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                  ${sale_out.condition === 'ခွင့်မဲ့' ? 'bg-red-500 text-white' : ''} 
                  ${sale_out.condition === 'ဖိုင်းအပြစ်ပေး' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                  ${sale_out.condition === 'အလုပ်ထွက်မည့်သူ' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                  ${sale_out.condition === 'အလုပ်ထွက်သူ' ? 'bg-black text-white' : ''} '} 
                  ${sale_out.condition === 'ကြိုတင်ခွင့်တိုင်သူ' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                p-2 cursor-pointer font-bold
              `}>({index + 1}) {sale_out.Name}</p>
          </Link>
        ))
      }
    </div>
  )
}
