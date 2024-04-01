import { Metadata } from "next";
import { HydroElectricity } from "../utils/optionsRealData";
import Wraper from "../components/Wraper";

export const metadata: Metadata = {
  title: "Hydroelectricity energy",
  description: "Page with data of Hydroelectricity usage",
};

export default function HydroelectricityPage() {
  return (
    <div className="w-full min-h-screen">
      <Wraper datos={HydroElectricity}></Wraper>
    </div>
  );
}
