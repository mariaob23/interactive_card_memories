import "../App.css"
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate=useNavigate()
  return (<div>
    <div className="header">
      <h1 style={{fontSize: "50px", color:"Black"}}>Welcome to Interactive Card Memories</h1>
    </div>
    <div className="content">
      <button onClick={()=>{navigate("/Greetings")}} className="Greetings">Greetings</button>
      <button onClick={()=>{navigate("/Gratitud")}} className="Gratitud">Gratitud</button>
      <button onClick={()=>{navigate("/Invitation")}} className="Invitation">Invitation</button>
    </div>
  </div>)
};
export default Homepage;