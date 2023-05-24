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
('686bd0deb31f');

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
(1,'Pm two your run year.','Quality gas final try above decision finish.','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(2,'Too affect pretty.','Beautiful ten there meet suffer shake.','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(3,'Fight article including enter more.','Past item side music.','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(4,'Democratic southern improve notice give.','Data six agency movement agency everyone how.','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(5,'Child sell chance admit effort action rock.','Simply suddenly son behavior.','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL);

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
(1,'Mind live rate focus.','Piano','Guitar',5,149,1,'x','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(2,'As phone per thousand area understand feel trouble.','Guitar','Piano',6,126,0,'x','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(3,'After describe low member including production.','Guitar','Piano',5,143,0,'x','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(4,'From think any nice she.','Guitar','Piano',3,67,1,'x','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(5,'Art up court certain stop improve daughter.','Piano','Guitar',4,165,1,'x','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL);

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
(1,'Suffer return source impact north nice general.','Clearly she memory never direction will people hold.',1,'guest','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(2,'Environmental total raise region down citizen end.','Try start field everybody.',3,'lindseywilliams','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(3,'Child may development front task.','Prevent everyone well already hand federal join.',4,'smithkim','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(4,'Later same pressure.','Value week agree.',1,'guest','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(5,'Short boy heavy sense cut.','Organization scientist service wish attention industry college hour.',4,'smithkim','2023-05-24 23:29:24','2023-05-24 23:29:24',NULL);

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
(1,'guest',NULL,NULL,'guest@ggmail.com','pbkdf2:sha256:260000$ugW4yO8aOP0hvA1i$1f927edca7072c176e01993549d8ea206fdaedd299a35ad0c00599aab288ce9a',0,0,0,0,'2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(2,'popejared',NULL,NULL,'popejared@ggmail.com','pbkdf2:sha256:260000$K19J3rA9AjxKxfZJ$2719e51849bf0e97e748e8a170bea48052b78e7802517a90b1d7b1fdb19292b7',5,0,1,1,'2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(3,'lindseywilliams',NULL,NULL,'lindseywilliams@ggmail.com','pbkdf2:sha256:260000$mnua4w1PCESMOPbn$3b6039b8fa8160fa284904677b5011a0c209fc7256faaafdc7be24e4455ab61e',9,8,9,0,'2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(4,'smithkim',NULL,NULL,'smithkim@ggmail.com','pbkdf2:sha256:260000$x2W7a1czCzG5JQHC$b5ad23c6c6dd4699c04d37f3b0312a9da32bd7172cdedcf740473e507462a7f6',7,5,0,0,'2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(5,'amata',NULL,NULL,'amata@ggmail.com','pbkdf2:sha256:260000$ygHYgFGtqLelRNIe$217b92466c1b8deb52f7883d62059516a2b458b636246b844af242b8b99eb221',4,1,2,0,'2023-05-24 23:29:24','2023-05-24 23:29:24',NULL),
(6,'wagnershelby',NULL,NULL,'wagnershelby@ggmail.com','pbkdf2:sha256:260000$HmsCUKUnj1ykLG4e$3d6bef149c1549ab51b18d9e7d24ff7910c54e0307009eabdb19f827c5412eec',6,0,6,0,'2023-05-24 23:29:24','2023-05-24 23:29:24',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
