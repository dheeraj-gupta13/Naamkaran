import React, { useState } from 'react'
import './Header.css'

function Header({title,input}) {
    // const [input, setInput] = useState('')

    const handleImageAnimation = () =>{
        if(input == ''){
            return 'top-image-expanded';
        }
        else{
            return 'top-image-contracted'
        }
    }

    const handleHeadingAnimation = () =>{
        if(input == ''){
            return 'top-input-expanded';
        }
        else{
            return 'top-input-contracted'
        }
    }


    return (
        <div className="heading-container">
            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                alt=""
                className={`top-image ${handleImageAnimation()}`}
            />
            <h1 
                className={`heading-text ${handleHeadingAnimation()}`}
            >{title}</h1>
            {/* <div>{input}</div> */}
        </div>
        
    )
}

export default Header
