import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, AuthRoute } from "./Components/Auth";
import { Menu } from "./Components/Menu"
import { BlogPage } from "./Pages/BlogPage";
import { HomePage } from "./Pages/HomePage";
import { ProfilePage } from "./Pages/ProfilePage";
import { BlogPost } from "./Pages/BlogPost/indez";
import { LoginPage } from "./Pages/LoginPage";
import { LogoutPage } from "./Pages/LogoutPage";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<AuthRoute><LogoutPage /></AuthRoute>} />
            <Route path="/profile" element={<AuthRoute><ProfilePage /></AuthRoute>} />
            <Route path="/*" element={<p>Not Found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
