import styles from "./Post.module.css";
import boltProfile from "../assets/boltprofile.jpg";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={boltProfile}
            alt="Imagem de avatar"
          />
          <div className={styles.authorInfo}>
            <strong>Bolt Nava</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de agosto as 15:48" dateTime="2022-08-11 15:48:30">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Ontem bati meu record! Roubei 20 MEIAS</p>
        <p>
          {" "}
          <a href="#">#PAS</a>
        </p>
        <p>
          {" "}
          <a href="#">#RAÇÃO PREMIUM</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixa um Comentário!" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
