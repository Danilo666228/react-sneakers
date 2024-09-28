import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function Products({ addToCart }) {
	const [products, setProducts] = useState([])
	const [valueInput, setValueInput] = useState('')

	useEffect(() => {
		axios.get('https://66f6e0fdb5d85f31a34173d4.mockapi.io/items').then(response => setProducts(response.data))
	}, [])

	const onChangeInput = event => {
		setValueInput(event.target.value)
	}

	return (
		<section className='section container'>
			<header className='section__header'>
				<h1 className='section__title'>{valueInput ? `Поиск по : ${valueInput}` : `Все кроссовки`}</h1>
				<input type='text' onChange={onChangeInput} />
			</header>

			<div className='products'>
				<ul className='products__menu grid grid--4'>
					{products
						.filter(product => product.title.toLowerCase().includes(valueInput.toLowerCase()))
						.map((product, index) => (
							<li className='products__item' key={index}>
								<ProductCard
									title={product.title}
									price={product.price}
									imageUrl={product.imageUrl}
									addInCart={() => addToCart({ title: product.title, price: product.price, imageUrl: product.imageUrl })}
								/>
							</li>
						))}
				</ul>
			</div>
		</section>
	)
}
