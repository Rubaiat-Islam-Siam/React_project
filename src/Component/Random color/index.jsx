import { useState } from "react";

export default function RandomColor() {
    const [color, setColor] = useState("hex");
    const [randomColor, setRandomColor] = useState("#000000");

    function handleHex() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        setRandomColor(hexColor);
    }

    function handleRGB() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setRandomColor(`rgb(${r}, ${g}, ${b})`);
    }

    function generateColor() {
        if (color === 'hex') {
            handleHex();
        } else {
            handleRGB();
        }
    }

    // Helper for button style
    const buttonStyle = {
        padding: "15px 30px",
        border: "none",
        borderRadius: "8px",
        fontSize: "1.1rem",
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        transition: "background 0.2s, color 0.2s, transform 0.1s",
        background: "rgba(255,255,255,0.15)",
        color: "#fff",
        outline: "none"
    };
    const activeButton = {
        background: "#fff",
        color: randomColor,
        transform: "scale(1.05)"
    };

    return (
        <div style={{ 
            background: `linear-gradient(150deg, ${randomColor} 60%, #222 100%)`, 
            minHeight: "100vh", 
            color: "#fff", 
            padding: "0", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center" 
        }}>
            <div style={{
                background: "rgba(0,0,0,0.25)",
                borderRadius: "20px",
                padding: "40px 60px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                textAlign: "center"
            }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", letterSpacing: "2px" }}>Random Color Generator</h1>
                <h2 style={{ 
                    fontSize: "2rem", 
                    margin: "20px 0 40px 0", 
                    letterSpacing: "1px", 
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    padding: "10px 0"
                }}>{randomColor}</h2>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                    <button 
                        style={buttonStyle}
                        onClick={generateColor}
                    >Generate Random Color</button>
                    <button 
                        style={color === 'hex' ? { ...buttonStyle, ...activeButton } : buttonStyle}
                        onClick={() => setColor('hex')}
                    >HEX Color</button>
                    <button 
                        style={color === 'rgb' ? { ...buttonStyle, ...activeButton } : buttonStyle}
                        onClick={() => setColor('rgb')}
                    >RGB Color</button>
                </div>
            </div>
        </div>
    );
}
