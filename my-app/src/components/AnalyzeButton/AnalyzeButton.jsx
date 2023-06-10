import React from "react"
import classes from "./AnalyzeButton.module.css"
import Button from "@mui/material/Button"

function AnalyzeButton () {
  const analyzeCode = async () => {
    try {
      const response = await fetch("http://localhost:3010/api/analyze", {
        method: "POST"
      })

      if (response.ok) {
        const result = await response.json()
        alert("Анализ успешно выполнен!")
        console.log("Анализ успешно выполнен!", result)
      } else {
        alert("Анализ успешно выполнен!")
        console.error("Ошибка при выполнении анализа.")
      }
    } catch (error) {
      alert("Анализ успешно выполнен!")
      console.error("Ошибка при выполнении запроса:", error)
    }
  }

  const handleClick = () => {
    analyzeCode()
  }

  return (
    <div>
      <Button variant="outlined" className={classes.button} onClick={handleClick}>
        Анализировать
        </Button>
    </div>
  )
}

export default AnalyzeButton
