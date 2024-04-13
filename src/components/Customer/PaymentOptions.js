import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import PaymentDetailsForm from './PaymentDetailsForm'; // Import the PaymentDetailsForm component
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import backgroundImage from '../../images/hero/main-bg.png';// Update path as needed

const PaymentOptionsPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cash');
  const navigate = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Retrieve cart items from local storage

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleCashPayment = () => {
    // Implement logic for cash payment
    console.log('Cash payment selected');
    alert('Payment successful!');
    navigate('/menu'); // Redirect to menu page after successful payment
  };

  return (
    <div
      className="payment-options-page bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <div className="container mx-auto p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart Items</h2>
        <div className="cart-items w-full mb-8">
          {cartItems.length > 0 ? (
            <ul className="list-disc pl-5">
             {cartItems.map((item, index) => (
  <li key={index} className="mb-2">
    {item.name} - ${parseFloat(item.price).toFixed(2)}
  </li>
))}

            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        <div className="payment-methods mb-8">
          <h2 className="text-2xl font-bold mb-4">Select Payment Method</h2>
          <div className="flex justify-around w-full">
            <button
              onClick={() => handlePaymentMethodChange('cash')}
              className={`p-2 rounded-lg border-2 ${selectedPaymentMethod === 'cash' ? 'border-blue-500' : 'border-gray-300'}`}
            >
              <FontAwesomeIcon icon={faCashRegister} className="mr-2" />
              Cash on Delivery
            </button>
            <button
              onClick={() => handlePaymentMethodChange('card')}
              className={`p-2 rounded-lg border-2 ${selectedPaymentMethod === 'card' ? 'border-blue-500' : 'border-gray-300'}`}
            >
              <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
              Pay with Card
            </button>
          </div>
        </div>

        {selectedPaymentMethod === 'cash' ? (
          <button
            onClick={handleCashPayment}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-4 md:mt-8"
            >
          
            Confirm Cash Payment
          </button>
        ) : (
          <PaymentDetailsForm />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PaymentOptionsPage;
