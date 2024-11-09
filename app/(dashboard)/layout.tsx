
import Link from "next/link";
import Menu from "../ui/Menu";
import Image from "next/image";
import Navbar from "../ui/Navbar";
// import { UserProvider } from "../contexts/UserContext";



export default function DashboardLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <UserProvider>
      <div className="h-screen flex">
        {/* left */}
        <div className="w-[14%] md:[8%] lg:w-[16%] xl:w-[14%] py-2 px-4 ">
          <Link
            href="/"
            className="flex item-center justify-center lg:justify-start gap-2"
          >
            <Image src="/logo.png" alt="logo" width={27} height={27} />
            <span className="hidden lg:block text-[14px] text-lime-600 font-bold">
              Edu_Manage
            </span>
          </Link>
          <Menu />
        </div>

        {/* right*/}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl-[86%] bg-[#f7f8fa] overflow-scroll">
          <Navbar />
          {children}
        </div>
      </div>
    // </UserProvider>
  );
}
