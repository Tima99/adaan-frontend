import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

function App() {
    return (
        <Routes>
            <Route path="/auth" element={<Register />}></Route>
        </Routes>
    );
}

export default App;
