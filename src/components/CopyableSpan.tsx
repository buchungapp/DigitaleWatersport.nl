import React from 'react'

import clsx from 'clsx'
import { useDebouncedCallback } from 'use-debounce'

const CopyableSpan = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string | ((copied: boolean) => string)
}) => {
  const [copied, setCopied] = React.useState(false)

  const debouncedResetCopiedState = useDebouncedCallback(
    () => setCopied(false),
    2000
  )

  async function copyToClipboard(
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) {
    const el = e.currentTarget
    const text = el.innerText
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      debouncedResetCopiedState()
    }
  }

  return (
    <span
      className={clsx(
        'relative cursor-pointer',
        copied ? 'text-teal-800' : 'text-blue-600 hover:text-blue-800',
        typeof className === 'function' ? className(copied) : className
      )}
      title="Klik om te kopiëren"
      onClick={copyToClipboard}
    >
      {children}
      {copied ? (
        <div className="absolute left-1/2 -bottom-[2px] w-fit -translate-x-1/2 translate-y-full rounded-md bg-teal-100/40 px-2 text-center text-xs font-medium text-teal-800 shadow-md backdrop-blur-xl">
          Gekopieërd!
        </div>
      ) : null}
    </span>
  )
}

export default CopyableSpan
