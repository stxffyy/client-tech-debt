import React from "react"
import classes from "./Mistake.module.css"
import PropTypes from "prop-types"
import Button from "@mui/material/Button"

function Mistake ({ id, num, url, createTask }) {
  const handleCreateTask = () => {
    createTask(id)
  }

  return (
    <div className={classes.wrapper}>
      <ul className={classes.menu}>
        <li className={classes.list__count}>
        <Button variant="text">Ошибка: {num}</Button>
        </li>
        <li className={classes.list__button}>
           <Button variant="outlined" href={url} target="_blank" rel="noreferrer">Показать код</Button>
        </li>
        <li className={classes.list__button}>
           <Button variant="outlined" className={classes.button} onClick={handleCreateTask}>Создать задачу</Button>
        </li>
      </ul>
    </div>
  )
}

Mistake.propTypes = {
  num: PropTypes.number,
  url: PropTypes.any,
  title: PropTypes.any,
  createTask: PropTypes.func,
  id: PropTypes.number
}

export default Mistake
