import React, { useState } from 'react';
import '../styles/SwipeUp.css';
import Cover from './Cover.js';
import CoverFs from './CoverFs.js';
import Buttons from './Buttons.js';
import '../styles/Player.css';
import '../styles/PlayerFullscreen.css';
import ButtonsFs from './ButtonsFs.js';
import SideButtons from './SideButtons.js';

import SideButtonsFs from './SideButtonsFs.js';
import { SwipeUp } from './SwipeUp';

export const Context = React.createContext();
function Player() {
    const [open, setOpen] = useState(false);
    const [playing, setPlaying] = useState(false);
    const toggle = () => {
        setOpen((o) => !o);
    };

    return (
        <>
            <Context.Provider value={[playing, setPlaying]}>
                <button onClick={toggle} className="player">
                    <Cover />
                    <Buttons />
                    <SideButtons />
                </button>

                <SwipeUp visible={open} setVisible={setOpen}>
                    <CoverFs />
                    <div className="timelineFs"></div>
                    <ButtonsFs />
                    <SideButtonsFs />
                </SwipeUp>
            </Context.Provider>
        </>
    );
}

export default Player;
