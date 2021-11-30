import jwt  from 'jsonwebtoken';
import settings from '../db/settings';

const generarJWT = ( correo: String, nombre: String ) => {

    return new Promise( (resolve, reject) => {

        const payload = { correo, nombre };

        jwt.sign( payload, settings.SECRET, {
            expiresIn: '4h'
        }, ( err, token) => {

            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })

    })
}




export default generarJWT;

