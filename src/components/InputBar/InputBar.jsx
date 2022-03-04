import React from 'react';
import './InputBar.css'

function InputBar({onInputChange}) {
    return (
        <div className="input-bar-container">
            <input onChange={(event)=> onInputChange(event.target.value) } placeholder='Type Keywords' className='input-bar'></input>
        </div>
    );
}

export default InputBar;
