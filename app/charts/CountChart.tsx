"use client"

import Image from "next/image";

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 40,
    fill: "#fae27c",
  },
  {
    name: "Boys",
    count: 60,
    fill: "#c3ebfa",
  },
  //   {
  //     name: "30-34",
  //     uv: 15.69,
  //     pv: 1398,
  //     fill: "#8dd1e1",
  //   },
  //   {
  //     name: "35-39",
  //     uv: 8.22,
  //     pv: 9800,
  //     fill: "#82ca9d",
  //   },
  //   {
  //     name: "40-49",
  //     uv: 8.63,
  //     pv: 3908,
  //     fill: "#a4de6c",
  //   },
  //   {
  //     name: "50+",
  //     uv: 2.63,
  //     pv: 4800,
  //     fill: "#d0ed57",
  //   },
  //   {
  //     name: "unknow",
  //     uv: 6.67,
  //     pv: 4800,
  //     fill: "#ffc658",
  //   },
];

// const style = {
//   top: "50%",
//   right: 0,
//   transform: "translate(0, -50%)",
//   lineHeight: "24px",
// };

const CountChart = () => {
  return (
    <div className="bg-white w-full rounded-xl h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* charts */}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={34}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Bottom */}
      <div className="flex justify-center gap-16">
        <div className=" flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#EDF9FD] rounded-full">
            <h2 className="font-bold">2,400</h2>
            <h2 className="text-xs text-gray-300">Boys(55%)</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountChart