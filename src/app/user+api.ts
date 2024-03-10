import {  ExpoRequest, ExpoResponse } from "expo-router/server"

export  async function POST(request: ExpoRequest): 
Promise<ExpoResponse> {
const { email, password } = await request.json()

if(email === "felipeyorrison@gmail.com" && password === "1234") {
    return ExpoResponse.json({
        email,
        name: "Sucesso.."
     })
}


return new ExpoResponse("Usuário e/ou senha incorreta!",{ 
    status: 404,
    headers:{
        "content-type": "text/plain",
    } 
})

}