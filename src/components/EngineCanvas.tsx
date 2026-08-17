import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const EngineSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#38bdf8') },
    uAudioLow: { value: 0 }
  }), []);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x += (mouse.y * Math.PI - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (mouse.x * Math.PI - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.y += 0.004;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv; 
          void main() { 
            vUv = uv; 
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
          }
        `}
        fragmentShader={`
          uniform float uTime; 
          uniform vec3 uColor; 
          varying vec2 vUv;
          void main() { 
            vec2 g = fract(vUv * 60.0); 
            float line = step(0.92, g.x) + step(0.92, g.y);
            if (line < 0.1) discard; 
            float p = pow((sin(uTime * 2.0) * .5 + .5), 3.0);
            gl_FragColor = vec4(uColor * (0.25 + 0.8 * p), 0.75); 
          }
        `}
        transparent={true}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};

export default function EngineCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <color attach="background" args={['#02040a']} />
      <EngineSphere />
      <EffectComposer>
        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} intensity={2.5} mipmapBlur={true} />
      </EffectComposer>
    </Canvas>
  );
}
