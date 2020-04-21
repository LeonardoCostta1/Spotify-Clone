

const INITIAL_STATE = {

    music:[
         {
            track: "https://bit.ly/2wTtZnT",
            musica: "Amor de fim de noite",
            artist: "Leo Costta",
            album: "https://bit.ly/3eoGGrA"
        },
    ]
 }
 

export default function rootReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_TRACK':
            console.log(state)
            return{...state, music:[action.music]};
            
            default:
                return state;
    }
}