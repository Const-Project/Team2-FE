import {Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreatePage from "./pages/CreatePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/CreatePage" element={<CreatePage />} />
    </Routes>
  );
}

export default App;
