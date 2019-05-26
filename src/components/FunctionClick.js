import React from 'react';

function FunctionClick(){
    function clickHandler(){
        alert("hi");
    }
    return (
    <button onClick={clickHandler}>CLICK</button>
    )
}

export default FunctionClick