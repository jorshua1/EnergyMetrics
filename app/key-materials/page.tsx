import React from "react";
import { Metadata } from "next";
import SelectorBar from '../components/SelectorBar';
import { HydroElectricity } from "../utils/optionsRealData";

export const metadata: Metadata = {
  title: "key-materials",
  description: "Page with data of key materials",
};

export default function KeyMaterialsPage() {
  return (
    <div>
      <SelectorBar datosEstadisticas={HydroElectricity}></SelectorBar>
    </div>
  );
}
