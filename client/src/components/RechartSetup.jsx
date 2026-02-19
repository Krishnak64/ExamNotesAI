// import React from 'react'
// import {BarChart,Bar, cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
// 
//  export default  function RechartSetup({charts}) {
// 
//   if (!charts || charts.length === 0) return null;
//   const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "ef4444", "#06b6d4"]
// 
//   return (
//     <div className='space-y-8'>
//         {charts?.map((chart, index)=>(
//             <div key={index} className='border border-gray-200 rounded-xl p-4 bg-white'>
//           <h4 className='font-semibold text-gray-800 mb-3'>
//             📊 {chart.title}
//           </h4>
// 
//                 <div className='h-72'>
// 
//                     <ResponsiveContainer width="100%" height="100%">
//                         {chart.type === "bar" && (
//                             <BarChart data={chart.data}>
//                                  <XAxis/>
//                                  <YAxis/>
//                                  <Tooltip />
//                                  <Bar dataKey="value" radius={[6,6,0,0]}>
//                                 {chart.data?.map((_, i) => (
//                                     <cell key={i} fill={COLORS[i % COLORS.length]} />
//                                 ))}
//                                 </Bar>
// 
//                             </BarChart>
//                         )}
// 
//                         {chart.type === "line" && (
//                             <LineChart data={chart.data}>
//                                 <XAxis dataKey="name"/>
//                                  <YAxis/>
//                                  <Tooltip />
//                                  <Line type="monotone"
//                                      dataKey="value"
//                                      stroke="#6366f1"
//                                      strokeWidth={3} />
//                             </LineChart>
//                         )}
// 
//                         {chart.type === "pie" && (
//                             <PieChart>
//                                 <Tooltip />
//                                 <Pie data={chart.data}
//                                      dataKey="value"
//                                      nameKey="name"
//                                      outerRadius={100}
//                                      label>
//                                         {chart.data?.map((_, i) => (
//                                             <cell key={i} fill={COLORS[i % COLORS.length]}/>
//                                         ))}
// 
//                                 </Pie>
//                             </PieChart>
//                         )}
//                     </ResponsiveContainer>
// 
//                 </div>    
// 
//             </div>
//         ))}
//     </div>
//   )
// }



// import React from 'react'
// import {BarChart, Bar, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
// 
// function RechartSetup({charts}) {
//   if (!charts || charts.length === 0) return null;
// 
//   const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];
// 
//   return (
//     <div className='space-y-8'>
//       {charts?.map((chart, index) => (
//         <div key={index} className='border border-gray-200 rounded-xl p-4 bg-white'>
//           <h4 className='font-semibold text-gray-800 mb-3'>
//             📊 {chart.title}
//           </h4>
// 
//           <div className='h-72'>
//             <ResponsiveContainer width="100%" height="100%">
//               {chart.type === "bar" && (
//                   <BarChart data={chart.data}>
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                   <Bar dataKey="value" radius={[6,6,0,0]}>
//                     {chart.data?.map((_, i) => (
//                       <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                     ))}
//                   </Bar>
//                 </BarChart>
//               )}
// 
//               {chart.type === "line" && (
//                 <LineChart data={chart.data}>
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} />
//                 </LineChart>
//               )}
// 
//               {chart.type === "pie" && (
//                 <PieChart>
//                   <Tooltip />
//                   <Pie
//                     data={chart.data}
//                     dataKey="value"
//                     nameKey="name"
//                     outerRadius={100}
//                     label
//                   >
//                     {chart.data?.map((_, i) => (
//                       <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               )}
//             </ResponsiveContainer>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }
// 
// export default RechartSetup


import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

function RechartSetup({ charts }) {
  // If no charts provided, show nothing
  if (!charts || charts.length === 0) return null;

  // Color palette for bars/pie slices
  const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];

  return (
    <div className='space-y-8'>
      {charts.map((chart, idx) => {
        // Skip charts with no data
        if (!chart.data || chart.data.length === 0) return null;

        return (
          <div key={idx} className='border border-gray-200 rounded-xl p-4 bg-white'>
            <h4 className='font-semibold text-gray-800 mb-3'>📊 {chart.title}</h4>

            {/* Responsive container for chart */}
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                {/* Bar Chart */}
                {chart.type === "bar" && (
                  <BarChart data={chart.data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      {chart.data.map((_, i) => (
                        <Cell key={`bar-${i}`} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                )}

                {/* Line Chart */}
                {chart.type === "line" && (
                  <LineChart data={chart.data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} />
                  </LineChart>
                )}

                {/* Pie Chart */}
                {chart.type === "pie" && (
                  <PieChart>
                    <Tooltip />
                    <Pie
                      data={chart.data}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={100}
                      label={({ name, percent }) =>
                        `${name} (${(percent * 100).toFixed(0)}%)`
                      }
                    >
                      {chart.data.map((_, i) => (
                        <Cell key={`pie-${i}`} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RechartSetup;


