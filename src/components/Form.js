import React,{Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            username:''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
         topic:event.target.value   
        })
    }

    handleSubmit=(event)=>{
        console.log(event);
        event.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" onChange={this.handleUsernameChange} value={this.state.username}></input>
                </div>
                <div>
                    <label>Topics</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">REACT</option>
                        <option value="angular">ANGULAR</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form