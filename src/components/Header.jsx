export default function Header({OpenCart}) {
	return (
		<header className='header'>
			<div className='header__inner container'>
				<a href='#!' className='header__logo'>
					<img src='/image/header/logo.svg' alt='' className='header__logo-img logo-img'  />
				</a>
				<div className='header__info'>
					<h3 className='header__info-title'>React Sneakers</h3>
					<span className='header__info-description'>Магазин кроссовок</span>
				</div>
				<div className='header__action'>
					<ul className='header__action-menu'>
						<li className='header__action-item'>
							<a href='#!' className='header__action-link' onClick={OpenCart} >
								<div className='header__action-link-img'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										id='Layer_1'
										data-name='Layer 1'
										viewBox='0 0 24 24'
										width='20'
										height='20'>
										<path d='M23.27,9.03c-.57-.66-1.4-1.03-2.27-1.03h-.09C20.41,3.51,16.59,0,11.97,0S3.53,3.51,3.03,8h-.06c-.87,0-1.7,.38-2.27,1.03C.13,9.69-.12,10.56,0,11.42l1.06,7.42c.42,2.94,2.97,5.15,5.94,5.15h9.97c2.97,0,5.52-2.21,5.94-5.15l1.06-7.42c.12-.86-.13-1.73-.7-2.39ZM11.97,2c3.52,0,6.43,2.61,6.92,6H5.05c.49-3.39,3.4-6,6.92-6Z' />
									</svg>
								</div>
								<span className='header__action-text'>1205 руб.</span>
							</a>
						</li>
						<li className='header__action-item'>
							<a href='#!' className='header__action-link'>
								<div className='header__action-link-img'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20'>
										<g id='_01_align_center' data-name='01 align center'>
											<path d='M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z' />
										</g>
									</svg>
								</div>
								<span className='header__action-text'>Закладки</span>
							</a>
						</li>
						<li className='header__action-item'>
							<a href='#!' className='header__action-link'>
								<div className='header__action-link-img'>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20'>
										<g id='_01_align_center' data-name='01 align center'>
											<path d='M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z' />
											<path d='M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z' />
										</g>
									</svg>
								</div>
								<span className='header__action-text'>Профиль</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
