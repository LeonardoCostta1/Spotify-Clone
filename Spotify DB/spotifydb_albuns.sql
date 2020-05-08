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
-- Table structure for table `albuns`
--

DROP TABLE IF EXISTS `albuns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albuns` (
  `id_album` int NOT NULL,
  `artista_album` varchar(45) NOT NULL,
  `nome_album` varchar(45) NOT NULL,
  `num_faixas_album` int NOT NULL,
  `ano_album` date NOT NULL,
  `foto_album` varchar(200) NOT NULL,
  `artista_id_artista` int NOT NULL,
  PRIMARY KEY (`id_album`),
  KEY `fk_albuns_artista1_idx` (`artista_id_artista`),
  CONSTRAINT `fk_albuns_artista1` FOREIGN KEY (`artista_id_artista`) REFERENCES `artista` (`id_artista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albuns`
--

LOCK TABLES `albuns` WRITE;
/*!40000 ALTER TABLE `albuns` DISABLE KEYS */;
INSERT INTO `albuns` VALUES (1,'Thiaguinho','Vibe',12,'2019-09-06','https://bit.ly/3adF2pu',2),(2,'Leo Costta','In Casa',4,'2020-01-06','https://bit.ly/3eoGGrA',1);
/*!40000 ALTER TABLE `albuns` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-07 12:05:33
