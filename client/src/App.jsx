import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollHandler from "./utils/ScrollHandler";

function App() {
  return (
    <div>
      <ScrollHandler
        offsets={{
          hero: -100,
          about: -80,
          features: -50,
          explore: -60,
          contact: -50,
        }}
      />
      <ScrollToTop />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/posts"} element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
