import React from "react";
import { Metadata } from "next";
import { KeyMaterial } from "../utils/optionsRealData";
import Wraper from '../components/Wraper';

export const metadata: Metadata = {
  title: "key-materials",
  description: "Page with data of key materials",
};

export default function KeyMaterialsPage() {
  return (
    <div className="w-full min-h-screen">
      <Wraper datos={KeyMaterial}></Wraper>
    </div>
  );
}
