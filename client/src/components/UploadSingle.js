import React, { useState } from 'react';
import Axios from '../_services/caller';
import '../styles/DragAndDrop.css';

function UploadSingle({ file }) {
    const fileName = file[0].name.replace(/_|(\.(mp3|wav|wma))$/gi, ' ');
    const [title, setTitle] = useState(fileName);
    console.log(file[0].name);
    const uploadSingle = (e) => {
        Axios.post('http://localhost:3001/login/login', {
            // TitreSingle: TitreSingle,
            // Password: Password,
        }).then((response) => {});
    };

    return (
        <form onSubmit={uploadSingle} className="single">
            <label>Titre</label>
            <input
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                type="text"
                value={title}></input>
            <select id="" name="type" type="select">
                <option value="">Aucun</option>
                <option value="Plugg">Plugg</option>
                <option value="Hyperpop">Hyperpop</option>
                <option value="Trap">Trap</option>
                <option value="Rap Rock">Rap Rock</option>
                <option value="Drill">Drill</option>
                <option value="UK Drill">UK Drill</option>
                <option value="Jazz Rap">Jazz Rap</option>
                <option value="Grime">Grime</option>
                <option value="Gangsta Rap">Gangsta Rap</option>
                <option value="Old School">Old School</option>
                <option value="Emo">Emo Rap</option>
                <option value="Rap Conscient">Rap Conscient</option>
                <option value="Cloud Rap">Cloud Rap</option>
                <option value="Jersey">Jersey</option>
                <option value="Boom Bap">Boom Bap</option>
            </select>
        </form>
    );
}

export default UploadSingle;
