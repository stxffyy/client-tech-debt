import React, { useState } from "react"
import classes from "./JiraInstanceInput.module.css"
import Button from "@mui/material/Button"

function JiraInstanceInput () {
  const [jiraInstance, setJiraInstance] = useState("")

  const handleInstanceChange = (event) => {
    setJiraInstance(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Формирование ссылки с экземпляром Jira
    const requestUrl = `https://${jiraInstance}.atlassian.net/rest/api/2/issue`
    console.log("requestUrl", requestUrl)

    // Отправка ссылки на бэкенд
    fetch("http://localhost:3010/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ requestUrl })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Ответ от бэкенда:", data)
      // Дополнительная обработка ответа от бэкенда
      })
      .catch(error => {
        console.error("Ошибка при отправке ссылки на бэкенд:", error)
      // Обработка ошибки при отправке ссылки на бэкенд
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="jiraInstance">URL экземпляра Jira:</label>
      <input
        type="text"
        id="jiraInstance"
        name="jiraInstance"
        placeholder="Введите URL экземпляра Jira"
        value={jiraInstance}
        onChange={handleInstanceChange}
        className={classes.input}
      />
      <Button variant="contained" type="submit">Сохранить</Button>
    </form>
  )
}

export default JiraInstanceInput
