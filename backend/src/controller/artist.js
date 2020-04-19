const connection = require('../db/connection');

module.exports = {

    async index(request,response){
        const token = request.body.token
        const id = request.params.id
        if(token === "09071993"){
            await connection.query(`SELECT * FROM artista INNER JOIN musicas ON artista.id_artista = musicas.id_artista WHERE artista.id_artista = ${id}`,(err,rows,field)=>{
            response.json(rows);
            });
        }else{
            response.json({'artists':"ERRO"});
        }
       },

    async artistas(request,response){
        const token = request.body.token

        if(token === "09071993"){
            await connection.query('SELECT * FROM artista ORDER BY nome_artista',(err,rows,field)=>{
            response.json(rows);
            });
        }else{
            response.json({'artists':"ERRO"});
        }
       },
    async multiple(request,response){

        const sql = 'SELECT * FROM artista;SELECT * FROM musicas'
        await connection.query(sql,[0,1],(err,rows,field)=>{
            response.json({
                'artistas':rows[0],
                'musicias':rows[1]
            })
        })
       }
}

