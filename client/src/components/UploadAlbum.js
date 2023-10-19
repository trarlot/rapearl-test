import React, { useState } from 'react';
import Axios from '../_services/caller';

import '../styles/DragAndDrop.css';

function UploadAlbum({}) {
    const register = (e) => {
        Axios.post('http://localhost:3001/login/register', {
            // FirstName: FirstNameReg,
            // LastName: LastNameReg,
            // Email: EmailReg,
            // Password: PasswordReg,
            // ArtistName: ArtistNameReg,
        }).then((response) => {});
        e.preventDefault();
    };
    return <div>album</div>;
}

export default UploadAlbum;
