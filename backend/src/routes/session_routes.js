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
                                message : 'sesión iniciada'
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

module.exports = router;