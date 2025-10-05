
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  // 👇 Replace with your GLB model URL
  const { scene } = useGLTF("https://arnxtmodelstest.s3.ap-south-1.amazonaws.com/1720504495942_Royaloak%20Venice%20Italian%20Fabric%20Sofa%201S.glb");
  return <primitive object={scene} {...props} />;
}
