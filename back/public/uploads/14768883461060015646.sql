-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2016 at 02:37 PM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ashik`
--

-- --------------------------------------------------------

--
-- Table structure for table `commodity`
--

CREATE TABLE `commodity` (
  `commodityid` int(10) UNSIGNED NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `year` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `amountexpected` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tenure` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `filePath` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userid` int(10) UNSIGNED NOT NULL,
  `reqstatus` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `commodity`
--

INSERT INTO `commodity` (`commodityid`, `type`, `model`, `year`, `amountexpected`, `tenure`, `description`, `filePath`, `userid`, `reqstatus`, `created_at`, `updated_at`) VALUES
(24, 'Laptop', 'dell', '2008', '12000', '2 months', 'hello', 'uploads/1474817511125671020.jpg', 15, '', '2016-09-25 10:01:51', '2016-09-25 10:01:51'),
(25, 'scooty', 'honda', '2000', '2000', '2 months', 'hi', 'uploads/1474817928659958777.jpg', 15, '', '2016-09-25 10:08:48', '2016-09-25 10:08:48'),
(26, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/1475255644976353976.jpg', 15, '', '2016-09-30 11:44:04', '2016-09-30 11:44:04'),
(27, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/147525565647531242.jpg', 15, '', '2016-09-30 11:44:16', '2016-09-30 11:44:16'),
(28, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/1475255658884618147.jpg', 15, '', '2016-09-30 11:44:18', '2016-09-30 11:44:18'),
(29, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/1475255659900321263.jpg', 15, '', '2016-09-30 11:44:19', '2016-09-30 11:44:19'),
(30, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/1475255659331779685.jpg', 15, '', '2016-09-30 11:44:19', '2016-09-30 11:44:19'),
(31, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/1475255660212252075.jpg', 15, '', '2016-09-30 11:44:20', '2016-09-30 11:44:20'),
(32, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/1475255660349580670.jpg', 15, '', '2016-09-30 11:44:20', '2016-09-30 11:44:20'),
(33, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/1475255660217311880.jpg', 15, '', '2016-09-30 11:44:21', '2016-09-30 11:44:21'),
(34, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/14752556611420575399.jpg', 15, '', '2016-09-30 11:44:21', '2016-09-30 11:44:21'),
(35, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/1475255661552314886.jpg', 15, '', '2016-09-30 11:44:21', '2016-09-30 11:44:21'),
(36, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/1475255661621170925.jpg', 15, '', '2016-09-30 11:44:22', '2016-09-30 11:44:22'),
(37, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/1475255661623705949.jpg', 15, '', '2016-09-30 11:44:22', '2016-09-30 11:44:22'),
(38, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/14752556621329853909.jpg', 15, '', '2016-09-30 11:44:22', '2016-09-30 11:44:22'),
(39, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/1475255662123357812.jpg', 15, '', '2016-09-30 11:44:22', '2016-09-30 11:44:22'),
(40, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/147525566249511319.jpg', 15, '', '2016-09-30 11:44:22', '2016-09-30 11:44:22'),
(41, 'Laptop', 'HP', '2009', '2000', '1 month', 'hello', 'uploads/14752556631382254067.jpg', 15, '', '2016-09-30 11:44:23', '2016-09-30 11:44:23'),
(42, 'phone', 'nokia', '2001', '2000', '2 months', 'the strongest phone', 'uploads/14758222321415079536.png', 20, '', '2016-10-07 01:07:12', '2016-10-07 01:07:12'),
(43, 'Laptop', 'lenovo', '2012', '20000', '20 days', 'dabba piece', 'uploads/1475825811467813779.png', 16, '', '2016-10-07 02:06:51', '2016-10-07 02:06:51'),
(44, 'phone', 'nexus', '2014', '20000', '2 days', 'nexus 5', 'uploads/1475825869113962616.png', 16, '', '2016-10-07 02:07:49', '2016-10-07 02:07:49'),
(45, 'phone', 'a', 'a', 'a', 'a', 'a', 'uploads/14758261501187178195.png', 16, '', '2016-10-07 02:12:30', '2016-10-07 02:12:30'),
(46, 'Laptop', 'a', 'a', 'a', 'a', 'a', 'uploads/147582622686315819.png', 16, '', '2016-10-07 02:13:46', '2016-10-07 02:13:46'),
(47, 'phone', 'a', 'a', 'a', 'a', 'a', 'uploads/1475826286166614771.png', 16, '', '2016-10-07 02:14:46', '2016-10-07 02:14:46'),
(48, 'Laptop', 'a', 'a', 'a', 'a', 'a', 'uploads/1475826329975419836.png', 16, '', '2016-10-07 02:15:29', '2016-10-07 02:15:29');

-- --------------------------------------------------------

--
-- Table structure for table `details`
--

CREATE TABLE `details` (
  `detailsid` int(10) UNSIGNED NOT NULL,
  `from` date NOT NULL,
  `to` date NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `amount` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `commodityid` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `details`
--

INSERT INTO `details` (`detailsid`, `from`, `to`, `status`, `amount`, `commodityid`, `created_at`, `updated_at`) VALUES
(20, '2016-09-21', '2016-09-30', 'Overdue', '10000', 24, '2016-09-25 10:01:51', '2016-09-30 00:39:44'),
(21, '2016-09-21', '2016-09-30', 'Running', '2000', 25, '2016-09-25 10:08:48', '2016-09-30 00:48:17'),
(22, '0000-00-00', '0000-00-00', 'Pending', '0', 26, '2016-09-30 11:44:04', '2016-09-30 11:44:04'),
(23, '0000-00-00', '0000-00-00', 'Pending', '0', 27, '2016-09-30 11:44:16', '2016-09-30 11:44:16'),
(24, '0000-00-00', '0000-00-00', 'Pending', '0', 28, '2016-09-30 11:44:18', '2016-09-30 11:44:18'),
(25, '0000-00-00', '0000-00-00', 'Pending', '0', 29, '2016-09-30 11:44:19', '2016-09-30 11:44:19'),
(26, '0000-00-00', '0000-00-00', 'Pending', '0', 30, '2016-09-30 11:44:19', '2016-09-30 11:44:19'),
(27, '0000-00-00', '0000-00-00', 'Pending', '0', 31, '2016-09-30 11:44:20', '2016-09-30 11:44:20'),
(28, '0000-00-00', '0000-00-00', 'Pending', '0', 32, '2016-09-30 11:44:20', '2016-09-30 11:44:20'),
(29, '0000-00-00', '0000-00-00', 'Pending', '0', 33, '2016-09-30 11:44:21', '2016-09-30 11:44:21'),
(30, '0000-00-00', '0000-00-00', 'Pending', '0', 34, '2016-09-30 11:44:21', '2016-09-30 11:44:21'),
(31, '0000-00-00', '0000-00-00', 'Pending', '0', 35, '2016-09-30 11:44:21', '2016-09-30 11:44:21'),
(32, '0000-00-00', '0000-00-00', 'Pending', '0', 36, '2016-09-30 11:44:22', '2016-09-30 11:44:22'),
(33, '0000-00-00', '0000-00-00', 'Pending', '0', 37, '2016-09-30 11:44:22', '2016-09-30 11:44:22'),
(34, '0000-00-00', '0000-00-00', 'Pending', '0', 38, '2016-09-30 11:44:22', '2016-09-30 11:44:22'),
(35, '0000-00-00', '0000-00-00', 'Pending', '0', 39, '2016-09-30 11:44:22', '2016-09-30 11:44:22'),
(36, '0000-00-00', '0000-00-00', 'Pending', '0', 40, '2016-09-30 11:44:22', '2016-09-30 11:44:22'),
(37, '0000-00-00', '0000-00-00', 'Pending', '0', 41, '2016-09-30 11:44:23', '2016-09-30 11:44:23'),
(38, '0000-00-00', '0000-00-00', 'Pending', '0', 42, '2016-10-07 01:07:12', '2016-10-07 01:07:12'),
(39, '0000-00-00', '0000-00-00', 'Pending', '0', 43, '2016-10-07 02:06:51', '2016-10-07 02:06:51'),
(40, '0000-00-00', '0000-00-00', 'Pending', '0', 44, '2016-10-07 02:07:49', '2016-10-07 02:07:49'),
(41, '0000-00-00', '0000-00-00', 'Pending', '0', 45, '2016-10-07 02:12:30', '2016-10-07 02:12:30'),
(42, '0000-00-00', '0000-00-00', 'Pending', '0', 46, '2016-10-07 02:13:46', '2016-10-07 02:13:46'),
(43, '2016-10-08', '2016-12-18', 'Running', '10000', 47, '2016-10-07 02:14:46', '2016-10-08 06:47:25'),
(44, '2016-10-08', '2016-10-08', '', '', 48, '2016-10-07 02:15:29', '2016-10-08 06:46:09');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2016_09_10_113018_create_users_table', 1),
('2016_09_15_131843_create_posts_table', 2),
('2016_09_22_150329_create_items_table', 3),
('2016_09_22_151824_create_commodity_table', 4),
('2016_09_23_153220_create_details_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userrole` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `username`, `email`, `password`, `phone`, `token`, `userrole`, `created_at`, `updated_at`) VALUES
(1, 'admin1', 'admin@a', 'e86fdc2283aff4717103f2d44d0610f7', '1111111111', '0c267714999d7d9868bb158f08ce2027', '2', '2016-09-10 07:10:42', '2016-09-10 07:10:42'),
(2, 'www.ffautomations.com', 'user@gmail.com', '96e79218965eb72c92a549dd5a330112', '1221212212', '4c7411288e0613a606db2e3547a6485f', '2', '2016-09-10 08:17:11', '2016-09-10 08:17:11'),
(3, 'ffauto', 'sdfvdf@q', '96e79218965eb72c92a549dd5a330112', '1212112121', '52c5d96e6ff40f28eab7d78604cdcbff', '2', '2016-09-10 08:18:46', '2016-09-10 08:18:46'),
(4, 'reddy1', 'qweqwqw@ws', 'e10adc3949ba59abbe56e057f20f883e', '1111111111', 'b1760d7c0d3936069faee836f8856aea', '2', '2016-09-14 12:14:44', '2016-09-14 12:14:44'),
(5, 'aaaaaaaaaaaaaa', 'user@gmail.comaa', '343b1c4a3ea721b2d640fc8700db0f36', '1111111111', '1166147820302411d1c49c8281971abd', '2', '2016-09-18 07:00:16', '2016-09-18 07:00:16'),
(6, 'uttejh', 'uttejh@gmail.com', '96e79218965eb72c92a549dd5a330112', '1111111111', '134d5d0761259d05c283b57c7ff95176', '2', '2016-09-18 07:03:17', '2016-09-18 07:03:17'),
(9, 'uttejhq', 'uttejh@gmail.com1', '1bbd886460827015e5d605ed44252251', '1111111111', '6cf057fc3f9092a37032cf29222f2934', '2', '2016-09-18 08:08:33', '2016-09-18 08:08:33'),
(10, 'sammya', 'uttejh@gmail.comasccccccccccsc', '96e79218965eb72c92a549dd5a330112', '1111111111', 'df1f08cf8faf93f3bcb187f6046c49fa', '2', '2016-09-20 14:06:40', '2016-09-20 14:06:40'),
(11, 'afdssaf', 'asfsd@q', '96e79218965eb72c92a549dd5a330112', '1111111111', 'fd9c16fb7ebd64eb9ccf8e3385e434e8', '2', '2016-09-21 03:31:31', '2016-09-21 03:31:31'),
(12, 'qwdwqd', 'qdwwqd@qqw', '96e79218965eb72c92a549dd5a330112', '1111111111', 'c7141a16ea4af60880f0f89d697fa887', '2', '2016-09-21 03:35:11', '2016-09-21 03:35:11'),
(13, 'qweqwe', 'eqq@s', '96e79218965eb72c92a549dd5a330112', '1111111111', 'e9425d04ab952254060462a7ebc8dcf0', '2', '2016-09-21 03:37:02', '2016-09-21 03:37:02'),
(14, 'qdqwdqwdq', 'wqw@wq', '7fa8282ad93047a4d6fe6111c93b308a', '1111111111', '3756d209fbe9bc07b3a3708eb8674304', '2', '2016-09-21 03:39:17', '2016-09-21 03:39:17'),
(15, 'uttejh reddy', 'qweqwqw@wsq', '96e79218965eb72c92a549dd5a330112', '1111111111', '5539e1e5463db428a76247ecf67af85a', '2', '2016-09-23 09:03:12', '2016-09-23 09:03:12'),
(16, 'john doe', 'johndoe@gmail.com', '96e79218965eb72c92a549dd5a330112', '1111111111', '83cb16633a8b80a5903ec77994569c7d', '2', '2016-10-05 12:51:59', '2016-10-05 12:51:59'),
(17, 'new user', 'newuser@dma.com', '96e79218965eb72c92a549dd5a330112', '1111111111', 'a35da8a94e692cd9ca3744d30cdfd929', '2', '2016-10-07 00:45:08', '2016-10-07 00:45:08'),
(18, 'qqqqqqqqqqq', 'qqqqqq@s', '7fa8282ad93047a4d6fe6111c93b308a', '1111111111', '9f25158b3a335d670de2bc2189e5e366', '2', '2016-10-07 00:47:44', '2016-10-07 00:47:44'),
(19, 'qqedwqefqw', 'qwefwqef@s', '96e79218965eb72c92a549dd5a330112', '1111111111', 'acb133cafd9deb3c9d076b28d013903c', '2', '2016-10-07 00:48:56', '2016-10-07 00:48:56'),
(20, 'noobie', 'noob@as', '7fa8282ad93047a4d6fe6111c93b308a', '1111111111', 'a6c75ecc2435c0b8fd65e3c8b13178f6', '2', '2016-10-07 00:50:13', '2016-10-07 00:50:13'),
(22, 'admin uttejh', 'admin@aa', '0192023a7bbd73250516f069df18b500', '1111111111', '800c659655ae033e9b2f08c5cf72e924', '1', '2016-10-07 03:47:01', '2016-10-07 03:47:01'),
(23, 'asdsadd', 'asdqw@s', '96e79218965eb72c92a549dd5a330112', '1111111111', 'bc3754bbd07822859b5aabbbdf2bc254', '2', '2016-10-07 04:36:15', '2016-10-07 04:36:15'),
(24, 'jachvahsvc', 'dajscjksbn@tg', '96e79218965eb72c92a549dd5a330112', '1111111111', '78c7ebbd096a60b248c0b21cc19783fb', '2', '2016-10-07 07:09:32', '2016-10-07 07:09:32'),
(25, 'asdasasa', 'asdfsdaf@add', '96e79218965eb72c92a549dd5a330112', '1111111111', '99d257733577cdc234dd628919dfa374', '2', '2016-10-07 07:11:38', '2016-10-07 07:11:38'),
(26, 'ashiktalupula', 'ashikhits3192@gmail.com', 'a19c9b80ab013835ea3955d77596a390', '9440583200', '2d9d1fb8cd6bcf4eed24d4cb3bc60c4f', '2', '2016-10-08 06:36:36', '2016-10-08 06:36:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `commodity`
--
ALTER TABLE `commodity`
  ADD PRIMARY KEY (`commodityid`),
  ADD KEY `commodity_userid_foreign` (`userid`);

--
-- Indexes for table `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`detailsid`),
  ADD UNIQUE KEY `commodityid` (`commodityid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `commodity`
--
ALTER TABLE `commodity`
  MODIFY `commodityid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `details`
--
ALTER TABLE `details`
  MODIFY `detailsid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `commodity`
--
ALTER TABLE `commodity`
  ADD CONSTRAINT `commodity_userid_foreign` FOREIGN KEY (`userid`) REFERENCES `users` (`uid`);

--
-- Constraints for table `details`
--
ALTER TABLE `details`
  ADD CONSTRAINT `details_commodityid_foreign` FOREIGN KEY (`commodityid`) REFERENCES `commodity` (`commodityid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
