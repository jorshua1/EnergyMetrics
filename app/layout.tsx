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
            className="relative bg-cover bg-center"
            style={{
              height: "100vh",
              width: "100vw",
              backgroundImage: "url('/imagen3.jpg')",
            }}
          >
            <div className="w-full h-full flex flex-col pl-8 md:pl-24 space-y-6 md:pt-52 justify-center md:justify-normal">
              {/* Sección del Logo */}
              <div id="logo" className="h-auto w-full flex items-start">
                <span className="relative text-slate-900 scroll-m-20 text-3xl font-extrabold tracking-tight">
                  <TbColorFilter
                    size={40}
                    style={{ position: "absolute", top: -30, right: -25 }}
                  />
                  Energy<span className="text-white">Metrics</span>
                </span>
                {/* <span className="text-white text-5xl font-extrabold tracking-tight">
                  Sun<span className="text-blue-600">Volt</span>
                </span> */}
              </div>

              {/* Título Principal */}
              <h1 className="text-white font-bold tracking-tighter text-5xl lg:text-7xl">
                Empowering Change <br />{" "}
                <span className="text-slate-900 font-extrabold">
                  One Metric
                </span>{" "}
                at Time
              </h1>

              {/* Descripción */}
              <p
                className=" text-white text-lg md:text-2xl font-light tracking-tighter w-2/3 md:p-3 rounded-2xl"
                style={{ margin: 0 }}
              >
                Shaping Tomorrow's Energy Landscape, TODAY
              </p>

              {/* Botón de Acción */}
              <button
                style={{ marginTop: 40 }}
                onClick={handleClick}
                className="transition ease-in-out delay-15 hover:-translate-y-1 rounded-md flex items-center py-3 px-6 w-max bg-slate-700 shadow-xl text-white hover:bg-white hover:text-green-600"
              >
                <span className="text-lg tracking-tighter">Start</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="ml-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Créditos */}
              <span className="absolute bottom-4 right-4 text-white text-sm font-light">
                Tesis realizada por: Guillermo Orozco
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
