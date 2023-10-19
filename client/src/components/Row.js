import React from 'react';
import '../styles/Row.css';
import Card from './Card.js';

import { Link } from 'react-router-dom';
function Row({ albumsArray }) {
    return (
        <>
            <div className="header-row">
                <h2 className="row-title">Titre</h2>
                <Link to="/bibli">
                    <p className="more">AFFICHER PLUS</p>
                </Link>
            </div>
            <div className="row">
                {albumsArray
                    ? albumsArray.map((albums) => (
                          <Card
                              IdUser={albums.IdUser}
                              Titre={albums.Titre}
                              Cover={albums.Cover}
                          />
                      ))
                    : ''}
            </div>
        </>
    );
}

export default Row;
