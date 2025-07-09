import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASSWORD || 'jdavid42mh93',
    port: process.env.DB_PORT || 5432, // Local: 5433, GitHub Actions: 5432
});

// Manejar errores de conexión
pool.on('error', (err) => {
    console.error('❌ Error inesperado en el pool de conexiones:', err);
});

export default pool;