import { Metadata } from "next";
import SelectorBar from "../components/SelectorBar";
import { Carbon } from "../utils/optionsRealData";
import Chart from "@/app/components/Chart";
import RegionesComponent from "../components/visor";

export const metadata: Metadata = {
  title: "Carbon Dioxide",
  description: "Page with data of carbon dioxide usage",
};

export default function CarbonPage() {
  return (
    <div>
      <SelectorBar datosEstadisticas={Carbon}></SelectorBar>
      <div className="m-4">
      <Chart></Chart>
      </div>
    </div>
  );
}
