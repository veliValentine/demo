import { useState } from 'react'

const useLoading = () => {
  const [loading, setLoading] = useState(false)

  const isLoading = () => setLoading(true)

  const doneLoading = () => setLoading(false)

  return [loading, isLoading, doneLoading]
}

export default useLoading
