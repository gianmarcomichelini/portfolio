import {Link, Outlet, useNavigate} from "react-router";
import Magnet from "../effects/MagnetEffect.jsx";
import gifError404 from "../assets/NO404.gif"
import {useEffect, useRef, useState} from "react";
import DecryptedText from "../effects/DecryptTextEffect.jsx";



function BasicLayout() {
    const backgroundColor = "bg-background";

    return (
        <div>
            <main className={`${backgroundColor} w-screen min-h-screen`}>
                <Outlet/>
            </main>
        </div>
    )
}



function DefaultRoute() {
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(false);
            navigate("/");
        }, 2500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center">
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-btngradient_secondary border  p-8 rounded-2xl shadow-2xl max-w-xl w-[90%] text-center text-white">
                        <h3 className="text-3xl font-extrabold mb-4 drop-shadow-md">
                            No data here
                        </h3>
                        <div className="flex justify-start">

                        <p className="text-lg opacity-90 mb-6">Redirecting to home...</p>
                            </div >
                        <div className="flex justify-end">
                            <Link to="/" className="inline-block">
                                <button className="px-5 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold transition duration-200">
                                    Go Home
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export {BasicLayout, DefaultRoute};