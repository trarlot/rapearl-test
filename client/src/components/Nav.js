import '../styles/Nav.css';
import logo from '../assets/icons/logo.svg';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GradientBorder } from './GradientBorder.js';
import { DropDown } from './DropDown.js';
import Player from './Player.js';
import home from '../assets/icons/home.svg';
import lib from '../assets/icons/lib.svg';
import heart from '../assets/icons/heart.svg';
import plus from '../assets/icons/creat-playlist.svg';
import search from '../assets/icons/search.svg';
import user from '../assets/icons/user.svg';
import { logout } from '../_services/AuthApi';
import ClickAwayListener from 'react-click-away-listener';
import Auth from '../contexts/Auth';

function Nav() {
    const { isAuthenticated } = useContext(Auth);
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((o) => !o);
    };

    const clickAway = () => {
        if (open) {
            setOpen(false);
        }
    };
    return (
        <>
            <nav>
                <div className="nav">
                    <Link to="/" className="logo">
                        <img alt="Logo Rapearl" src={logo} />
                    </Link>
                    {!isAuthenticated ? (
                        <div>
                            <Link to="/register">Se connecter/S'inscrire</Link>
                        </div>
                    ) : (
                        <ClickAwayListener onClickAway={clickAway}>
                            <div>
                                <>
                                    <button onClick={toggle}>
                                        <img
                                            alt="Icone Utilisateur"
                                            id="user"
                                            src={user}
                                        />
                                    </button>

                                    <DropDown visible={open}>
                                        <GradientBorder>
                                            <Link
                                                onClick={toggle}
                                                id="pro"
                                                className="link"
                                                to="/pro">
                                                Essayer Rapearl Pro
                                            </Link>
                                        </GradientBorder>
                                        <Link
                                            onClick={toggle}
                                            id="upload"
                                            className="link"
                                            to="/upload">
                                            Upload
                                        </Link>
                                        <Link
                                            onClick={toggle}
                                            id="pro"
                                            className="link"
                                            to="/pro">
                                            Mention Légales
                                        </Link>

                                        <Link
                                            style={{ color: 'red' }}
                                            onClick={logout}>
                                            Se déconnecter
                                        </Link>
                                    </DropDown>
                                </>
                            </div>
                        </ClickAwayListener>
                    )}
                </div>
                <div className="nav-lateral">
                    <div className="links-lateral">
                        <Link to="/">
                            <img alt="Icone Accueil" src={home}></img>
                            <h2>Acceuil</h2>
                        </Link>
                        <Link to="/search">
                            <img alt="Icone Recherche" src={search}></img>
                            <h2>Recherche</h2>
                        </Link>
                        <Link to="/lib">
                            <img alt="Icone Bibliothèque" src={lib}></img>
                            <h2>Bibliothèque</h2>
                        </Link>
                        <div className="others-links">
                            <Link to="/playlists">
                                <img
                                    className="rectangle"
                                    alt="Icone +"
                                    src={plus}></img>
                                <h2>Crée une playliste</h2>
                            </Link>
                            <Link to="/playlists">
                                <img
                                    className="rectangle"
                                    alt="Icone coeur"
                                    src={heart}></img>
                                <h2>Titres likés</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="playlists">
                        <div className="playlists-container">
                            <Link to="/register">Se connecter</Link>
                        </div>
                    </div>
                </div>

                <Player />
            </nav>
        </>
    );
}

export default Nav;
