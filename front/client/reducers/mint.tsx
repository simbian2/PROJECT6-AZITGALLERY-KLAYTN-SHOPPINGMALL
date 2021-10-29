import {AnyAction} from 'redux'
import {HYDRATE} from 'next-redux-wrapper';



export interface MintState {
    loadding:boolean;
    data:Array<string | number | Object>;
    payload:{};
    error:string;
    UserAddress:string;
    verify:number;
}

export const initialState : MintState = {
    loadding:false,
    data:[],
    payload:{},
    error:'',
    UserAddress:'kaikasAddress',
    verify:200,
};



export const MINT_NFT_SUCCESS  = "MINT_NFT_SUCCESS" as const;
export const MINT_NFT_RETURN  = "MINT_NFT_RETURN" as const;
export const KIP_TOKEN_SUCCESS = "KIP_TOKEN_SUCCESS" as const;

export const MintNFT_REQUEST = () => {
    return{
        type:MINT_NFT_SUCCESS,
    }
}

export const MintNFT_RETURN = () => {
    return{
        type:MINT_NFT_RETURN,
    }
}

export const KipToken_SUCCESS = () => {
    return{
        type:KIP_TOKEN_SUCCESS,
    }
}

type MintAction = 
| ReturnType<typeof MintNFT_REQUEST>
| ReturnType<typeof MintNFT_RETURN>
| ReturnType<typeof KipToken_SUCCESS>

const reducer = (state:MintState=initialState, action:MintAction) => {
    switch (action.type){
        case MINT_NFT_SUCCESS:
            return{
                ...state,
                verify:'reducer?'
            }
        case MINT_NFT_RETURN:
            return{
                ...state,
                verify:'return?'
            }
        case KIP_TOKEN_SUCCESS:
            return{
                ...state,
                verify:'return?'
            }
        default:
            return state;
    }
}

export default reducer