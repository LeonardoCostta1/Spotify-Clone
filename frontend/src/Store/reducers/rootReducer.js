

const INITIAL_STATE = {

    id:[
         {id:0},
    ]
 }
 

export default function rootReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'TOGLE_PAGE':
            return{ ...state, id:[action.id]};
            default:
                return state;
    }
}