import { DataTypes } from 'sequelize';
import db from '../db/connection';

const VariedadCarga = db.define('VariedadCarga', {
    descripcion: {
        type: DataTypes.STRING
    },
});

export default VariedadCarga;