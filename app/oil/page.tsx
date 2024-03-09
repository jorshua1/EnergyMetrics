import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata={
    title:"Oil",
    description:"Page with data of oil usage"
}

export default function OilPage() {
  return (
    <div>
        <h1 className='text-2xl'>Oil page</h1>
    </div>
  )
}
