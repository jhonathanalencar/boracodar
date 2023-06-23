import {
  SidebarSimple,
  CaretLeft,
  CaretRight,
  Export,
  Plus,
  Copy,
} from "@phosphor-icons/react";

import { IconButton } from "../IconButton";
import { AddressBar } from "../AddressBar";

import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <IconButton icon={<SidebarSimple />} />
      <IconButton icon={<CaretLeft />} />
      <IconButton icon={<CaretRight />} />

      <AddressBar />

      <IconButton icon={<Export />} />
      <IconButton icon={<Plus />} />
      <IconButton icon={<Copy />} />
    </div>
  );
}
