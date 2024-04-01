"use client";
import SelectorBar from "../components/SelectorBar";
import React, { createContext, useState } from "react";
import { primaryEnergy } from "../utils/optionsRealData";
import Chart from "@/app/components/Chart";

interface ContextType {
  selectedOption: any; // Cambia 'any' por el tipo adecuado
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>; // Cambia 'any' por el tipo adecuado
  selectedRegionOption: any;
  setSelectedRegionOption: any;
}

// Creamos el contexto con el tipo de datos especificado
const AppContext = createContext<ContextType>({
  selectedOption: null,
  selectedRegionOption: null,
  setSelectedOption: () => {},
  setSelectedRegionOption: () => {},
});

export default function Wraper({ datos }: any) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedRegionOption, setSelectedRegionOption] = useState(null);
  return (
    <AppContext.Provider
      value={{
        selectedOption,
        setSelectedOption,
        selectedRegionOption,
        setSelectedRegionOption,
      }}
    >
      <div>
        <SelectorBar datosEstadisticas={datos}></SelectorBar>
        <div className="w-full mt-5 flex flex-col justify-items-center items-center">
          <Chart></Chart>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export { AppContext };
