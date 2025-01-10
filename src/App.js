import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu"
import { BlogPage } from "./Pages/BlogPage";
import { HomePage } from "./Pages/HomePage";
import { ProfilePage } from "./Pages/ProfilePage";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
