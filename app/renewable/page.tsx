import React from "react";
import { Metadata } from "next";
import SelectorBar from "../components/SelectorBar";
import { RenewableEnergy } from "../utils/optionsRealData";
import Chart from "@/app/components/Chart";

export const metadata: Metadata={
    title:"Renewable energy",
    description:"Page with data of renewable energy usage"
}

export default function RenewablePage() {
  return (
    <div className="w-full min-h-screen">
      <SelectorBar datosEstadisticas={RenewableEnergy}></SelectorBar>
      <div className="w-full mt-5 flex flex-col justify-items-center items-center">
        <Chart></Chart>
      </div>
    </div>
  )
}
