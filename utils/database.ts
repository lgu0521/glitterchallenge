import mariadb from 'mysql2';

const MariaDB = mariadb.createPool({
    host: "glia.cafe24app.com",
    port: 3306,
    user: "mohmind",
    password: "GQLT6xJ^8sVzn6d",
    database: "mohmind",
    connectionLimit: 5,
    multipleStatements: true,
    typeCast: function (field, next) {
        if (field.type == 'VAR_STRING') {
            return field.string();
        }
        return next();
    }

});

export default MariaDB