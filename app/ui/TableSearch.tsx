import Image from 'next/image';


const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-3">
      <Image src="/search.png" alt="search" width={12} height={12} />
      <input
        type="text"
        placeholder="Search...."
        className="bg-inherit outline-none w-[200px]"
      />
    </div>
  );
}

export default TableSearch