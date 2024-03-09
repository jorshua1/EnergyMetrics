import { FaOilWell, FaWater } from "react-icons/fa6";
import {
  TbNavigationBolt,
  TbColorFilter,
  TbGasStation,
  TbMatchstick,
  TbBackhoe,
  TbSolarPanel2,
  TbRadioactiveFilled,
  TbPackages,
  TbWindElectricity,
} from "react-icons/tb";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/primary",
    icon: <TbNavigationBolt size={32} />,
    title: "Primary Energy",
  },
  {
    path: "/carbon",
    icon: <TbMatchstick size={32} />,
    title: "Carbon Dioxide",
  },
  {
    path: "/oil",
    icon: <FaOilWell size={32} />,
    title: "Oil",
  },
  {
    path: "/gas",
    icon: <TbGasStation size={32} />,
    title: "Gas",
  },
  {
    path: "/coal",
    icon: <TbBackhoe size={32} />,
    title: "Coal",
  },
  {
    path: "/nuclear",
    icon: <TbRadioactiveFilled size={32} />,
    title: "Nuclear Energy",
  },
  {
    path: "/Hydroelectricity",
    icon: <FaWater size={32} />,
    title: "Hydroelectricity",
  },
  {
    path: "/renewable",
    icon: <TbWindElectricity size={32} />,
    title: "Renewables",
  },
  {
    path: "/electric-generation",
    icon: <TbSolarPanel2 size={32} />,
    title: "Electricity Generation",
  },
  {
    path: "/key-materials",
    icon: <TbPackages size={32} />,
    title: "Key Materials",
  },
];

export default function Sidebar() {
  return (
    <aside
      className={
        "min-h-screen w-[360px] px-4 bg-slate-300 fixed top-0 border-0 border-red-400"
      }
    >
      <div
        id="logo"
        className="h-40 w-full border-0 border-red-500 flex justify-center items-end pb-10"
      >
        <span className="relative text-slate-700 scroll-m-20 text-2xl font-extrabold tracking-tight">
          <TbColorFilter
            size={40}
            style={{ position: "absolute", top: -30, right: -25 }}
          />
          Energy<span className="text-green-600">Metrics</span>
        </span>
      </div>
      <div id="links" className="space-y-3 p-4 border-0 border-red-500">
        {menuItems.map((menuItem) => (
          <SidebarMenuItem
            key={menuItem.title}
            path={menuItem.path}
            icon={menuItem.icon}
            title={menuItem.title}
          />
        ))}
      </div>
    </aside>
  );
}
