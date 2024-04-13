import React, { useState } from 'react';
import Header from '../Header/Header';// Update with correct import path
import Footer from '../Footer/Footer'; // Update with correct import path
import backgroundImage from '../../images/hero/main-bg.png'; // Update with the path to your background image
import { useNavigate } from 'react-router-dom';
const AddMenuItemPage = () => {
    const [menuItemData, setMenuItemData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image_url: ''
    });
    const navigate = useNavigate();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const handleChange = (e) => {
        setMenuItemData({ ...menuItemData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Replace with the URL of your endpoint
            const response = await fetch('http://localhost:5000/addmenuitem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(menuItemData),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
    
            const responseData = await response.json();
            console.log(responseData.message);
            setShowSuccessMessage(true);

            // Redirect to the admin dashboard after a short delay
            setTimeout(() => {
                navigate('/admin-dashboard');  }, 3000); 
            // Perform any actions after successful submission (e.g., redirecting or updating UI)
        } catch (error) {
            console.error('Failed to submit form:', error);
            // Handle errors here (e.g., showing user feedback)
        }
    };
    

    return (
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Header />
            <div className="container mx-auto p-4 flex justify-center items-center h-full">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
                    <h2 className="block text-gray-700 text-xl font-bold mb-2">Add a New Menu Item</h2>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            value={menuItemData.name}
                            onChange={handleChange}
                            required
                            placeholder="Menu item name"
                        />
                    </div>
                    {/* ... other input fields ... */}
                    {/* Description Textarea */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            name="description"
                            value={menuItemData.description}
                            onChange={handleChange}
                            placeholder="Item description"
                        />
                    </div>
                    {/* Price Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="price"
                            type="number"
                            name="price"
                            value={menuItemData.price}
                            onChange={handleChange}
                            required
                            placeholder="0.00"
                            step="0.01"
                        />
                    </div>
                    {/* Category Input */}
                    <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
        Category
    </label>
    <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="category"
        name="category"
        value={menuItemData.category}
        onChange={handleChange}
        required
    >
        <option value="">Select a Category</option>
        <option value="Appetizers">Appetizers</option>
        <option value="Main Course">Main Course</option>
        <option value="Desserts">Desserts</option>
        <option value="Beverages">Beverages</option>
        {/* Add more categories as needed */}
    </select>
</div>

                    {/* Image URL Input */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image_url">
                            Image URL
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="image_url"
                            type="text"
                            name="image_url"
                            value={menuItemData.image_url}
                            onChange={handleChange}
                            placeholder="http://example.com/image.jpg"
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddMenuItemPage;
