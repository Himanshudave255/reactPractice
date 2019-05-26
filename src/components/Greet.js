import React from 'react';

// function Greet(){
//     return <h1>Hello Himanshu</h1>
// }

export const Greet =(prop)=>
{
    // props.name=""; you cannot edit it  
    console.log(prop.name)
return (
<div>
<h1>Hello {prop.name}</h1>
{prop.children}
</div>
)
}
// export default Greet