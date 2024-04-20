-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2024 at 08:34 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stylish`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `CartId` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `ProductID` varchar(30) DEFAULT NULL,
  `DiscountPrice` decimal(10,2) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `Name` varchar(255) DEFAULT NULL,
  `MRP` decimal(10,2) DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`CartId`, `email`, `ProductID`, `DiscountPrice`, `timestamp`, `Name`, `MRP`, `Gender`) VALUES
(105, 'primstatus45@gmail.com', 'P1103', 19999.00, '2024-04-18 20:12:26', 'Sapphire Blue Indo Western Set', 11999.00, 'Male'),
(110, 'primstatus45@gmail.com', 'P1101', 38000.00, '2024-04-19 05:18:00', 'Warm-White Floral Sherwani Set', 35099.00, 'Male'),
(112, 'katakiyadhruvin@gmail.com', 'P1101', 38000.00, '2024-04-19 08:46:42', 'Warm-White Floral Sherwani Set', 35099.00, 'Male'),
(113, 'katakiyadhruvin@gmail.com', 'P1101', 38000.00, '2024-04-19 08:46:44', 'Warm-White Floral Sherwani Set', 35099.00, 'Male'),
(114, 'katakiyadhruvin@gmail.com', 'P1101', 38000.00, '2024-04-19 08:46:53', 'Warm-White Floral Sherwani Set', 35099.00, 'Male');

-- --------------------------------------------------------

--
-- Table structure for table `cloth_items`
--

CREATE TABLE `cloth_items` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `gender` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cloth_items`
--

INSERT INTO `cloth_items` (`id`, `name`, `link`, `gender`) VALUES
(1, 'Indo Western', 'http://localhost:3000/men', 'Male'),
(2, 'Sherwani', 'http://localhost:3000/men', 'Male'),
(3, 'Kurta-Jacket', 'http://localhost:3000/men', 'Male'),
(4, 'Lehenga', 'http://localhost:3000/women', 'Female'),
(5, 'Sarees', 'http://localhost:3000/women', 'Female'),
(6, 'Gown', 'http://localhost:3000/women', 'Female');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `cust_id` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cust_id`, `email`, `password`, `mobile`, `address`, `city`, `state`, `country`, `pincode`) VALUES
('CU000003', 'primstatus45@gmail.com', 'Pm@33445', '7878747588', 'gota', 'amd', 'gujrat', 'india', '394587'),
('CU000004', 'dk@gmail.com', 'Dk@33445', '8855774465', ' kapodra ,surat', 'surat', 'Gujarat', 'india', '395111'),
('CU000005', 'katakiyadhruvin@gmail.com', 'Ka@33445', '8855447711', 'gota', 'mumbai', 'maharastra', 'india', '359985');

--
-- Triggers `customer`
--
DELIMITER $$
CREATE TRIGGER `generate_cust_id` BEFORE INSERT ON `customer` FOR EACH ROW BEGIN
    DECLARE new_id VARCHAR(10);
    SET new_id = CONCAT('CU', LPAD((SELECT IFNULL(MAX(SUBSTRING(cust_id, 3) + 1), 1) FROM customer), 6, '0'));
    SET NEW.cust_id = new_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `ProductID` varchar(10) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `MRP` decimal(10,2) DEFAULT NULL,
  `DiscountPrice` decimal(10,2) DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ProductID`, `Name`, `MRP`, `DiscountPrice`, `Gender`) VALUES
('P1101', 'Warm-White Floral Sherwani Set', 35099.00, 38000.00, 'Male'),
('P1102', 'Biscuit Pastel  Kurta Jacket Set', 5999.00, 8999.00, 'Male'),
('P1103', 'Sapphire Blue Indo Western Set', 11999.00, 19999.00, 'Male'),
('P1104', 'Ivory Cream Rhinestone and Sitara Embroidered Bridal Lehenga', 34999.00, 49999.00, 'Female'),
('P1105', 'Teal Blue Luxe Kurta Jacket Set', 15999.00, 12999.00, 'Male'),
('P1106', 'Coral Blue Floral Art Nouveau Patterned Bridal Lehenga', 49.00, 44.00, 'Female'),
('P1107', 'Turquoise Blue Zari Weaved Saree', 11999.00, 4999.00, 'Female'),
('P1108', 'Bold Blue Gown', 12.00, 99.00, 'Female');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`CartId`);

--
-- Indexes for table `cloth_items`
--
ALTER TABLE `cloth_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ProductID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `CartId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `cloth_items`
--
ALTER TABLE `cloth_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
