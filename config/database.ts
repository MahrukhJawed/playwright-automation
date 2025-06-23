require('dotenv').config();

export const config = {
    type: "mssql",
    driver: 'msnodesqlv8',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
    domain: process.env.DB_DOMAIN,
    database: process.env.DB_NAME,
    options: {
        trustServerCertificate: true,
        trustedconnection: true,
        integratedSecurity: true,
        encrypt: true,
    },
};
