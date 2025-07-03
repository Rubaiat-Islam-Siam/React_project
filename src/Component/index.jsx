import { useState } from "react"
import data from "./data";
import "./style.css";

export default function Accordian () {
    const [selected, setSelected] = useState([]);
    const [enableMulti, setEnableMulti] = useState(false);

    function handleSingle(id) {
        setSelected(selected[0] === id ? [] : [id]);
    }

    function handleMulti(id) {
        if (selected.includes(id)) {
            setSelected(selected.filter(item => item !== id));
        } else {
            setSelected([...selected, id]);
        }
    }

    return (
        <div className="wrapper" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5d365 60%, #a86e1e 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 0' }}>
            <div style={{ background: 'rgba(0,0,0,0.08)', borderRadius: '18px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', padding: '40px 32px', minWidth: '350px', maxWidth: '600px', width: '100%' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '24px', color: '#a86e1e', letterSpacing: '2px', fontWeight: 700 }}>React Accordion</h1>
                <button 
                    onClick={() => setEnableMulti(!enableMulti)}
                    style={{
                        width: '100%',
                        padding: '14px 0',
                        marginBottom: '28px',
                        border: 'none',
                        borderRadius: '8px',
                        background: enableMulti ? '#a86e1e' : '#f5d365',
                        color: enableMulti ? '#fff' : '#a86e1e',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                        transition: 'background 0.2s, color 0.2s'
                    }}
                >
                    {enableMulti ? "Disable" : "Enable"} Multiselection
                </button>
                <div className="accordian">
                    {data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item" key={dataItem.id} style={{
                                marginBottom: '16px',
                                borderRadius: '8px',
                                boxShadow: selected.includes(dataItem.id) ? '0 4px 16px rgba(168,110,30,0.18)' : '0 2px 8px rgba(0,0,0,0.08)',
                                background: selected.includes(dataItem.id) ? 'rgba(245,211,101,0.25)' : 'rgba(168,110,30,0.12)',
                                transition: 'box-shadow 0.2s, background 0.2s'
                            }}>
                                <div
                                    onClick={() => enableMulti ? handleMulti(dataItem.id) : handleSingle(dataItem.id)}
                                    className="title"
                                    style={{
                                        padding: '18px 24px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        fontWeight: 600,
                                        fontSize: '1.1rem',
                                        color: selected.includes(dataItem.id) ? '#a86e1e' : '#333',
                                        background: selected.includes(dataItem.id) ? 'rgba(245,211,101,0.18)' : 'rgba(255,255,255,0.10)',
                                        borderRadius: '8px 8px 0 0',
                                        transition: 'background 0.2s, color 0.2s'
                                    }}
                                >
                                    <h3 style={{ margin: 0 }}>{dataItem.question}</h3>
                                    <span style={{ fontSize: '2rem', fontWeight: 700, marginLeft: '18px' }}>{selected.includes(dataItem.id) ? "-" : "+"}</span>
                                </div>
                                {selected.includes(dataItem.id) ? (
                                    <div className="content" style={{
                                        padding: '18px 24px',
                                        background: '#fffbe6',
                                        color: '#a86e1e',
                                        fontSize: '1rem',
                                        borderRadius: '0 0 8px 8px',
                                        borderTop: '1px solid #e0c97f',
                                        animation: 'fadeIn 0.3s',
                                        transition: 'background 0.2s, color 0.2s'
                                    }}> {dataItem.answer} </div>
                                ) : null}
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', color: '#a86e1e', fontWeight: 600 }}>No data Available</p>
                    )}
                </div>
            </div>
        </div>
    )  
}