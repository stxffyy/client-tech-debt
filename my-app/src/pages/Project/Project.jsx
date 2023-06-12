import React from "react"
import InputForLink from "../../components/InputForLink/InputForLink"
import AnalyzeButton from "../../components/AnalyzeButton/AnalyzeButton"
import LottieIcon from "../../components/LottieIcon/Process/LottieProcess"
import classes from "./Project.module.css"

function Project () {
  return (
    <div>
        <p className={classes.p}>1. Введите ссылку на конфигурационный репозиторий и нажмите кнопку &quot;скачать&quot;.</p>
        <InputForLink/>
        <p className={classes.p}>2. Нажмите кнопку &quot;анализировать&quot; и дождитесь окончания анализа.</p>
        <AnalyzeButton/>
        <p className={classes.text}>3. Перейдите на страницу &quot;Технический долг&quot; для управления несоответствиями.</p>
        <LottieIcon/>
    </div>
  )
}

export default Project
