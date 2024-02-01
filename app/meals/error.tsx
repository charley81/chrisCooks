'use client'

export default function error(error: any) {
  return (
    <div className="text-2xl p-4 max-w-xl mx-auto">
      <p>The following error occurred: {error.error.message}</p>
    </div>
  )
}
