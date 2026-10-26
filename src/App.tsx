import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { NotFound } from "./components/NotFound";
import { ProjectPage } from "./components/ProjectPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/p/:slug" element={<ProjectPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
