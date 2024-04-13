import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faCalendarAlt, faLock } from '@fortawesome/free-solid-svg-icons';

const PaymentDetailsForm = () => {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: '',
    billingSameAsShipping: true,
  });
  const totalAmount = 134.00; // Replace with the actual total amount

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment processing logic here
    console.log(paymentData);
    alert('Payment processed successfully!');
    navigate('/menu'); // Adjust the route to your menu page accordingly
  };

  return (
    <div className="container mx-auto px-4 py-2">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-5 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="cardNumber" className="flex items-center text-lg">
            <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
            Card information
          </label>
          <input 
            type="text" 
            id="cardNumber" 
            name="cardNumber"
            placeholder="1234 1234 1234 1234"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            onChange={e => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
          />
          <div className="flex justify-end mt-1">
            <FontAwesomeIcon icon={faCcVisa} className="h-6 w-6 mx-1" />
            <FontAwesomeIcon icon={faCcMastercard} className="h-6 w-6 mx-1" />
            <FontAwesomeIcon icon={faCcAmex} className="h-6 w-6 mx-1" />
          </div>
        </div>

        <div className="flex mb-4 -mx-2">
          <div className="px-2 w-1/2">
            <label htmlFor="expMonth" className="text-lg">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              MM / YY
            </label>
            <div className="flex">
              <input 
                type="text"
                id="expMonth"
                name="expMonth"
                placeholder="MM"
                required
                className="w-16 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                onChange={e => setPaymentData({ ...paymentData, expMonth: e.target.value })}
              />
              <input 
                type="text"
                id="expYear"
                name="expYear"
                placeholder="YY"
                required
                className="w-16 ml-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                onChange={e => setPaymentData({ ...paymentData, expYear: e.target.value })}
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <label htmlFor="cvc" className="text-lg">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              CVC
            </label>
            <input 
              type="text"
              id="cvc"
              name="cvc"
              placeholder="CVC"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              onChange={e => setPaymentData({ ...paymentData, cvc: e.target.value })}
            />
          </div>
        </div>

        <div className="flex items-center mb-4">
          <input 
            id="billingSameAsShipping"
            type="checkbox"
            name="billingSameAsShipping"
            checked={paymentData.billingSameAsShipping}
            onChange={e => setPaymentData({ ...paymentData, billingSameAsShipping: e.target.checked })}
            className="h-4 w-4"
          />
          <label htmlFor="billingSameAsShipping" className="ml-2">
            Billing address is same as shipping
          </label>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Pay ${totalAmount.toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default PaymentDetailsForm;
