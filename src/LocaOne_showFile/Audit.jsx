import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function audit() {

    const [ audits, setAudit ] = useState([]);

    useEffect(() => {
        const auditFecth = async () => {
            const respons = await fetch('https://dashboard-yfuz.onrender.com/api/audit');
            const data = await respons.json();
            setAudit(data);
        };
        auditFecth();
    },[]);

  return (
    <>
        <div>
            <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">စက်ကိုင်</h3>
            {
                audits.length > 0 && (audits.map((audit, index) => (
                <Link to={`/Audit/Edit/${audit._id}`} key={audit._id}>
                <div className={`
                    rounded-md m-1
                        ${audit.condition === 'အလုပ်နောက်ကျ' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                        ${audit.condition === 'ခွင့်တစ်ပိုင်း' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                        ${audit.condition === 'ခွင့်တစ်ရက်' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                        ${audit.condition === 'ခွင့်ရက်ရှည်' ? 'bg-green-600 border-l-4 border-black text-white' : ''} 
                        ${audit.condition === 'ခွင့်မဲ့' ? 'bg-red-400 border-l-4 border-red-600 text-white' : ''} 
                        ${audit.condition === 'ဖိုင်းအပြစ်ပေး' ? 'bg-pink-400 border-l-4 border-pink-700 ... text-white' : ''}
                        ${audit.condition === 'အလုပ်ထွက်မည့်သူ' ? 'bg-gray-400 border-l-4 border-black ... text-white' : ''}
                        ${audit.condition === 'အလုပ်ထွက်သူ' ? 'bg-black border-l-4 border-gray-400 text-white' : ''} '} 
                        ${audit.condition === 'ကြိုတင်ခွင့်တိုင်သူ' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                    p-2 cursor-pointer font-bold
                `}><div className='flex'>
                        ({index + 1}) <p className='ml-1'>{audit.Name}</p>
                    </div>
                    {audit.condition !== 'Normal' && 
                        <p className='ml-1 mt-2 border-l-4 border-r-4 border-red-600 rounded-full bg-orange-100 text-black p-2 shadow-xl'>
                            {audit.condition}
                        </p>}
                    </div>
                </Link>
                )))
            }
        </div>
    </>
  )
}
