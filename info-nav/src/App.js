import Navbar from './Navbar';
import { Login } from './components/Login';
import { Register } from './components/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home'
import About from './components/About';
function App() {
  return (
    <>
         {/* <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
         
  );
}

export default App;