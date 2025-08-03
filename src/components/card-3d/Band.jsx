import { useEffect, useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import BandLine from './BandLine';
import RigidBodyChain from './RigidBodyChain';
import CardBadge from './CardBadge';
import useBandLogic from '../../hooks/card-3d/UseBandPhysics.js';
import personalFont from "/badge/font.json?url";
import { Text3D } from "@react-three/drei";

export default function Band({ maxSpeed = 50, minSpeed = 10, onReady }) {
    const bandRef = useRef();
    const fixed = useRef();
    const j1 = useRef();
    const j2 = useRef();
    const j3 = useRef();
    const card = useRef();

    const {
        width,
        height,
        bandTexture,
        badgeTexture,
        nodes,
        materials,
        hovered,
        dragged,
        handlePointer,
        curve,
        loaded
    } = useBandLogic({ fixed, j1, j2, j3, card, maxSpeed, minSpeed, bandRef });

    useEffect(() => {
        //console.log("Band loaded state:", loaded);
        if (loaded && onReady) {
            //console.log("Calling onReady from Band");
            onReady();
        }
    }, [loaded, onReady]);

    return (
        <>
            <group position={[0, 4, 0]}>
                <RigidBody ref={fixed} type="fixed" colliders={false} canSleep angularDamping={2} linearDamping={2} />
                <RigidBodyChain j1={j1} j2={j2} j3={j3} />
                <CardBadge
                    ref={card}
                    nodes={nodes}
                    materials={materials}
                    bandTexture={bandTexture}
                    badgeTexture={badgeTexture}
                    hovered={hovered}
                    dragged={dragged}
                    handlePointer={handlePointer}
                />

                {/* 3D Text Component */}
                <Text3D
                    font={personalFont}
                    size={0.1}
                    height={0.05}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.01}
                    bevelSize={0.001}
                    position={[-0.6, -6.7, 0]}
                    rotation={[0, 0, 0]}
                >
                    [3D Interactive Badge]
                    <meshStandardMaterial color="#9CA3AF" />
                </Text3D>

            </group>
            <BandLine ref={bandRef} curve={curve} resolution={[width, height]} bandTexture={bandTexture} />
        </>
    );
}