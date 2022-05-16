import { NavLink } from 'react-router-dom';
import '../../styles/Componentes/Layout/Header.css'

const Header = (props) => {
    return (
        <header>
        <div className="holder">
            <NavLink exact to ='/'><img className="icono" src="images/index/pch.svg" alt=""/></NavLink>
            <h1>hotel parque chas</h1>

        </div>
        </header>
    );
}

export default Header;