CREATE TABLE `cliente` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `cnpj` varchar(45) NOT NULL,
  `razao_social` varchar(90) NOT NULL,
  `nome_do_contato` varchar(90) NOT NULL,
  `telefone` varchar(45) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `endereco` (
  `id_endereco` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `logradouro` varchar(90) NOT NULL,
  `numero` int(45) NOT NULL,
  `complemento` varchar(45),
  `bairro` varchar(45) NOT NULL,
  `cidade` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `cep` int(45) NOT NULL,
  `latitude` FLOAT(45) NOT NULL,
  `longitude` FLOAT(45) NOT NULL,
  PRIMARY KEY (`id_endereco`),
  KEY `id_cliente_idx` (`id_cliente`),
  CONSTRAINT `id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

