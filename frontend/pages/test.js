'use client'

import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

const DashboardComponent = () => {
  const { data: session } = useSession()
  const [shown, setShown] = useState(false)
  const clickHandler = () => {
    setShown(!shown)
  }

  return (
    <div className="grid grid-cols-2 text-white p-4">
      <div className="text-center">
        <h1 className="text-black text-xl font-bold">
          Hi {session?.user?.user.name}!
        </h1>
      </div>
      <div>
        <p className="text-black">Protected client page</p>
        <button
          className="btn bg-blue-500 hover:bg-blue-400  p-4 "
          onClick={clickHandler}
        >
          Toggle
        </button>
        {shown ? (
          <pre className="text-black">{JSON.stringify(session, null, 2)}</pre>
        ) : null}
      </div>
    </div>
  )
}
export default DashboardComponent
