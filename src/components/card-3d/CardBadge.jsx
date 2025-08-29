import * as THREE from 'three'
import { forwardRef } from 'react'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import {Text3D, useTexture} from "@react-three/drei";
import portraitTextureImage from '/badge/portrait-image.svg'
import personalFont from '/badge/font.json?url'
import badgeTextureImage from "/badge/badge-texture.jpeg";
import badgeFrontImageTextureImage from "/badge/badge-front-image.png";
import badgeFrontTextureImage from "/badge/badge-front-texture.jpeg";

const CardBadge = forwardRef(({ nodes, materials, bandTexture, badgeTexture: propBadgeTexture, hovered, dragged, handlePointer }, ref) => { // Renamed badgeTexture prop
    const portraitTexture = useTexture(portraitTextureImage)
    const portraitFrontTexture = useTexture(badgeFrontImageTextureImage)
    const badgeFrontTexture = useTexture(badgeFrontTextureImage)
    const mainBadgeTexture = useTexture(badgeTextureImage);

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
                        map={mainBadgeTexture} 
                    />
                </mesh>

                <mesh geometry={nodes.card.geometry} scale={[1, 1, 1]} position={[0, 0, 0.01]}>
                    <meshPhysicalMaterial
                        clearcoat={1}
                        map={badgeFrontTexture}
                    />
                </mesh>

                {/* back side */}
                <mesh position={[0, 0.6, -0.01]} scale={[0.3, 0.3, 1]}>
                    <planeGeometry args={[1, 1]} />
                    <meshBasicMaterial
                        map={portraitTexture}
                        transparent={true}
                        alphaTest={1}
                        side={THREE.DoubleSide}
                    />
                </mesh>

                {/* front side */}
                <mesh position={[0, 0.425, 0.02]} scale={[0.65, 0.8, 1]}>
                    <planeGeometry args={[1, 1]} />
                    <meshBasicMaterial
                        map={portraitFrontTexture}
                        transparent={true}
                        side={THREE.DoubleSide}
                    />
                </mesh>




                {/*<group scale={[0.04, 0.04, 0.02]} position={[0, 0, 0]}>
                    <Text3D
                        font={personalFont}
                        position={[-8, 23.8, 1]}
                    >
                        Gianmarco
                        <meshStandardMaterial color="black" />
                    </Text3D>


                    <Text3D
                        font={personalFont}
                        position={[-8, 22, 1]}
                    >
                        Michelini
                        <meshStandardMaterial color="black" />
                    </Text3D>
                </group>*/}



                {/* Clip & Clamp */}
                <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
                <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
            </group>
        </RigidBody>
    )
})

export default CardBadge;