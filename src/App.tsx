import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="landing" element={<Navigate to="/" replace />} />
            <Route path="works" element={<Navigate to="/#experience" replace />} />
            <Route path="contact" element={<Navigate to="/#contact" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
