import React from "react";
import { Metadata } from "next";
import { Coal } from "../utils/optionsRealData";
import Wraper from "../components/Wraper";

export const metadata: Metadata = {
  title: "Coal",
  description: "Page with data of coal usage",
};

export default function CoalPage() {
  return (
    <div className="w-full min-h-screen">
      <Wraper datos={Coal}></Wraper>
    </div>
  );
}
