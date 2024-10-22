import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Centers from "./Views/Centers";
import NotFoundPage from './Views/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Centers />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
