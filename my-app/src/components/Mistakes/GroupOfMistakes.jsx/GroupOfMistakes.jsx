import React from "react"
import classes from "./GroupOfMistakes.module.css"
import PropTypes from "prop-types"
import Mistake from "../Mistake/Mistake"
import Button from "@mui/material/Button"

function GroupOfMistakes ({ title, description, mistakes, createTask }) {
  const [open, setOpen] = React.useState(true)
  const toggleOpen = () => {
    setOpen(open => !open)
  }

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>
        Правило: <strong>{description}</strong>
        <br></br>
        <br></br>
        Количество ошибок: <span><strong>{mistakes.length}</strong></span>
      </p>
      <div>
        {open &&
          mistakes.map((item, index) => {
            return (
              <Mistake
                num={index + 1}
                title={item.message}
                key={index}
                url={item.url}
                createTask={(description, summaryName) => {
                  createTask(description, summaryName)
                }}
              />
            )
          }
          )}
      </div>
      <div className={classes.button}>
        <Button variant="text" size="small" onClick={toggleOpen}>{open === true ? "скрыть" : "раскрыть"}</Button>
      </div>
    </div>
  )
}

GroupOfMistakes.propTypes = {
  title: PropTypes.string,
  mistakes: PropTypes.array,
  url: PropTypes.any,
  createTask: PropTypes.func,
  description: PropTypes.string
}

export default GroupOfMistakes
