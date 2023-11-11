import React from "react"
import { reachOutArr } from "../data"

const ReachCard = ({heading,subHeading,description}) =>{
    return (
        <div className="p-20 flex-col aic flex1 gap-20 bor-rad-5 bor-2" >
            <h3>{heading}</h3>
            <p>{subHeading}</p>
            <p>{description}</p>

        </div>
    )
}



const Contact = () => {
    const data = reachOutArr
    
    return(
        <React.Fragment>
        <h2 className="text-center p-20">{"< < < "}Reach Me Out {" > > >"}</h2>
        <div className="flex-row width-80 gap-10 m-auto sp-bw flex-wrap p-bot-40 ">
            {data.map(({heading,subHeading,description})=>
            <ReachCard heading={heading} subHeading={subHeading} description={description} />
            )}
        </div>
        </React.Fragment>
    )
}



export default Contact