import axios from 'axios';
import React, { useEffect, useState } from 'react';

function WorkOutStatus({ openParmitModel }) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [field_data, setField_data] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res_accounting = await axios.get(`https://dashboard-yfuz.onrender.com/api/accounting`);
        const res_audit = await axios.get('https://dashboard-yfuz.onrender.com/api/audit');
        const res_car_order = await axios.get('https://dashboard-yfuz.onrender.com/api/car_order');
        const res_chack = await axios.get('https://dashboard-yfuz.onrender.com/api/chack');
        const res_dashboard = await axios.get('https://dashboard-yfuz.onrender.com/api/dashboard');
        const res_order_in = await axios.get('https://dashboard-yfuz.onrender.com/api/order_in');
        const res_order_in_two = await axios.get('https://dashboard-yfuz.onrender.com/api/order_in_two');
        const res_outjuty = await axios.get('https://dashboard-yfuz.onrender.com/api/outjuty');
        const res_sales_in = await axios.get('https://dashboard-yfuz.onrender.com/api/sales_in');
        const res_sale_out = await axios.get('https://dashboard-yfuz.onrender.com/api/sale_out');
        const res_cashier_two = await axios.get('https://dashboard-yfuz.onrender.com/api/cashier_two');
        const res_cargo_two = await axios.get('https://dashboard-yfuz.onrender.com/api/cargo_two');
        const res_carOrder_two = await axios.get('https://dashboard-yfuz.onrender.com/api/carOrder_two');
        const res_gout_two = await axios.get('https://dashboard-yfuz.onrender.com/api/gout_two');
        const res_orderIn_two = await axios.get('https://dashboard-yfuz.onrender.com/api/orderIn_two');
        const res_salesIn_two = await axios.get('https://dashboard-yfuz.onrender.com/api/salesIn_two');
        const res_saleOut_two = await axios.get('https://dashboard-yfuz.onrender.com/api/saleOut_two');
        const res_cashier_three = await axios.get('https://dashboard-yfuz.onrender.com/api/cashier_three');
        const res_cargo_three = await axios.get('https://dashboard-yfuz.onrender.com/api/cargo_three');
        const res_carOrder_three = await axios.get('https://dashboard-yfuz.onrender.com/api/carOrder_three');
        const res_gout_three = await axios.get('https://dashboard-yfuz.onrender.com/api/gout_three');
        const res_orderIn_three = await axios.get('https://dashboard-yfuz.onrender.com/api/orderIn_three');
        const res_salesIn_three = await axios.get('https://dashboard-yfuz.onrender.com/api/salesIn_three');
        const res_saleOut_three = await axios.get('https://dashboard-yfuz.onrender.com/api/saleOut_three');

        const combined_data = [...res_accounting.data,...res_audit.data,...res_car_order.data,...res_chack.data
          ,...res_dashboard.data,...res_order_in.data,...res_order_in_two.data,...res_outjuty.data,...res_sales_in.data
          ,...res_sale_out.data,...res_cashier_two.data,...res_cargo_two.data,...res_carOrder_two.data,...res_gout_two.data
          ,...res_orderIn_two.data,...res_salesIn_two.data,...res_saleOut_two.data,...res_cashier_three.data,...res_cargo_three.data
          ,...res_carOrder_three.data,...res_gout_three.data,...res_orderIn_three.data,...res_salesIn_three.data,...res_saleOut_three.data
        ];

        setData(combined_data);
      } catch (error) {
        setError(error);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
  
      const filtered_recall_Data = data.filter((item) => item.condition === "အလုပ်ထွက်မည့်သူ" && item.Phone !== "000");
      setFilterData(filtered_recall_Data);
  
      const filtered_filed_data = data.filter((item) => item.condition === "အလုပ်ထွက်မည့်သူ" && item.Phone == "000");
      setField_data(filtered_filed_data);
    }
  }, [data]);

  console.log(filterData);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full max-w-5xl h-auto bg-white flex flex-col items-center justify-center rounded-lg shadow-lg p-6">

        <div className="mb-6 w-full">
          <h3 className="text-xl font-semibold text-center bg-green-200 py-2 rounded-t-lg">အလုပ်ပြန်လည်လျှောက်ထားနိူင်သူစာရင်း</h3>
          <table className="min-w-full bg-green-100 rounded-lg text-sm text-gray-700">
            <thead>
              <tr className="border-b border-green-300">
                <th className="px-4 py-2 font-semibold text-sm text-start">ID</th>
                <th className="px-4 py-2 font-semibold text-sm text-start">Ag</th>
                <th className="px-4 py-2 font-semibold text-sm text-start">Name</th>
                <th className="px-4 py-2 font-semibold text-sm text-start">အကြောင်းအရာ</th>
                <th className="px-4 py-2 font-semibold text-sm text-start">အခြေနေ</th>
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan="2" className="px-6 py-2 text-center text-red-500">Error: {error.message}</td>
                </tr>
              ) : filterData.length > 0 ? (
                filterData.map((item, index) => (
                  <tr key={index} className="border-b text-green-700 border-green-200 hover:bg-green-200">
                    <td className="px-6 py-2 text-xs">{item.Id}</td>
                    <td className="px-6 py-2 text-xs">{item.Ag}</td>
                    <td className="px-6 py-2 text-xs">{item.Name}</td>
                    <td className="px-6 py-2 text-xs">{item.reason}</td>
                    <td className="px-6 py-2 text-xs">အလုပ်ပြန်လျှောက်နိူင်သည်။</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="px-6 py-2 text-center text-green-500">Data မရှိပါ</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mb-6 w-full">
          <h3 className="text-xl font-semibold text-center bg-red-200 py-2 rounded-t-lg">အပြီးအလုပ်ထွက်စာရင်း</h3>
          <table className="min-w-full bg-red-100 rounded-lg text-sm text-gray-700">
            <thead>
              <tr className="border-b border-red-300">
                <th className="px-4 py-2 font-semibold text-sm text-start">ID</th>
                <th className="px-4 py-2 font-semibold text-sm text-start">Ag</th>
                <th className="px-4 py-2 font-semibold text-sm text-start">Name</th>
                <th className="px-4 py-2 font-semibold text-sm text-start">အကြောင်းအရာ</th>
                <th className="px-4 py-2 font-semibold text-sm text-start">အခြေနေ</th>
              </tr>
            </thead>
            <tbody>

            {error ?(
                <tr>
                  <td colSpan="2" className="px-6 py-2 text-center text-red-500">Error: {error.message}</td>
                </tr>
            ) : field_data.length > 0 ? (
                  field_data.map((item) => (
                    <tr className="border-b border-red-200 hover:bg-red-200" key={item._id}>
                      <td className="px-6 py-2 text-red-600 text-xs">{item.Id}</td>
                      <td className="px-6 py-2 text-red-600 text-xs">{item.Ag}</td>
                      <td className="px-6 py-2 text-red-600 text-xs">{item.Name}</td>
                      <td className="px-6 py-2 text-red-600 text-xs">{item.reason}</td>
                      <td className="px-6 py-2 text-red-600 text-xs">ပြန်မခေါ်ပါ။</td>
                    </tr>
                  ))
            ) : (
              <tr>
                <td colSpan="2" className="px-6 py-2 text-center text-red-500">Data မရှိပါ</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="bg-sky-500 px-6 py-2 text-white font-semibold rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
            onClick={openParmitModel}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkOutStatus;
