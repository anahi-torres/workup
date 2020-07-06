const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.post('/', (req, res) =>{

        let sql = `SELECT *
                     FROM user_profile
                    WHERE user_email = ?
                      AND user_password = ?
                  `;

        let values =[
                        req.body.email,
                        req.body.password
                    ]

        conexion.query(sql, values, (err, result, fields) =>{
                if ( err ) {
                    res.json(
                        {
                            status : 'error',
                            message: 'No es posible acceder, intente nuevamente en unos minutos'
                        }
                    )
                }
                else{
                    if ( result.length == 1 ){

                        res.json(
                            {
                                status  : 'ok',
                                message : 'sesión iniciada',
                                user    : result
                            }
                        )
                    }
                    else{
                        res.json(
                            {
                                status  : 'error',
                                message : 'Usuario y/o contraseña inválidos'
                            }
                        )
                    }
                }
            }
        )
    }
)

router.post( '/registro', (req, res) =>{

    console.log(req.query)
        
        sqlInsert = `
                        INSERT INTO user_profile(user_email, user_password, user_nombre, user_apellido)
                        VALUES(
                                "${req.body.email}",
                                "${req.body.contraseña}",
                                "${req.body.nombre}",
                                "${req.body.apellido}"
                              )
                    `;

        conexion.query( sqlInsert,
                function( err, result, fields ){
                    if( err ){
                        res.json(
                            {
                                status  : 'error',
                                message : 'Error al registrarse'
                            }
                        )
                    }
                    else{
                        res.json(
                            {
                                status  : 'ok',
                                message : '¡Usuario registrado con éxito! Por favor inicie sesión.'
                            }
                        )
                    }
                }
            )
    }
)

module.exports = router;