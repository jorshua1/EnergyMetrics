import React from 'react'
import { Metadata } from 'next'
import {RenewableEnergy} from "@/app/utils/optionsRealData";
import SelectorBar from '../components/SelectorBar';

export const metadata: Metadata={
    title:"Renewable energy",
    description:"Page with data of renewable energy usage"
}

export default function RenewablePage() {
  return (
    <div>
        <SelectorBar datosEstadisticas={RenewableEnergy}></SelectorBar>
    </div>
  )
}
