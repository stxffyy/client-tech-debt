import React from "react"
import classes from "./Header.module.css"
import { AppBar, IconButton, Toolbar } from "@mui/material"
import { Link } from "react-router-dom"

function Header () {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          {/* <MenuIcon></MenuIcon> */}
        </IconButton>
        <div className={classes.logo}>
          <span className={classes.logo_text}>TD</span>
        </div>
        <ul className={classes.menu}>
         <li className={classes.item}>
          <Link to="/project" className={classes.item}>Проект</Link>
          </li>
          <li className={classes.item}>
          <Link to="/" className={classes.item}>Технический долг</Link>
          </li>
          <li className={classes.item}>
          <Link to="/about" className={classes.item}>О нас</Link>
          </li>
          <li className={classes.item}>
          <Link to="/rules" className={classes.item}>Правила</Link>
          </li>
        </ul>
        {/* <Button color="inherit">Log Out</Button> */}
      </Toolbar>
    </AppBar>
  )
}

export default Header
