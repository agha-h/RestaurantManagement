// import React, { useState } from 'react';
// import HeaderImage from '../../images/about/top-border.png'; // Adjust path as needed
// import TokyoMainLogo from '../../images/hero/tokio-main.png'; // Adjust path as needed
// import MiniLogo from '../../images/footer/logo.png'; // Adjust path as needed

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       console.log(data);
//       // Handle success or navigate to another page
//     } catch (error) {
//       console.error('Error logging in:', error);
//       // Handle errors
//     }
//   }

//   return (
//     <div className="login-container" style={{ textAlign: 'center', padding: '20px' }}>
//       <img src={HeaderImage} alt="Header" style={{ width: '100%', marginBottom: '20px' }} />
//       <img src={TokyoMainLogo} alt="Tokio Ramen Logo" style={{ maxWidth: '150px', margin: '0 auto', display: 'block' }} />

//       <div style={{
//         maxWidth: '300px',
//         margin: '20px auto',
//         padding: '20px',
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         backgroundColor: '#f9f9f9' // Light background for the form area
//       }}>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '10px' }}>
//             <label>Email</label><br />
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required style={{ padding: '8px', width: '100%' }} />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <label>Password</label><br />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required style={{ padding: '8px', width: '100%' }} />
//           </div>
//           <button type="submit" style={{
//             padding: '10px 20px',
//             background: '#fe4039', // Use theme color for buttons
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer'
//           }}>Login</button>
//         </form>
//       </div>

//       <img src={MiniLogo} alt="Mini Logo" style={{ position: 'absolute', bottom: '20px', left: '20px', maxWidth: '50px' }} />
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import HeaderImage from '../../images/about/top-border.png';
import TokyoMainLogo from '../../images/hero/tokio-main.png';
import MiniLogo from '../../images/footer/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Instantiate useNavigate for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === 'admin@gmail.com' && password === 'admin') {
      navigate('/admin-dashboard'); // Redirect to admin dashboard using useNavigate
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      navigate('/layout'); 
      // For non-admin users, handle a successful login, perhaps navigating to another page
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login errors, perhaps by displaying a message to the user
    }
  };

  return (
    <div className="login-container" style={{ textAlign: 'center', padding: '20px' }}>
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
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
            background: '#fe4039',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Login</button>
        </form>
      </div>

      <img src={MiniLogo} alt="Mini Logo" style={{ position: 'absolute', bottom: '20px', left: '20px', maxWidth: '50px' }} />
    </div>
  );
};

export default Login;

