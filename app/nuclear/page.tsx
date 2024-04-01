import { Metadata } from "next";
import { Nuclear } from "../utils/optionsRealData";
import Wraper from "../components/Wraper";

export const metadata: Metadata = {
  title: "Nuclear energy",
  description: "Page with data of nuclear usage",
};

export default function NuclearPage() {
  return (
    <div className="w-full min-h-screen">
      <Wraper datos={Nuclear}></Wraper>
    </div>
  );
}
