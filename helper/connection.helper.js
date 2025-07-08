import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres', // usuario por defecto creado por la imagen de postgres
    host: 'localhost', // o la IP de tu contenedor si no usas bridge
    database: 'postgres', // base de datos por defecto
    password: 'jdavid42mh93', // tu contraseña
    port: 5433, // puerto por defecto de postgres
});

export default pool;