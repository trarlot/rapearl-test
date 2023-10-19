import React, { useEffect, useState } from 'react';
import Axios from '../_services/caller';
import { FileUploader } from 'react-drag-drop-files';
import UploadSingle from '../components/UploadSingle';
import UploadAlbum from '../components/UploadAlbum';
import '../styles/Upload.css';
const fileTypes = ['mp3', 'wav', 'wma'];
const hoverTitle = 'Déposez ici';
function Upload() {
    const [file, setFile] = useState(null);
    const [dragging, setDragging] = useState(false);

    const handleChange = (file) => {
        setFile(file);
    };

    return (
        <div className="main-upload">
            <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                hoverTitle={hoverTitle}
                multiple={true}
                maxSize={50}
                classes={file ? 'none' : ''}
                onDraggingStateChange={(isDragging) => {
                    console.log(isDragging);
                    setDragging(isDragging);
                }}>
                <div
                    style={
                        dragging || file ? { opacity: '0' } : { opacity: '1' }
                    }>
                    <p>Dépose ton fichier ou clique ici</p>
                    <svg
                        className="addFiles"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512">
                        <path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z" />
                    </svg>
                </div>
            </FileUploader>
            {file && file.length === 1 ? <UploadSingle file={file} /> : ''}
            {file && file.length > 1 ? <UploadAlbum file={file} /> : ''}
            <input
                style={file ? { display: 'block' } : { display: 'none' }}
                type="submit"
                value="Upload"></input>
        </div>
    );
}

export default Upload;
