'use client'

export default function error(error) {
  return (
    <div className="text-2xl p-4 max-w-xl mx-auto">
      <p>The following error occurred: {error.error.message}</p>
    </div>
  )
}
