import CubeEmpty from "./CubeEmpty";
import CubeRim from "./CubeRim";
import CubeDraggable from "./CubeDraggable";
import Outline from "./Outline";
import Arrow from "./Arrow";

export default function Send() {
  return (
    <div className="Send">
      <div className="top">
        <div className="holder">
          <CubeDraggable />
          <Outline />
        </div>
        <Arrow />
        <div className="holder">
          <Outline />
        </div>
      </div>
    </div>
  );
}
