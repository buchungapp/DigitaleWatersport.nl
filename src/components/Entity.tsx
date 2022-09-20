import React, { PropsWithChildren } from 'react'

import clsx from 'clsx'

type EntityType = 'cursist' | 'instructeur' | 'opleidingslocatie' | 'diploma'

const entityColor: Record<EntityType, string> = {
  cursist: 'bg-[#c92a2a]/20 text-[#c92a2a] border-[#c92a2a]',
  instructeur: 'bg-[#e67700]/20 text-[#e67700] border-[#e67700]',
  opleidingslocatie: 'bg-[#2b8a3e]/20 text-[#2b8a3e] border-[#2b8a3e]',
  diploma: 'bg-[#364fc7]/20 text-[#364fc7] border-[#364fc7]',
}

const entityLabel: Record<EntityType, string> = {
  cursist: 'Iemand die een opleiding volgt.',
  instructeur: 'Een bevoegd persoon die een opleiding geeft aan een cursist.',
  opleidingslocatie: 'Een erkende locatie waar een opleiding wordt gegeven.',
  diploma:
    'Een officieel document dat een cursist ontvangt na het voltooien van een opleiding.',
}

function Entity({
  children,
  className,
  type,
  ...props
}: PropsWithChildren<{ type: EntityType } & React.ComponentProps<'span'>>) {
  return (
    <span
      title={entityLabel[type]}
      className={clsx(
        'rounded-sm border-b-2 py-px px-1 font-medium',
        entityColor[type],
        className
      )}
      {...props}
    >
      {children ? children : type}
    </span>
  )
}

export default Entity
