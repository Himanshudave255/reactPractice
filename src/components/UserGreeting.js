import React,{Component} from 'react'
class UserGreeting extends Component{
    constructor(props){
        super(props)

        this.state={
            isLoggedIn:props.status
        }
    }
    render(){
        //conditional if else
        if(this.state.isLoggedIn==="false"){
            return <div>Welcome Vishwas</div>
        }else{
            return <div>Welcome Guest</div>
        }

        // either something or nothing
        
        // return this.state.isLoggedIn && <div>Welcome Vish</div>

        // return(
        //     <div>
        //     <div>Welcome Himanshu</div>
        //     <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting