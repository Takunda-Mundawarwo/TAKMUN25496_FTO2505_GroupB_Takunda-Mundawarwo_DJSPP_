import { useRef, useEffect } from "react";
import type { vantaEffectMethods } from "../types/types";
import { useTheme } from "../stores/themeStore";

export default function Background() {
  const fogEffect = useRef<vantaEffectMethods | null>(null);
  const backgroundRef = useRef(null);
  const theme = useTheme((state) => state.theme);

  useEffect(() => {
    const loadVanta = async () => {
      const THREE = await import("three");
      const FOG = (await import("vanta/dist/vanta.fog.min")).default;

      if (fogEffect.current === null && backgroundRef.current) {
        if (theme === "dark") {
          fogEffect.current = FOG({
            el: backgroundRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            blurFactor: 0.5,
            highlightColor: "#5aa9eb",
            midtoneColor: "#075ea9",
            lowlightColor: "#01264a",
            baseColor: "#01264a",
          });
        } else {
          fogEffect.current = FOG({
            el: backgroundRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            blurFactor: 0.5,
            highlightColor: "#e0effb",
            midtoneColor: "#5aa9eb",
            lowlightColor: "#0a80e2",
            baseColor: "#e0effb",
          });
        }
      }
    };

    loadVanta();

    return () => {
      if (fogEffect.current) {
        fogEffect.current.destroy();
      }
      fogEffect.current = null;
    };
  }, [theme]);

  return <div className="background" ref={backgroundRef}></div>;
}
