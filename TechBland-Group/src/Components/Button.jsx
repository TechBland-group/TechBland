import React from 'react'
import { useState } from 'react';
import '../css/button.css'


function Button({children}) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <button
        className={`customButton ${isClicked ? "clicked" : ""}`}
        onMouseDown={()=>{
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 500);
        }}
        >{children}</button>
    );
}

export default Button;