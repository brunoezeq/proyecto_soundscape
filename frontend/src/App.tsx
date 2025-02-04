import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu.tsx"
import Home from "./pages/home";


function App() {

  return (
      <div>
          <Router>
              <Menu />
              <Routes>
                  <Route path="/" element={<Home />} />
              </Routes>

          </Router>
      </div>
  );
}

export default App
