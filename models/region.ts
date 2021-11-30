import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Region = db.define('Region', {
    descripcion: {
        type: DataTypes.STRING
    },
    numeroRomano: {
        type: DataTypes.STRING
    },
});

export default Region;