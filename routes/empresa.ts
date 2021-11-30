import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Empresa = db.define('Empresa', {
    rut: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
});

export default Empresa;