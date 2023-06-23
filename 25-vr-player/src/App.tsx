import video from "./assets/MaryOculus.mp4";
import { Canvas } from "@react-three/fiber";

import { Video } from "./Video";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";

import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.player}>
          <Sidebar />

          <div className={styles.videoContainer}>
            <Navbar />

            <div className={styles.video}>
              <Canvas>
                <Video src={video} />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
