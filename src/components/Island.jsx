import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('./src/assets/Island GLB.glb');

  const cube = scene.getObjectByName('Cube');
  if (cube) cube.visible = false;

  return <primitive object={scene} />;
}

function Island() {
  return (
    <div style={{ width: '1000px', height: '700px', margin: '0 auto' }}>
      <Canvas
        camera={{ position: [5, 5, 10], fov: 75 }}
        style={{ border: '2px solid #333', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={1} />
        
        <Model />

        <OrbitControls enableDamping={true} dampingFactor={0.1} />
      </Canvas>
    </div>
  );
}

export default Island;