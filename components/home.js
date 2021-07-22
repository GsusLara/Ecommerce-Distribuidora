import Link from "next/link"

export default function Home({ tipoCambio }) {
    const { compra, venta, fecha } = tipoCambio
    return (
        <div className="container text-center boxPrincipal">
            <h1>Estamos en Home</h1>
            <p>Hoy es {fecha}</p>
            <p>la venta del dolar es de <strong>{venta}</strong></p>
            <p>la compra del dolar es de <strong>{compra}</strong></p>
            <div className="card">
                <div className="card-header">
                    Productos
                </div>
                <ul className="list-group list-group-flush">
                    <Link href="/Productos/pd1"><a className="list-group-item">pd1</a></Link>
                    <Link href="/Productos/pd2"><a className="list-group-item">pd2</a></Link>
                    <Link href="/Productos/pd3"><a className="list-group-item">pd3</a></Link>
                </ul>
            </div>
        </div>
    )
}