import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/dashboard.png",
        label: "Dashboard",
        href: "/admin",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/teacher",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/student",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/finance.png",
        label: "Finance",
        href: "/list/finance",
        visible: ["admin"],
      },
      {
        icon: "/notice.png",
        label: "Notice",
        href: "/list/notice",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/calendar.png",
        label: "Calendar",
        href: "/list/calendar",
        visible: ["admin", "teacher", "parent"],
      },
      {
        icon: "/library.png",
        label: "Library",
        href: "/list/library",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: "/message.png",
        label: "Message",
        href: "/list/message",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
    return (
        <div className="">
            {menuItems.map(i => (
                <div className="flex flex-col gap-1" key={i.title}>
                    <span className="hidden lg:block text-gray-400 text-[13px] font-semibold">{i.title}</span>
                    {i.items.map(item => (
                        <Link className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 text-[12px] font-semibold" href={item.href} key={item.label}>
                            <Image src={item.icon} alt={item.label} width={20} height={20} />
                            <span className="hidden lg:block">{ item.label}</span>
                        </Link>
                    ))}
                </div>
            ))}

        </div>
    )
}

export default Menu;