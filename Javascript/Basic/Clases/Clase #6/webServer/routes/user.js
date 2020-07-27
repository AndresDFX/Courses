const express = require('express');
const app = express();
const connection = require("../mysql.conf").connection;

//Traer todos los usuarios
app.get('/user', (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM users', (error, results, fields) => {
        if (error) { throw error };
        connection.end();
        res.json(results);
    });
});

//Traer al usuario cuya id sea :id
app.get('/user/:id', (req, res) => {
    let id = req.params.id;
    connection.connect();
    connection.query(`SELECT * FROM users WHERE id = ${id}`, (error, results, fields) => {
        if (error) { throw error };
        connection.end();
        res.json(results[0]);
    });
});

app.post('/user', (req, res) => {

    try {
        let body = req.body;
        res.json({ user: body })
    } catch (err) {
        res.status(201).json({
            ok: false,
            err
        });

    }
});

//Actualizar el usuario :id
app.put('/user/:id', (req, res) => {
    res.json('put Usuario')
});

//Borrar el usuario :id
app.delete('/user/:id', (req, res) => {
    res.json('delete Usuario')
});

module.exports = app;

