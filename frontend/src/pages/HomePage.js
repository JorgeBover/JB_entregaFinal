import '../styles/Componentes/Pages/HomePage.css';
import React from 'react';

const HomePage = (props) => {
    return (

        <main>

            <div className="carrusel">
                {/* <img src="images/index/hotel.jpg" alt=""/>  */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/index/hotel.jpg" class="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src="images/index/hotel2.jpg" class="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src="images/index/hotel3.jpg" class="d-block w-100" alt="" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            <div className="holder">

                <div className="detalle">

                    <h3>ELEGANCIA EUROPEA EN LOS BARRIOS PORTEÑOS</h3>

                    <p>Ubicado en el barrio de Parque Chas, PCH resulta en lo mejor de las comodidades modernas con glamur
                        de
                        estilo europeo. Alójese en nuestras suites, reúnase con colegas y amigos para tomar cócteles en
                        nuestro bar o disfrute un día
                        en nuestro spa, una real escapada en medio de la ciudad</p>

                </div>

            </div>
           
        </main>
    );
}

export default HomePage;