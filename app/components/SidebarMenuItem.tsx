"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface props {
  path: string;
  icon: JSX.Element;
  title: string;
}

export const SidebarMenuItem = ({ path, icon, title }: props) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`transition ease-in-out delay-15 hover:-translate-y-1 rounded-md flex items-center py-3 px-6 ${
        pathName === path
          ? "bg-slate-700 text-white hover:text-slate-700 hover:bg-white font-semibold"
          : "text-slate-600 hover:bg-gray-100 font-normal hover:font-semibold "
      } `}
    >
      <span> {icon} </span>
      <span className="pl-3 text-lg antialiased	scroll-m-20 tracking-tighter">
        {" "}
        {title}{" "}
      </span>
    </Link>
  );
};
