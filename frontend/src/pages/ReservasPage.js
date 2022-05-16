import '../styles/Componentes/Pages/ReservasPage.css'
import React, { useState } from 'react';
import axios from 'axios';

const ReservasPage = (props) => {

    const initialForm = {
        ingreso: '',
        salida: '',
        habitacion: '',
        cantidad: '',
        adultos: '',
        ninos: '',
        nombre: '',
        telefono: '',
        mail: '',
        consulta: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/reservas', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main>
            <div className="holder">

                <div className="detalle">

                    <h3>RESERVAS Y CONSULTAS</h3>
                    <p>Reserve sus habitaciones sin cargo o envíenos su consulta y con gusto la responderemos a la brevedad.</p>
                    <p>* Las reservas deberán ser confirmadas hasta 72 hs antes del ingreso. </p>

                </div>

                <div className="reservas">

                    <img src="images/reservas/reserva.jpg" alt=""/>

                        <div className="formularios">

                            <form action="/reservas" method='post' className="formulario" onSubmit={handleSubmit} >
                                <p>
                                    <label for="">Ingreso</label>
                                    <input type="date" name='ingreso' value={formData.ingreso} onChange={handleChange} />
                                </p>

                                <p>
                                    <label for="">Salida</label>
                                    <input type="date" name='salida' value={formData.salida} onChange={handleChange} />
                                </p>

                                <p>
                                    <label for="Habitaciones">Habitación</label>
                                    <select name="habitacion" id="" option={formData.habitacion} onChange={handleChange} >
                                        <option value="" selected disabled >Seleccione Habitación</option>
                                        <option value="E Lounge">E Lounge</option>
                                        <option value="Vista a Ciudad">Vista a Ciudad</option>
                                        <option value="Suite Presidencial">Suite Presidencial</option>
                                    </select>
                                </p>

                                <p>
                                    <label for="">Cantidad</label>
                                    <input type="number" name='cantidad' value={formData.cantidad} onChange={handleChange} />
                                </p>

                                <p>
                                    <label for="">Adultos</label>
                                    <input type="number" name='adultos' value={formData.adultos} onChange={handleChange} />
                                </p>

                                <p>
                                    <label for="">Niños</label>
                                    <input type="number" name='ninos' value={formData.ninos} onChange={handleChange} />
                                </p>

                               
                                <p>
                                    <label for="">Nombre</label>
                                    <input type="text" name='nombre' value={formData.nombre} onChange={handleChange} />
                                </p>

                                <p>
                                    <label for="">Teléfono</label>
                                    <input type="text" name='telefono' value={formData.telefono} onChange={handleChange} />
                                </p>

                                <p>
                                    <label for="">E-mail</label>
                                    <input type="text" name='mail' value={formData.mail} onChange={handleChange} />
                                </p>
                                <p>
                                    <label for="">Consulta</label>
                                    <textarea name="consulta" id="" cols="30" rows="10" value={formData.consulta} onChange={handleChange} ></textarea>
                                </p>
                                
                                <input type="submit" value="RESERVAR"/>

                                {sending ? <p>Enviando...</p> : null}
                                {msg ? <p>{msg}</p> : null}

                            </form>

                            
                        </div>


                </div>

            </div>


        </main>
    );
}

export default ReservasPage;