import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import Navbar from "../navbar/navbar";

export default component$(() => {
  return (
    <header class={styles.header}>
      <Navbar />
    </header>
  );
});
