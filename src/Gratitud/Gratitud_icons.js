import "../components/Styles/Greetings.css"
import Happy from "./Styles/Happy.png"
import Joy from "./Styles/Joy.png"
import praise from "./Styles/praise.png"
import Pray from "./Styles/Pray.png"
import Prize from "./Styles/Prize.png"
import Religions from "./Styles/Religions.png"
import Thanks from "./Styles/Thanks.png"
import giveheart from "./Styles/giveheart.png"
import hug from "./Styles/hug.png"
import Shareheart from "./Styles/Shareheart.png"
export const Gratitud_icons = (setWorkIcon,horizontally, setHorizontally, vertically, setVertically) => {
    const arregloicono = [{ ID: 1, img: Happy }, { ID: 2, img: Joy }, { ID: 3, img: praise }, {ID: 4, img: Pray}, {ID: 5, img: Prize}]
    const arregloicono2 = [{ ID: 6, img: Religions }, { ID: 7, img: Thanks }, { ID: 8, img: giveheart  }, {ID: 9, img: hug}, {ID: 10, img: Shareheart}] 
    
    return (
    <div>
      <div className="images">
                    {
                        arregloicono.map((imagen) => (
                            <div className="column1" key={imagen.ID}>
        
                                <img onClick={()=>{setWorkIcon(imagen.img)}} className="imagesize" src={imagen.img} />

                            </div>
                        ))


                    }
                    {
                        arregloicono2.map((imagen) => (
                            <div style={{position: "relative",top:"-525px"}} className="column2" key={imagen.ID}>
                                <img onClick={()=>{setWorkIcon(imagen.img)}} className="imagesize" src={imagen.img} />

                            </div>
                        ))
                    }
                <input value={horizontally} placeholder='add number of pixels to move horizontally'type='number'style={{width: "50%", height: "60px", position: "relative", left: "90px", top: "-500px" }}onChange={(e)=>{setHorizontally(e.target.value)}}/>
        <input value={vertically} placeholder='add number of pixels to move vertically'type='number'style={{width: "50%", height: "60px", position: "relative", left: "90px", top: "-500px" }}onChange={(e)=>{setVertically(e.target.value)}}/>
                </div>
    </div>
  )
}