
const generarQr = async(grupo) => {
    const baseUrl = "127.0.0.1:8001/entrance/api/v1/obtain_qr/"
    const res = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
            group_id: grupo,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()

    console.log(data)
    return data
}
export default generarQr