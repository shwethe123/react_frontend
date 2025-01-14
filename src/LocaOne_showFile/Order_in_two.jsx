import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Order_in_two() {

const [ order_in_twos, setOrder_in_two ] = useState([]);

useEffect(() => {
  const fetchOrder_in_two = async () => {
    const response = await fetch('https://dashboard-yfuz.onrender.com/api/order_in_two');
    const data = await response.json();
    setOrder_in_two(data);
  };

  fetchOrder_in_two();
}, []);

  return (
    <div>
      <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">ပစ္စည်းမှာ</h3>
      {
        order_in_twos.map((order_in_two, index) => (
          <Link to={`/OrderIn2/Edit/${order_in_two._id}`} key={order_in_two._id}>
              <p className={`
                rounded-md m-1
                    ${order_in_two.condition === 'အလုပ်နောက်ကျ' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                    ${order_in_two.condition === 'ခွင့်တစ်ပိုင်း' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                    ${order_in_two.condition === 'ခွင့်တစ်ရက်' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                    ${order_in_two.condition === 'ခွင့်ရက်ရှည်' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                    ${order_in_two.condition === 'ခွင့်မဲ့' ? 'bg-red-500 text-white' : ''} 
                    ${order_in_two.condition === 'ဖိုင်းအပြစ်ပေး' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                    ${order_in_two.condition === 'အလုပ်ထွက်မည့်သူ' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                    ${order_in_two.condition === 'အလုပ်ထွက်သူ' ? 'bg-black text-white' : ''} '} 
                    ${order_in_two.condition === 'ကြိုတင်ခွင့်တိုင်သူ' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                p-2 cursor-pointer font-bold
              `}>({index + 1}) {order_in_two.Name}</p>
          </Link>
        ))
      }
    </div>
  )
}
