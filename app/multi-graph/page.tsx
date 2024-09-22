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
    <div className="grid grid-cols-1 grid-rows-2 gap-10">
      <div className="col-span-5 row-span-2">
        <Wraper datos={data}></Wraper>
      </div>
      <div className="col-span-5 row-span-2">
        <Wraper datos={data}></Wraper>
      </div>
    </div>
  );
}
