Crear contenedor: docker run --name postgresDB -e POSTGRES_PASSWORD=jdavid42mh93 -p 5432:5432 -d postgres
Eliminar contenedor: docker rm -f postgresDB
Ingresar a la consola de postgres: docker exec -it postgresDB psql -U postgres -d postgres