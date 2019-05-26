import React,{Component} from 'react'

class LifecycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Vishwas"
        }
        console.log('Lifecycle A constructor ')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerviced from props')
        return null
    }

     componentDidMount(){
         console.log('LifecycleA componentDidMount');
     }

render() {
    console.log('LifecycleA render');
    return (
        <div>
            LifeCycleA
        </div>

    )
}
}

export default LifecycleA