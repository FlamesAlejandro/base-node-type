import { DataTypes } from 'sequelize';
import db from '../db/connection';

const UsuarioRol = db.define('UsuarioRol', {    
    vigente: {
        type: DataTypes.BOOLEAN
    },
    usuarioId: {
        type: DataTypes.INTEGER
    },
    rolId: {
        type: DataTypes.INTEGER
    },
});

export default UsuarioRol;