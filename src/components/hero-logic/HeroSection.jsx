import React from "react";
import useResponsive3D from "../../hooks/card-3d/useResponsive3D.jsx";
import HeroCanvas from "./HeroCanvas";
import HeroText from "../sections/00Sections.jsx";

export default function HeroSection() {
    const { show3DModel, is3DContentReady, setIs3DContentReady } = useResponsive3D();

    const canvasWidth = "w-1/3";

    return (
        <div className="relative min-h-screen w-full">
            {show3DModel && (
                <>
                    {!is3DContentReady && (
                        <div className="fixed inset-0 flex flex-col justify-center items-center z-50 bg-background bg-opacity-80 space-y-4">
                            <img
                                src="/images/avatar.png"
                                alt="Loading avatar"
                                className="w-24 h-24 rounded-full border-2 border-primary shadow-lg select-none"
                            />
                            <p className="text-primary text-2xl font-normal select-none font-lunasima">
                                The portfolio is loading...
                            </p>
                        </div>
                    )}

                    <div className={`fixed left-0 top-0 h-screen ${canvasWidth} z-0`}>
                        <HeroCanvas
                            setIsReady={setIs3DContentReady}
                            isReady={is3DContentReady}
                        />
                    </div>
                </>
            )}

            {(is3DContentReady || !show3DModel) && (
                <div
                    className={`relative z-10 ${
                        show3DModel ? "ml-auto w-2/3" : "w-full"
                    } h-full overflow-y-auto`}
                >
                    <HeroText />
                </div>
            )}
        </div>
    );
}