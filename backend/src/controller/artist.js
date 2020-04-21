const connection = require('../db/connection');

module.exports = {

    async index(request,response){
        const id = request.params.id

        // SELECT * FROM artista INNER JOIN musicas ON artista.id_artista = musicas.id_artista WHERE artista.id_artista = ${id}; 

        const profile = `SELECT * FROM artista WHERE id_artista = ${id}; SELECT * FROM albuns WHERE artista_id_artista = ${id}; SELECT * FROM musicas WHERE id_artista = ${id} `

        await connection.query(profile,[0,1,2],(err,rows,field)=>{
            if(err){
                console.log(field);
                return;
            }

            response.json([rows[0],rows[1],rows[2]]
            
            );
            });
       },

    async artistas(request,response){

        await connection.query('SELECT * FROM artista ORDER BY nome_artista',(err,rows,field)=>{
            if(err){
                console.log(field);
                return;
            }

            response.json(rows);
            
        });

       },
}

