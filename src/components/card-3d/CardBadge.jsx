import * as THREE from 'three'
import { forwardRef } from 'react'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import {Center, Resize, Text3D, useTexture} from "@react-three/drei";
import portraitTextureImage from '../../assets/badge/portrait-image.svg'
import fontUrl from '../../assets/badge/font.json'
import personalFont from '../../assets/badge/font.json'
import BadgeTexture from "./BadgeTexture.jsx";
import badgeTexture from "../../assets/badge/badge-texture.jpg";
import badgeFrontTexture from "../../assets/badge/front-badge-image.png";

const CardBadge = forwardRef(({ nodes, materials, bandTexture, badgeTexture: propBadgeTexture, hovered, dragged, handlePointer }, ref) => { // Renamed badgeTexture prop
    const portraitTexture = useTexture(portraitTextureImage)
    const portraitFrontTexture = useTexture(badgeFrontTexture)
    const mainBadgeTexture = useTexture(badgeTexture); // Assuming this is for the main badge texture

    return (
        <RigidBody
            ref={ref}
            position={[0, 0, 0]}
            type={dragged ? 'kinematicPosition' : 'dynamic'}
            colliders={false}
            canSleep
            angularDamping={2}
            linearDamping={2}
        >
            <CuboidCollider args={[0.8, 1.125, 0.01]} />
            <group
                scale={2.25}
                position={[0, -1.15, -0.05]}
                onPointerOver={handlePointer.onOver}
                onPointerOut={handlePointer.onOut}
                onPointerDown={handlePointer.onDown}
                onPointerUp={handlePointer.onUp}
            >
                {/* Original FRONT SIDE of the physical badge model */}
                <mesh geometry={nodes.card.geometry}>
                    <meshPhysicalMaterial
                        clearcoat={1}
                        roughness={0.3}
                        metalness={0.5}
                        map={mainBadgeTexture} // Use the loaded texture
                    />
                </mesh>

                <mesh position={[0, 0.5, 0]} scale={[0.3, 0.3, 1]}>
                    <planeGeometry args={[1, 1]} />
                    <meshBasicMaterial
                        map={portraitTexture}
                        transparent={true}
                        alphaTest={1}
                        side={THREE.DoubleSide}
                    />
                </mesh>


                <mesh position={[0, 0.318, 0.01]} scale={[0.6, 0.6, 1]}>
                    <planeGeometry args={[1, 1]} />
                    <meshBasicMaterial
                        map={portraitFrontTexture}
                        transparent={true}
                        alphaTest={1}
                        side={THREE.DoubleSide}
                    />
                </mesh>

                {/* Clip & Clamp */}
                <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
                <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
            </group>
        </RigidBody>
    )
})

export default CardBadge;