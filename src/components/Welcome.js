import React, {Component} from 'react';
class Welcome extends Component{
    render(){
        // for destructuring state and props
        const {name}= this.props
        // const {state1,state2}=this.state
        //normally no props
        return (<h1>{name}Class Component</h1>)
    }

}
export default Welcome  