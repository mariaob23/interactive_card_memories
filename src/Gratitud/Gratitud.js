import "../components/Styles/Greetings.css"
import Colors from "./Styles/Colors.webp"
import Education from "./Styles/Education.jpg"
import Flowers from "./Styles/Flowers.jpg"
import Light from "./Styles/Light.jpg"
import Religion from "./Styles/Religion.jpg"
import { useState } from "react"
import { Gratitud_icons } from "./Gratitud_icons"
import { Gratitud_fontsizes } from "./Gratitud_fontsizes"
export const Gratitud = () => {
    const [size,setSize] = useState(10)
  const [horizontally,setHorizontally] = useState(0)
  const [vertically,setVertically] = useState(0)
    const arreglodeimagenes = [{ ID: 1, img: Colors }, { ID: 2, img: Education }, { ID: 3, img: Flowers }]
    const arreglodeimagenes2 = [{ ID: 4, img: Light }, { ID: 5, img: Religion }]
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
                <h1 style={{fontSize: "45px", color:"black"}}>Gratitud</h1>
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
                            <div className="column2"  style={{position:"relative",top:"-238px"}} key={imagen.ID}>
                                <img onClick={()=>{setWorkImage(imagen.img)}} className="imagesize" src={imagen.img} />

                            </div>
                        ))
                    }
                </div>:
                activeIconButton?
                Gratitud_icons(setWorkIcon, iconhorizontally, setIconhorizontally, iconvertically, setIconvertically):""}
                {
                    fontsSizes? Gratitud_fontsizes(text,setText, horizontally,setHorizontally, size,setSize, vertically,setVertically): ""
                }
        
            </div>
        </div>
    )
}
