//import Navbar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router,
} from "react-router-dom";
import Home from './Home'
import About from './components/About';
//import Login from './components/Login';
import NavBar from './components/NavBar';

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
          <Route path="login/*" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
      <NavBar></NavBar>
    </>

  );
}

export default App;
