import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata={
    title:"Gas",
    description:"Page with data of gas usage"
}

export default function GasPage() {
  return (
    <div>
        <h1 className='text-2xl'>Gas page</h1>
    </div>
  )
}
