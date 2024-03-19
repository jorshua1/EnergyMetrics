import React from "react";
import { Metadata } from "next";
import SelectorBar from "../components/SelectorBar";
import Chart from "@/app/components/Chart";
import { Oil } from "../utils/optionsRealData";

export const metadata: Metadata = {
  title: "Oil",
  description: "Page with data of oil usage",
};

export default function OilPage() {
  return (
    <div className="w-full min-h-screen">
      <SelectorBar datosEstadisticas={Oil}></SelectorBar>
      <div className="w-full mt-5 flex flex-col justify-items-center items-center">
        <Chart></Chart>
      </div>
    </div>
  );
}
