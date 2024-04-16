import React from "react";
import { Metadata } from "next";
import {
  primaryEnergy,
  Carbon,
  Oil,
  Gas,
  Coal,
  Nuclear,
  HydroElectricity,
  ElectricityGeneration,
  KeyMaterial,
  RenewableEnergy,
} from "../utils/optionsRealData";
import Wraper from "../components/Wraper";

export const metadata: Metadata = {
  title: "Multi Graph",
  description: "Page with data of multiple resources",
};

export default function MultiPage() {
  const data = [
    { label: "Primary", options: primaryEnergy },
    { label: "Carbon", options: Carbon },
    { label: "Oil", options: Oil },
    { label: "Gas", options: Gas },
    { label: "Coal", options: Coal },
    { label: "Nuclear", options: Nuclear },
    { label: "HydroElectricity", options: HydroElectricity },
    { label: "ElectricityGeneration", options: ElectricityGeneration },
    { label: "KeyMaterial", options: KeyMaterial },
    { label: "RenewableEnergy", options: RenewableEnergy },
  ];

  return (
    <div className="w-full min-h-screen flex flex-wrap">
      <div className="w-1/2 h-1/2">
        <Wraper datos={data}></Wraper>
      </div>
      <div className="w-1/2 h-1/2">
        <Wraper datos={data}></Wraper>
      </div>
      <div className="w-1/2 h-1/2">
        <Wraper datos={data}></Wraper>
      </div>
      <div className="w-1/2 h-1/2">
        <Wraper datos={data}></Wraper>
      </div>
    </div>
  );
}
