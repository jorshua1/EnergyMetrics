import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata={
    title:"Nuclear energy",
    description:"Page with data of nuclear usage"
}

export default function NuclearPage() {
  return (
    <div>
        <h1 className='text-2xl'>Nuclear page</h1>
    </div>
  )
}
