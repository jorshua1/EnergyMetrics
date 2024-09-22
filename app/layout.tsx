"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import { useEffect, useState } from "react";
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
  TbAppsFilled,
} from "react-icons/tb";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "EnergyMetrics",
//   description: "Dashboard with multiple data of multiple energy sources",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showContent, setShowContent] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleClick = () => {
    setShowContent(true);
  };

  // useEffect para activar la animación
  useEffect(() => {
    if (showContent) {
      setTimeout(() => {
        setFadeIn(true);
      }, 10);
    }
  }, [showContent]);
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`flex gap-2 ${
          showContent ? "bg-slate-300" : "bg-transparent"
        } ${inter.className}`}
      >
        {!showContent && (
          <div
            className="bg-slate-700"
            style={{ height: "100vh", width: "100vw" }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center relative">
              <div
                id="logo"
                className="h-40 w-full border-0 border-red-500 flex justify-center items-end p-5"
              >
                <span className="relative text-white scroll-m-20 text-4xl font-extrabold tracking-tight">
                  <TbColorFilter
                    size={40}
                    style={{ position: "absolute", top: -30, right: -25 }}
                  />
                  Energy<span className="text-green-600">Metrics</span>
                </span>
              </div>

              <button
                onClick={handleClick}
                className="transition ease-in-out delay-15 hover:-translate-y-1 rounded-md flex items-center py-3 px-6 bg-green-600 shadow-xl text-white-700 w-max hover:bg-slate-800 hover:text-slate-300"
              >
                <span className="text-lg tracking-tighter">Ingresar</span>
              </button>

              <span className="absolute bottom-4 right-4 flex items-end text-slate-900 tracking-tighter text-lg font-bold">
                Tesis realizada por: Guillermo
              </span>
            </div>
          </div>
        )}

        {showContent && (
          <>
            <div
              className={`m-0 p-0  transition-opacity duration-1000 ${
                fadeIn ? "opacity-100" : "opacity-0"
              }`}
            >
              <Sidebar />
            </div>
            <div
              className={`min-h-screen ml-[350px] w-full z-0 shadow-lg bg-slate-100 rounded-tl-3xl 
                transition-opacity duration-1000 ${
                  fadeIn ? "opacity-100" : "opacity-0"
                }`}
            >
              {children}
            </div>
          </>
        )}
      </body>
    </html>
  );
}
