"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./utils.module.css";

export default function RootTemplate({ children }) {
  const [transitionStage, setTransitionStage] = useState("fadeOut");

  useEffect(() => setTransitionStage("fadeIn"), []);

  return (
        <div className={`${styles.content}`}>
          <nav>
            <Link href="/">🗃 Dashboard</Link>
            <Link href="/news">📰 News</Link>
          </nav>
          <div className={`${styles.page} ${styles[transitionStage]}`}>
            {children}
          </div>
        </div>
  );
}