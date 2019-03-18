import React, { Component } from 'react';
import {connect} from 'react-redux'
class Header extends Component {
    constructor(props)
    {
        super(props)
        this.state=({
            value:""
        })
    }

    handlechange=(event)=>
    {
        this.setState({
            value:event.target.value
        })
    }

    handlesumbit=()=>
    { 
        const {value}=this.state
        if(value==='')
    return {}
        this.props.Addtodo(value)
        this.setState({value:''})
    }
    
    render() { 
        return ( 
            <div className='header-app'>
             <input type='text' value={this.state.value} onChange={this.handlechange}/>
             <button onClick={this.handlesumbit}>Add+</button>
            </div>
         );
    }
}


const mapDispatchToProps=(dispatch)=>
{
    return {
        Addtodo:text=>
        {
            dispatch({
                type:'ADD_TODO',
                text //ES6 
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(Header);