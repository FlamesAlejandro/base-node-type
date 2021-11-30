import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TipoTransporte = db.define('TipoTransporte', {
    descripcion: {
        type: DataTypes.STRING
    },
});

export default TipoTransporte;