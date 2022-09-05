import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import boltProfile from "./assets/boltprofile.jpg";
import meiaProfile from "./assets/meia.jpg";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

//author: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
//Content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: `${boltProfile}`,
      name: "Bolt Nava",
      role: "Cachorro",
    },
    content: [
      { type: "paragraph", content: "Ontem bati meu record! Roubei 20 MEIAS" },
      { type: "link", content: "#PAS" },
      { type: "link", content: "#RAÇÃO PREMIUM" },
    ],
    publishedAt: new Date("2022-09-03 20:01:23"),
  },
  {
    id: 2,
    author: {
      avatarUrl: `${meiaProfile}`,
      name: "Meiuca",
      role: "Meia",
    },
    content: [
      { type: "paragraph", content: "FUI SEQUESTRADO" },
      { type: "link", content: "#SOS" },
    ],
    publishedAt: new Date("2022-09-05 20:01:23"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
