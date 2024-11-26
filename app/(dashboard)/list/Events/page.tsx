import Pagination from "@/app/ui/Pagination";
import Table from "@/app/ui/Table";
import TableSearch from "@/app/ui/TableSearch";
import { eventsData, role } from "@/lib/data"; // Import eventsData and role
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  {
    header: "Event Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell ",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell ",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell ",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const EventsListPage = () => {
  // Render each event's row with its data
  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-400"
    >
      <td className="font-semibold">{item.title}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td>{item.endTime}</td>

      <td>
        <div className="flex items-center gap-2">
          {/* View/Edit button */}
          <Link href={`/events/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/edit.png" alt="edit" width={16} height={16} />
            </button>
          </Link>

          {/* Delete button (only for admins) */}
          {role === "admin" && (
            <>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                <Image src="/delete.png" alt="delete" width={16} height={16} />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top section */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
              <Image src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
              <Image src="/plus.png" alt="add" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Table list */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />

      {/* Pagination */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default EventsListPage;
