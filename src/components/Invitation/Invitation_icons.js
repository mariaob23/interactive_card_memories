import "../Styles/Greetings.css"
import Anniversary from "./Styles/Anniversary.png"
import Balloon from "./Styles/Balloon.png"
import Birthday_celebration from "./Styles/Birthday_celebration.png"
import Happy_letter from "./Styles/Happy_letter.png"
import Invite from "./Styles/Invite.png"
import Love from "./Styles/Love.png"
import Proposal from "./Styles/Proposal.png"
import Star from "./Styles/Star.png"
import VIP_event from "./Styles/VIP_event.png"
import Wedding_rings from "./Styles/Wedding_rings.png"
export const Invitation_icons = (setWorkIcon,horizontally, setHorizontally, vertically, setVertically) => {
    const arregloicono = [{ ID: 1, img: Anniversary }, { ID: 2, img: Balloon }, { ID: 3, img: Birthday_celebration }, {ID: 4, img: Happy_letter}, {ID: 5, img: Invite}]
    const arregloicono2 = [{ ID: 6, img: Love }, { ID: 7, img: Proposal }, { ID: 8, img: Star  }, {ID: 9, img: VIP_event}, {ID: 10, img: Wedding_rings}] 
    
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