import { useState } from 'react';

function square ({ value, onSquareClick }) {
    return (
        <button className='square' onClick={onSquareClick}>
            {value}
        </button>
    );
}