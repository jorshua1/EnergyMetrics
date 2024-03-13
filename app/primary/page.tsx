import React from 'react'
import { Metadata } from 'next'
import SelectorBar from '../components/SelectorBar';
import {primaryEnergy} from '../utils/optionsRealData'

export const metadata: Metadata={
    title:"Primary energy",
    description:"Page with data of primary energy usage"
}

export default function PrimaryEnergyPage() {
  return (
    <div>
        <SelectorBar datosEstadisticas={primaryEnergy}></SelectorBar>
    </div>
  )
}
