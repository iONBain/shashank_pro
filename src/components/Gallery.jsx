import React from "react"
import { imgGalleryArr } from "../data"

// const 


const Gallery = ({comp}) => {
    const data = imgGalleryArr
    return(
        <React.Fragment>
        <h2 className="text-center p-20">Gallery</h2>
        <div className="flex-row width-80 m-auto aic gap-10 flex-wrap">
            {
                data.map(i=> 
                    <img className="imgGal" src={i} alt={i} />
                    )
            }
        </div>
        </React.Fragment>
    )
}



export default Gallery