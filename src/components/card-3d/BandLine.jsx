import { forwardRef } from 'react'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

extend({ MeshLineGeometry, MeshLineMaterial })

const BandLine = forwardRef(({ curve, resolution, bandTexture }, ref) => {
    bandTexture.wrapS = bandTexture.wrapT = THREE.RepeatWrapping

    return (
        <mesh ref={ref}>
            <meshLineGeometry />
            <meshLineMaterial
                color="white"
                depthTest={false}
                useMap
                map={bandTexture}
                repeat={[5, 1]}
                lineWidth={0.8}
            />
        </mesh>
    )
})

export default BandLine