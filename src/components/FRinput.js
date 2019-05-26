import React from 'react'
const FRinput=React.forwardRef((props,refs)=>{
    return(
        <div>
            <input type="text" ref={refs}></input>
        </div>
    )
})

export default FRinput