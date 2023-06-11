import React, { useState } from "react"
import "../../App.css"
import Repositories from "../../components/Repositories/Repositories"
import GroupOfMistakes from "../../components/Mistakes/GroupOfMistakes.jsx/GroupOfMistakes"
// import InputForLink from "../../components/InputForLink/InputForLink"
// import AnalyzeButton from "../../components/AnalyzeButton/AnalyzeButton"
import Box from "@mui/material/Box"
import { useMistakes, useRules, useRepositories } from "../../hooks/index"
// import LottieIcon from "../../components/LottieIcon/LottieIcon"
// import JiraInstanceInput from "../../components/Jira/JiraInstanceInput/JiraInstanceInput"
// import JiraTokenInput from "../../components/Jira/JiraTokenInput/JiraTokenInput"

function groupMistakesByRule ({ allMistakes, rules, activeRepositoryIds }) {
  // console.log(allMistakes, rules, activeRepositoryIds)
  const grouped = rules.map(rule => ({
    rule,
    mistakes: allMistakes.filter(mistake => mistake.ruleId === rule.id && activeRepositoryIds.includes(mistake.repositoryId))
  }))
  // console.log(grouped)
  return grouped
}

const createTask = (id) => {
  // Отправка запроса на бэкенд для создания задачи на Jira
  fetch("http://localhost:3010/api/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id
    })
  })
    .then(response => {
      if (response.ok) {
        console.log("Задача создана!")
        return response.json() // Парсим JSON-ответ
      } else {
        console.error("Ошибка при создании задачи")
        throw new Error("Ошибка при создании задачи")
      }
    })
    .then(data => {
      const taskUrl = data.taskUrl // сервер возвращает ссылку на задачу
      // Проверяем, что получена ссылка на задачу
      if (taskUrl) {
      // Открываем новую страницу с URL задачи в Jira
        window.open(taskUrl, "_blank")
      } else {
        console.error("Ссылка на задачу не получена")
        alert("Ссылка на задачу не получена. Пожалуйста, попробуйте еще раз или свяжитесь с администратором.")
      }
    })
    .catch(error => {
      console.error("Ошибка при создании задачи", error)
    })
}

function Home () {
  const [activeRepositoryIds, setActiveRepositoryIds] = useState([])

  const repositories = useRepositories()
  const rules = useRules()
  const allMistakes = useMistakes({ repositoryIds: activeRepositoryIds })
  const groupedMistakes = groupMistakesByRule({ rules, allMistakes, activeRepositoryIds })

  function handleClickRepo (id) {
    if (activeRepositoryIds.includes(id)) {
      setActiveRepositoryIds(activeRepositoryIds.filter((activeRepositoryId) => activeRepositoryId !== id))
    } else {
      setActiveRepositoryIds([...activeRepositoryIds, id])
    }
  }
  return (
    <div>
      <div>
        <div className="container">
          <div className="block1">
            {/* <InputForLink/>
            <AnalyzeButton/>
            <LottieIcon/> */}
            {/* <JiraInstanceInput/> */}
            {/* <JiraTokenInput/> */}
            <h1 className="repo__title">Репозитории</h1>
            <Repositories
              repositories={repositories}
              activeRepositoryIds={activeRepositoryIds}
              onClickRepo={i => handleClickRepo(i)}/>
          </div>
          <div className="block2">
            <h1 className="mistakes__title">Ошибки</h1>
            <div>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  mt: "2rem"
                }}>
                {groupedMistakes.map(({ rule, mistakes }, index) => (
                  <GroupOfMistakes
                  // title={rule.title}
                  description={rule.description}
                  mistakes={mistakes}
                  createTask={createTask}
                  key={index}/>
                ))}
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
