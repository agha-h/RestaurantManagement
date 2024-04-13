import React, { useState, useEffect } from 'react';
import Header from '../Header/Header'; // Update with correct import path
import Footer from '../Footer/Footer'; // Update with correct import path
import Hero from '../Hero/Hero'; // Update with correct import path
import { parseISO, format } from 'date-fns';
import AddMenuItemForm from './AddMenuItemForm';
import { useNavigate } from 'react-router-dom'; 
const AdminDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Function to handle button click
    const handleAddItemClick = () => {
      navigate('/addmenuitem'); // Navigate to the Add Item page
    };
    useEffect(() => {
        const fetchOrders = async () => {
            // Replace with your actual API endpoint
            const response = await fetch('http://localhost:5000/orders');
            const data = await response.json();
            setOrders(data);
            setIsLoading(false);
        };

        fetchOrders();
    }, []);

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };

    return (
        <>
            <Header />
            <Hero />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-semibold text-center my-4">Admin Dashboard</h1>
                
                {/* Orders Section */}
                <section className="orders-section my-8">
    <h2 className="text-2xl font-semibold my-2">Orders</h2>
    {isLoading ? (
        <p>Loading orders...</p>
    ) : (
        orders.length > 0 ? orders.map((order) => (
            <div key={order.id} className="order-card bg-white p-4 my-2 shadow-md">
                <h3 className="text-xl font-semibold">{order.name}</h3>
                <p><strong>Description:</strong> {order.description}</p>
                <p><strong>Price:</strong> ${order.price}</p>
                <p><strong>Category:</strong> {order.category}</p>
                {order.image_url && <img src={order.image_url} alt={order.name} className="menu-item-image" />}
                <p><strong>Order placed on:</strong> {new Date(order.created_at).toLocaleDateString()}</p>
            </div>
        )) : (
            <p>No orders found.</p>
        )
    )}
</section>



                {/* Add Menu Item Section */}
                <section className="add-menu-item-section my-8">
                    <h2 className="text-2xl font-semibold my-2">Add Menu Item</h2>
                    <button onClick={handleAddItemClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add Item
    </button>
                    {showAddForm && <AddMenuItemForm />}
                </section>
            </div>
            <Footer />
        </>
    );
};

export default AdminDashboard;
