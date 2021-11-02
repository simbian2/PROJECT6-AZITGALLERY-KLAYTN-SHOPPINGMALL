import {AnyAction} from 'redux'
import {HYDRATE} from 'next-redux-wrapper';

export interface ItemImageState {
    loading:boolean;
    data:Array<string | number | Object>;
    payload:{};
    error:string;
    UserAddress:string;
    verify:number;
}

export const initialState : ItemImageState = {
    loading:false,
    data:[],// 하나하나 다바꿔야됨
    payload:{},
    error:'',
    UserAddress:'kaikasAddress',
    verify:200,
};


export const ITEMIMAGEINFO_INSERT_REQUEST  = "ITEMIMAGEINFO_INSERT_REQUEST" as const;
export const ITEMIMAGEINFO_INSERT_SUCCESS  = "ITEMIMAGEINFO_INSERT_SUCCESS" as const;
export const ITEMIMAGEINFO_INSERT_ERROR = "ITEMIMAGEINFO_INSERT_ERROR" as const;

export const itemImageInfo_REQUEST = (data) => {
    return{
        type:ITEMIMAGEINFO_INSERT_REQUEST,
        data
    }
}

export const itemImageInfo_SUCCESS = () => {
    return{
        type:ITEMIMAGEINFO_INSERT_SUCCESS,
    }
}

export const itemImageInfo_ERROR = () => {
    return{
        type:ITEMIMAGEINFO_INSERT_ERROR,
    }
}

type ItemImageAction = 
| ReturnType<typeof itemImageInfo_REQUEST>
| ReturnType<typeof itemImageInfo_SUCCESS>
| ReturnType<typeof itemImageInfo_ERROR>

const reducer = (state:ItemImageState=initialState, action:ItemImageAction) => {
    switch (action.type){
        case ITEMIMAGEINFO_INSERT_REQUEST:
            return{
                ...state,
                itemImageInfo : action.data
            }
        case ITEMIMAGEINFO_INSERT_SUCCESS:
            return{
                ...state,
                
            }
        case ITEMIMAGEINFO_INSERT_ERROR:
            return{
                ...state,
                
            }
        default:
            return state;
    }
}

export default reducer