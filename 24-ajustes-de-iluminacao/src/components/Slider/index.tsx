import * as SliderPrimitive from "@radix-ui/react-slider";

import styles from "./styles.module.css";

interface SliderProps {
  maxRange: number;
  initialValue: number;
  title: string;
  handle: (value: number) => void;
  variant?: "default" | "gradient";
  currentColor?: string;
}

export function Slider({
  maxRange,
  initialValue,
  handle,
  title,
  variant = "default",
  currentColor = "#141414",
}: SliderProps) {
  const trackStyles =
    variant === "default"
      ? styles.SliderTrack
      : `${styles.SliderTrack} ${styles.gradient}`;

  const rangeStyles =
    variant === "default"
      ? styles.SliderRange
      : `${styles.SliderRange} ${styles.gradient}`;
  const thumbStyle =
    variant === "default" ? {} : { backgroundColor: currentColor };

  return (
    <SliderPrimitive.Root
      className={styles.SliderRoot}
      defaultValue={[initialValue]}
      max={maxRange}
      step={1}
      onValueChange={(value) => handle(value[0])}
    >
      <SliderPrimitive.Track className={trackStyles}>
        <SliderPrimitive.Range className={rangeStyles} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        aria-label={title}
        className={styles.SliderThumb}
        style={thumbStyle}
      />
    </SliderPrimitive.Root>
  );
}
