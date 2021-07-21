
const Login =(state =[], action)=>{
    switch (action.type){
        case 'LOGIN':{
            const newList =[...state]
            return{}
        }
        default:
            return state;
    }
}
export default Login;