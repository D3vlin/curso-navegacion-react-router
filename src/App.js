import { HashRouter, Routes, Route } from "react-router-dom";
import { BlogPage } from "./Pages/BlogPage";
import { HomePage } from "./Pages/HomePage";
import { ProfilePage } from "./Pages/ProfilePage";
import { Menu } from "./Components/Menu"
import { BlogPost } from "./Pages/BlogPost/indez";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
