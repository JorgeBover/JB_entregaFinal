var express = require('express');
var router = express.Router();
var serviciosModel = require('./../models/serviciosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/servicios', async function (req, res, next) {
    let servicios = await serviciosModel.getServicios();

    servicios = servicios.map(servicios => {
        if (servicios.imagen) {
            const img = cloudinary.url(servicios.imagen);
        
            return {
                ...servicios,
                img
            }
        } else {
            return {
                ...servicios,
                img: ''
            }
        }
    });

    res.json(servicios);

});

router.post('/reservas', async (req, res) => {
    const mail = {
        to: 'jorgebover@gmail.com',
        subject: 'Reserva web',
        html: `Nueva solicitud de reserva. <br>  
        <br>
        Nombre del cliente: ${req.body.nombre} <br>
        Teléfono: ${req.body.telefono} <br>
        E-mail: ${req.body.mail} <br>
        Ingreso: ${req.body.ingreso} <br>
        Salida: ${req.body.salida} <br>
        Tipo de habitación: ${req.body.habitacion} <br>
        Cantidad: ${req.body.cantidad} <br>
        Adultos: ${req.body.adultos} <br>
        Niños: ${req.body.ninos} <br>
        <br>
        ${req.body.nombre} ha consultado: <br>
        ${req.body.consulta}.`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});



module.exports = router;