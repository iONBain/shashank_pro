import React from "react"
import { achievementArr } from "../data"
const AchCard = ({headerVal,cntVal,imgVal}) =>{
    return (
        <div className="img-hover-tilt p-20 flex-col aic gap-20" style={{minWidth:"21%"}}>
            <img height="80px" src={imgVal} alt={headerVal} />
            <h2>{cntVal}</h2>
            <p>{headerVal}</p>

        </div>
    )
}

const Achievements = () => {

    const data = achievementArr
    
    return(
        <React.Fragment>
        <h2 className="text-center p-20">Achievements</h2>
        <div className="flex-row width-80 m-auto sp-bw flex-wrap p-bot-40">
            {data.map(({headerVal,cntVal,imgVal})=>
            <AchCard headerVal={headerVal} cntVal={cntVal} imgVal={imgVal} />
            )}
        </div>
        </React.Fragment>
    )
}



export default Achievements