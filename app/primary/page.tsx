import React from "react";
import { Metadata } from "next";
import SelectorBar from "../components/SelectorBar";
import { primaryEnergy } from "../utils/optionsRealData";
import Chart from "@/app/components/Chart";

export const metadata: Metadata = {
  title: "Primary energy",
  description: "Page with data of primary energy usage",
};

export default function PrimaryEnergyPage() {
  return (
    <div className="w-full min-h-screen">
      <SelectorBar datosEstadisticas={primaryEnergy}></SelectorBar>
        <div className="w-full mt-5 flex flex-col justify-items-center items-center">
        <Chart></Chart>
      </div>
    </div>
  );
}
