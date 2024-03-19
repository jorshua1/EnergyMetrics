import { Metadata } from "next";
import SelectorBar from "../components/SelectorBar";
import { Nuclear } from "../utils/optionsRealData";
import Chart from "@/app/components/Chart";

export const metadata: Metadata={
    title:"Nuclear energy",
    description:"Page with data of nuclear usage"
}

export default function NuclearPage() {
  return (
    <div className="w-full min-h-screen">
    <SelectorBar datosEstadisticas={Nuclear}></SelectorBar>
      <div className="w-full mt-5 flex flex-col justify-items-center items-center">
      <Chart></Chart>
    </div>
  </div>
  )
}
