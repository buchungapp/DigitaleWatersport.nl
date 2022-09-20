import React, { PropsWithChildren } from 'react'

import Link from 'next/link'

function Referer({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <sup>
      <Link target="_blank" href={href} rel="noopener noreferrer">
        {children}
      </Link>
    </sup>
  )
}

export default Referer
