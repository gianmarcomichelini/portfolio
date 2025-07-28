import './App.css'
import {Route, Routes} from "react-router";
import HeroSection from "./components/hero-logic/HeroSection.jsx";
import {BasicLayout, DefaultRoute} from "./components/Layout.jsx";



export default function App() {
    return (
        <Routes>

            <Route path="/" element={<BasicLayout />}>
                <Route index element={<HeroSection/>}/>

                <Route path="*" element={<DefaultRoute/>}/>
            </Route>
        </Routes>
    )
}


