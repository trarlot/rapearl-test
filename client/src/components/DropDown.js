import React, { useEffect } from 'react';
import '../styles/dropdown.css';

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;
export function DropDown({ visible, children }) {
    const [state, setState] = React.useState(visible ? VISIBLE : HIDDEN);

    const animation =
        state === LEAVING || state === ENTERING || state === VISIBLE
            ? 'active'
            : 'out';
    const textAnimation = state === VISIBLE ? ' visible' : '';

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

    return (
        <div className={animation + ' container'}>
            <div className={textAnimation + ' dropdown'}>{[children]}</div>
        </div>
    );
}
