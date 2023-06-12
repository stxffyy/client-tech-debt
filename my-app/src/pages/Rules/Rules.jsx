import React from "react"
import classes from "./Rules.module.css"

function Rules () {
  return (
    <div>
        <div>
            <h1 className={classes.titlemain}>Конфигурационный репозиторий</h1>
            <h3 className={classes.titleh1}>Что это?</h3>
            <p className={classes.titleh1}>Конфигурационный репозиторий - это репозиторий, который содержит конфигурационные файлы и настройки для проекта. Он играет важную роль в управлении проектом и позволяет хранить и отслеживать изменения в конфигурационных данных.</p>
            <h3 className={classes.titleh1}>Из чего состоит?</h3>
            <p className={classes.titleh1}>Конфигурация репозиторий должен включать в себя:</p>
                <ul className={classes.titleh1}>
                    <li>конфигурационный файл формата JSON с именем &quot;config.json&quot;</li>
                    <li>папку для правил с именем &quot;rules&quot;, которые из себя представляют функции</li>
                </ul>
            <h1 className={classes.titlemain}>Конфигурационный файл</h1>
            <h3 className={classes.titleh1}>Из чего состоит?</h3>
            <p className={classes.titleh1}>Внутри конфигурационног файла должно быть два массива: repositories и rules для репозиториев и правил соответственно. </p>
            <p className={classes.titleh1}>В каждом элементе массива &quot;repositories&quot; указывается информация о репозитории.</p>
            <h3 className={classes.titleh1}>Массив репозиториев</h3>
            <p className={classes.titleh1}> У каждого репозитория есть:</p>
            <ul className={classes.titleh1}>
                <li>идентификатор (id)</li>
                <li>URL-адрес (url)</li>
            </ul>
            <h3 className={classes.titleh1}>Массив правил</h3>
            <p className={classes.titleh1}>В элементе массива &quot;rules&quot; указывается информация о правиле.</p>
            <p className={classes.titleh1}>У каждого правила есть:</p>
            <ul className={classes.titleh1}>
                <li>идентификатор (id)</li>
                <li>описание (description)</li>
                <li>путь к реализации правила (ruleImplementation)</li>
                <li>шаблон (pattern), который указывает на типы файлов, к которым применяется данное правило.</li>
            </ul>
            <h1 className={classes.titlemain}>Папка для правил</h1>
            <p className={classes.titleh1}>Папка должна иметь имя &quot;rules&quot; и внутри себя хранить файлы с функциями на проверку кода. Эти функции и являтся правилами.</p>
            <h1 className={classes.titlemain}>Как составить конфигурационный репозиторий</h1>
            <p className={classes.titleh1}>Для создания конфигурационного репозитория вы можете выполнить следующие шаги:</p>
            <ul className={classes.titleh1}>
                <li>
                    Создайте новый репозиторий на платформе для управления версиями кода GitHub.
                </li>
                <li>
                    Создайте в этом репозитории файл config.json c необходимымии элементами
                    {/* <p>Пример:</p>
                    <div>
                        <img src="" alt="конфиг"/>
                    </div> */}
                </li>
                <li>
                    Создайте в этом репозитории папку rules с необходимыми файлами с функциями для проверки кода. Эти функции обязательно надо экспортировать.
                    {/* <p>Пример:</p>
                    <img src=""></img> */}
                </li>
            </ul>
            <p>Пример конфигурационного репозитория можно посмотреть перейдя по <a href="https://github.com/stxffyy/config">ссылке</a> </p>
        </div>
    </div>
  )
}

export default Rules
