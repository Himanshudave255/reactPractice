import React from 'react'
import './myStyles.css'

function Stylesheet(props){
    const heading={
        fontSize:'72px',
        backgroundCOlor:'red'
    }
    let className=props.primary ? 'primary': ''
    return (
        <div>
         <h1 className={`${className} size`}>hello</h1>
         <h1 style={heading}>INLINE</h1>   
        </div>
    )
}

export default Stylesheet