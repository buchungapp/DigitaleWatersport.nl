import React, { useState } from 'react'

import Image from 'next/future/image'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

import landscape_overview from '@/images/schemas/schema_dw.svg'

const LandscapeOverview = () => {
  return (
    <div className="h-full w-full overflow-hidden rounded border border-dashed border-gray-600 p-px">
      <TransformWrapper initialScale={1} wheel={{ step: 0.05 }}>
        <TransformComponent>
          <Image src={landscape_overview} alt="" />
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default LandscapeOverview
