import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Info nav</h1>
            <div className="links">
                <a href="/">Home</a>
                <Link to="/about">About</Link>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New post</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
}

export default Navbar;
