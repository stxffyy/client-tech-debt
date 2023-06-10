import React from "react"
import { useLottie } from "lottie-react"
import process from "./process.json"

const Process = () => {
  const options = {
    animationData: process,
    loop: true
  }

  const { View } = useLottie(options)

  return <>{View}</>
}

export default Process
