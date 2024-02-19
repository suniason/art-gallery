import { getToken } from '@/utils/session'
import { useState } from 'react'

const useDelete = (url) => {
  const [loading, setLoading] = useState(false)

  const useDeleteHandler = async (isAuth = false) => {
    setLoading(true)
    const header = {
      'Content-Type': 'application/json',
      ...(isAuth && { Authorization: getToken() }),
    }
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        mode: 'cors',
        headers: header,
      })
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Something went wrong')
      }

      const resdata = await response.json()
      alert(resdata.message)
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }
  return [useDeleteHandler, loading]
}
export default useDelete
