import { getToken } from '@/utils/session'
import { useState, useEffect } from 'react'

const useGet = (url, isAuth = false) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])

  const fetchData = async () => {
    const header = {
      'Content-Type': 'application/json',
      ...(isAuth && { Authorization: getToken() }),
    }
    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: header,
      })
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Something went wrong')
      }
      const resdata = await response.json()
      setData(resdata)
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return [fetchData, data, loading, error]
}

export default useGet
