import Link from "next/link";
import LoginModal from "../components/loginModal"

export default function Navbar() {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light">
			<div className="container" >
				<Link href="/">
					<a className="navbar-brand">
						<img src="/logo.jpg" alt="distribuidora diamasa" className="logo" />
					</a>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
					<ul className="navbar-nav ">
						<li className="nav-item">
							<LoginModal />
						</li>
						<li className="nav-item">
							<Link href="/rutas">
								<a className="nav-link" aria-current="page" >Entregas</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/info">
								<a className="nav-link" >¿Quienes Somos?</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-12 col-lg-4">
				<div className="row justify-content-center">
					<div className="col-10">
						<form className="d-flex ">
							<input className="form-control text-center me-2 espacioBusqueda" type="search" placeholder="Buscar producto" aria-label="Search" />
							<button className="btn btn-light botonBusqueda" type="submit"><i className="fas fa-search"></i></button>
						</form>
					</div>
				</div>
			</div>
		</nav>
	)
}


