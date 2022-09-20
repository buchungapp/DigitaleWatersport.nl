import React, { PropsWithChildren } from 'react'

import clsx from 'clsx'

function SectionTitle({
  children,
  className,
  ...props
}: PropsWithChildren<React.ComponentProps<'h2'>>) {
  return (
    <h2
      className={clsx(
        'mt-1.5 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

function SectionSubtitle({
  children,
  className,
  ...props
}: PropsWithChildren<React.ComponentProps<'p'>>) {
  return (
    <p
      className={clsx('text-lg font-semibold text-teal-600', className)}
      {...props}
    >
      {children}
    </p>
  )
}

const Typography = {
  Title: SectionTitle,
  Subtitle: SectionSubtitle,
}

export default Typography
