let listtodo_initial=[]
 
const todo=(state=listtodo_initial,action)=>
{
  switch(action.type)
  {
      case 'ADD_TODO' :
      return [
          ...state,{
              text:action.text,
              isDone:false
          }
      ]
      case 'TOGGLE_TODO':
      return (
          state.map((el,index)=>(index===action.id)?{
              text:el.text,
              isDone:!el.isDone
          }:el
        )
      )
      case 'REMOVE_TODO' :
      return (
          state.filter((el,index)=>index!=action.id)
      )
      default : return state
  }
}

export default todo