/** @type {import('kanel').Config} */
module.exports = {
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'laravel_template',
    },

    preDeleteOutputFolder: true,
    outputPath: './resources/js/schemas',

    customTypeMap: {
        'pg_catalog.int64': 'number',
        'pg_catalog.tsvector': 'string',
        'pg_catalog.bpchar': 'string',
    },
};
