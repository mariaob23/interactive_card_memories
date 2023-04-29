import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../components/Homepage"
import {Greetings} from "../components/Greetings"
import { Gratitud } from "../Gratitud/Gratitud"
import { Invitation } from "../components/Invitation/Invitation"
export const Approute = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/Greetings" element={<Greetings/>}/>
            <Route path="/Gratitud" element={<Gratitud/>}/>
            <Route path="/Invitation" element={<Invitation/>}/>
        </Routes>
        </BrowserRouter>
      )
}
