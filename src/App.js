import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		console.log("item", item);
		setCart([...cart, item]);
	};

	const removeItem = (e, id) => {
		console.log(id);
		const newCart = cart;
		const filteredCart = newCart.filter(item => item.id !== id);
		console.log(filteredCart);
		setCart(filteredCart);
	}

	return (
		<div className="App">	
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart, removeItem}}>
					<Navigation/>
					<Route exact path="/">
						<Products/>
					</Route>
					<Route path="/cart">
						<ShoppingCart/>
					</Route>
				</CartContext.Provider>			
			</ProductContext.Provider>

				

		</div>
	);
}

export default App;
