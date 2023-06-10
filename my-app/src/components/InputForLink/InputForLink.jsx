import React, { useState } from "react"
import classes from "./InputForLink.module.css"
import Button from "@mui/material/Button"

function InputForLink () {
  const [text, setText] = useState("")

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  const handleButtonClick = () => {
    sendLinkToBackend(text)
  }

  const sendLinkToBackend = async (text) => {
    try {
      const response = await fetch("http://localhost:3010/api/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      })

      if (response.ok) {
        alert("Конфигурационный репозиторий успешно скачан!")
      } else {
        console.error("Ошибка при отправке ссылки на бэкенд.")
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error)
    }
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        className={classes.input}
        placeholder="Введите ccылку"
      />
      <Button variant="contained" onClick={handleButtonClick}>Скачать</Button>
    </div>
  )
}

export default InputForLink
