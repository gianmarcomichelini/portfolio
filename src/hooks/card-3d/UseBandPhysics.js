import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { useGLTF, useTexture } from '@react-three/drei'
import tagGlb from '../../assets/badge/tag.glb?url'
import bandTextureImage from '../../assets/badge/band-texture.png?url'
import badgeTextureFile from '../../assets/badge/badge-texture.jpg?url'

export default function useBandLogic({ fixed, j1, j2, j3, card, maxSpeed, minSpeed, bandRef }) {
    const { nodes, materials } = useGLTF(tagGlb)
    const bandTexture = useTexture(bandTextureImage)
    const badgeTexture = useTexture(badgeTextureFile)

    const { width, height } = useThree((state) => state.size)
    const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
    const [dragged, setDragged] = useState(false)
    const [hovered, setHovered] = useState(false)

    const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3()

    // --- Adjust these values to change band length ---
    const ropeLength = 1; // Example: Reduce from 1 to 0.5 for a shorter band
    // Or you can pass it as a prop to useBandLogic:
    // export default function useBandLogic({ fixed, j1, j2, j3, card, maxSpeed, minSpeed, bandRef, ropeLength = 1 }) { ... }

    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], ropeLength])
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], ropeLength])
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], ropeLength])
    useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.53, 0]]) // Spherical joint does not have a length param

    useEffect(() => {
        document.body.style.cursor = hovered ? (dragged ? 'grabbing' : 'grab') : 'auto'
    }, [hovered, dragged])

    useFrame((state, delta) => {
        if (dragged) {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
            dir.copy(vec).sub(state.camera.position).normalize()
            vec.add(dir.multiplyScalar(state.camera.position.length()))
            ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
            card.current?.setNextKinematicTranslation({
                x: vec.x - dragged.x,
                y: vec.y - dragged.y,
                z: vec.z - dragged.z,
            })
        }

        if (fixed.current) {
            ;[j1, j2].forEach((ref) => {
                if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
                const clamped = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
                ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clamped * (maxSpeed - minSpeed)))
            })

            curve.points[0].copy(j3.current.translation())
            curve.points[1].copy(j2.current.lerped)
            curve.points[2].copy(j1.current.lerped)
            curve.points[3].copy(fixed.current.translation())
            bandRef.current.geometry.setPoints(curve.getPoints(32))

            ang.copy(card.current.angvel())
            rot.copy(card.current.rotation())
            card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })
        }
    })

    const handlePointer = {
        onOver: () => setHovered(true),
        onOut: () => setHovered(false),
        onDown: (e) => {
            e.target.setPointerCapture(e.pointerId)
            setDragged(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
        },
        onUp: (e) => {
            e.target.releasePointerCapture(e.pointerId)
            setDragged(false)
        },
    }

    curve.curveType = 'chordal'

    const loaded = !!(bandTexture && badgeTexture && nodes && materials)
    return {
        bandTexture,
        badgeTexture,
        nodes,
        materials,
        hovered,
        dragged,
        handlePointer,
        curve,
        width,
        height,
        loaded
    }
}