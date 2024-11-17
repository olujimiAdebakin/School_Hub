import Pagination from "@/app/ui/Pagination";
// import Table from "@/app/ui/Table";
import TableSearch from "@/app/ui/TableSearch";
// import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormModal from "@/app/ui/FormModal"; // Ensure this import is added
import { role, teachersData } from "@/lib/data";
import Table from "@/app/ui/Table";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacher",
    className: "hidden md:table-cell ",
  },
  {
    header: "Subjects",
    accessor: "subject",
    className: "hidden md:table-cell ",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell ",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell ",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell ",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const TeachersListPage = () => {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-400"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
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
    
        <Table columns={columns} renderRow={renderRow} data={teachersData} />
        
     
      {/* pagination */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default TeachersListPage;