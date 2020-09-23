const express = require('express');
const app = express();
const Usuario = require('../models/usuario');

app.get('/listar', (req, res) => {
    Usuario.find({}).exec((err, usuarios) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            usuarios
        });
    })
})

app.post('/registrar', (req, res) => {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        kilometros: body.kilometros
    });

    if (usuario.kilometros > 4) {

        usuario.save((err, usuarioDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                usuario: usuarioDB
            });
        });

    } else {
        // console.log('hay que caminar más');
        return res.json({
            ok: false,
            message: 'Debes caminar más'
        })
    }



});

module.exports = app;