import { useState } from 'react';
import Create from './components/Create';
import Navbar from './Navbar';
//import loginform from './components/Login.jsx';
import NavBar from './components/NavBar.jsx';
import LoginForm from './Loginform';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'How I solved afids problem ', body: 'lorem ipsum...', author: 'marion', id: 1 },
        { title: '10 ways to solve you weed problems', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'top tips Chick rearing', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    return (
        <>
            <div className="App" style={{
                background: '#071330',
                height: '100vh',
                color: 'white'
            }}>
                <Navbar />
                <div className="content">
                    <Create />
                    <div className="Home">
                        {blogs.map(blog => (
                            <div className="blog-preview" key={blog.id} >
                                <h2>{blog.title}</h2>
                                <p style={{
                                    color: 'white'
                                }}>Written by {blog.author}</p>
                            </div>
                        ))}
                    </div>
                        
                </div>
                <LoginForm/>
            </div>
        </>
    );
}

export default Home;
