//Declare Vanta Types

declare module "vanta/dist/vanta.fog.min" {
  const fog: vantaEffect;
  export default fog;
}

type vantaEffect = (fn: {
  el: React.RefObject<null>;
  THREE;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  blurFactor: number;
  highlightColor: string;
  midtoneColor: string;
  lowlightColor: string;
  baseColor: string;
}) => vantaEffectMethods;

type vantaEffectMethods = { destroy: () => void };
