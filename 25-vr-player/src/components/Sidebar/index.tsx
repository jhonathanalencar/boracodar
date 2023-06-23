import {
  PersonArmsSpread,
  PlayCircle,
  Folders,
  MagnifyingGlass,
} from "@phosphor-icons/react";

import { IconButton } from "../IconButton";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <IconButton icon={<PlayCircle />} aria-label="Play" />
      <IconButton icon={<PersonArmsSpread />} aria-label="Accessibility" />
      <IconButton icon={<Folders />} aria-label="Collection" />
      <IconButton icon={<MagnifyingGlass />} aria-label="search" />
    </div>
  );
}
