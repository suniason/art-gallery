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

      const resdata = await response.json()
      console.log(resdata.message)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }
  return [useDeleteHandler, loading]
}
export default useDelete
