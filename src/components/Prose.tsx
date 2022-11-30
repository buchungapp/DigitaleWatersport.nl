import React, { PropsWithChildren } from 'react'

import clsx from 'clsx'

export function Prose({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        className,
        'prose-slate prose max-w-prose prose-ul:my-1.5 prose-li:my-2.5'
      )}
    >
      {children}
    </div>
  )
}
