-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: spotifydb
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `musicas`
--

DROP TABLE IF EXISTS `musicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `musicas` (
  `id_musicas` int NOT NULL AUTO_INCREMENT,
  `nome_musica` varchar(100) NOT NULL,
  `artista_musica` varchar(100) NOT NULL,
  `liked` tinyint(1) DEFAULT NULL,
  `duracao_musica` varchar(10) DEFAULT NULL,
  `foto_musica` varchar(200) DEFAULT NULL,
  `genero_musica` varchar(45) NOT NULL,
  `id_artista` int NOT NULL,
  `albuns_id_album` int NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_musicas`),
  KEY `fk_musicas_artista_idx` (`id_artista`),
  KEY `fk_musicas_albuns1_idx` (`albuns_id_album`),
  CONSTRAINT `fk_musicas_albuns1` FOREIGN KEY (`albuns_id_album`) REFERENCES `albuns` (`id_album`),
  CONSTRAINT `fk_musicas_artista` FOREIGN KEY (`id_artista`) REFERENCES `artista` (`id_artista`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `musicas`
--

LOCK TABLES `musicas` WRITE;
/*!40000 ALTER TABLE `musicas` DISABLE KEYS */;
INSERT INTO `musicas` VALUES (5,'Tossie Slide','Drake',NULL,NULL,NULL,'hip hop',3,0,NULL),(6,'Yes Indeed','Drake',NULL,NULL,NULL,'hip hop',3,0,NULL),(7,'God´s Plan','Drake',NULL,NULL,NULL,'hip hop',3,0,NULL),(8,'Nice For What','Drake',NULL,NULL,NULL,'hip hop',3,0,NULL),(9,'Nonstop','Drake',NULL,NULL,NULL,'hip hop',3,0,NULL),(10,'A fila anda','Leo Costta',1,'2:40','https://bit.ly/3eoGGrA','Pagode',1,2,'https://bit.ly/3apzW9R'),(11,'Amor de fim de noite','Leo Costta',1,'3:27','https://bit.ly/3eoGGrA','Pagode',1,2,'https://bit.ly/2wTtZnT'),(12,'Tudo seu','Leo Costta',0,'1:56','https://bit.ly/3eoGGrA','Pagode',1,2,'https://bit.ly/2RSajbf'),(13,'Falso amor','Leo Costta',1,'2:49','https://bit.ly/3eoGGrA','Pagode',1,2,'https://bit.ly/2VIubyv');
/*!40000 ALTER TABLE `musicas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-07 12:05:30
