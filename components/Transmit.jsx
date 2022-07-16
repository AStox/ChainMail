import CubeEmpty from "./CubeEmpty";
import CubeRim from "./CubeRim";

export default function Transmit() {
  return (
    <div className="Transmit">
      <div className="cube-container even">
        <CubeEmpty />
      </div>
      <div className="cube-container">
        <CubeRim />
      </div>
      <div className="cube-container even">
        <CubeRim />
      </div>
      <div className="cube-container">
        <CubeRim />
      </div>
      <div className="cube-container even">
        <CubeRim />
      </div>
      <div className="cube-container">
        <CubeRim />
      </div>
    </div>
  );
}
