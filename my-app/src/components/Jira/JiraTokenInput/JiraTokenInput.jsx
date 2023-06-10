import React, { useState } from "react"
import classes from "./JiraTokenInput.module.css"
import Button from "@mui/material/Button"

function JiraTokenInput () {
  const [token, setToken] = useState("")

  const handleTokenChange = (event) => {
    setToken(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Делаем что-то с введенным токеном, например, сохраняем его в состоянии приложения или отправляем на сервер
    console.log("Токен доступа:", token)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="jiraToken">Токен доступа к Jira:</label>
      <input
        type="text"
        id="jiraToken"
        name="jiraToken"
        placeholder="Введите ваш токен доступа"
        value={token}
        onChange={handleTokenChange}
        className={classes.input}
      />
      <Button variant="contained">Сохранить</Button>
    </form>
  )
}

export default JiraTokenInput
