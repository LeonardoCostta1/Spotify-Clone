import axios from 'axios'

export function getData(){

  axios.post('http://localhost:3002/api/artist/',{"token":"09071993"}).then((response) => {

    console.log(response.data)
      return response
    }).catch((err)=>{
        console.log(err)
    })
}