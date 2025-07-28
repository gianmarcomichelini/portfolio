import React from "react";
import useResponsive3D from "../../hooks/card-3d/useResponsive3D.jsx";
import HeroCanvas from "./HeroCanvas";
import HeroText from "../sections/00Sections.jsx";
import LoadingThreeDotsJumping from "../../effects/LoadingDots.jsx";

export default function HeroSection() {
    const { show3DModel, is3DContentReady, setIs3DContentReady } = useResponsive3D();

    const canvasWidth = "w-1/3";

    return (
        <div className="relative min-h-screen w-full">
            {show3DModel && (
                <>
                    {!is3DContentReady && (
                        <div className="fixed inset-0 flex justify-center items-center z-50 bg-background bg-opacity-80">
                            <LoadingThreeDotsJumping />
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
                    } h-full overflow-y-auto px-8 py-12`}
                >
                    <HeroText />
                </div>
            )}
        </div>
    );
}