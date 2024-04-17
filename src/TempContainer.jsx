import React, { useState } from "react";

function TempContainer() {

    const [celcius, setCelcius] = useState(0);
    const [kelvin, setKelvin] = useState(273.15);
    const [fahren, setFahren] = useState(32);

    const handleCelcuis = (event) => {
        const celciusValue = parseFloat(event.target.value)
        setCelcius(celciusValue)
        setKelvin(celciusValue + 273.15)
        setFahren((celciusValue * (9 / 5)) + 32)
    }

    const handleKelvin = (event) => {
        const kelvinValue = parseFloat(event.target.value)
        setKelvin(kelvinValue)
        setCelcius(kelvinValue - 273.15)
        setFahren((2 * kelvinValue - 273.15) * (9 / 5) + 32)
    }

    const handleFahren = (event) => {
        const fahrenValue = parseFloat(event.target.value)
        setFahren(fahrenValue)
        setKelvin((2 * fahrenValue - 32) * (5 / 9) + 273.15)
        setCelcius((2 * fahrenValue - 32) * (5 / 9))
    }

    const celciusCopyHandle = () => {
        navigator.clipboard.writeText(`${celcius}°C`)
    }

    const kelvinCopyHandle = () => {
        navigator.clipboard.writeText(`${kelvin}K`)
    }

    const fahrenCopyHandle = () => {
        navigator.clipboard.writeText(`${fahren}°F`)
    }

    return (

        <div className="temp-container">

            <div className="celcius temp">
                <label>Celcius : </label>
                <input className="inputField" type="number" value={celcius} onChange={handleCelcuis} placeholder="Celcius" />
                <button className="copy-btn celciusCopy" onClick={celciusCopyHandle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                    </svg>
                </button>
            </div>

            <div className="kelvin temp">
                <label>Kelvin : </label>
                <input className="inputField" type="number" value={kelvin} onChange={handleKelvin} placeholder="Kelvin" />
                <button className="copy-btn kelvinCopy" onClick={kelvinCopyHandle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                    </svg>
                </button>
            </div>

            <div className="fahrenheit temp">
                <label>Fahrenheit : </label>
                <input className="inputField" type="number" value={fahren} onChange={handleFahren} placeholder="Fahrenheit" />
                <button className="copy-btn fahrenCopy" onClick={fahrenCopyHandle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                    </svg>
                </button>
            </div>

        </div>

    );

}

export default TempContainer
