import React from "react";
import { Metadata } from "next";
import { Oil } from "../utils/optionsRealData";
import Wraper from "../components/Wraper";

export const metadata: Metadata = {
  title: "Oil",
  description: "Page with data of oil usage",
};

export default function OilPage() {
  return (
    <div className="w-full min-h-screen">
      <Wraper datos={Oil}></Wraper>
    </div>
  );
}
