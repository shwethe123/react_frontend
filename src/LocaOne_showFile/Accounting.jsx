import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Accounting() {

    const [ accountings, setAccounting ] = useState([]);

    useEffect(() => {
        const AccountingFecth = async () => {
            const respons = await fetch('https://dashboard-yfuz.onrender.com/api/accounting');
            const data = await respons.json();
            setAccounting(data);
        };
        AccountingFecth();
    },[]);

  return (
    <>
        <div>
            <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">အကြွေးကိုင်</h3>
            {
                accountings.length && (accountings.map((accounting, index) => (
                <Link to={`/Account/Edit/${accounting._id}`} key={accounting._id}>
                    <div className={`
                        rounded-md m-1
                            ${accounting.condition === 'အလုပ်နောက်ကျ' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${accounting.condition === 'ခွင့်တစ်ပိုင်း' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${accounting.condition === 'ခွင့်တစ်ရက်' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${accounting.condition === 'ခွင့်ရက်ရှည်' ? 'bg-green-600 border-l-4 border-black text-white' : ''} 
                            ${accounting.condition === 'ခွင့်မဲ့' ? 'bg-red-400 border-l-4 border-red-600 text-white' : ''} 
                            ${accounting.condition === 'ဖိုင်းအပြစ်ပေး' ? 'bg-pink-400 border-l-4 border-pink-700 ... text-white' : ''}
                            ${accounting.condition === 'အလုပ်ထွက်မည့်သူ' ? 'bg-gray-400 border-l-4 border-black ... text-white' : ''}
                            ${accounting.condition === 'အလုပ်ထွက်သူ' ? 'bg-black border-l-4 border-gray-400 text-white' : ''} '} 
                            ${accounting.condition === 'ကြိုတင်ခွင့်တိုင်သူ' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}><div className='flex'>
                            ({index + 1}) <p className='ml-1'>{accounting.Name}</p>
                        </div>
                        {accounting.condition !== 'Normal' && 
                            <p className='ml-1 mt-2 border-l-4 border-r-4 border-red-600 rounded-full bg-orange-100 text-black p-2 shadow-xl'>
                                {accounting.condition}
                            </p>}
                        </div>
                    </Link>
                )))
            }
        </div>
    </>
  )
}
