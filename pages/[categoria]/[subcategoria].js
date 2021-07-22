import Head from 'next/head'
import Layout from "../../components/layout"
import { useRouter } from "next/router"

export default function Subcategoria() {
    const router = useRouter(); //permite obtener datos de la ruta
    const { categoria, subcategoria } = router.query; //destructuring del objeto router (ruta navegador)
    return (
        <Layout>
            <Head>
                <title>{categoria} | {subcategoria}</title>
            </Head>
            <div className="container text-center boxPrincipal">
                <h1>Este es un componente de ruta dinamica</h1>
                <p>Puede ser la descripcion de un producto especifico! y su ruta cambia dinamicamente.</p>
                <p>por ejemplo, en esta pagina estamos en la ruta <strong>{categoria}</strong> ,<strong>{subcategoria} </strong></p>
                <p>vamos a un producto</p>
            </div>
        </Layout>
    )
}
