import { DataTypes } from 'sequelize';
import db from '../db/connection';

const CodigoMop = db.define('CodigoMop', {
    codigo: {
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.STRING
    },
});

export default CodigoMop;