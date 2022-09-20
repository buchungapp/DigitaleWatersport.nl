import React, { useState } from 'react'

import Image from 'next/future/image'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

import api_overview from './api_details.png'

const ApiOverview = () => {
  return (
    <div className="h-full w-full overflow-hidden rounded border border-dashed border-gray-600 p-px">
      <TransformWrapper
        initialScale={1.4}
        initialPositionX={-100}
        initialPositionY={-90}
        wheel={{ step: 0.05 }}
      >
        <TransformComponent>
          <Image src={api_overview} alt="" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default ApiOverview
