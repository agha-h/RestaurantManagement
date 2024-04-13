import React, { useState } from 'react';
import HeaderImage from '../../images/about/top-border.png'; // Adjust path as needed
import TokyoMainLogo from '../../images/hero/tokio-main.png'; // Adjust path as needed
import MiniLogo from '../../images/footer/logo.png'; // Adjust path as needed

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, full_name: fullName }),
            });
            const data = await response.json();
            console.log(data);
          
        } catch (error) {
            console.error('Error signing up:', error);
          
        }
    };

    return (
        <div className="signup-container" style={{ textAlign: 'center', padding: '20px' }}>
            <img src={HeaderImage} alt="Header" style={{ width: '100%', marginBottom: '20px' }} />
            <img src={TokyoMainLogo} alt="Tokio Ramen Logo" style={{ maxWidth: '150px', margin: '0 auto', display: 'block' }} />

            <div style={{
                maxWidth: '300px',
                margin: '20px auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9'
            }}>
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Full Name</label><br />
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" required style={{ padding: '8px', width: '100%' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Email</label><br />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required style={{ padding: '8px', width: '100%' }} />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Password</label><br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required style={{ padding: '8px', width: '100%' }} />
                    </div>
                    <button type="submit" style={{
                        padding: '10px 20px',
                        background: '#fe4039', // Theme color
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>Signup</button>
                </form>
            </div>

            <img src={MiniLogo} alt="Mini Logo" style={{ position: 'absolute', bottom: '20px', left: '20px', maxWidth: '50px' }} />
        </div>
    );
};

export default Signup;
