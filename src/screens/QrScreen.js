import React from 'react'
import generarQr from '../components/general/generarQr'
const QrScreen = (props) => {

    generarQr(props.grupoId).then(res => {
        console.log(res)
    })
    return (
        <>
            <Text>Qr screen</Text>
        </>
    )
}

export default QrScreen