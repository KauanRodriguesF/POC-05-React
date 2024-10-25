import Imagem from "./components/poc";
import styles from "./page.module.css";

export default function Home() {
  const imageUrls = [
    "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    "https://www.petz.com.br/blog/wp-content/uploads/2019/03/cachorro-mini-pet.jpg",
  ];

  return (
    <main className={styles.main}>
      <Imagem urls={imageUrls} text="Clique na imagem para contar" />
    </main>
  );
}
