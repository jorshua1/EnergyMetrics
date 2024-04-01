import React from "react";
import { Metadata } from "next";
import { RenewableEnergy } from "../utils/optionsRealData";
import Wraper from "../components/Wraper";

export const metadata: Metadata = {
  title: "Renewable energy",
  description: "Page with data of renewable energy usage",
};

export default function RenewablePage() {
  return (
    <div className="w-full min-h-screen">
      <Wraper datos={RenewableEnergy}></Wraper>
    </div>
  );
}
