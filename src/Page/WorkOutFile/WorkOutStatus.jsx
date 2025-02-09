import React from 'react';

function WorkOutStatus({ openParmitModel }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full max-w-4xl h-auto bg-white flex flex-col items-center justify-center rounded-lg shadow-lg p-6">
        <div className="mb-6 w-full">
          <h3 className="text-xl font-semibold text-center bg-green-200 py-2 rounded-t-lg">အလုပ်ပြန်ခေါ်နိူင်မည့်စာရင်း</h3>
          <table className="min-w-full bg-green-100 rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-2 text-left font-semibold">နာမည်</th>
                <th className="px-6 py-2 text-left font-semibold">ကြောင်းအရာ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-2">နန်းမွှေဖောင်</td>
                <td className="px-6 py-2">အလုပ်ပြန်ခေါ်မှု</td>
              </tr>
              <tr>
                <td className="px-6 py-2">နန်းမွှေဖောင်</td>
                <td className="px-6 py-2">အလုပ်ပြန်ခေါ်မှု</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-6 w-full">
          <h3 className="text-xl font-semibold text-center bg-red-200 py-2 rounded-t-lg">အလုပ်ပြန်မခေါ်သင့်သည့်စာရင်း</h3>
          <table className="min-w-full bg-red-100 rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-2 text-left font-semibold">နာမည်</th>
                <th className="px-6 py-2 text-left font-semibold">ကြောင်းအရာ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-2">နန်းမွှေဖောင်</td>
                <td className="px-6 py-2">အလုပ်ပြန်မခေါ်မှု</td>
              </tr>
              <tr>
                <td className="px-6 py-2">နန်းမွှေဖောင်</td>
                <td className="px-6 py-2">အလုပ်ပြန်မခေါ်မှု</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-sky-500 px-6 py-2 text-white font-semibold rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-opacity-50" onClick={openParmitModel}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkOutStatus;
