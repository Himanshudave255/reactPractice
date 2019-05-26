import React from 'react';

function Namelist(props){
    let names=['Bruce','Clark','Bruce']
    // let nameList= names.map(name => <h2>{name+"HELLO"}</h2>)
    return (
        <div>
            {/* STATIC VALUES  */}
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2> */}

            {
                names.map((name,index) => <h2 key={index}>{name+"HELLO"}</h2>)  
            }
        </div>
    )
}

export default Namelist