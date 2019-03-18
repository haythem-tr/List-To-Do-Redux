import React, { Component } from 'react';
import {connect} from 'react-redux'
import Itemlisttodo from './itemtodo';
 
class Listtodo extends Component {
    

    render() { 
        console.log(this.props.listtodo)
        return ( 
            <div className='listtodo-app'>
             {
                 this.props.listtodo.map((el,index)=>
                <Itemlisttodo key={index} id={index} itemtodo={el} />
            )
             }
            </div>
         );
    }
}
const mapStateToProps=(state)=>
{
  return {
      listtodo:state.todo
  }
}
 
export default connect(mapStateToProps)(Listtodo);