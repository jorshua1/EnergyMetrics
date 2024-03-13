import React from 'react'
import { Metadata } from 'next'
import SelectorBar from '../components/SelectorBar';
import { Coal } from '../utils/optionsRealData';

export const metadata: Metadata={
    title:"Coal",
    description:"Page with data of coal usage"
}

export default function CoalPage() {
  return (
    <div>
        <SelectorBar datosEstadisticas={Coal}></SelectorBar>
    </div>
  )
}
