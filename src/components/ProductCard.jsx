import { useState } from 'react'
export default function ProductCard({ title, price, imageUrl, addInCart }) {
	const [isActiveAddCart, setIsActiveAddCart] = useState(false)
	const [isActiveAddFavorite, setIsActiveAddFavorite] = useState(false)

	const toggleState = (setter, currentState) => {
		currentState(!setter)
		if (!setter) {
			setTimeout(() => {
				currentState(setter)
			}, 1000)
		}
	}

	const handleAddCart = () => {
		toggleState(isActiveAddCart, setIsActiveAddCart)
		addInCart()
	}
	const handleAddFavorite = () => toggleState(isActiveAddFavorite, setIsActiveAddFavorite)

	return (
		<article className='product-card'>
			<div className='product-card__header'>
				<img src={imageUrl} alt='' width={133} height={112} />
				<img
					src={isActiveAddFavorite ? '/image/products/favorite-checked.svg' : '/image/products/favorite.svg'}
					alt=''
					className='product-card__favorite'
					width={40}
					height={40}
					onClick={handleAddFavorite}
				/>
			</div>
			<span className='product-card__title'>{title}</span>
			<div className='product-card__footer'>
				<div className='product-card__info'>
					<span className='product-card__info-subtitle'>ЦЕНА:</span>
					<span className='product-card__info-price'>{price}</span>
				</div>
				<img
					src={isActiveAddCart ? '/image/products/add-cart-checked.svg' : '/image/products/add-cart.svg'}
					alt=''
					onClick={handleAddCart}
				/>
			</div>
		</article>
	)
}
