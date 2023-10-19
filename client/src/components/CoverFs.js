import React from 'react';

function CoverFs() {
    return (
        <>
            <div className="hedge"></div>
            <div className="containerFs">
                <div className="playlistFs"></div>
                <div className="dots"></div>
            </div>
            <div className="coverFs">
                <img alt="cover" src="../../assets/covers/500x500.jpg"></img>
            </div>

            <div className="infoFs">
                <p data-text="S.P.S" className="titleFs">
                    Ziak - S.P.S
                </p>
                <p className="artistFs"> Ziak</p>
            </div>
        </>
    );
}
export default CoverFs;
