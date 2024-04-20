import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
const CartSidebar = ({ showSidebar, setShowSidebar }) => {
  const handleClose = () => {
    setShowSidebar(false);
  };


  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
      // Fetch clothing items data from backend server
      fetch('http://localhost:8081/cart')
          .then(response => response.json())
          .then(data => setCartItems(data))
          .catch(error => console.error('Error fetching cloth items:', error));
  }, []);
      
  
    const totalPrice =() =>{
      const totalDiscountPrice = cartItems.reduce((sum, item) => sum + item.DiscountPrice, 0);
      return totalDiscountPrice;
    }

  const handleDelete =(productIdToDelete)=>{
    fetch(`http://localhost:8081/deleteproduct/${productIdToDelete}`, {
      method: 'DELETE', // Specify the DELETE method
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete product');
        }
        return response.json();
      })
      .then(data => {
        console.log('Product deleted successfully:', data);
        window.location.reload();
        // Handle success response
      })
      .catch(error => {
        console.error('Error deleting product:', error);
        // Handle error
      });

  }

  return (
    <div className={`sidebar fixed text-yellow-400 f top-0 right-0 h-full w-72 bg-gray-900   z-50 transform transition-transform ease-in-out ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center px-4 py-2 border-b border-yellow-500">
        <h2 className="text-lg font-bold">Shopping Cart</h2>
        <button className=" hover:text-white" onClick={handleClose}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col justify-between h-full px-4 py-2">
        <div>
          
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center my-4 hover:bg-yellow-500 hover:text-black rounded-md p-2 transition duration-300">
              {/* <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4 rounded-lg" /> */}
              <div>
                <p className="font-semibold text-white">{item.Name}</p>
                <p className="text-sm">Quantity: 1</p>
                <p className="text-sm font-semibold">₹{item.DiscountPrice}</p>
              </div>
              <button onClick={() => handleDelete(item.CartId)} className="ml-2 focus:outline-none text-red-500 hover:text-green-500">
          <FaTrash />
        </button>
            </div>
          ))}
        </div>
        <div className="mt-4">

          <p className="text-lg font-semibold">Total: ₹{totalPrice()} </p>
          <button className="mt-4 w-full bg-yellow-500 text-white rounded-md my-20 py-2 hover:bg-blue-600  focus:outline-none transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
