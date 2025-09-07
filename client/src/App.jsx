import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollHandler from "./utils/ScrollHandler";
import LandingFooter from "./components/LandingFooter";
import Login from "./components/Login";
import Signup from "./components/SIgnup";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <div>
      <ScrollHandler
        offsets={{
          hero: -100,
          about: -30,
          features: -50,
          explore: -60,
          contact: -50,
        }}
      />
      <ScrollToTop />
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Home />
              <LandingFooter />
            </>
          }
        />
        <Route
          path={"/posts"}
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
