import '../../styles/Componentes/Layout/Nav.css'
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink activeClassName='activo' exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/habitaciones">Habitaciones</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/servicios">Servicios</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/reservas">Reservas</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;