import Wraper from "../components/Wraper";
import { Metadata } from "next";
import { primaryEnergy } from "../utils/optionsRealData";

export const metadata: Metadata = {
  title: "Primary energy",
  description: "Page with data of primary energy usage",
};

export default function PrimaryEnergyPage() {
  return (
    <div className="w-full min-h-screen">
      <Wraper datos={primaryEnergy}></Wraper>
    </div>
  );
}
