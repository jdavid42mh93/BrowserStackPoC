# BrowserStack PoC - Test Automation

## 🐳 Docker PostgreSQL Commands

### Gestión del Contenedor
```bash
# Crear contenedor
docker run --name postgresDB -e POSTGRES_PASSWORD=jdavid42mh93 -p 5432:5432 -d postgres

# Eliminar contenedor
docker rm -f postgresDB

# Verificar estado del contenedor
docker ps -a | grep postgresDB

# Ver logs del contenedor
docker logs postgresDB
```

### Conexión a PostgreSQL
```bash
# Ingresar a la consola de postgres
docker exec -it postgresDB psql -U postgres -d postgres

# Ejecutar comando directo (sin entrar a la consola)
docker exec -it postgresDB psql -U postgres -d postgres -c "SELECT version();"
```

## 📊 Comandos Útiles de PostgreSQL

### Listar Bases de Datos y Tablas
```bash
# Listar todas las bases de datos
docker exec -it postgresDB psql -U postgres -c "\l"

# Listar tablas de la base actual
docker exec -it postgresDB psql -U postgres -d postgres -c "\dt"

# Describir estructura de una tabla
docker exec -it postgresDB psql -U postgres -d postgres -c "\d usuario"

# Listar usuarios/roles
docker exec -it postgresDB psql -U postgres -c "\du"
```

### Consultas de Datos
```bash
# Ver todos los usuarios
docker exec -it postgresDB psql -U postgres -d postgres -c "SELECT * FROM usuario;"

# Contar registros
docker exec -it postgresDB psql -U postgres -d postgres -c "SELECT COUNT(*) FROM usuario;"

# Buscar usuario específico
docker exec -it postgresDB psql -U postgres -d postgres -c "SELECT * FROM usuario WHERE email = 'test@example.com';"

# Ver últimos 5 usuarios
docker exec -it postgresDB psql -U postgres -d postgres -c "SELECT * FROM usuario ORDER BY id DESC LIMIT 5;"
```

### Gestión de Datos
```bash
# Ejecutar script SQL
docker exec -i postgresDB psql -U postgres -d postgres < database/init.sql

# Backup de datos
docker exec postgresDB pg_dump -U postgres -d postgres > backup.sql

# Restaurar datos
docker exec -i postgresDB psql -U postgres -d postgres < backup.sql

# Limpiar tabla
docker exec -it postgresDB psql -U postgres -d postgres -c "DELETE FROM usuario;"
```

## 🔍 Comandos Interactivos (dentro de psql)

Una vez conectado con: `docker exec -it postgresDB psql -U postgres -d postgres`

```sql
-- Listar bases de datos
\l

-- Listar tablas
\dt

-- Describir tabla
\d usuario

-- Cambiar de base de datos
\c nombre_base

-- Ver comandos disponibles
\?

-- Salir
\q

-- Limpiar pantalla
\! clear

-- Ver historial de comandos
\s

-- Ejecutar comando del sistema
\! ls

-- Tiempo de ejecución de queries
\timing
```

## 🛠️ Troubleshooting

### Problemas Comunes
```bash
# Verificar si PostgreSQL está corriendo
docker exec postgresDB pg_isready -U postgres

# Verificar puerto en uso
netstat -an | findstr 5432

# Reiniciar contenedor
docker restart postgresDB

# Verificar logs por errores
docker logs postgresDB --tail 50

# Verificar conexión desde la aplicación
node scripts/verify-rds-connection.js
```

### Reset Completo
```bash
# Eliminar y recrear contenedor
docker rm -f postgresDB
docker run --name postgresDB -e POSTGRES_PASSWORD=jdavid42mh93 -p 5432:5432 -d postgres

# Esperar a que inicie
sleep 5

# Inicializar datos
docker exec -i postgresDB psql -U postgres -d postgres < database/init.sql
```