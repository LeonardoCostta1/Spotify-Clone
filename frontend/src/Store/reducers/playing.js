const playing = 0
    

export default function isplaying( state = playing ,action){

    switch(action.type){
       
        case "PLAYING":
            return{...state,playing:action.play}
            default:
                return state;
    }
}