-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2023 at 07:52 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fuel`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `user_id` int(100) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `mobile` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `created_date` varchar(100) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`user_id`, `name`, `email`, `password`, `mobile`, `created_date`) VALUES
(2, 'Admin', 'admin@gmail.com', 'test', '09790675343', '2021-01-19');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_1` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_2` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_3` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_5` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_6` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_7` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_8` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_9` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_10` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_11` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_12` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_13` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`cus_id`, `email`, `field_1`, `field_2`, `field_3`, `field_4`, `field_5`, `field_6`, `field_7`, `field_8`, `field_9`, `field_10`, `field_11`, `field_12`, `field_13`, `created_date`) VALUES
(14, 'bunk@gmail.com', 'Pak State Oil', '1234123412341234', '1024', '123', '1234567890', 'Onthe Way', 'user@gmail.com', 'Petrol', '1', '224', '05:32', '33.56194562782112', '73.01896113814784', '2023-01-09'),
(15, 'bunk@gmail.com', 'Pak State Oil', '123412341234', '1223', '213', '1234567890', 'Pending', 'user@gmail.com', 'Petrol', '1', '103', '11:17', '', '', '2023-04-05');

-- --------------------------------------------------------

--
-- Table structure for table `business`
--

CREATE TABLE `business` (
  `cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_1` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_2` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_3` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_5` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_6` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_7` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_8` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_9` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_10` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_11` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_12` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_13` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_14` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `business`
--

INSERT INTO `business` (`cus_id`, `email`, `field_1`, `field_2`, `field_3`, `field_4`, `field_5`, `field_6`, `field_7`, `field_8`, `field_9`, `field_10`, `field_11`, `field_12`, `field_13`, `field_14`, `created_date`) VALUES
(54, 'bunk@gmail.com', 'Bharat Petroleum', 'Mettupalayam', '359, Mettupalayam Rd,', 'Tatabad', 'Tatabad', 'Coimbatore', '641043', '0422 256 5099', 'Approval', '11.012166272305457', '76.95850366668697', '10', '8', '', '2021-12-05'),
(55, 'bunk@gmail.com', 'HP Petrol Pump', 'Gachibowli', 'Journalists Colony Phase 3, Phase 3, Gachibowli, Hyderabad, Telangana', 'Hyderabad', 'Bypass', 'Hyderabad', '500075', '1234567980', 'Approval', '17.385', '78.4867', '25', '20', 'Petrol & Diesel', '2021-12-05'),
(56, 'bunk@gmail.com', 'Indian oil', 'tnagar', 'usman road', 'chennai', 'tnagar', 'chennai', '123682', '1234567890', 'Approval', '17.385', '78.4867', '', '', 'Petrol & Diesel', '2021-09-09'),
(57, 'bunk@gmail.com', 'Pak State Oil', 'Ghousia', 'chowk farooq azam', 'Chowk', 'main road', 'rawalpindi', '123456', '123456789', 'Approval', '23.1019', '79.5184', '', '', 'Petrol & Diesel', '2023-01-09');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_1` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_2` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_3` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_4` varchar(300) COLLATE utf8_bin NOT NULL,
  `field_5` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_6` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_7` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_8` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_9` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_10` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_11` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`cus_id`, `email`, `field_1`, `field_2`, `field_3`, `field_4`, `field_5`, `field_6`, `field_7`, `field_8`, `field_9`, `field_10`, `field_11`, `created_date`) VALUES
(33, 'business@gmail.com', 'Arun', 'Thanks for the services', '', '', '', '', '', '', '', '', '', '2021-02-05'),
(34, 'business@gmail.com', 'Ram', 'thanks', '', '', '', '', '', '', '', '', '', '2021-02-05');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `user_id` int(100) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `mobile` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_1` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_2` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_3` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_4` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `created_date` varchar(100) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`user_id`, `name`, `email`, `password`, `mobile`, `field_1`, `field_2`, `field_3`, `field_4`, `created_date`) VALUES
(6, 'Arun', 'business@gmail.com', 'test', '1234567890', 'Shop', 'chennai', '1223122312231223', '', '2021-01-29'),
(7, 'Ram', 'user123@gmail.com', 'test', '1234567890', 'Shop', 'Chennai', '1234123412341234', '', '2021-01-31'),
(8, 'Best Wheels', 'arun@gmail.com', 'test', '1234567980', 'chennai', 'T nagar', '1234123412341234', '', '2021-02-05'),
(10, 'bunk', 'bunk@gmail.com', 'test', '1234567890', 'coimbatore', 'coimbatore', 'Ram Nagar', '', '2021-12-05'),
(11, 'test', 'bunk2@gmail.com', 'test', '1234567890', 'test', 'test', 'test', '', '2021-09-09'),
(12, 'Indian Oil', 'bunk3@gmail.com', 'test', '1234567908', 'Hyberabad', 'Hyberabad', 'Hyberabad', '', '2021-09-09');

-- --------------------------------------------------------

--
-- Table structure for table `price`
--

CREATE TABLE `price` (
  `cus_id` int(255) NOT NULL,
  `email` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_1` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_2` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `price`
--

INSERT INTO `price` (`cus_id`, `email`, `field_1`, `field_2`, `created_date`) VALUES
(1, 'bunk@gmail.com', 'Petrol', '103', '2023-04-05'),
(3, 'bunk@gmail.com', 'Diesel', '85', '2023-04-05'),
(4, 'bunk2@gmail.com', 'Petrol', '85', '2023-04-05');

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

CREATE TABLE `user_login` (
  `user_id` int(100) NOT NULL,
  `name` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `mobile` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_1` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_2` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_3` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_4` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `field_5` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `created_date` varchar(100) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user_login`
--

INSERT INTO `user_login` (`user_id`, `name`, `email`, `password`, `mobile`, `field_1`, `field_2`, `field_3`, `field_4`, `field_5`, `created_date`) VALUES
(6, 'Panneer', 'user@gmail.com', 'test', '1234567890', 'chennai', 'chennai', 'test', 'test', '65', '2021-01-30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `business`
--
ALTER TABLE `business`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `price`
--
ALTER TABLE `price`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `user_login`
--
ALTER TABLE `user_login`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_login`
--
ALTER TABLE `admin_login`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `business`
--
ALTER TABLE `business`
  MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `price`
--
ALTER TABLE `price`
  MODIFY `cus_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_login`
--
ALTER TABLE `user_login`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
