import axios from "axios";

const ValidarUserBECL = async (idToken) => {
    //console.log(idToken)
    const baseUrl = "http://localhost:8000/auth/api/v1/sign_in_up/"
    
    const res = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
            token: idToken,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    //console.log(data)
    return data
}
export default ValidarUserBECL




