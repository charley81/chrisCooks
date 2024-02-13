'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="text-center mt-48">
      <h2 className="text-4xl">Something went wrong!</h2>
      <Button onClick={() => reset()} className="mt-8" size="lg">
        Try again
      </Button>
    </div>
  )
}
