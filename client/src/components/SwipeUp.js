import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

export function SwipeUp({ visible, setVisible, children }) {
    const [state, setState] = React.useState(visible ? VISIBLE : HIDDEN);
    const [defaultPosition, setDefaultPosition] = useState({ x: 0, y: 0 });

    const animation =
        state === LEAVING || state === ENTERING || state === VISIBLE
            ? 'activeSwipeUp'
            : 'outSwipeUp';
    useEffect(() => {
        if (!visible) {
            setState((s) => (s === VISIBLE ? LEAVING : HIDDEN));
        } else {
            setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
        }
    }, [visible]);

    useEffect(() => {
        if (state === ENTERING) {
            setTimeout(() => {
                setState(VISIBLE);
            }, 200);
        } else if (state === LEAVING) {
            setState(HIDDEN);
        }
    }, [state]);

    const handleStop = (e, data) => {
        if (data.y > 200) {
            setVisible(false);
            setDefaultPosition({ x: 0, y: 0 });
        }
    };

    return (
        <Draggable
            bounds={{ top: 0 }}
            cancel="button"
            position={defaultPosition}
            grid={[10, 10]}
            axis="y"
            onStop={handleStop}>
            <div className={animation + ' swipeUp'}>{children}</div>
        </Draggable>
    );
}
