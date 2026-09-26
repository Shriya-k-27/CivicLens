import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import PoliticsToday from './pages/PoliticsToday.jsx';
import Navbar from './components/Navbar.jsx';
import "./App.css";
import KnowYourLeaders from './pages/KnowYourLeaders.jsx';
import LeaderDetails from "./pages/LeaderDetails.jsx";
function App(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/civic-updates' element={<PoliticsToday />}/>
            <Route path='/leaders' element={<KnowYourLeaders/>}/>
            <Route path="/leaders/:id" element={<LeaderDetails />}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;