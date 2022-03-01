import { useEffect, useRef } from 'react'

export const useClickOutside = (callback: () => void) => {
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = ({ target }: any) => {
      if (elementRef.current) {
        !elementRef.current.contains(target) && callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside, false)

    return () =>
      document.removeEventListener('mousedown', handleClickOutside, false)
  }, [callback])

  return elementRef
}
