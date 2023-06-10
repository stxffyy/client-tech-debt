import React from "react"
import InputForLink from "../../components/InputForLink/InputForLink"
import AnalyzeButton from "../../components/AnalyzeButton/AnalyzeButton"
import LottieIcon from "../../components/LottieIcon/Process/LottieProcess"

function Project () {
  return (
    <div>
        <InputForLink/>
        <AnalyzeButton/>
        <LottieIcon/>
        {/* <JiraInstanceInput/>
        <JiraTokenInput/> */}
    </div>
  )
}

export default Project
