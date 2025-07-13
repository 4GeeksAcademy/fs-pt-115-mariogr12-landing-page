export const MiNavbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
			<div className="container-fluid">
				<a className="navbar-brand">Start Bootstrap</a>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">

					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#">Contact</a>
						</li>
					</ul>

				</div>
			</div>
		</nav >
	)
}