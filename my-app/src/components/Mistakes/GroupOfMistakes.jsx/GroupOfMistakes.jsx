import React from "react"
import classes from "./GroupOfMistakes.module.css"
import PropTypes from "prop-types"
import Mistake from "../Mistake/Mistake"
import Button from "@mui/material/Button"

function GroupOfMistakes ({ description, mistakes, createTask }) {
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
                id = {item.id}
                num={index + 1}
                url={item.url}
                createTask={createTask}
                key={index}
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
  mistakes: PropTypes.array,
  createTask: PropTypes.func,
  description: PropTypes.string
}

export default GroupOfMistakes
