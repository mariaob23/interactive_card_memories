import "./Styles/Greetings.css"
import Birthday from "./Styles/Assets/Birthday.jpg"
import Fathersday from "./Styles/Assets/Fathersday.jpg"
import Graduation from "./Styles/Assets/Graduation.jpg"
import Mothersday from "./Styles/Assets/Mothers day.jpeg"
import Valentines from "./Styles/Assets/Valentines.jpg"
import { useState } from "react"
import { Greetings_icons } from "./Greetings_icons"
export const Greetings = () => {
    const arreglodeimagenes = [{ ID: 1, img: Birthday }, { ID: 2, img: Fathersday }, { ID: 3, img: Graduation }]
    const arreglodeimagenes2 = [{ ID: 4, img: Mothersday }, { ID: 5, img: Valentines }]
    const [workImage, setWorkImage] = useState("")
    const [activeImageButton, setActiveImageButton] = useState(false)
    const [activeIconButton, setActiveIconButton] = useState(false)
    const [workIcon, setWorkIcon] = useState("")
    return (
        <div>
            <div className="header2">
                <h2>Greetings</h2>
            </div>
            <div className="content2">
                <div className="Workhere">
                    
                    {
                        workImage? <div className="empty"><img className="workimage" src={workImage} /><img style={{zIndex:100,width: "25%"}} className="workimage" src={workIcon} /></div>: <div className="empty"></div>}
                </div>
                <div className="buttons">
                    <button onClick={()=>{setActiveImageButton(true);
                    setActiveIconButton(false)}} className="imagesbutton">Images</button>
                    <button onClick={()=>{setActiveImageButton(false);
                    setActiveIconButton(true)}} className="Icons">Icons</button>
                    <button className="Fontssizes">Fonts sizes</button>
                    <button className="Googlemaps">Google maps</button>
                </div>
                {activeImageButton ?<div className="images">
                    {
                        arreglodeimagenes.map((imagen) => (
                            <div className="column1" key={imagen.ID}>
        
                                <img onClick={()=>{setWorkImage(imagen.img)}} className="imagesize" src={imagen.img} />

                            </div>
                        ))


                    }
                    {
                        arreglodeimagenes2.map((imagen) => (
                            <div className="column2" key={imagen.ID}>
                                <img onClick={()=>{setWorkImage(imagen.img)}} className="imagesize" src={imagen.img} />

                            </div>
                        ))
                    }
                </div>:
                activeIconButton?
                Greetings_icons(setWorkIcon):""}
        
            </div>
        </div>
    )
}
