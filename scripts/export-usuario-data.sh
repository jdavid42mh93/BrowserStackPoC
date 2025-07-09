#!/bin/bash

# Script para exportar datos de usuario desde tu contenedor Docker local
# Ejecuta este script para obtener los datos exactos de tu contenedor

echo "🔄 Exportando datos de la tabla usuario..."

# Ajusta estos valores según tu configuración de Docker
CONTAINER_NAME="your_postgres_container_name"  # Cambia por el nombre de tu contenedor
DB_NAME="postgres"
DB_USER="postgres"

# Exportar la estructura y datos de la tabla usuario
docker exec $CONTAINER_NAME pg_dump -U $DB_USER -d $DB_NAME -t usuario --data-only --inserts > database/usuario_data.sql

echo "✅ Datos exportados a database/usuario_data.sql"
echo "📝 Revisa el archivo y copia los INSERT statements a database/init.sql"

# Mostrar los datos actuales
echo ""
echo "📊 Datos actuales en tu contenedor:"
docker exec $CONTAINER_NAME psql -U $DB_USER -d $DB_NAME -c "SELECT id, firstname, lastname, city FROM usuario ORDER BY id;"
