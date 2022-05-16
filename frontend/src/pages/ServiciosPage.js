import '../styles/Componentes/Pages/ServiciosPage.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ServicioItem from '../components/servicios/ServicioItem';

const ServiciosPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        const cargarServicios = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/servicios');
            setServicios(response.data);
            setLoading(false);
        };

        cargarServicios();
    }, []);

    return (
        <main>

            <div className="holder">

                <div className="detalle">

                    <h3>SERVICIOS Y COMODIDADES INOLVIDABLES</h3>
                    <p>Disfrute de nuestros servicios y comodidades, desde placeres gastronómicos en nuestro exclusivo bar,
                        hasta organización de bodas o conferencias en nuestro salón. Con la excelencia característica de
                        PCH.</p>

                </div>

            </div>

            <div className="carrusel">
                <img src="images/servicios/servicios.jpg" alt="" />

            </div>

            <div className="holder">
                <section className="servicios">

                    {loading ? (
                        <p>Cargando...</p>
                    ) : (

                        servicios.map(item => <ServicioItem key={item.id}
                            imagen={item.img} title={item.titulo} body={item.informacion} />)

                    )}



                </section>
            </div>

        </main>
    );
}

export default ServiciosPage;