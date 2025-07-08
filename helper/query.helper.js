import pool from "./connection.helper.js";

export async function getFirstUsuario() {
    try {
        const res = await pool.query('SELECT * FROM usuario LIMIT 1');
        return res.rows[0];
    } catch (err) {
        console.error('Error obteniendo usuario:', err);
        return null;
    }
}