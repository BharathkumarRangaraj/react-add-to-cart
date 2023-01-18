
const initialState={
    cart:[]
}

const UpdateCart=(state=initialState,action)=>{
    switch(action.type){
        case 'ADDTOCART':
            const index=state.cart.findIndex(i=>i.id===action.payload.id)
            if(index>=0){
                state.cart[index].rating.count+=1;
                return{
                  ...state
                }
            }
            else{
                const rating={...action.payload.rating, count:1}
                return{
                    ...state,cart:[...state.cart , {...action.payload,rating}]
                }
                
            }
            case 'REMOVEONE':
                const indexes=state.cart.findIndex(i=>i.id===action.payload.id)
                if(indexes>=0){
                    state.cart[indexes].rating.count-=1;
                    return{
                      ...state
                    }
                }
                else return state;

            case 'DELETEPRODUCT':
                {
                    state.cart=state.cart.filter(i=>i.id !== action.payload.id)
                    return{
                        ...state
                    }
                }
            
                

        
           
        default:
            return state
    }
}
export default UpdateCart;