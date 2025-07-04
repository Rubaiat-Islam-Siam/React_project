import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./style.css";

export default function StarRating({ noOfStar = 5 }) {
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
        setHovered(0);
    }
    function handleMouseMove(getCurrentIndex) {
        setHovered(getCurrentIndex);
    }
    function handleMouseLeave() {
        setHovered(rating);
    }

    return (
        <div className="StarRating" style={{
            minHeight: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #1e2a78 0%, #ff6b6b 100%)',
            margin: 0,
            padding: 0
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '40px 60px',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <h1 style={{
                    color: '#fff',
                    fontSize: '2.5rem',
                    marginBottom: '20px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                    fontWeight: '600',
                    textAlign: 'center'
                }}>Rate My Project</h1>
                <div style={{
                    display: 'flex',
                    gap: '12px',
                    padding: '20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '15px',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    {[...Array(noOfStar)].map((_, index) => {
                        index++;
                        return <FaStar
                            key={index}
                            className={index <= (hovered || rating) ? "Active" : "Inactive"}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseMove(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            size={48}
                            style={{
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                transform: index <= (hovered || rating) ? 'scale(1.2)' : 'scale(1)',
                                filter: index <= (hovered || rating) ? 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))' : 'none'
                            }}
                        />
                    })}
                </div>
                <p style={{
                    color: '#fff',
                    fontSize: '1.2rem',
                    marginTop: '20px',
                    opacity: rating ? '1' : '0.7',
                    transition: 'opacity 0.3s ease'
                }}>
                    {rating ? `You rated: ${rating} stars` : 'Click to rate'}
                </p>
            </div>
        </div>
    );
}


