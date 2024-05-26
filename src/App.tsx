import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Components/login'
import Signup from './Components/signup';
import Home from './homepage';

function App() {
    return (
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
      </BrowserRouter>
    );
}

export default App;
