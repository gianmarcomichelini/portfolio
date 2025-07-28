import {useEffect, useRef} from 'react'
import { RigidBody } from '@react-three/rapier'
import BandLine from './BandLine'
import RigidBodyChain from './RigidBodyChain'
import CardBadge from './CardBadge'
import useBandLogic from '../../hooks/card-3d/UseBandPhysics.js'

export default function Band({ maxSpeed = 50, minSpeed = 10, onReady }) {
    const bandRef = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef()

    const {
        width, height,
        bandTexture, badgeTexture,
        nodes, materials,
        hovered, dragged, handlePointer,
        curve,
        loaded // <- expose this from useBandLogic
    } = useBandLogic({ fixed, j1, j2, j3, card, maxSpeed, minSpeed, bandRef })

    useEffect(() => {
        if (loaded && onReady) onReady()
    }, [loaded, onReady])

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
            </group>
            <BandLine ref={bandRef} curve={curve} resolution={[width, height]} bandTexture={bandTexture} />
        </>
    )
}