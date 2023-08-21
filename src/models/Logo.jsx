import React, { useRef } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";

const Logo = (props) => {
  const { nodes, materials } = useGLTF("./models/logo.glb");
  return (
    <group
      {...props}
      dispose={null}
      scale={1.4}
      rotation={[0, Math.PI / 2, Math.PI / 2]}
      position={[5.5, -6, 0]}
    >
      <mesh
        geometry={nodes.Curve.geometry}
        receiveShadow
        castShadow
        scale={59.582}
      >
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
      <mesh
        geometry={nodes.Curve001.geometry}
        receiveShadow
        castShadow
        scale={59.582}
      >
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
      <mesh
        geometry={nodes.Curve002.geometry}
        receiveShadow
        castShadow
        scale={59.582}
      >
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
      <mesh
        geometry={nodes.Curve003.geometry}
        receiveShadow
        castShadow
        scale={59.582}
      >
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
      <mesh
        geometry={nodes.Curve004.geometry}
        receiveShadow
        castShadow
        scale={59.582}
      >
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
      <mesh
        geometry={nodes.Curve005.geometry}
        receiveShadow
        castShadow
        scale={59.582}
      >
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
      <mesh
        geometry={nodes.Curve006.geometry}
        receiveShadow
        castShadow
        scale={59.582}
      >
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
      <mesh
        geometry={nodes.Curve007.geometry}
        receiveShadow
        castShadow
        scale={59.582}
      >
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
        />
      </mesh>
    </group>
  );
};

export default Logo;

useGLTF.preload("./models/logo.glb");
