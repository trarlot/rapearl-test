import React, { useEffect, useState } from 'react';

import '../styles/Card.css';
import { getIdUser } from '../_services/users';

function Card({ IdUser, Titre, Cover }) {
    const [ArtistName, setArtistName] = useState(false);

    useEffect(() => {
        if (IdUser) {
            getIdUser(IdUser)
                .then((response) => {
                    setArtistName(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, []);

    return (
        <div className="card">
            <img alt="Cover de l'album " src={Cover}></img>
            <h3> {Titre}</h3>
            <p>{ArtistName}</p>
        </div>
    );
}

export default Card;
