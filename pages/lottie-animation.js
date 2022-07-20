// import { LottieScrollSection } from "react-lottie-tools";
import TechLines from "../public/assets/ui-assets/images/lines-anim.json";
import dynamic from "next/dynamic";
import { LottieAnimation } from "react-lottie-tools";

const LottieScrollSection = dynamic(
  import("react-lottie-tools").then((data) => data.LottieScrollSection),
  { ssr: false } // ssr is important to be false
);

export default function TechLinesAnim() {
  return (
    <LottieScrollSection 
    height={1900} 
    animation={TechLines} 
    frames={[0, 69]} 
    />
  );
}