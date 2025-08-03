import React, { Suspense, useRef } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { Physics } from "@react-three/rapier"; // <--- Only import Physics
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import Band from "../card-3d/Band";

extend({ MeshLineGeometry, MeshLineMaterial });

export default function HeroCanvas({ setIsReady, isReady }) {
    const canvasRef = useRef();

    return (
        <div className="relative w-full h-full">
            <Canvas
                ref={canvasRef}
                camera={{ position: [0, 0, 13], fov: 25}}
                style={{
                    backgroundColor: "transparent",
                    visibility: isReady ? "visible" : "hidden",
                }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={Math.PI} />
                    <Physics
                        gravity={[0, -40, 0]}
                        interpolate
                        timeStep={1 / 60}
                        //debug // <--- Add the debug prop here
                        // You can also add debug options like:
                        // debug={true}
                        // debugColor="red"
                        // debugSleepColor="blue"
                    >
                        <Band onReady={() => setIsReady(true)} />
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    );
}