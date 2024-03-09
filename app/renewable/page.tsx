import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata={
    title:"Renewable energy",
    description:"Page with data of renewable energy usage"
}

export default function RenewablePage() {
  return (
    <div>
        <h1 className='text-2xl'>Renewable page</h1>
    </div>
  )
}
