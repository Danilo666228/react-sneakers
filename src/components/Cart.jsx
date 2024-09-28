import axios from 'axios'
import { useEffect, useState } from 'react'
export default function Cart({ CloseCart, products = [] }) {
	const [cartProducts, setCartProducts] = useState(products)

	useEffect(() => {
		axios.get('https://66f6e0fdb5d85f31a34173d4.mockapi.io/cart').then(response => setCartProducts(response.data))
	}, [])
	products = cartProducts

	const onDelete = id => {
		axios.delete(`https://66f6e0fdb5d85f31a34173d4.mockapi.io/cart/${id}`)
		setCartProducts((prev) => prev.filter(item => item.id !== id))
	}

	return (
		<div className='overlay'>
			<div className='cart'>
				<div className='cart__wrapper'>
					<header className='cart__header'>
						<h1 className='cart__header-title'>Корзина</h1>
						<button onClick={CloseCart}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								id='Layer_1'
								data-name='Layer 1'
								viewBox='0 0 24 24'
								width='27'
								height='27'>
								<path d='m16.535,8.172l-3.828,3.828,3.828,3.828-.707.707-3.828-3.828-3.828,3.828-.707-.707,3.828-3.828-3.828-3.828.707-.707,3.828,3.828,3.828-3.828.707.707Zm7.465,3.828c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z' />
							</svg>
						</button>
					</header>
					<ul className='cart__menu'>
						{products.map((product, index) => (
							<li className='cart__item' key={index}>
								<img src={product.imageUrl} alt='' width={70} height={70} />
								<div className='cart__info'>
									<span className='cart__info-title'>{product.title}</span>
									<span className='cart__info-price'>{product.price}</span>
								</div>
								<img
									src='/image/cart/close-cart-item.svg'
									alt=''
									width={30}
									height={30}
									onClick={() => onDelete(product.id)}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
