import "./Styles/Greetings.css"
import Birthday from "./Styles/Assets/Birthday.jpg"
import Fathersday from "./Styles/Assets/Fathersday.jpg"
import Graduation from "./Styles/Assets/Graduation.jpg"
import Mothersday from "./Styles/Assets/Mothers day.jpeg"
import Valentines from "./Styles/Assets/Valentines.jpg"
import { useState } from "react"
import { Greetings_icons } from "./Greetings_icons"
import { Greetings_fontsizes } from "./Greetings_fontsizes"
export const Greetings = () => {
    const [size,setSize] = useState(10)
  const [horizontally,setHorizontally] = useState(0)
  const [vertically,setVertically] = useState(0)
    const arreglodeimagenes = [{ ID: 1, img: Birthday }, { ID: 2, img: Fathersday }, { ID: 3, img: Graduation }]
    const arreglodeimagenes2 = [{ ID: 4, img: Mothersday }, { ID: 5, img: Valentines }]
    const [workImage, setWorkImage] = useState("")
    const [activeImageButton, setActiveImageButton] = useState(false)
    const [activeIconButton, setActiveIconButton] = useState(false)
    const [workIcon, setWorkIcon] = useState("")
    const [fontsSizes, setFontsSizes] = useState(false)
    const [text, setText] = useState("")
    const [iconvertically, setIconvertically]= useState(0)
    const [iconhorizontally, setIconhorizontally]= useState(0)
    return (
        <div>
            <div className="header2">
                <h1 style={{fontSize: "45px", color:"black"}}>Greetings</h1>
            </div>
            <div className="content2">
                <div className="Workhere">
                    
                    {
                        workImage? <div className="empty"><img className="workimage" src={workImage} /><img style={{zIndex:100,width: "25%", position: "relative", top: `${iconvertically}px`, left:`${iconhorizontally}px` }} className="workimage" src={workIcon} /> <div style={{width: "300px", zIndex: 110, width: "100px", fontSize:`${size}px`}}><p  style={{position: "relative", top: `${vertically}px`, left:`${horizontally}px`, }}>{text}</p></div></div>: <div className="empty"></div>}
                </div>
                <div className="buttons">
                    <button onClick={()=>{setActiveImageButton(true);
                    setActiveIconButton(false); setFontsSizes(false)}} className="imagesbutton">Images</button>
                    <button onClick={()=>{setActiveImageButton(false);
                    setActiveIconButton(true); setFontsSizes(false)}} className="Icons">Icons</button>
                    <button onClick={()=>{setFontsSizes(true);
                    setActiveImageButton(false); 
                    setActiveIconButton(false)}} className="Fontssizes">Fonts sizes</button>
                    <button onClick={()=>{alert("Take an screenshot of your card and save it to share with your friends and family")}} className="Googlemaps">Save</button>

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
                Greetings_icons(setWorkIcon, iconhorizontally, setIconhorizontally, iconvertically, setIconvertically):""}
                {
                    fontsSizes? Greetings_fontsizes(text,setText, horizontally,setHorizontally, size,setSize, vertically,setVertically): ""
                }
        
            </div>
        </div>
    )
}
