import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const CursorPortal = ({ children }) => {
    const elRef = useRef(null);

    useEffect(() => {
        if (!elRef.current) {
            elRef.current = document.createElement('div');
            document.body.appendChild(elRef.current);
        }

        return () => {
            if (elRef.current) {
                document.body.removeChild(elRef.current);
                elRef.current = null;
            }
        };
    }, []);

    return elRef.current ? ReactDOM.createPortal(children, elRef.current) : null;
};

export default CursorPortal;
