import React, { useState, useContext } from 'react';
import Axios from '../_services/caller';
import '../styles/Register.css';
import Auth from '../contexts/Auth';
import { saveToken, hasAuthenticated } from '../_services/AuthApi';

function Register() {
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    const [FirstNameReg, setFirstNameReg] = useState('');
    const [ArtistNameReg, setArtistNameReg] = useState('');
    const [flip, setflip] = useState(false);
    const [LastNameReg, setLastNameReg] = useState('');
    const [EmailReg, setEmailReg] = useState('');
    const [errRegister, setErrRegister] = useState(null);
    const [errLogin, setErrLogin] = useState(null);
    const [PasswordReg, setPasswordReg] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const toggle = () => {
        setflip(!flip);
    };

    const register = (e) => {
        Axios.post('http://localhost:3001/login/register', {
            FirstName: FirstNameReg,
            LastName: LastNameReg,
            Email: EmailReg,
            Password: PasswordReg,
            ArtistName: ArtistNameReg,
        }).then((response) => {
            setErrRegister(response.data.message);
        });
        e.preventDefault();
    };

    const login = (e) => {
        Axios.post('http://localhost:3001/login/login', {
            Email: Email,
            Password: Password,
        }).then((response) => {
            saveToken(response.data.accessToken);
            setErrLogin(response.data.message);
            hasAuthenticated()
                .then((responseData) => {
                    setIsAuthenticated(responseData);

                    if (responseData) {
                        window.location.href = '/';
                    }
                })
                .catch((error) => {
                    // Gérez les erreurs ici
                    console.error(error);
                });
        });

        e.preventDefault();
    };

    return (
        <section className="forms">
            <form
                onSubmit={login}
                className="login"
                style={flip ? { display: 'none' } : { display: 'flex' }}>
                <h2>Se connecter</h2>
                <label>Email</label>
                <input
                    data-testid="email"
                    required
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                <label>Mot de passe</label>
                <input
                    data-testid="password"
                    required
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}></input>
                <p class="err">{errLogin}</p>
                <input
                    data-testid="login"
                    className="submit"
                    type="submit"
                    value="Se connecter"></input>
            </form>

            <form
                onSubmit={register}
                style={!flip ? { display: 'none' } : { display: 'flex' }}
                className="register">
                <h2>S'inscrire</h2>
                <label>Nom d'artiste/Pseudo</label>
                <input
                    required
                    type="text"
                    onChange={(e) => {
                        setArtistNameReg(e.target.value);
                    }}></input>
                <label>Prénom</label>
                <input
                    required
                    type="text"
                    onChange={(e) => {
                        setFirstNameReg(e.target.value);
                    }}></input>
                <label>Nom </label>
                <input
                    required
                    type="text"
                    onChange={(e) => {
                        setLastNameReg(e.target.value);
                    }}></input>
                <label>Email</label>
                <input
                    required
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    onChange={(e) => {
                        setEmailReg(e.target.value);
                    }}></input>

                <p class="err">{errRegister}</p>
                <label>Mot de passe</label>
                <input
                    required
                    type="password"
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}></input>
                <input
                    className="submit"
                    type="submit"
                    value="S'inscrire"></input>
            </form>

            <button className="flip" onClick={toggle}>
                {!flip
                    ? 'Pas de compte ? Inscrivez-vous !'
                    : 'Déjà inscrit ? Connectez-vous !'}
            </button>
        </section>
    );
}

export default Register;
