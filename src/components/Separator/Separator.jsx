import React from 'react';


export default function Separator({ width, color }) {
    return (
        <div
            className="separator"
            style={{width, border: `0.3px solid ${color}`, height: 0}}
        />
    );
}