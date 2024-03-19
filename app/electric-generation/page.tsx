import React from "react";
import { Metadata } from "next";
import SelectorBar from "../components/SelectorBar";
import { ElectricityGeneration } from "../utils/optionsRealData";
import Chart from "@/app/components/Chart";

export const metadata: Metadata = {
  title: "Energy generation",
  description: "Page with data of primary energy usage",
};

export default function ElectricPage() {
  return (
    <div className="w-full min-h-screen">
      <SelectorBar datosEstadisticas={ElectricityGeneration}></SelectorBar>
      <div className="w-full mt-5 flex flex-col justify-items-center items-center">
        <Chart></Chart>
      </div>
    </div>
  );
}
