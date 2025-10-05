// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { XR, ARButton } from "@react-three/xr"; // 👈 removed Controllers

// // Load your GLB model
// function Model({ url }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={0.5} />;
// }

// export default function FloorARScene() {
//   return (
//     <div className="w-full h-screen">
//       {/* Button to enter AR mode */}
//       <ARButton />

//       <Canvas>
//         <XR>
//           <ambientLight intensity={0.6} />
//           <directionalLight position={[2, 5, 2]} intensity={1} />

//           <Suspense fallback={null}>
//             {/* 👇 Change GLB file path here */}
//             <Model url="/models/chair.glb" />
//           </Suspense>

//           {/* Desktop controls for testing */}
//           <OrbitControls />
//         </XR>
//       </Canvas>
//     </div>
//   );
// }
