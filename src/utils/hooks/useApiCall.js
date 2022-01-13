import { useState, useEffect } from 'react'

function useApiCall() {
  const [fortune, setFortune] = useState(null)

  useEffect(() => {
    async function findMyFortune() {
      try {
        const response = await fetch(API_URL)
        const fortuneCookies = await response.json()

        const randomIndex = random(fortuneCookies.length)
        const currentFortune = fortuneCookies[randomIndex]

        setFortune(currentFortune.message)
      } catch (error) {
        console.error('Bad fortune: ', error)
      }
    }

    findMyFortune()
  }, [])

  return { fortune }
}

export { useApiCall }
