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
('d2bef0f1f524');


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
(1,'guest',NULL,NULL,'guest@ggmail.com','pbkdf2:sha256:260000$XJ3k15hYyPdID4rw$442d8a8b06d662b98cfe51990cda059f6132cefdd5916c46b2fa619df2aee590',0,0,0,0,'2023-06-03 13:40:59','2023-06-03 13:40:59',NULL),
(2,'joseph60',NULL,NULL,'joseph60@ggmail.com','pbkdf2:sha256:260000$slPmA4pGVMKLl3Ot$5af04db6639e5676e730baa5f88b7d581ad78a2a976baa1c48aa189bbe602d7e',7,9,1,1,'2023-06-03 13:40:59','2023-06-03 13:40:59',NULL),
(3,'mercersarah',NULL,NULL,'mercersarah@ggmail.com','pbkdf2:sha256:260000$ZUTuserQCg60piyd$7d44ef24adaa585d2b5f2b16cc0f79d73cdfa13f6756acd2dfb5f2ea43c6cc41',2,5,2,0,'2023-06-03 13:40:59','2023-06-03 13:40:59',NULL),
(4,'andrea57',NULL,NULL,'andrea57@ggmail.com','pbkdf2:sha256:260000$zeYvrqRiqTdwSs43$f1156ad5a6030eba9324a2bb09a86de5ae0d8d352342774be7059b1717790142',7,7,10,0,'2023-06-03 13:40:59','2023-06-03 13:40:59',NULL),
(5,'tdunlap',NULL,NULL,'tdunlap@ggmail.com','pbkdf2:sha256:260000$EcPA60OIqW4qUbxu$2e9127351e3ce5a34c342186e4da1d01fee241d5f94fd77e1e223836dfbe02a5',2,3,10,0,'2023-06-03 13:40:59','2023-06-03 13:40:59',NULL),
(6,'elizabeth04',NULL,NULL,'elizabeth04@ggmail.com','pbkdf2:sha256:260000$CSRMZrZC3J24HPHq$9f7320325315d06f66cd5e10fc094ea7e41248f75a024ba3197f775f4ba94def',7,8,0,0,'2023-06-03 13:40:59','2023-06-03 13:40:59',NULL);

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
  `like_status` int(11) DEFAULT NULL,
  `gdrive_link` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  CONSTRAINT `performances_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `performances` */

insert  into `performances`(`id`,`title`,`initial`,`target`,`user`,`duration`,`like_status`,`gdrive_link`,`created_at`,`updated_at`,`deleted_at`) values 
(1,'Point truth once garden long let.','Guitar','Piano',4,94,0,'x','2023-06-03 13:40:59','2023-06-03 13:40:59',NULL),
(2,'Avoid firm after player.','Piano','Guitar',2,116,0,'x','2023-06-03 13:40:59','2023-06-03 13:40:59',NULL),
(3,'Performance choose coach.','Piano','Guitar',3,177,1,'x','2023-06-03 13:40:59','2023-06-03 13:40:59',NULL),
(4,'Audience speak exist different.','Piano','Guitar',5,161,0,'x','2023-06-03 13:40:59','2023-06-03 13:40:59',NULL),
(5,'Mother authority simple popular.','Guitar','Piano',3,199,1,'x','2023-06-03 13:40:59','2023-06-03 13:40:59',NULL);

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

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
