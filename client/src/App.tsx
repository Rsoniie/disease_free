import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/Home";
import Alerts      from "./pages/Alert";
import TodoList    from "./pages/Todo";

export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/"       element={<HomeScreen />} />
        <Route path="/alerts" element={<Alerts />}     />
        <Route path="/todo"   element={<TodoList />}   />
      </Routes>
    </BrowserRouter>
  );
}
