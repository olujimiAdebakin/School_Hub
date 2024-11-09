"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample attendance data
const data = [
  {
    name: "Monday",
    present: 50,
    absent: 30,
    late: 10,
    onLeave: 5,
  },
  {
    name: "Tuesday",
    present: 180,
    absent: 70,
    late: 25,
    onLeave: 10,
  },
  {
    name: "Wednesday",
    present: 120,
    absent: 40,
    late: 15,
    onLeave: 8,
  },
  {
    name: "Thursday",
    present: 160,
    absent: 60,
    late: 20,
    onLeave: 12,
  },
  {
    name: "Friday",
    present: 140,
    absent: 50,
    late: 18,
    onLeave: 6,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      {/* Title and Icon Section */}
      <div className="flex justify-between items-center space-x-2 mb-4">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>

      {/* Bar Chart Container */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={20}>
          {/* Grid, Axes, Tooltip, and Legend */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tick={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tick={false} />
          <Tooltip
            conntentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            iconType="circle"
          />

          {/* Bar for "Present" attendance */}
          <Bar dataKey="present" fill="#c3ebfa" radius={[10, 10, 0, 0]} />

          {/* Bar for "Absent" attendance */}
          <Bar dataKey="absent" fill="#fae27c" radius={[10, 10, 0, 0]} />

          {/* Bar for "Late" attendance */}
          <Bar dataKey="late" fill="#ff7300" radius={[10, 10, 0, 0]} />

          {/* Bar for "On Leave" attendance */}
          <Bar dataKey="onLeave" fill="#ffc0cb" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
