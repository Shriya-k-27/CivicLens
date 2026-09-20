import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import PoliticsToday from './pages/PoliticsToday.jsx';
import Navbar from './components/Navbar.jsx';
import "./App.css";

function App(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/civic-updates' element={<PoliticsToday />}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;