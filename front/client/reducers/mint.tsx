import {AnyAction} from 'redux'
import {HYDRATE} from 'next-redux-wrapper';



export interface State {
    loadding:boolean;
    data:Array<string | number | Object>;
    payload:{};
    error:string;
    UserAddress:string;
    verify:number;
}

export const initialState : State = {
    loadding:false,
    data:[],
    payload:{},
    error:'',
    UserAddress:'kaikasAddress',
    verify:3,
};



export const MINT_NFT_SUCCESS  = "USER_LOGIN_REQUEST" as const;



export const MintNFT_REQUEST = () => {
    return{
        type:MINT_NFT_SUCCESS,
    }
}

type UserAction = 
| ReturnType<typeof MintNFT_REQUEST>


const reducer = (state:State=initialState, action:UserAction) => {
    switch (action.type){
        case MINT_NFT_SUCCESS:
            return{
                ...state,

            }
        default:
            return state;
    }
}

export default reducer