import React, {Component} from 'react';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0 ,
            count:2
        }
    }
    increment(){
        // let x=this.state.counter+1;
        // this.setState({
        //     counter:x,count:1
        // },()=>{alert(this.state.count)});

        this.setState(prevState => ({
            counter:prevState.counter+1
        },()=>{alert()}))
    }
    increment5(){
        this.increment();
        
        this.increment();

        
        this.increment();
    }
    render(){
        return(
            <div>
            <div>count {this.state.counter}+"/"+{this.state.count}=</div>
            <button onClick={()=>this.increment5()}>INC</button>
            </div>
        )
    }

}
export default Counter  