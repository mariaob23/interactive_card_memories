import "./Styles/Greetings.css"
import Birthdayhat from "./Styles/Assets/Birthday hat.png"
import Cake from "./Styles/Assets/Cake.png"
import Chat from "./Styles/Assets/Chat.png"
import ChristmasCard from "./Styles/Assets/Christmas Card.png"
import Gift from "./Styles/Assets/Gift.png"
import Hearts from "./Styles/Assets/Hearts.jpg"
import Letter from "./Styles/Assets/Letter.png"
import mail from "./Styles/Assets/mail.png"
import Sparklingletter from "./Styles/Assets/Sparkling letter.png"
import Star from "./Styles/Assets/Star.webp"
export const Greetings_icons = (setWorkIcon,horizontally, setHorizontally, vertically, setVertically) => {
    const arregloicono = [{ ID: 1, img: Cake }, { ID: 2, img: Chat }, { ID: 3, img: ChristmasCard }, {ID: 4, img: Gift}, {ID: 5, img: Hearts}]
    const arregloicono2 = [{ ID: 6, img: Letter }, { ID: 7, img: mail }, { ID: 8, img: Sparklingletter  }, {ID: 9, img: Star}, {ID: 10, img: Birthdayhat}] 
    
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
                