import React from 'react';

function Childcomponent(props){
    return (
        <div>
            {/* this is from parent to child */}
            <button onClick={props.greet}>child</button>

            {/* this is from child to parent */}
            <button onClick={()=>props.greet('child')}>parent</button>
        </div>
    )
}

export default Childcomponent