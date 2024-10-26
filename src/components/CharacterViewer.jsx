import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

function CharacterModel() {
  const { scene, animations } = useGLTF('/src/assets/Animation GLB.glb');
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      const idleAction = actions['Idle'] || Object.values(actions)[0];
      if (idleAction) {
        idleAction.play();
      }
    }
  }, [actions]);

  return <primitive object={scene} />;
}

function CharacterViewer() {
  return (
    <div style={{ width: '1000px', height: '700px', margin: '0 auto' }}>
      <Canvas
        camera={{ position: [20, 10, 15], fov: 75 }}
        style={{ border: '2px solid #333', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
      >

        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 5, 3]} intensity={1} />

        <CharacterModel />

        <OrbitControls enableDamping={true} dampingFactor={0.1} />
      </Canvas>
    </div>
  );
}

export default CharacterViewer;

