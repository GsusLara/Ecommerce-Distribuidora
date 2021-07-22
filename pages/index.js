import Home from '../components/home'
import Layout from "../components/layout"

export default function Index({ dataTipocambio }) {
  return (
    <Layout>
      <Home tipoCambio={dataTipocambio} />
    </Layout>
  )
}
export async function getServerSideProps() {

  const res = await fetch("https://tipodecambio.paginasweb.cr/api", {
    method: 'GET',
    redirect: 'follow'
  })
  const dataTipocambio = await res.json()
  return {
    props: {
      dataTipocambio,
    },
  }
}
