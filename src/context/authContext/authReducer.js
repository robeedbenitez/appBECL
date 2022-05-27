

const authReducer =(state, action) =>{
    //console.log(action)
    switch(action.type){
        case 'singIn':
            return {
                ...state,
                isLoggedIn: true,
            }
            case 'setUser':
            return {
                ...state,
                isLoggedIn: true,
                user:action.payload,
            }
            case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                user:null,
            }
        default:
            return state;
    }
}
export default authReducer;
