import {AnyAction} from 'redux'
import {HYDRATE} from 'next-redux-wrapper';



export interface State {
    loadding:boolean;
    data:Array<string | number | Object>;
    payload:Object;
    error:string;
    UserAddress:string;
}

export const initialState : State = {
    loadding:false,
    data:[],
    payload:{},
    error:'',
    UserAddress:'kaikasAddress'
};



export const USER_LOGIN_REQUEST  = "USER_LOGIN_REQUEST" as const;
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS" as const;
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR" as const;

export const UserLogin_REQUEST = (UserAddress) => {
    return{
        type:USER_LOGIN_REQUEST,
        data:UserAddress,
        test:'test'
    }
}
export const UserLogin_SUCCESS = (klaytnAddress) => {
    return{
        type:USER_LOGIN_SUCCESS,
    }
}
export const UserLogin_ERROR = (error) => {
    return{
        type:USER_LOGIN_ERROR,
        error:error,
    }
}

type UserAction = 
| ReturnType<typeof UserLogin_REQUEST>
| ReturnType<typeof UserLogin_SUCCESS>
| ReturnType<typeof UserLogin_ERROR>


const reducer = (state:{}=initialState, action:UserAction) => {
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                UserAddress:action.data
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
            }
            
        case USER_LOGIN_ERROR:
            return{
                data:action.error
            }
        default:
            return state;
    }
}

export default reducer