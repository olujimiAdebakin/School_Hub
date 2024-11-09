import AttendanceChart from '@/app/charts/AttendanceChart';
import CountChart from '@/app/charts/CountChart';
import UserCard from '@/app/ui/UserCard';
import React from 'react'

const Adminpage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* Middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart/>
          </div>

          {/* attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart/>
          </div>
        </div>

        {/* Bottom charts */}
        <div></div>
      </div>

      {/* right */}
      <div className="w-full lg:1/3">r</div>
    </div>
  );
}

export default Adminpage