import React, { useState } from 'react';
import Header from '../CustomerHeader/CheckoutHeader';
import Footer from '../Footer/Footer';
import backgroundImage from '../../images/hero/main-bg.png';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
const CheckoutPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: '',
      firstName: '',
      lastName: '',
      telephone: '',
      deliveryAddress: '',
      suburb: '',
      stateTerritory: '',
      postcodeZip: '',
      country: '',
      sameBillingAddress: false,
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/checkout', { // Ensure URL matches your Flask route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data.message); // Or handle success response as needed
            // Redirect to success page or reset form, etc.
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            navigate('/payment-options');
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            // Handle errors here, such as displaying a user-friendly error message
        }
    };
    
  
    return (
      <div
        className="checkout-page bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Header />
        <div className="container mx-auto p-4 flex justify-center items-center h-full px-8">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
            {/* Form fields with Tailwind CSS */}
            {/* Email field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">

        <input 
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
          placeholder="First name*" 
          required 
        />
</div>
<div className="mb-4">
        <input 
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
          placeholder="Last name*" 
          required 
        />
</div>
<div className="mb-4">
        <input 
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="tel" 
          name="telephone" 
          value={formData.telephone} 
          onChange={handleChange} 
          placeholder="Telephone*" 
          required 
        />
</div>
<div className="mb-4">
        <input 
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" 
          name="deliveryAddress" 
          value={formData.deliveryAddress} 
          onChange={handleChange} 
          placeholder="Delivery address*" 
          required 
        />
</div>
<div className="mb-4">
        <input 
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" 
          name="suburb" 
          value={formData.suburb} 
          onChange={handleChange} 
          placeholder="Suburb/Town*" 
          required 
        />
</div>
<div className="mb-4"> {/* This div adds space between this select field and others */}
  <label htmlFor="stateTerritory" className="block text-gray-700 text-sm font-bold mb-2">
    State/Territory*
  </label>
  <select 
    id="stateTerritory"
    name="stateTerritory" 
    value={formData.stateTerritory} 
    onChange={handleChange} 
    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    required
  >
    <option value="">Select a state/territory*</option>
    {/* Add options here */}
    <option value="New York">New York</option>
    <option value="California">California</option>
    {/* Add more state/territory options as needed */}
  </select>
</div>


<div className="mb-4">
        <input 
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" 
          name="postcodeZip" 
          value={formData.postcodeZip} 
          onChange={handleChange} 
          placeholder="Postcode/ZIP Code*" 
          required 
        />
        </div>
<select
  id="country"
  name="country"
  value={formData.country}
  onChange={handleChange}
  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  required
>
  <option value="">Select a country*</option>
  <option value="Pakistan">Pakistan</option>
  <option value="United States">United States</option>
  <option value="United Kingdom">United Kingdom</option>
  {/* Add more country options as needed */}
</select>


        <div className="flex items-center mb-4">
  <input 
    id="sameBillingAddress"
    type="checkbox" 
    name="sameBillingAddress" 
    checked={formData.sameBillingAddress} 
    onChange={handleChange}
    className="mr-2 leading-tight" // Remove unnecessary styles for checkbox
  />
  <label 
    htmlFor="sameBillingAddress"
    className="text-gray-700"
  >
    Same Billing address
  </label>
</div>


          {/* Submit button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
      {/* <Info/> */}
<Contact />

      <Footer />
    </div>
  );
};

export default CheckoutPage;
