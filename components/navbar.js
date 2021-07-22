import Link from "next/link";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export default function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container">

                <Link href="/">
                    <a className="navbar-brand">
                        <img src="/logo.png" alt="distribuidora diamasa" className="logo" />
                    </a>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Cuenta />
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
                            <input className="form-control text-center me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
                            <button className="btn btn-light botonBusqueda" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const Cuenta = () => {
    const [login, setlogin] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginShow = () => setlogin(true);
    const loginClose = () => setlogin(false);
    const validateForm = () => {
		return email.length > 0 && password.length > 0;
	};
    const validarUser = (user, password) => {
		if (email && password !== "") {
			alert("bienvenido");
            loginClose();
		} else {
			alert("set user and password");
		}
	};
    return (
        <>
        <a className="nav-link " aria-current="page" onClick={() => loginShow()}><i className="fas fa-user"></i>{" "}Iniciar sesión</a>
        <Modal className="modalNav" show={login} onHide={loginClose} backdrop="static" keyboard={false} animation={false}>
						<Modal.Header className="part">
							<Modal.Title>¡Bienvenido!</Modal.Title>
						</Modal.Header>
						<Modal.Body className="part">
							<Form className="mt-3">
								<Form.Group size="lg" controlId="email">
									<Form.Label>Correo electrónico</Form.Label>
									<Form.Control
										autoFocus
										type="email"
										autoComplete="email"
										value={email}
										onChange={e => setEmail(e.target.value)}
										onKeyPress={e => {
											if (e.key == "Enter") {
												validarUser(email, password);
											}
										}}
									/>
								</Form.Group>
								<Form.Group size="lg" controlId="password" className="mt-2">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control
										type="password"
										autoComplete="password"
										value={password}
										onChange={e => setPassword(e.target.value)}
										onKeyPress={e => {
											if (e.key == "Enter") {
												validarUser(email, password);
											}
										}}
									/>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer className="part">
							<Button variant="btn-warning" className="btn-warning" onClick={loginClose}>
								Close
							</Button>
							<Button
								variant="btn-warning"
								className="btn-warning"
								type="submit"
								disabled={!validateForm()}
								onClick={() => validarUser(email, password)}>
								Get in
							</Button>
						</Modal.Footer>
					</Modal>
            </>
    )
}
