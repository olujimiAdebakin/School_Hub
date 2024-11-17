import Pagination from '@/app/ui/Pagination';
import Table from '@/app/ui/Table';
import TableSearch from '@/app/ui/TableSearch';
import { role, subjectsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Subjects = {
  id: number;
    name: string;
    teachers: string[];
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell ",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const SubjectsListPage = () => {
  const renderRow = (item: Subjects) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-400"
    >
    
        <td className="font-semibold">{item.name}</td>
        <td className='hidden md:table-cell'>
        
          <p className="text-xs text-gray-500">{item.teachers.join(",")}</p>
        </td>
    

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
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
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

      <Table columns={columns} renderRow={renderRow} data={subjectsData} />

      {/* pagination */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};


export default SubjectsListPage;