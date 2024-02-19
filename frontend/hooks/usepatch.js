import { getToken } from '@/utils/session'
import { useState } from 'react'

const usePatch = (url) => {
  const [loading, setLoading] = useState(false)

  const usePatchHandler = async (bodydata, isAuth = false) => {
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
        body: JSON.stringify(bodydata),
      })

      const resdata = await response.json()
      alert(resdata.message)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }
  return [usePatchHandler, loading]
}
export default usePatch
