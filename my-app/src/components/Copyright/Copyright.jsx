import React from "react"
import "./Copyright.module.css"

import { Typography, Link } from "@mui/material"

function Copyright () {
  return (
    <div className="copy">
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: "3rem" }}>
        {"Copyright © "}
        <Link color="inherit" href="#">
          Tech Debt
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  )
}

export default Copyright
