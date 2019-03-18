import React, { Component } from 'react';
import {connect} from 'react-redux'

function Itemlisttodo({itemtodo,toggletodo, id,deletetodo})
{
    return (
        <div className='itemtodo-app'>
        <ul>
                 <li>
           <span onClick={()=>toggletodo(id)}
           style={{textDecoration:(itemtodo.isDone)?'line-through':'none'}}>{itemtodo.text}</span>
                     <button onClick={()=>deletetodo(id)} style={{marginLeft:'5%'}}>remove</button>
                 </li>
             </ul>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        toggletodo:id=>
        {
            dispatch({
                type:'TOGGLE_TODO',
                id //ES6 
            })
        },
        deletetodo:id=>
        {
            dispatch({
                type:'REMOVE_TODO',
                id //ES6 
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(Itemlisttodo)