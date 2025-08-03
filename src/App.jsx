import './App.css'
import {Route, Routes} from "react-router";
import HeroSection from "./components/hero-logic/HeroSection.jsx";
import {BasicLayout, DefaultRoute} from "./components/Layout.jsx";
import ContactComponent from "./components/Contact.jsx";



export default function App() {
    return (
        <Routes>

            <Route path="/portfolio" element={<BasicLayout />}>
                <Route index element={<HeroSection/>}/>
                <Route path="reach-me" element={<ContactComponent/>}/>

                <Route path="*" element={<DefaultRoute/>}/>
            </Route>
        </Routes>
    )
}


