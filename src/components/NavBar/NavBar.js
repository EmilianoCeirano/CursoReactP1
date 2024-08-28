import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => { 
    return (
        <nav>
            <h3>Electricidad Ceirano</h3>
            <div>
                <button>Instalacion Electrica</button>
                <button>Medicion de Puesta a Tierra</button>
                <button>Aires Acondicionados</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar