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
      <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">လက်လီ</h3>
      {
        sale_outs.map((sale_out, index) => (
          <Link to={`/Sale_out/Edit/${sale_out._id}`} key={sale_out._id}>
              <p className={`
                rounded-lg m-1
                ${sale_out.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                ${sale_out.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                ${sale_out.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                ${sale_out.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                ${sale_out.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                ${sale_out.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                ${sale_out.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                ${sale_out.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                p-2 cursor-pointer font-bold
              `}>({index + 1}) {sale_out.Name}</p>
          </Link>
        ))
      }
    </div>
  )
}