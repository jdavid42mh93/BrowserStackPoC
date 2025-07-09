-- Datos de la tabla usuario para GitHub Actions
-- Este archivo debe coincidir con los datos de tu contenedor local

CREATE TABLE IF NOT EXISTS usuario (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    telephone VARCHAR(30) NOT NULL,
    address VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    postcode VARCHAR(20) NOT NULL,
    status VARCHAR(30) DEFAULT 'pending'
);

-- Insertar datos (ajusta estos datos para que coincidan con tu contenedor local)
INSERT INTO usuario (firstname, lastname, telephone, address, city, postcode, status) VALUES
('Juan', 'Pérez', '+380123456789', '123 Khreshchatyk Street', 'Kyiv', '01001', 'active'),
('María', 'García', '+380987654321', '456 Maidan Nezalezhnosti', 'Kyiv', '01002', 'active'),
('Carlos', 'López', '+380555123456', '789 Lvivska Street', 'Kyiv', '01003', 'active'),
('Ana', 'Rodríguez', '+380333987654', '321 Podil District', 'Kyiv', '01004', 'active'),
('Luis', 'Martínez', '+380777888999', '654 Pechersk Area', 'Kyiv', '01005', 'active');
