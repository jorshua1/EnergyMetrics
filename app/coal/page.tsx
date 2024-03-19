import React from 'react'
import { Metadata } from 'next'
import SelectorBar from '../components/SelectorBar';
import { Coal } from '../utils/optionsRealData';
import Chart from "@/app/components/Chart";

export const metadata: Metadata={
    title:"Coal",
    description:"Page with data of coal usage"
}

export default function CoalPage() {
  return (
    <div className="w-full min-h-screen">
      <SelectorBar datosEstadisticas={Coal}></SelectorBar>
        <div className="w-full mt-5 flex flex-col justify-items-center items-center">
        <Chart></Chart>
      </div>
    </div>
  )
}
