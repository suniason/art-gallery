import { getToken } from '@/utils/session'
import { useState } from 'react'

const useLogoutPost = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const usePostHandler = async () => {
    setLoading(true)
    const header = {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: header,
      })

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
export default useLogoutPost
