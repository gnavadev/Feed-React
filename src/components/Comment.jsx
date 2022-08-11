import React, { useState } from "react";
import styles from "./Comment.module.css";
import boltProfile from "../assets/boltprofile.jpg";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  const [like, setLike] = useState(0);
  return (
    <>
      <div className={styles.comment}>
        <img src={boltProfile} alt="Avatar de quem comentou" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Bolt Nava</strong>
                <time
                  title="11 de agosto as 15:48"
                  dateTime="2022-08-11 15:48:30"
                >
                  Cerca de 1h atrás
                </time>
              </div>
              <button title="Deletar Comentário">
                <Trash size={25} />
              </button>
            </header>
            <p>Muito bom Bolt!</p>
          </div>
          <footer>
            <button onClick={() => setLike(like + 1)}>
              <ThumbsUp />
              Aplaudir <span>{like}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
