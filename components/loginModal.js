import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import {FacebookProvider, GoogleProvider} from "./fireProvider"
import SocialMediaAuth from "./fireAutentication";


export default function LoginModal() {
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
    const logginClick = async(provider)=>{
        const res = await SocialMediaAuth(provider);
        console.log(res);
    };
    return (
        <>
            <a className="nav-link " aria-current="page" onClick={() => loginShow()}><i className="fas fa-user"></i>{" "}Iniciar sesión</a>
            <Modal show={login} onHide={loginClose} backdrop="static" keyboard={false} animation={false}>
                <Modal.Header>
                    <button type="button" className="btn-close" onClick={loginClose} aria-label="Close"></button></Modal.Header>
                <Modal.Body>
                    <Modal.Title>
                    <img src="/logo_t.jpg" alt="distribuidora diamasa" className="logomodal" />
                    </Modal.Title>
                    <Form className="text-center mt-3">
                        <Form.Group size="lg" controlId="email">
                            <Form.Control
                                className="credenciales mx-auto"
                                placeholder="Correo electrónico"
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
                        <Form.Group size="lg" controlId="password" className="mt-2" >
                            <Form.Control
                                className="credenciales mx-auto"
                                placeholder="Contraseña"
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
                        <Button
                            className="mt-4 btEntrar"
                            variant="success"
                            type="submit"
                            disabled={!validateForm()}
                            onClick={() => validarUser(email, password)}>
                            Entrar
                        </Button>
                        <Form.Group size="lg" className="mt-3 text-center">
                            <p className="linea"><span>O inicia sesion con tu red</span></p>
                            <div className="container mt-2">
                                <button type="button" className="btn btnSocial pr-3" onClick={()=>logginClick(GoogleProvider)}><img src="/google.png" className="redSocial" alt="google" />{" "}Google</button>
                                <button type="button" className="btn btnSocial pl-3" onClick={()=>logginClick(FacebookProvider)}><img src="/facebook.png" className="redSocial" alt="facebook" />{" "}Facebook</button>
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="mt-3">
                    <div className="mx-auto"><p>Aun no tienes cuenta?, <a className="text-decoration-none" href="#">registrate</a> ahora!</p></div>
                </Modal.Footer>
            </Modal>
        </>
    )
}