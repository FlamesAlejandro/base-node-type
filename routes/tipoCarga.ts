import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TipoCarga = db.define('TipoCarga', {
    descripcion: {
        type: DataTypes.STRING
    },
});

export default TipoCarga;