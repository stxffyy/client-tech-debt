import { useState, useEffect } from "react"
import { fetchRepositories } from "../services"

export function useRepositories () {
  const [data, setData] = useState([])

  useEffect(() => {
    (async function () {
      const newData = await fetchRepositories()
      setData(newData)
    })()
  }, [])
  return data
}
