import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Components/login'
import Signup from './Components/signup';

function App() {
    return (
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
      </BrowserRouter>
    );
}

export default App;
