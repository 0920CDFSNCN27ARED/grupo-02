-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: coredb
-- ------------------------------------------------------
-- Server version	5.7.24

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
-- Table structure for table `payment_method`
--

DROP TABLE IF EXISTS `payment_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_method` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `method` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_method`
--

LOCK TABLES `payment_method` WRITE;
/*!40000 ALTER TABLE `payment_method` DISABLE KEYS */;
INSERT INTO `payment_method` VALUES (1,'credit_card'),(2,'debit_card'),(3,'bank_transfer'),(4,'cash');
/*!40000 ALTER TABLE `payment_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  `description` text,
  `price` float NOT NULL,
  `image_name` varchar(100) DEFAULT NULL,
  `category` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Cheesecake Frutos Rojos','Base de galletitas crocante, relleno de queso crema y cobertura de frutos rojos según estación (compota casera, con frutillas y arandanos en temporada o frutos rojos congelados fuera de temporada).',1200,'cake-frutilla.jpeg','clásica'),(6,'Rogel ','Rogel clásico con merengue italiano, relleno de dulce de leche.',950,'rogel.jpg','clásica'),(7,'1 Letra o número chico','Letra o número de tamaño chico (15 x 20 cm aproximadamente). Opciones de base: Galletita de Vainilla, Chocolate o Almendras o Merengue crocante (sin TACC). Relleno: Dulce de leche + Ganache de chocolate (Semiamargo,, con leche o blanco). Decoración: Flores de Buttercream en gama de colores a elección y Merenguitos.',1250,'Letra-numero-chico-2.jpg','decorada'),(8,'Moana','3 capas de bizcochuelo humedecido con almíbar y 2 capas de relleno. Bizcochuelo vainilla o chocolate relleno de 1 capa de ganache de chocolate semiamargo y 1 capa de compota de frambuesas y buttercream de vainilla.',3550,'moana.jpeg','decorada'),(9,'Mini Flores','Pesa 1.5 kg y rinde 8 a 10 porciones. \\r\\nBizcochuelo de chocolate relleno de 2 capas de Nutella, buttercream de Nutella y pedacitos de Ferrero Rocher.',2800,'mini-flores.jpg','decorada'),(11,'Torta Oreo','Relleno de queso crema y dulce de leche con dos capas de galletitas Oreo y corazón de dulce de leche. Cobertura de dulce de leche y Oreos.\r\n',1250,'oreo.jpg','clásica'),(13,'Torta de Prueba ','Probando update',1234,'torta-manzana.jpeg','clásica');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `payment_method_id` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `quantity` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `payment_method_id` (`payment_method_id`),
  CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_method` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,1,1,22,1),(2,2,1,57,2),(3,3,1,95,3),(4,3,2,31,3),(5,1,1,82,1),(6,4,2,92,5),(7,8,1,22,1),(8,10,4,67,5),(9,9,2,43,2),(10,7,1,58,1);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(40) DEFAULT NULL,
  `last_name` varchar(40) DEFAULT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `image_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `users_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jandy','Climar','jclimar0@google.ru','AbLCNvOMLd',2,'test'),(2,'Jandy','Climar','jclimar0@google.ru','AbLCNvOMLd',1,'test'),(3,'Annetta','Hirschmann','ahirschmann2@craigslist.org','VrInNscXMn',2,'‪‪test‪'),(4,'Anet','Vickress','avickress3@jugem.jp','jIYaNWt',2,'img.jpg'),(5,'Aloysia','McJury','amcjury4@example.com','6FboOJRUIy',2,'img.jpg'),(6,'Pascale','Neligan','pneligan5@godaddy.com','jntRj24',2,'img.jpg'),(7,'Luke','Avramovitz','lavramovitz6@list-manage.com','tXQu9IfEI',2,'img.jpg'),(8,'Corilla','Banck','cbanck7@github.io','vnv5s0oMxp',2,'img.jpg'),(9,'Ferdinand','Graysmark','fgraysmark8@hubpages.com','aH6GT1V',2,'img.jpg'),(10,'Danika','Hinge','dhinge9@cam.ac.uk','2l2Sfehu',2,'hola.jpg'),(11,'Ili','Jofre','ili@gmail.com','$2b$10$LHNWx4kcf68Oz0hAUb9sCedniv1dVFUe3QtlsHSD4QuHBDe.p9SrG',2,'Apolo.jpeg'),(12,'Iliana','Jofre','ilianamicaela@hotmail.com','$2b$10$20x940nszKb46xN8HC.rxO7btQ9LDkxCHoA6nzERWWOYEux/V53pi',1,'Apolo.jpeg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_category`
--

DROP TABLE IF EXISTS `users_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_category`
--

LOCK TABLES `users_category` WRITE;
/*!40000 ALTER TABLE `users_category` DISABLE KEYS */;
INSERT INTO `users_category` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `users_category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-25 20:49:48
