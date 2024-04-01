import { Metadata } from "next";
import Wraper from "../components/Wraper";
import { Gas } from "../utils/optionsRealData";

export const metadata: Metadata = {
  title: "Gas",
  description: "Page with data of gas usage",
};

export default function GasPage() {
  return (
    <div className="w-full min-h-screen">
      <Wraper datos={Gas}></Wraper>
    </div>
  );
}
