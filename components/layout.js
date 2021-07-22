import Footer from "./footer"
import NavbarSub from "./navbar"


export default function Layout({ children }) {
    return (
        <div className="container-fluid">
            <NavbarSub />
            {children}
            <Footer/>
        </div>
    )
}
