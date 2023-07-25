'use client'
import React, { useState, useEffect, useRef } from 'react';
import CursorPortal from './ClientCursor';

export default function ClientHome() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    let timeoutId = useRef(null);
    const handleClick = () => {
        if (cursorRef.current) {
            cursorRef.current.classList.add('glowing');
            timeoutId.current = setTimeout(() => {
                if (cursorRef.current) {
                    cursorRef.current.classList.remove('glowing');
                }
            }, 1000);
        }
    };

    useEffect(() => {
        return () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
        };
    }, []);


    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <main>
            <CursorPortal>
                <div
                    ref={cursorRef}
                    className="cursor"
                    style={{
                        left: cursorPosition.x + 'px',
                        top: cursorPosition.y + 'px',
                    }}
                />

            </CursorPortal>
        </main>
    );
}

