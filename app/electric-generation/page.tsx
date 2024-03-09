import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata={
    title:"Energy generation",
    description:"Page with data of primary energy usage"
}

export default function ElectricPage() {
  return (
    <div>
        <h1 className='text-2xl'>Electric generation page</h1>
    </div>
  )
}
