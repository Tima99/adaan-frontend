import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import NavLayout from "./components/layouts/NavLayout";
import { DesignProvider } from "./contexts/DesignIndexContext";

function App() {
    return (
        <DesignProvider>
            <Routes>
                <Route path="/" element={<NavLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/edit" element={<EditProfile />} />
                </Route>
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </DesignProvider>
    );
}

export default App;
