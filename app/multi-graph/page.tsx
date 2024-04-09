import React from "react";
import { Metadata } from "next";
import { RenewableEnergy } from "../utils/optionsRealData";
import Wraper from "../components/Wraper";

export const metadata: Metadata = {
  title: "Multi Graph",
  description: "Page with data of multiple resources",
};

export default function MultiPage() {
  return (
    <div className="w-full min-h-screen flex flex-wrap">
      <div className="w-1/2 h-1/2">
        <Wraper points={false} datos={RenewableEnergy}></Wraper>
      </div>
      <div className="w-1/2 h-1/2">
        <Wraper datos={RenewableEnergy}></Wraper>
      </div>
      <div className="w-1/2 h-1/2">
        <Wraper datos={RenewableEnergy}></Wraper>
      </div>
      <div className="w-1/2 h-1/2">
        <Wraper datos={RenewableEnergy}></Wraper>
      </div>
    </div>
  );
}
