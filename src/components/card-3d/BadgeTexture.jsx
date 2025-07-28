import * as THREE from 'three'
import { Center, Resize, Text3D, PerspectiveCamera, useTexture } from '@react-three/drei'
import badgeTexture from '../../assets/badge/badge-texture.jpg'

export default function BadgeTexture() { // Removed the 'user' prop

    return (
        <>
            {/* PerspectiveCamera:
            - makeDefault: This camera will be the active camera in the scene.
            - manual: Prevents drei from automatically adjusting the camera.
            - aspect: Matches the aspect ratio of your badge (0.8 width / 1.125 height).
            - position: Places the camera at [0, 0, 2] to look at the content.
            */}
            <PerspectiveCamera makeDefault manual aspect={0.8 / 1.125} position={[0, 0, 2]} />

            {/* Badge background:
            - A simple planeGeometry to serve as the base for the badge's visual.
            - args: Defines the width and height of the plane. Multiplied by 2.25
                    to better align with the CardBadge's scaling. Adjust if needed.
            - meshBasicMaterial: A basic material.
            - transparent & alphaMap: Allows the badgeTexture's alpha channel
                    to define the shape/transparency of the badge.
            - side={THREE.BackSide}: Renders the material on the back face of the plane.
                    You might want to change this to `THREE.FrontSide` or `THREE.DoubleSide`
                    depending on how your badge model is oriented and textured.
            */}
            <mesh>
                {/* Adjust args here to match the desired size on the physical badge */}
                <planeGeometry args={[0.8 * 2.25, 1.125 * 2.25]} />
                <meshBasicMaterial
                    transparent
                    alphaMap={texture}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Text rendering, centered on badge:
            - Center: Automatically centers its children.
            - Resize: Ensures the text scales to fit within the specified
                    maxHeight (1.8) and maxWidth (1.5) of the text area.
            */}
            <Center>
                <Resize maxHeight={1.8} maxWidth={1.5}>
                    {/* Displaying "hi!" */}
                    <Text3D
                        font={personalFont}
                        height={0}
                        bevelEnabled={false}
                        rotation={[0, Math.PI, Math.PI]} // Adjust this if text is flipped
                        position={[0, 0.3, 0]} // Position relative to the Center component
                    >
                        hi! {/* Hardcoded text */}
                        <meshBasicMaterial color="black" />
                    </Text3D>

                    {/* Removed second Text3D for lastName as per your requirement */}
                </Resize>
            </Center>
        </>
    )
}