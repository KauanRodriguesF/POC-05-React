"use client";

import { useState } from "react";
import styles from "./poc.module.css";

export default function Imagem({ urls, text }) {
  const [contador, setContador] = useState(0);
  const [imagemIndex, setImagemIndex] = useState(0);

  const handleImageClick = () => {
    if (contador >= 9) {
      setContador(0);
      setImagemIndex((imagemIndex + 1) % urls.length);
    } else {
      setContador(contador + 1);
    }
  };

  return (
    <figure className={styles.imagemContainer} onClick={handleImageClick}>
      <h1 className={styles.titulo}>POC 05</h1>
      <img alt={text} src={urls[imagemIndex]} className={styles.imagem} />
      <figcaption className={styles.figcaption}>{text}</figcaption>
      <p className={styles.contador}>{contador} cliques</p>
    </figure>
  );
}
