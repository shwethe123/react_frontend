import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Sale_out() {
    const [ saleOut, setSaleOut ] = useState('');

    useEffect(() => {
        const fetchSaleOut = async () => {
            const response = await fetch('https://dashboard-yfuz.onrender.com/api/saleOut_two');
            const data = await response.json();
            setSaleOut(data);
        };
        fetchSaleOut();
    }, []);

  return (
    <>
    <div>
        <h3 className='text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer'>လက်ကားပိုင်း</h3>
        {
            Array.isArray(saleOut) && saleOut.length > 0 ? (saleOut.map((saleOut_data, index) => (
                <Link to={`/SaleOut2/Edit/${saleOut_data._id}`} key={saleOut_data._id}>
                    <p className={`
                        rounded-md m-1
                            ${saleOut_data.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${saleOut_data.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${saleOut_data.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${saleOut_data.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                            ${saleOut_data.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                            ${saleOut_data.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                            ${saleOut_data.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                            ${saleOut_data.condition === 'condition8' ? 'bg-black text-white' : ''} '} 
                            ${saleOut_data.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}>({index + 1}) {saleOut_data.Name}</p>
                </Link>
            ))) : (
                <p className='text-red-500'>! No data</p>
            )
        }
    </div>
    </>
  )
}