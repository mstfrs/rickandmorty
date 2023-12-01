import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import Characters from "../pages/Characters";
import CharacterDetail from "../pages/CharacterDetail";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/characterdetail/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
