import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Float,
  Lightformer,
  Text,
  Html,
  ContactShadows,
  Environment,
  MeshTransmissionMaterial,
  RoundedBox,
} from "@react-three/drei";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import { Route, Link, useLocation } from "wouter";
import { suspend } from "suspend-react";
import { easing } from "maath";
import { EllipseCurve } from "three";
import Logo from "./models/Logo";

const inter = import("@pmndrs/assets/fonts/inter_regular.woff");

export default function Experience() {
  const Rig = () => {
    useFrame((state, delta) => {
      easing.damp3(
        state.camera.position,
        [
          Math.sin(-state.pointer.x) * 5,
          state.pointer.y * 3.5,
          15 + Math.cos(state.pointer.x) * 10,
        ],
        0.2,
        delta
      );
      state.camera.lookAt(0, 0, 0);
    });
  };

  // const Logo = (props) => {
  //   const numDuplicates = 8;
  //   const angleStep = (2 * Math.PI) / numDuplicates;
  //   const innerCircleRadius = 2.5; // Adjust this value to control the space in the middle

  //   return (
  //     <group rotation={[0, Math.PI / 2, Math.PI / 2]}>
  //       {[...Array(numDuplicates)].map((_, index) => {
  //         const angle = index * angleStep;
  //         const x = Math.cos(angle) * innerCircleRadius; // Reduce the radius for the inner circle
  //         const z = Math.sin(angle) * innerCircleRadius;
  //         const rotationY = Math.atan2(x, z) + Math.PI / 2; // Calculate rotation angle

  //         return (
  //           <mesh
  //             key={index}
  //             position={[x, 0, z]}
  //             rotation={[0, rotationY, 0]} // Apply rotation
  //             receiveShadow
  //             castShadow
  //             {...props}
  //           >
  //             <RoundedBox args={[3, 1, 1.2]} radius={0.1}>
  //               <MeshTransmissionMaterial
  //                 backside
  //                 backsideThickness={5}
  //                 thickness={2}
  //               />
  //             </RoundedBox>
  //           </mesh>
  //         );
  //       })}
  //     </group>
  //   );
  // };

  return (
    <>
      <color attach="background" args={["#F2E168"]} />
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
      <Text
        fontSize={14}
        letterSpacing={-0.025}
        font={suspend(inter).default}
        color="black"
        position={[0, 0, -10]}
      >
        orchid
        <Html style={{ color: "transparent", fontSize: "33.5em" }} transform>
          orchid
        </Html>
      </Text>

      <Float floatIntensity={2}>
        <Route path="/">
          <Logo />
        </Route>
      </Float>
      <ContactShadows
        scale={100}
        position={[0, -7.5, 0]}
        blur={1}
        far={100}
        opacity={0.85}
      />
      <Environment preset="city">
        <Lightformer
          intensity={8}
          position={[10, 5, 0]}
          scale={[10, 50, 1]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>
      <EffectComposer disableNormalPass>
        <N8AO aoRadius={1} intensity={2} />
        <TiltShift2 blur={0.2} />
      </EffectComposer>
      <Rig />
    </>
  );
}
