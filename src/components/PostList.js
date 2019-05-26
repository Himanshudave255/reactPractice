import React,{Component} from 'react'
import axios from 'axios';

class PostList extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        // fetch("./data.json").then((res)=>{console.log(res)});
        axios.get('../components/data.json').then(response=>{
            console.log("res",response)
        }).catch(error=>{
            console.log(error);
        })
    }

    render(){
        return(
            <div>hello</div>
        )
    }
}

export default PostList
