import { DataTypes } from 'sequelize';
import db from '../db/connection';

const EmpresaCamion = db.define('EmpresaCamion', {
    rut: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    vigente: {
        type: DataTypes.INTEGER
    },
});

export default EmpresaCamion;