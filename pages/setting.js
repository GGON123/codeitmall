import Dropdown from "@/components/Dropdown";
import { useTheme } from "@/lib/ThemeContext";
import styles from "@/styles/Setting.module.css";
import Head from "next/head";

export default function Setting() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Head>
        <title>설정 - Codeitmall</title>
      </Head>
      <h1 className={styles.title}>설정</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>테마 설정</h2>
        <Dropdown
          className={styles.input}
          name="theme"
          value={theme}
          onChange={(name, value) => setTheme(value)}
          options={[
            { label: "다크", value: "dark" },
            { label: "라이트", value: "light" }
          ]}
        />
      </section>
    </div>
  );
}
