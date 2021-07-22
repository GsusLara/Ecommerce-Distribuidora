import Layout from '../components/layout'

export default function Info({value}) {
    return (
        <Layout>
             <div className="container text-center boxPrincipal">
                <h1>Informacion de la Empresa</h1>
                {value}
            </div>
        </Layout>
    )
}
export async function getServerSideProps() {
    return {
        props:{
            value:Math.random(),
        },
    };    
}