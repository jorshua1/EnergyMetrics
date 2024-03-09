import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata={
    title:"Primary energy",
    description:"Page with data of primary energy usage"
}

export default function PrimaryEnergyPage() {
  return (
    <div>
        <h1 className='text-2xl'>primary page</h1>
    </div>
  )
}
