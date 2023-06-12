import React from "react"
import classes from "./Header.module.css"
import { AppBar, IconButton, Toolbar } from "@mui/material"
import { Link } from "react-router-dom"

function Header () {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
        </IconButton>
        <div className={classes.logo}>
          <span className={classes.logo_text}>TD</span>
        </div>
        <ul className={classes.menu}>
        <li className={classes.item}>
          <Link to="/" className={classes.item}>О нас</Link>
        </li>
        <li className={classes.item}>
          <Link to="/rules" className={classes.item}>Правила</Link>
        </li>
         <li className={classes.item}>
          <Link to="/project" className={classes.item}>Проект</Link>
          </li>
          <li className={classes.item}>
          <Link to="/home" className={classes.item}>Технический долг</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default Header
