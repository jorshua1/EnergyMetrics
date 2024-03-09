import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata={
    title:"Coal",
    description:"Page with data of coal usage"
}

export default function CoalPage() {
  return (
    <div>
        <h1 className='text-2xl'>Coal page</h1>
    </div>
  )
}
