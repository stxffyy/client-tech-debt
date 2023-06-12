import React from "react"
import classes from "./About.module.css"
import LottieIcon from "../../components/LottieIcon/Developer/LottieDeveloper"
import { Link } from "react-router-dom"

function About () {
  return (
    <div className={classes.container}>
        <div className={classes.block}>
            Добро пожаловать в приложение по борьбе с техническим долгом!
        </div>

        <div className={classes.block}>
            Технический долг может стать значительным препятствием для эффективной разработки программного обеспечения,
            и поэтому было создано это приложение, чтобы предоставить вам инструменты и ресурсы для его управления и устранения.
        </div>

        <div className={classes.block}>
            Для работы с приложением:
            <ul>
                <li>Ознакомьтесь с <Link to="/rules" className={classes.item}>правилами</Link> по созданию конфигурационного репозитория.</li>
                <li><Link to="/project" className={classes.item}>Скачайте</Link> конфигурационный репозиторий и запустите анализ кодовой базы.</li>
                <li>Отслеживайте <Link to="/home" className={classes.item}>технический долг</Link> и управляйте им!</li>
            </ul>
        </div>

        <div className={classes.block}>
            Цель - помочь вам улучшить качество кода, повысить производительность команды и достичь устойчивости в разработке программного обеспечения.
            А также сделать процесс управления техническим долгом более простым и эффективным, предоставляя вам инструменты, советы и поддержку,
            необходимые для успешной работы над проектами.
        </div>
        <LottieIcon/>
    </div>
  )
}

export default About
