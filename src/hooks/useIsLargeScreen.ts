import { useEffect, useState } from 'react'

const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsLargeScreen(event.matches)
    }

    setIsLargeScreen(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return isLargeScreen
}

export default useIsLargeScreen
