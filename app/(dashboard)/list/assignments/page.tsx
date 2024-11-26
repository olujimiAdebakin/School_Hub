import Pagination from "@/app/ui/Pagination";
import Table from "@/app/ui/Table";
import TableSearch from "@/app/ui/TableSearch";
import { assignmentsData, examsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Assignment = {
  id: number;
  subject: string;
  class: string;
    teacher: string[];
    dueDate: number;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell ",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell ",
  },
  {
    header: "Due Date",
    accessor: "due date",
    className: "hidden md:table-cell ",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const AssignmentListPage = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-400"
    >
      <td className="font-semibold">{item.subject}</td>
      <td className="">{item.class}</td>
      <td className="text-xs text-gray-500">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                <Image src="/delete.png" alt="" width={16} height={16} />
              </button>
              {/* <FormModal table="teacher" type="delete" id={item.id} /> */}
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
              <Image src="/sort.png" alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
              <Image src="/plus.png" alt="filter" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* list */}

      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />

      {/* pagination */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default AssignmentListPage;
