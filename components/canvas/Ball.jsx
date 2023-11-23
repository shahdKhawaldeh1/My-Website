import React, { Suspense } from 'react'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../Loader.jsx'

const Ball = (props) => {
  // Load the decal texture based on the provided imgUrl
  const [decal] = useTexture([props.imgUrl])

  return (
    // Apply a floating animation to the 3D ball
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>


      <mesh castShadow receiveShadow scale={3}>
        {/* Define the geometry of the ball using an icosahedron */}
        <icosahedronGeometry args={[1, 1]} />
        {/* Apply a standard material to the ball with a specific color and shading */}
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        {/* Add a decal to the ball with a specified position, texture, and rotation */}
        <Decal position={[0,0,1]} map={decal} rotation={[2*Math.PI, 0, 6.25]} />
      </mesh>
    </Float>
  )
}

//  3D canvas with interactive controls
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        {/* Enable orbit controls to allow interaction with the 3D scene */}
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon} />
      </Suspense>
      {/* Preload all assets before displaying the scene */}
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
