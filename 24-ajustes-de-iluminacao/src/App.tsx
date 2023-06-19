import { useState } from "react";
import { CircleHalf, Copy, Palette, Sun } from "@phosphor-icons/react";

import { Slider } from "./components/Slider";

import styles from "./App.module.css";

export function App() {
  const [hue, setHue] = useState(156);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(50);

  const hslColor = `hsl(${hue},${saturation}%, ${lightness}%)`;

  function handleUpdateHue(value: number) {
    setHue(value);
  }
  function handleUpdateSaturation(value: number) {
    setSaturation(value);
  }
  function handleUpdateLightness(value: number) {
    setLightness(value);
  }

  function copyHSLCodeToClipboard() {
    navigator.clipboard.writeText(hslColor);
  }

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div
          className={styles.circle}
          style={{
            backgroundColor: hslColor,
            boxShadow: `0 0 30px ${hslColor}`,
          }}
        />

        <div>
          <span className={styles.title}>Ajustes de iluminação</span>

          <div className={styles.controlsWrapper}>
            <div className={styles.control}>
              <Palette />
              <Slider
                initialValue={hue}
                maxRange={360}
                title="Hue"
                variant="gradient"
                currentColor={hslColor}
                handle={handleUpdateHue}
              />
              <span className={styles.value}>{hue}</span>
            </div>

            <div className={styles.control}>
              <Sun />
              <Slider
                initialValue={saturation}
                maxRange={100}
                title="Saturation"
                handle={handleUpdateSaturation}
              />
              <span className={styles.value}>{saturation}</span>
            </div>

            <div className={styles.control}>
              <CircleHalf />
              <Slider
                initialValue={lightness}
                maxRange={100}
                title="Lightness"
                handle={handleUpdateLightness}
              />
              <span className={styles.value}>{lightness}</span>
            </div>
          </div>
        </div>

        <button className={styles.copyButton} onClick={copyHSLCodeToClipboard}>
          <Copy />
        </button>
      </div>
    </main>
  );
}
