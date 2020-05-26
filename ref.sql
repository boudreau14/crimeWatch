DROP TABLE IF EXISTS `crimes_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crimes_info` (
  `id` int DEFAULT NULL,
  `case_num` text,
  `date` text,
  `type` text,
  `desc` text,
  `loc_desc` text,
  `arrest` text,
  `beat` int DEFAULT NULL,
  `district` int DEFAULT NULL,
  `ward` int DEFAULT NULL,
  `neighborhood` text,
  `year` int DEFAULT NULL,
  `crime_lat` double DEFAULT NULL,
  `crime_long` double DEFAULT NULL,
  `hood_lat` double DEFAULT NULL,
  `hood_long` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;