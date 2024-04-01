import { Metadata } from "next";
import SelectorBar from "../components/SelectorBar";
import { Carbon } from "../utils/optionsRealData";
import Chart from "@/app/components/Chart";
import Wraper from '../components/Wraper';

export const metadata: Metadata = {
  title: "Carbon Dioxide",
  description: "Page with data of carbon dioxide usage",
};

export default function CarbonPage() {
  return (
    <div className="w-full min-h-screen">
      <Wraper datos={Carbon}></Wraper>
    </div>
  );
}
