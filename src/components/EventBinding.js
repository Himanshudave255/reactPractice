import React, {Component} from 'react'
import Childcomponent from './Childcomponent'
class EventBinding extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'helo'
        }

        this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler(x){
        // this.setState({
        //     message:'Goodbye!'
        // })
        console.log(this.state.message);
        alert(x);
    }
    render(){
        return (
            <div>
        <Childcomponent greet={this.clickHandler}></Childcomponent>    
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        </div>
        )
    }

}
export default EventBinding  