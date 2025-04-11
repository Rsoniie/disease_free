import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/Home";
import Alerts      from "./pages/Alert";
import TodoList    from "./pages/Todo";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/todo"   element={<TodoList />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
   </BrowserRouter>

  );
}
