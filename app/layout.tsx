import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EnergyMetrics",
  description: "Dashboard with multiple data of multiple energy sources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={"flex gap-2 bg-slate-300" + " " + inter.className}>
        <Sidebar />
        <div
          className={
            "min-h-screen ml-[360px] w-full z-0 shadow-lg bg-slate-100 rounded-tl-3xl"
          }
        >
          {children}
        </div>
      </body>
    </html>
  );
}
