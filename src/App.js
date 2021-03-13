import React, { useRef, useState } from 'react';
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CubeTextureLoader } from "three";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'white'} />
    </mesh>
  )
}

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={false}
      enableZoom={false}
    />
  );
};

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    './img/skybox/px.png',
    './img/skybox/nx.png',
    './img/skybox/py.png',
    './img/skybox/ny.png',
    './img/skybox/pz.png',
    './img/skybox/nz.png',
  ]);
  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;;
}

export default function App() {
  return (
    <Canvas>
      <CameraControls />
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={0.8} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-10, 0, -4]} />
      <Box position={[5, 0, 10]} />
      <Box position={[10, 5, -8]} />
      <SkyBox />
    </Canvas>
  )
}

