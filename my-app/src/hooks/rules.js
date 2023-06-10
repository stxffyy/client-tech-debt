import { useState, useEffect } from "react"
import { fetchRules } from "../services"

export function useRules () {
  const [rules, setRules] = useState([])

  useEffect(() => {
    async function updateRules () {
      const rules = await fetchRules()
      setRules(rules)
    }
    updateRules()
  }, [])

  return rules
}
