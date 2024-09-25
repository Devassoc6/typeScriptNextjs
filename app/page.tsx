import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
            <h1>Dashboard Page</h1>
        </div>
      </main>
    </div>
  );
}
