import {AnyAction} from 'redux'
import {HYDRATE} from 'next-redux-wrapper';

export interface ShipState {
    loadding:boolean;
    data:Array<string | number | Object>;
    payload:{};
    error:string;
    UserAddress:string;
    verify:number;
}

export const initialState : ShipState = {
    loadding:false,
    data:[],
    payload:{},
    error:'',
    UserAddress:'kaikasAddress',
    verify:200,
};


export const SHIPINFO_INSERT_REQUEST  = "SHIPINFO_INSERT_REQUEST" as const;
export const SHIPINFO_INSERT_SUCCESS  = "SHIPINFO_INSERT_SUCCESS" as const;
export const SHIPINFO_INSERT_ERROR = "SHIPINFO_INSERT_ERROR" as const;

export const shipInfo_REQUEST = (data) => {
    return{
        type:SHIPINFO_INSERT_REQUEST,
        data
    }
}

export const shipInfo_SUCCESS = () => {
    return{
        type:SHIPINFO_INSERT_SUCCESS,
    }
}

export const shipInfo_ERROR = () => {
    return{
        type:SHIPINFO_INSERT_ERROR,
    }
}

type ShipAction = 
| ReturnType<typeof shipInfo_REQUEST>
| ReturnType<typeof shipInfo_SUCCESS>
| ReturnType<typeof shipInfo_ERROR>

const reducer = (state:ShipState=initialState, action:ShipAction) => {
    switch (action.type){
        case SHIPINFO_INSERT_REQUEST:
            return{
                ...state,
                shipInfo : action.data
            }
        case SHIPINFO_INSERT_SUCCESS:
            return{
                ...state,
                
            }
        case SHIPINFO_INSERT_ERROR:
            return{
                ...state,
                
            }
        default:
            return state;
    }
}

export default reducer