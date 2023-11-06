import React, { useState, useEffect } from 'react';
import '../styles/HomeScreen.css';
import Banner from '../components/Banner.js';
import Row from '../components/Row.js';
import { getAlbums } from '../_services/albums';

function Home() {
    const [albumsArray, setAlbumsArray] = useState([]);

    useEffect(() => {
        getAlbums()
            .then((response) => {
                setAlbumsArray(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <section className="Home">
            <Banner />
            <Row albumsArray={albumsArray} />
            <Row />
            <Row />
        </section>
    );
}

export default Home;
