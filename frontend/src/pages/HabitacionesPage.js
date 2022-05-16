import '../styles/Componentes/Pages/HabitacionesPage.css'
import React from 'react';
import { Link } from 'react-router-dom';

const HabitacionesPage = (props) => {
    return (
        <main>

            <div className="holder">

                <div className="detalle">

                    <h3>NUESTRAS SUITES</h3>

                    <p>Descanse en nuestras suites con la comodidad de estar en casa y disfrute nuestras instalaciones de
                        estilo europeo. Servicio a la habitación exclusivo las 24 horas.</p>

                </div>

            </div>

            <div className="carrusel">
                <img src="images/habitaciones/habitaciones.jpg" alt="" />

            </div>

            <div className="holder">

                <div className="habitacion">
                    <img src="images/habitaciones/habitacion1.jpg" alt="" />
                    <div className="caracteristicas">
                        <h4>HABITACION E LOUNGE</h4>
                        <ul>
                            <li>Una cama King o dos camas individuales, Una cama extra o una cuna</li>
                            <li>40 m² (430 ft²)</li>
                            <li>Tres adultos o dos adultos</li>
                        </ul>

                        <Link className='boton' to='/reservas'>RESERVAR</Link>

                    </div>

                </div>

                <div className="habitacion">

                    <div className="caracteristicas">
                        <h4>HABITACION CON VISTA A LA CIUDAD</h4>
                        <ul>
                            <li>Una cama King o dos camas individuales, Una cama extra o una cuna</li>
                            <li>40 m² (430 ft²)</li>
                            <li>Tres adultos, o dos adultos y un niño</li>
                        </ul>

                        <Link className='boton' to='/reservas'>RESERVAR</Link>

                    </div>

                    <img src="images/habitaciones/habitacion2.jpg" alt="" />

                </div>

                <div className="habitacion">
                    <img src="images/habitaciones/habitacion3.jpg" alt="" />
                    <div className="caracteristicas">
                        <h4>SUITE PRESIDENCIAL</h4>
                        <ul>
                            <li>Una cama King o dos camas individuales, Una cama extra o una cuna</li>
                            <li>40 m² (430 ft²)</li>
                            <li>Tres adultos, o dos adultos y un niño</li>
                        </ul>

                        <Link className='boton' to='/reservas'>RESERVAR</Link>

                    </div>


                </div>

            </div>

        </main>
    );
}

export default HabitacionesPage;