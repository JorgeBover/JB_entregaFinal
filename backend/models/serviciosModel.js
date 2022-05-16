const async = require('hbs/lib/async');
var pool = require('./bd');

async function getServicios() {
    var query = 'select * from servicios order by id desc limit 5';
    var rows = await pool.query(query);
    return rows;
}

async function agregarServicios(obj) {
    try {
        var query = 'insert into servicios set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function borraServicio(id) {
    var query = 'delete from servicios where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getServicioById(id) {
    var query = 'select * from servicios where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarServicio(obj, id) {
    try {
        var query = 'update servicios set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getServicios, agregarServicios, borraServicio, getServicioById, modificarServicio};