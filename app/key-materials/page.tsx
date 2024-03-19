import React from "react";
import { Metadata } from "next";
import SelectorBar from "../components/SelectorBar";
import { KeyMaterial } from "../utils/optionsRealData";
import Chart from "@/app/components/Chart";

export const metadata: Metadata = {
  title: "key-materials",
  description: "Page with data of key materials",
};

export default function KeyMaterialsPage() {
  return (
    <div className="w-full min-h-screen">
      <SelectorBar datosEstadisticas={KeyMaterial}></SelectorBar>
      <div className="w-full mt-5 flex flex-col justify-items-center items-center">
        <Chart></Chart>
      </div>
    </div>
  );
}
