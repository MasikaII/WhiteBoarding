import Navbar from './Navbar';
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
        <Route path="about/*" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
         
  );
}

export default App;
