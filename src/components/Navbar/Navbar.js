import "./Navbar.css";

function Navbar() {
	return (
		<nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='/'>
					Tushar Jain
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<a className='nav-link' aria-current='page' href='#about'>
								About
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#projects'>
								Projects
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#blogs'>
								Blogs
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								href='https://drive.google.com/drive/folders/13l955XStS-RjpFZUW37yBp7yR90zONKv?usp=sharing'
								target='_blank'
								rel='noreferrer'>
								Resume
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#contact'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
