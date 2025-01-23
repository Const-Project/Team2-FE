import {Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreatePage from "./pages/CreatePage";
import ForgotPage from "./pages/ForgotPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/CreatePage" element={<CreatePage />} />
      <Route path="/ForgotPage" element={<ForgotPage />} />
    </Routes>
  );
}

export default App;
