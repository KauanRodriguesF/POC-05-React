<div align="start">
    <h1>🖼️ Prova de Conceito - Contador com Next.js 🖼️</h1>
    <p>Este projeto demonstra o uso do framework Next.js para a criação de uma interface interativa, onde um contador incrementa ao clicar em uma imagem. Ao alcançar um número específico de cliques, a imagem exibida é alterada.</p>
</div>

## 📋 Descrição do Projeto

Este projeto é uma Prova de Conceito (POC) que explora o uso de estados em React e a manipulação de eventos para criar um contador interativo em um site desenvolvido com Next.js. Ao clicar na imagem, o contador aumenta em 1; quando o contador atinge 10, a imagem exibida é trocada e o contador reinicia.

## 🚀 Funcionalidades

- **Contador Interativo**: O contador incrementa cada vez que a imagem é clicada.
- **Troca de Imagem ao Alcançar um Limite**: Quando o contador atinge 10, a imagem é alterada automaticamente, retornando à primeira imagem após a segunda.
- **Design Responsivo**: Interface estilizada com CSS modularizado para uma apresentação centralizada e interativa.
- **Estados em React**: Uso do `useState` para gerenciar o estado do contador e da imagem atual.

## 🎨 Layout

A interface é composta por:

- **Imagem**: Uma imagem centralizada, clicável, que incrementa o contador a cada clique.
- **Contador**: Exibe o número de cliques e é redefinido após atingir o limite de 10 cliques.
- **Título e Legenda**: Um título indicando o nome da POC e uma legenda explicativa.

- Exemplo Design ![fotoSite](https://github.com/user-attachments/assets/724853dc-d8c9-4334-9a15-24b8c8c4a269)

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework para a construção de aplicações React com otimizações de desempenho e renderização do lado do servidor.
- **React**: Biblioteca JavaScript para construção de interfaces interativas.
- **CSS Modules**: Estilização modular para evitar conflitos de estilos.

## 📘 Exemplos de Código

### Componente Principal: `poc.jsx`

O componente `Imagem` controla o estado do contador e da imagem exibida. Utiliza o `useState` para gerenciar o índice da imagem e o contador.

- **Código**

    ```javascript
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
    ```

### Estilização: `poc.module.css`

Define o estilo do componente `Imagem`, incluindo o container, a imagem, o título, a legenda e o contador.

- **Código**

    ```css
    .imagemContainer {
      width: 600px;
      padding: 20px;
      background-color: #333;
      text-align: center;
      cursor: pointer;
      border-radius: 15px;
    }

    .imagem {
      width: 100%;
      border-radius: 10px;
    }

    .titulo {
      font-size: 24px;
      color: white;
      font-family: "Montserrat", sans-serif;
      margin-bottom: 10px;
    }

    .figcaption {
      font-family: "Montserrat", Courier, monospace;
      color: white;
      margin-top: 10px;
    }

    .contador {
      font-size: 16px;
      color: white;
      margin-top: 5px;
    }
    ```

### Configuração da Página Principal: `page.tsx`

A página principal (`Home`) importa o componente `Imagem`, fornece uma lista de URLs para as imagens e define o texto da legenda.

- **Código**

    ```javascript
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
    ```

### Estilização da Página: `page.module.css`

Define o layout da página principal para centralizar o componente.

- **Código**

    ```css
    .main {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #242424;
    }
    ```

## 💡 Conceitos Abordados

- **useState**: Ganho de controle sobre o estado do contador e da imagem exibida.
- **Manipulação de Eventos**: O clique na imagem aciona a função que incrementa o contador.
- **CSS Modularizado**: Isolamento de estilos usando CSS Modules, facilitando a manutenção e a escalabilidade do projeto.

## 🔍 Como Visualizar o Projeto

1. Clone o repositório para a sua máquina local.
2. Instale as dependências do projeto com `npm install`.
3. Inicie o servidor de desenvolvimento com `npm run dev`.
4. Acesse `http://localhost:3000` no navegador para visualizar o projeto.
