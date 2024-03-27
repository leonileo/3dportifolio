import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop/scene.gltf')
  
  return     <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
}

const ComputersCanvas = () => {
  return (
    <Canvas frameLoop='demand' shadows camera={{ position: [20, 3, 5], fov: 25 }}
     gl={{ preserveDrawingBuffer: true}}>
      <Suspense>
        <OrbitControls enableZoom={false} 
        maxPolarAngle={Math.pi / 2}
        minPolarAngle={Math.pi / 2}
        />
        <Computers/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas