import './App.css';
import { useState } from 'react';
import Nav from './components/Nav.js';
import { hasAuthenticated } from './_services/AuthApi.js';
import Auth from './contexts/Auth.js';
import Home from './pages/Home.js';
import Library from './pages/Library.js';
import Pro from './pages/Pro.js';
import Upload from './pages/Upload.js';
import Register from './pages/Register.js';
import Playlists from './pages/Playlists.js';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    ReactGA.initialize('UA-546123387');
    hasAuthenticated()
        .then((responseData) => {
            setIsAuthenticated(responseData);
        })
        .catch((error) => {
            // Gérez les erreurs ici
            console.error(error);
        });
    return (
        <div className="all">
            <BrowserRouter>
                <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
                    <Nav />
                    <section className="main">
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/lib" element={<Library />} />
                            <Route exact path="/pro" element={<Pro />} />
                            <Route exact path="/upload" element={<Upload />} />
                            <Route
                                exact
                                path="/register"
                                element={<Register />}
                            />

                            <Route
                                exact
                                path="/playlists"
                                element={
                                    isAuthenticated ? (
                                        <Playlists />
                                    ) : (
                                        <Navigate to="/register" />
                                    )
                                }
                            />
                        </Routes>
                    </section>
                </Auth.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
