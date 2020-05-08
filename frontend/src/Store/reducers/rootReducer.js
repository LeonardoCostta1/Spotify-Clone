const INITIAL_STATE = {

    music:[],
    album:[[{
        albuns_id_album: 2,
        artista_musica: "Leo Costta",
        duracao_musica: "2:40",
        foto_musica: "https://bit.ly/3eoGGrA",
        genero_musica: "Pagode",
        id_artista: 1,
        id_musicas: 10,
        liked: 1,
        nome_musica: "A fila anda",
        url: "https://bit.ly/3apzW9R",
    }]],
    playing: 0,
    index:0,
    open:0,
 }
 

export default function rootReducer(state = INITIAL_STATE, action){
    console.log(action)
    switch(action.type){
        case 'ADD_TRACK':
            return{...state, music:[action.payload]};
        case 'ADD_ALBUM':
            return{...state, album:[action.payload]};
        case "PLAYING":
            return{...state,playing:action.play}
        case "INDEX":
            return{...state,index:action.payload}    
        case "NEXT":
            return{...state,index:state.index + 1} 
        case "PREV":
            return{...state,index:state.index - 1}
        case "OPEN":
            return{...state,open:action.payload}  
            default:
                return state;
    }
}