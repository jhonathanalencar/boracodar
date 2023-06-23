import { ArrowClockwise, TextAa, LockSimple } from "@phosphor-icons/react";

import { IconButton } from "../IconButton";

import styles from "./AddressBar.module.css";

export function AddressBar() {
  return (
    <div className={styles.addressBar}>
      <IconButton icon={<TextAa />} />
      <div className={styles.address}>
        <LockSimple weight="fill" />
        <span>rocketseat.com</span>
      </div>
      <IconButton icon={<ArrowClockwise />} />
    </div>
  );
}
