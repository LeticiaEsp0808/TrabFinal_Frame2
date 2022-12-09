import Head from "next/head";
import styles from '../styles/Home.module.css'
import axios from "axios";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto Produtos</title>
      </Head>
      <h1>Projetos Usuários</h1>
      <a href="\produtos">Abrir Produtos</a>
    </div>
  )
}