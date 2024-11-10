"use client"

import Image from 'next/image';
import { title } from 'process';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary Data

const schoolEvents = [
  {
    id: 1,
    title: "Mathematics Department Workshop",
    description:
      "A comprehensive workshop on advanced algebra and calculus, designed for high school seniors preparing for university-level mathematics. Includes hands-on practice and problem-solving sessions.",
    date: "2024-05-10",
    location: "Main Hall, School Campus",
    category: "Mathematics",
    time: "9:00 AM - 1:00 PM",
  },
  {
    id: 2,
    title: "Art & Design Exhibition",
    description:
      "A showcase of student artwork, including paintings, sculptures, and digital designs. The exhibition celebrates the creativity of our students and their talent in the field of visual arts.",
    date: "2024-06-18",
    location: "School Gallery",
    category: "Arts",
    time: "4:00 PM - 7:00 PM",
  },
  {
    id: 3,
    title: "Science Fair 2024",
    description:
      "The annual school science fair, where students present their innovative science projects. A great opportunity to explore the world of physics, chemistry, biology, and environmental science.",
    date: "2024-07-01",
    location: "Science Lab Building",
    category: "Science",
    time: "10:00 AM - 4:00 PM",
  },
  {
    id: 4,
    title: "Literature Reading Club",
    description:
      "A gathering of book enthusiasts and aspiring writers for a lively discussion on classic and contemporary literature. Students will present their own short stories and poetry for feedback.",
    date: "2024-08-12",
    location: "Library Conference Room",
    category: "Literature",
    time: "3:00 PM - 6:00 PM",
  },
  {
    id: 5,
    title: "History Department Debate",
    description:
      "A debate on the impact of historical events on modern society. Students will be divided into teams to argue various perspectives on topics such as world wars, colonialism, and revolutions.",
    date: "2024-09-05",
    location: "Auditorium",
    category: "History",
    time: "2:00 PM - 5:00 PM",
  },
  {
    id: 6,
    title: "Annual Sports Day",
    description:
      "A day filled with athletic competitions, including running races, football, and basketball. All students are encouraged to participate, with prizes awarded for individual and team performances.",
    date: "2024-11-10",
    location: "School Sports Complex",
    category: "Sports",
    time: "8:00 AM - 4:00 PM",
  },
  {
    id: 7,
    title: "Health and Wellness Fair",
    description:
      "An event focused on physical and mental well-being. Workshops and talks will cover topics such as healthy eating, stress management, and fitness routines.",
    date: "2024-10-22",
    location: "School Auditorium",
    category: "Health & Wellness",
    time: "9:00 AM - 3:00 PM",
  },
  {
    id: 8,
    title: "Career Day",
    description:
      "A day where professionals from various industries come to talk to students about different career paths. Students can interact with professionals in fields like medicine, law, engineering, and the arts.",
    date: "2024-11-01",
    location: "School Gymnasium",
    category: "Career Development",
    time: "10:00 AM - 2:00 PM",
  },
  {
    id: 9,
    title: "Music Recital: Students Showcase",
    description:
      "A recital where talented students showcase their skills in various musical instruments and vocal performances. Includes performances from the school orchestra, choir, and solo artists.",
    date: "2024-12-05",
    location: "School Auditorium",
    category: "Music",
    time: "6:00 PM - 9:00 PM",
  },
  {
    id: 10,
    title: "Tech Club Coding Hackathon",
    description:
      "A day-long coding competition where students will work in teams to develop apps, websites, or games. Prizes will be awarded to the most innovative projects.",
    date: "2024-04-20",
    location: "Computer Lab",
    category: "Technology",
    time: "9:00 AM - 5:00 PM",
  },
];


const EventsCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />

      {/* events */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="event" width={20} height={20} />
      </div>
      <div className="flex flex-col gsp-4">
        {schoolEvents.map((event) => (
          <div
            className="p-5 rounded-md border-gray-100 border-t-4 odd:border-t-[#C3EBFA] even:border-[#CFCEFF]"
            key={event.id}
          >
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-gray-500">{event.title}</h1>
              <p className="text-sm text-gray-400">{event.description}</p>
              <p className="text-sm font-bold text-blue-300">{event.date}</p>
              <span className="text-gray-300 text-xs">{event.location}</span>
              <span className="text-yellow-300 text-sm font-semibold">
                {event.category}
              </span>
              <small className="text-xs text-green-400">{event.time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsCalendar