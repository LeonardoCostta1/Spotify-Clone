export default fecthData = async () =>{

    try {
        const response = await fetch('http://localhost:3002/api/profile/1');

        const data = await response.json()
        return data
        
    } catch (error) {
       console.log(error)
        
    }

}