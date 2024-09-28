import axios from 'axios'
import { useState } from 'react'
import Cart from './components/Cart'
import Header from './components/Header'
import Products from './components/Products'
import './styles/css/index.css'

export default function App() {
	const [isOpenCart, setIsOpenCart] = useState(false)
	const [cartProduct, setCartProduct] = useState([])

	const handleOpenCart = () => setIsOpenCart(!isOpenCart)
	const addToCart = product => {
		const existProduct = cartProduct.some(cartItem => cartItem.price === product.price)
		if (existProduct) {
			console.log('Уже есть!')
			return
		}

		setCartProduct(prev => [...prev, product])
		axios.post('https://66f6e0fdb5d85f31a34173d4.mockapi.io/cart', product)
	}

	return (
		<div className='App'>
			{isOpenCart ? <Cart products={cartProduct} CloseCart={handleOpenCart} /> : null}
			<Header OpenCart={handleOpenCart} />
			<Products addToCart={addToCart} />
		</div>
	)
}
