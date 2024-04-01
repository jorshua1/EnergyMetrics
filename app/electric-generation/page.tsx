import React from "react";
import { Metadata } from "next";
import { ElectricityGeneration } from "../utils/optionsRealData";
import Wraper from "../components/Wraper";

export const metadata: Metadata = {
  title: "Energy generation",
  description: "Page with data of primary energy usage",
};

export default function ElectricPage() {
  return (
    <div className="w-full min-h-screen">
      <Wraper datos={ElectricityGeneration}></Wraper>
    </div>
  );
}
