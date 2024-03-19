import { Metadata } from "next";
import SelectorBar from "../components/SelectorBar";
import { Gas } from "../utils/optionsRealData";
import Chart from "@/app/components/Chart";

export const metadata: Metadata={
    title:"Gas",
    description:"Page with data of gas usage"
}

export default function GasPage() {
  return (
    <div className="w-full min-h-screen">
    <SelectorBar datosEstadisticas={Gas}></SelectorBar>
      <div className="w-full mt-5 flex flex-col justify-items-center items-center">
      <Chart></Chart>
    </div>
  </div>
  )
}
