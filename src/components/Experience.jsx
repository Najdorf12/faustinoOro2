import { ChessPieces } from "./ChessPieces";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera

} from "@react-three/drei";


const Experience = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <spotLight
      
        position={[0, 20, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={10}
      />
      <Environment
        background={false} // can be true, false or "only" (which only sets the background) (default: false)
        preset={"warehouse"}
      />
      <PerspectiveCamera makeDefault position={[9.5, -2,13]} /> 
      <OrbitControls enableZoom={false}/>
      <group position={[5.5, -4, 3]} castShadow={true}>
        <ChessPieces scale={1.3} />
      </group>
    </>
  );
};

export default Experience;
