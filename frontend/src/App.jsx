import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import PoliticsToday from "./pages/PoliticsToday.jsx";
import Navbar from "./components/Navbar.jsx";
import KnowYourLeaders from "./pages/KnowYourLeaders.jsx";
import LeaderDetails from "./pages/LeaderDetails.jsx";
import LoginForm from "./components/LoginForm.jsx"
import RegisterForm from "./Components/RegisterForm.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

import "./App.css";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/civic-updates" element={<PoliticsToday />}/>

                    <Route path="/leaders" element={<KnowYourLeaders />}/>

                    <Route path="/leaders/:id" element={<LeaderDetails />} />

                    <Route path="/login" element={<LoginForm />} />

                    <Route path="/register" element={<RegisterForm />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;