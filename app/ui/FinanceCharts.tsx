"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FinanceCharts = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); 

      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOGL&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from Alpha Vantage");
        }

        const result = await response.json();

        
        console.log("API Response:", result);

        
        const timeSeries = result["Time Series (Daily)"];
        if (!timeSeries) {
          throw new Error("Time series data is missing in the API response.");
        }

        
        const chartData = Object.keys(timeSeries)
          .slice(0, 5) 
          .map((date) => ({
            name: date,
            Income: parseFloat(timeSeries[date]["4. close"]), 
            Expense: parseFloat(timeSeries[date]["4. close"]) * 0.05, 
          }));

        setData(chartData);
      } catch (err: any) {
        setError(err.message); 
        console.error("Error fetching or processing data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-4 h-full shadow-lg">
        <div className="flex justify-center items-center h-full">
          <span className="text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg p-4 h-full shadow-lg">
        <div className="flex justify-center items-center h-full">
          <span className="text-red-600">Error: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-4 h-full shadow-lg">
      {/* Title and Icon Section */}
      <div className="flex justify-between items-center space-x-2 mb-4">
        <h1 className="text-lg font-semibold text-gray-700">Earnings</h1>
        <Image src="/finance.png" alt="Finance" width={20} height={20} />
      </div>

      {/* Finance chart container */}
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#9ca3af" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#9ca3af" }}
            tickLine={false}
            tickMargin={10}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            iconType="circle"
          />

          <Line
            type="monotone"
            dataKey="Income"
            stroke="#3b82f6"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="Expense"
            stroke="#e5e7eb"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceCharts;

// "use client";

// import Image from "next/image";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const FinanceCharts = () => {
//   const data = [
//     { name: "Jan", Income: 4000, Expense: 2400, amt: 2400 },
//     { name: "Feb", Income: 3000, Expense: 1398, amt: 2210 },
//     { name: "Mar", Income: 2000, Expense: 9800, amt: 2290 },
//     { name: "Apr", Income: 2780, Expense: 3908, amt: 2000 },
//     { name: "May", Income: 1890, Expense: 4800, amt: 2181 },
//     { name: "Jun", Income: 2390, Expense: 3800, amt: 2500 },
//     { name: "Jul", Income: 3490, Expense: 4300, amt: 2100 },
//     { name: "Aug", Income: 3490, Expense: 4300, amt: 2100 },
//     { name: "Sep", Income: 3490, Expense: 4300, amt: 2100 },
//     { name: "Oct", Income: 3490, Expense: 4300, amt: 2100 },
//     { name: "Nov", Income: 3490, Expense: 4300, amt: 2100 },
//     { name: "Dec", Income: 3490, Expense: 4300, amt: 2100 },
//   ];

//   return (
//     <div className="bg-white rounded-lg p-4 h-full shadow-lg">
//       {/* Title and Icon Section */}
//       <div className="flex justify-between items-center space-x-2 mb-4">
//         <h1 className="text-lg font-semibold text-gray-700">Earnings</h1>
//         <Image src="/finance.png" alt="More" width={20} height={20} />
//       </div>

//       {/* Finance chart container */}
//       <ResponsiveContainer width="100%" height={350}>
//         <LineChart
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />

//           <XAxis
//             dataKey="name"
//             axisLine={false}
//             tick={{ fill: "#9ca3af" }}
//             tickLine={false}
//             tickMargin={10}
//           />

//           <YAxis
//             axisLine={false}
//             tick={{ fill: "#9ca3af" }}
//             tickLine={false}
//             tickMargin={10}
//           />

//           <Tooltip />

//           <Legend
//             align="center"
//             verticalAlign="top"
//             wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
//             iconType="circle"
//           />

//           <Line
//             type="monotone"
//             dataKey="Income"
//             stroke="#3b82f6" // Tailwind Blue color
//             strokeWidth={5}
//           />

//           <Line
//             type="monotone"
//             dataKey="Expense"
//             stroke="#e5e7eb" // Tailwind Gray color
//             strokeWidth={5}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default FinanceCharts;
