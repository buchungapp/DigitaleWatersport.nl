import React, { PropsWithChildren } from 'react'

import clsx from 'clsx'

export function Prose({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <div className={clsx(className, 'prose max-w-prose')}>{children}</div>
}
