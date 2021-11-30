import { Sequelize } from 'sequelize';

const db = new Sequelize('type_node', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db