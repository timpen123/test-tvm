import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./sites/Start";
import DetailView from "./components/UserDetail";
import EditUser from "./components/EditUser";
import CreateUser from "./components/CreateUser";
import './App.css';

function App() {
  return (
    <div className="bg-color">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
         <Route path="detailview/:id" element={<DetailView />} />
         <Route path="/edituser/:id" element={<EditUser />} />
         <Route path="/detailview/new" element={<CreateUser />} />

      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
