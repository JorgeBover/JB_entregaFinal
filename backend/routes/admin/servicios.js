var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
var router = express.Router();
var serviciosModel = require('../../models/serviciosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function (req, res, next) {
  var servicios = await serviciosModel.getServicios();

  servicios = servicios.map(servicio => {
    if (servicio.imagen) {
      const imagen = cloudinary.image(servicio.imagen, {
        width: 100,
        crop: 'fill'
      });
      return {
        ...servicio,
        imagen
      }
    } else {
      return {
        ...servicio,
        imagen: ''
      }
    }
  })

  res.render('admin/servicios', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    servicios
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req, res, next) => {
  try {

    var imagen = '';
    if (req.files && Object.keys(req.files).length > 0) {
      img = req.files.imagen;
      imagen = (await uploader(img.tempFilePath)).public_id;

    };

    if (req.body.titulo != "" && req.body.informacion != "") {
      await serviciosModel.agregarServicios({
        ...req.body,
        imagen
      });
      res.redirect('/admin/servicios')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true, message: 'todos los campos son requeridos'
      });
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true, message: 'no se cargó servicio'
    });
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let servicio = await serviciosModel.getServicioById(id);
  if (servicio.imagen) {
    await (destroy(servicio.imagen));
  }

  await serviciosModel.borraServicio(id);
  res.redirect('/admin/servicios')
})

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var servicio = await serviciosModel.getServicioById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    servicio
  })
})

router.post('/modificar', async (req, res, next) => {
  try {

    let imagen = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      imagen = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        img = req.files.imagen;
        imagen = (await uploader(img.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      informacion: req.body.informacion,
      imagen

    }

    await serviciosModel.modificarServicio(obj, req.body.id);
    res.redirect('/admin/servicios');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true, message: 'No se modificicó el servicio'
    })
  }
});


module.exports = router;