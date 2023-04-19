/*
SQLyog Community
MySQL - 10.4.22-MariaDB : Database - staccata
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`staccata` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `staccata`;

/*Table structure for table `alembic_version` */

DROP TABLE IF EXISTS `alembic_version`;

CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `alembic_version` */

insert  into `alembic_version`(`version_num`) values 
('58357c245e55');

/*Table structure for table `faq` */

DROP TABLE IF EXISTS `faq`;

CREATE TABLE `faq` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `faq` */

insert  into `faq`(`id`,`question`,`answer`,`created_at`,`updated_at`,`deleted_at`) values 
(1,'Berapa durasi maksimal dari lagu yang dapat dikonversi?','Untuk saat ini, belum ada batasan dari berapa durasi terlama lagu yang dapat dikonversi. Namun perlu diketahui bahwa semakin lama durasi dari lagu, maka semakin lama pula waktu yang dibutuhkan untuk proses konversi.','2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(2,'File jenis apa sajakah yang dapat dikonversi?','Jenis file yang dapat dikonversi adalah file berekstensi .mp3. File jenis lain tidak dapat diterima oleh sistem.','2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(3,'Apa maksud dari drop-down instrumen yang berada disebelah kiri tombol convert?','Drop-down berguna untuk memilih instrumen apa yang ada didalam file lagu yang diupload. Pengguna perlu memilih instrumen yang tepat agar mesin dapat melakukan konversi dengan benar.','2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(4,'Apa saja jenis pesan yang boleh dikirimkan pada bagian Reports?','Pengguna bebas mengirimkan pesan dalam bentuk kritikan, saran, maupun pesan lain seperti bug yang ditemukan, tampilan yang kurang menyenangkan, dll. Pesan yang dikirimkan akan berguna untuk pengembangan website kedepannya.','2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(5,'Bagaimana cara membatalkan like/dislike?','Untuk saat ini, fitur like/dislike hanya dapat dilakukan sekali dan tidak dapat dibatalkan.','2023-03-20 00:32:46','2023-03-20 00:32:46',NULL);

/*Table structure for table `performances` */

DROP TABLE IF EXISTS `performances`;

CREATE TABLE `performances` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `initial` varchar(6) NOT NULL,
  `target` varchar(6) NOT NULL,
  `user` int(11) DEFAULT NULL,
  `duration` int(11) NOT NULL,
  `accuracy` float NOT NULL,
  `loss` float NOT NULL,
  `like_status` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  CONSTRAINT `performances_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `performances` */

insert  into `performances`(`id`,`title`,`initial`,`target`,`user`,`duration`,`accuracy`,`loss`,`like_status`,`created_at`,`updated_at`,`deleted_at`) values 
(1,'Eye wife trouble hope recent American word necessary.','Piano','Guitar',4,120,87.6339,56.1178,0,'2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(2,'Other age nature leg letter.','Guitar','Piano',2,57,77.7997,63.4842,0,'2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(3,'Four under one remain when art check.','Piano','Guitar',4,37,73.8419,67.5629,1,'2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(4,'Hair real evidence whether.','Piano','Guitar',3,20,50.4981,57.9166,1,'2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(5,'Information appear case very sign.','Guitar','Piano',6,32,53.3363,96.9338,1,'2023-03-20 00:32:46','2023-03-20 00:32:46',NULL);

/*Table structure for table `reports` */

DROP TABLE IF EXISTS `reports`;

CREATE TABLE `reports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `reporter` int(11) DEFAULT NULL,
  `reporter_name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reporter` (`reporter`),
  CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`reporter`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `reports` */

insert  into `reports`(`id`,`title`,`description`,`reporter`,`reporter_name`,`created_at`,`updated_at`,`deleted_at`) values 
(1,'Prepare large establish late pretty class.','Policy add sign TV surface center.',1,'guest','2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(2,'Masalah pada pengunduhan lagu','saya baru saja melakukan konversi pada lagu yang saya kirimkan, namun saya tidak dapat mengunduh lagu tersebut. Apa yang terjadi? apakah terdapat bug pada fitur tersebut?',4,'Michael Grant','2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(3,'Meeting interesting election know put.','Budget daughter although talk say bill.',3,'aflores','2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(4,'If history right north movement run.','Out effect expert people room involve.',5,'susancarney','2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(5,'Today single protect only language.','Agree simply blood college.',2,'melissa06','2023-03-20 00:32:46','2023-03-20 00:32:46',NULL);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `file_converted_piano` int(11) NOT NULL,
  `file_converted_guitar` int(11) NOT NULL,
  `report_sent` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`first_name`,`last_name`,`email`,`password`,`file_converted_piano`,`file_converted_guitar`,`report_sent`,`level`,`created_at`,`updated_at`,`deleted_at`) values 
(1,'guest',NULL,NULL,'guest@ggmail.com','pbkdf2:sha256:260000$NsHLhDECYIWW7uR4$4418d809f1159a0e60c5fbd43698037cc787538b0de8ed3a536ac58889fe6566',0,0,0,0,'2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(2,'melissa06',NULL,NULL,'melissa06@ggmail.com','pbkdf2:sha256:260000$TvD2t77ALVIsCToo$084d5cb3686bd0bc1ac148582fd63acdd8b3861b2c847771ce1c3f0e24a75fe8',4,8,7,1,'2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(3,'aflores',NULL,NULL,'aflores@ggmail.com','pbkdf2:sha256:260000$xXgrIVJnJ0ojDamP$a64122987441fd958eb8a09bb66dffb1b3633d0294fb7a51a8cc702de8bd532e',2,8,3,0,'2023-03-20 00:32:46','2023-03-20 00:32:46','2023-04-17 23:23:46'),
(4,'pruittmichael','Michael','Grant','pruittmichael@ggmail.com','pbkdf2:sha256:260000$Da4ilXXVa2GMm1cs$2fefeb13f40653c09a0238387e85b0c1e35524a43041bbef0b5daf0d74376aa9',2,6,6,0,'2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(5,'susancarney',NULL,NULL,'susancarney@ggmail.com','pbkdf2:sha256:260000$YulcyU1DKJYHx0zb$5e90bbdc11bc9cc8d1fc7b3e3ef5d5ceb99321b5ae4329c2e76a5f3fe2bbd903',4,3,1,0,'2023-03-20 00:32:46','2023-03-20 00:32:46',NULL),
(6,'rwood',NULL,NULL,'rwood@ggmail.com','pbkdf2:sha256:260000$mVexJCKtmFONf8Ix$30f495b502f485b06be0e1eaaf572392362ff4c772573dff9ae29f805d2ffab6',1,9,6,0,'2023-03-20 00:32:46','2023-03-20 00:32:46',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
