import { useEffect, useState } from 'react'
import SunIcon from '../icons/sun'
import MoonIcon from '../icons/moon'

const ModeButton = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setDarkMode(true)
    }
  }, [darkMode])
  function handleClick() {
    setDarkMode((prevDarkMode) => !prevDarkMode)
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div onClick={handleClick} className="h-full flex items-center">
      <div className={`w-6 h-6 flex ${!darkMode && 'hidden'}`}>
        <SunIcon />
      </div>
      <div className={`w-6 h-6 flex ${darkMode && 'hidden'}`}>
        <MoonIcon />
      </div>
    </div>
  )
}

export default ModeButton
