import { Metadata } from "next";
import SelectorBar from "../components/SelectorBar";
import { HydroElectricity } from "../utils/optionsRealData";
import Chart from "@/app/components/Chart";

export const metadata: Metadata={
    title:"Hydroelectricity energy",
    description:"Page with data of Hydroelectricity usage"
}

export default function HydroelectricityPage() {
  return (
    <div className="w-full min-h-screen">
      <SelectorBar datosEstadisticas={HydroElectricity}></SelectorBar>
        <div className="w-full mt-5 flex flex-col justify-items-center items-center">
        <Chart></Chart>
      </div>
    </div>
  )
}
