import styles from "./Sidebar.module.css";
import bolt from "../assets/bolt.jpg";
import boltProfile from "../assets/boltprofile.jpg";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img className={styles.cover} src={bolt} alt="Foto de capa" />

        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src={boltProfile}
            alt="Foto de perfil"
          />

          <strong>Bolt Nava</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar Perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
