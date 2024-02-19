import { getToken } from '@/utils/session'
import { useState } from 'react'

const usePost = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const usePostHandler = async (bodydata, isAuth = false) => {
    setLoading(true)
    const header = {
      'Content-Type': 'application/json',
      ...(isAuth && { Authorization: getToken() }),
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: header,
        body: JSON.stringify(bodydata),
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
  return [usePostHandler, data, loading]
}
export default usePost
