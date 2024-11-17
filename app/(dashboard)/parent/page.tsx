import Announcement from '@/app/ui/Announcement';
import BigCalendar from '@/app/ui/BigCalendar';
import EventsCalendar from '@/app/ui/EventsCalendar';
import React from 'react'

const Parentpage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        {/* heading */}
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule(Adejumoke)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventsCalendar/>
        <Announcement/>
      </div>
    </div>
  );
}

export default Parentpage