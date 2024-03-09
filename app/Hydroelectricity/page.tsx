import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata={
    title:"Hydroelectricity energy",
    description:"Page with data of Hydroelectricity usage"
}

export default function HydroelectricityPage() {
  return (
    <div>
        <h1 className='text-2xl'>Hydroelectricity page</h1>
    </div>
  )
}
