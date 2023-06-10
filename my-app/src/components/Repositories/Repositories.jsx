import React from "react"
import classes from "./Repositories.module.css"
import PropTypes from "prop-types"
import { List, ListItem, ListItemText, Checkbox } from "@mui/material"
import { blue } from "@mui/material/colors"

function Repositories ({ activeRepositoryIds, onClickRepo, repositories }) {
  return (
    <div className={classes.repo}>
    <List className={classes.repo__menu}>
      {repositories.map((item, index) => (
        <ListItem
        dense
        button
        key={index}
        className={activeRepositoryIds.includes(item.id) ? classes.active__item : classes.repo__item}
        onClick={() => onClickRepo(index)}
        style={{ backgroundColor: blue[50] }}
        >
          <Checkbox
            tabIndex={-1}
            disableRipple
            color="primary"
          />
          <ListItemText className={classes.title} primary={item.title} />
        </ListItem>
      ))}
    </List>
    </div>
  )
}

Repositories.propTypes = {
  activeRepositoryIds: PropTypes.array,
  onClickRepo: PropTypes.func,
  repositories: PropTypes.array
}

export default Repositories
