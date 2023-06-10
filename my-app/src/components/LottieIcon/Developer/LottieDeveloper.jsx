import React from "react"
import { useLottie } from "lottie-react"
import developer from "./developer.json"

const LottieIcon = () => {
  const options = {
    animationData: developer,
    loop: true
  }

  const { View } = useLottie(options)

  return <>{View}</>
}

export default LottieIcon
