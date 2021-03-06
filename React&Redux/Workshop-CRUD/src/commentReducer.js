
const commentReducer = (state = [], action)=>{
      //เขียนรูปแบบ Action
      switch(action.type){    ///เงื่อนไข
            case 'ADD_COMMENT':  ///จะให้ 'ADD_COMMENT' ทำอะไร
            return state.concat([action.data]);
            
            case 'DELETE_COMMENT':
            return state.filter((comment)=>comment.id !== action.id);
            
            case 'EDIT_COMMENT':
            return state.map((comment)=>comment.id === action.id ? {...comment,editing:!comment.editing}:comment);
            
            case 'UPDATE':
            return state.map((comment)=>{
                        if(comment.id === action.id){
                              return{
                                    ...comment,
                                    name:action.data.newname,
                                    message:action.data.newmessage,
                                    editing:!comment.editing,
                              }
                        }else return comment;
                        })
           
            default:
            return state;
      }

}
export default commentReducer;