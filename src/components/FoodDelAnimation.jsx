import Lottie from "lottie-react";
import FoodDelAnim from "../animations/food-del-animation.json";

export function FoodDelAnimation(props) {
  return (
    <Lottie
      animationData={FoodDelAnim}
      style={{ height: props.height || "67vh" }}
    />
  );
}
