import { useState, useEffect } from "react"
import { fetchMistakes } from "../services"

export function useMistakes ({ repositoryIds }) {
  const [mistakes, setMistakes] = useState([])

  useEffect(() => {
    async function updateMistakes () {
      const mistakes = await fetchMistakes({ repositoryIds })
      setMistakes(mistakes)
      // здесь будут обновленные данные
    }
    updateMistakes()
  }, [])
  return mistakes
}
