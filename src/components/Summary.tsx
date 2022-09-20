import React from 'react'

const Summary = ({
  highlights,
}: {
  highlights: { id: string; content: React.ReactElement }[]
}) => {
  return (
    <div>
      <h3 className="text-xl text-gray-700">In het kort</h3>
      <ul
        role="list"
        className="border-t border-b border-gray-400 marker:text-lg marker:text-teal-700"
      >
        {highlights.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </div>
  )
}

export default Summary
