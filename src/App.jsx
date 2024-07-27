import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import NavLayout from "./components/layouts/NavLayout";
import { DesignProvider } from "./contexts/DesignIndexContext";
import BasicDetails from "./components/screens/EditProfile/BasicDetails";
import ContactDetails from "./components/screens/EditProfile/ContactDetails";
import PastExperience from "./components/screens/EditProfile/PastExperience";
import QualificationForm from "./components/screens/EditProfile/Qualification";

function App() {
    return (
        <DesignProvider>
            <Routes>
                <Route path="/" element={<NavLayout />}>
                    <Route index element={<Home />} />
                    <Route path="edit" element={<EditProfile />}>
                        <Route path="basic" element={<BasicDetails />} />
                        <Route path="contact" element={<ContactDetails />} />
                        <Route path="experience" element={<PastExperience />} />
                        <Route path="qualification" element={<QualificationForm />} />
                    </Route>
                </Route>
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </DesignProvider>
    );
}

export default App;
