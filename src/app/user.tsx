'use client'

// Get session from the client side
import { useSession } from 'next-auth/react'

export const User = () => {
  const { data: session } = useSession()
  console.log('Client Session', session)
  return <pre>{JSON.stringify(session)}</pre>
}
