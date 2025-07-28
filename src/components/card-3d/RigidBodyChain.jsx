import { RigidBody, BallCollider } from '@react-three/rapier'

export default function RigidBodyChain({ j1, j2, j3 }) {
    const props = { type: 'dynamic', colliders: false, canSleep: true, angularDamping: 2, linearDamping: 2 }

    return (
        <>
            <RigidBody ref={j1} {...props} position={[0.5, 0, 0]}>
                <BallCollider args={[0.1]} />
            </RigidBody>
            <RigidBody ref={j2} {...props} position={[1, 0, 0]}>
                <BallCollider args={[0.1]} />
            </RigidBody>
            <RigidBody ref={j3} {...props} position={[1.5, 0, 0]}>
                <BallCollider args={[0.1]} />
            </RigidBody>
        </>
    )
}