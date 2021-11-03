import {AnyAction} from 'redux'
import {HYDRATE} from 'next-redux-wrapper';

export interface ItemState {
    loading:boolean;
    data:Array<string | number | Object>;
    payload:{};
    error:string;
    UserAddress:string;
    verify:number;
    price: string;
    name: string;
    desc: string;
    aucPrice: string;
    currency: string;
    aucTime: string;
    extension: boolean;
    itemType: string;
}

export const initialState : ItemState = {
    loading:false,
    data:[],
    payload:{},
    error:'',
    UserAddress:'kaikasAddress',
    verify:200,
    price: '',
    name: '',
    desc: '',
    aucPrice: '',
    currency: 'won',
    aucTime: '',
    extension: true,
    itemType: 'female'
};


export const ITEMINFO_INSERT_REQUEST  = "ITEMINFO_INSERT_REQUEST" as const;
export const ITEMINFO_INSERT_SUCCESS  = "ITEMINFO_INSERT_SUCCESS" as const;
export const ITEMINFO_INSERT_ERROR = "ITEMINFO_INSERT_ERROR" as const;

export const itemInfo_REQUEST = (data) => {
    return{
        type:ITEMINFO_INSERT_REQUEST,
        data
    }
}

export const itemInfo_SUCCESS = () => {
    return{
        type:ITEMINFO_INSERT_SUCCESS,
    }
}

export const itemInfo_ERROR = () => {
    return{
        type:ITEMINFO_INSERT_ERROR,
    }
}

type ItemAction = 
| ReturnType<typeof itemInfo_REQUEST>
| ReturnType<typeof itemInfo_SUCCESS>
| ReturnType<typeof itemInfo_ERROR>

const reducer = (state:ItemState=initialState, action:ItemAction) => {
    switch (action.type){
        case ITEMINFO_INSERT_REQUEST:
            return{
                ...state,
                itemInfo : action.data
            }
        case ITEMINFO_INSERT_SUCCESS:
            return{
                ...state,
                
            }
        case ITEMINFO_INSERT_ERROR:
            return{
                ...state,
                
            }
        default:
            return state;
    }
}

export default reducer