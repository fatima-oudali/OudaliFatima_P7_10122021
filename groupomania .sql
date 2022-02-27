-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 27 fév. 2022 à 22:27
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `contenu` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `contenu`, `user_id`, `post_id`, `date`) VALUES
(3, 'Slt ', 28, 4, '2022-02-17 21:11:39'),
(32, 'salut', 21, 4, '2022-02-21 00:51:24'),
(34, 'hello', 21, 4, '2022-02-21 00:56:02'),
(35, 'Hi !', 21, 4, '2022-02-21 00:57:05'),
(36, 'slt', 21, 9, '2022-02-21 00:57:29'),
(44, 'slt', 21, 9, '2022-02-21 00:57:48'),
(55, '123', 21, 4, '2022-02-21 16:01:17'),
(57, '123', 21, 9, '2022-02-21 16:09:18'),
(58, '444', 21, 4, '2022-02-21 16:10:20'),
(60, '555', 21, 4, '2022-02-21 16:12:45'),
(61, '555', 21, 4, '2022-02-21 16:12:48'),
(62, '555', 21, 4, '2022-02-21 16:12:49'),
(64, '555', 21, 4, '2022-02-21 16:12:50'),
(72, '222', 21, 4, '2022-02-21 16:48:12'),
(75, '99', 21, 9, '2022-02-21 16:53:42'),
(76, '00', 21, 4, '2022-02-21 16:55:16'),
(77, '44', 21, 4, '2022-02-21 16:55:42'),
(78, '88', 21, 4, '2022-02-21 16:56:30'),
(79, ',', 21, 4, '2022-02-21 17:01:22'),
(80, 'cc', 21, 4, '2022-02-21 17:09:03'),
(81, 'cc', 21, 4, '2022-02-21 17:09:36'),
(82, '44456', 21, 4, '2022-02-21 17:09:41'),
(83, '44456', 21, 4, '2022-02-21 17:09:45'),
(84, '77', 21, 4, '2022-02-21 17:10:04'),
(87, '111', 21, 4, '2022-02-21 17:34:51'),
(88, '48521256', 21, 4, '2022-02-21 17:35:24'),
(89, '48521256', 21, 4, '2022-02-21 17:35:26'),
(90, '888', 21, 4, '2022-02-21 17:38:34'),
(91, '88', 21, 4, '2022-02-21 17:41:45'),
(92, '88888', 21, 4, '2022-02-21 17:45:18'),
(93, '77', 21, 4, '2022-02-21 17:50:54'),
(94, 'kkhgf', 21, 4, '2022-02-21 18:12:06'),
(95, '111', 21, 4, '2022-02-21 18:28:15'),
(96, 'salutt', 21, 4, '2022-02-21 19:57:38'),
(103, 'hello', 21, 9, '2022-02-21 22:29:40'),
(104, '22', 21, 9, '2022-02-21 22:31:24'),
(105, '22', 21, 9, '2022-02-21 22:31:27'),
(106, '2222', 21, 9, '2022-02-21 22:31:32'),
(107, '2222', 21, 9, '2022-02-21 22:31:33'),
(108, 'hello !', 21, 9, '2022-02-21 22:31:55'),
(115, 'èèèè.............', 21, 4, '2022-02-21 22:47:09');

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `contenu` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`id`, `contenu`, `user_id`, `date`, `image`) VALUES
(4, 'Salut', 29, '2022-02-02 21:41:00', NULL),
(9, 'Il fait beau aujourd\'hui !', 21, '2022-02-19 17:51:44', NULL),
(10, 'null', 21, '2022-02-24 15:36:12', 'http://localhost:3000/images/télécharger.jpg1645716972712.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `pseudo`, `email`, `password`, `isAdmin`) VALUES
(21, 'fatima', 'oud.tima@hotmail.com', '$2b$10$NgdnXX7CQEqZttAl3DxMg.WSd3A2C18QLgzPSXfcbde6fYbxSWpOm', 0),
(26, 'test1', 'test11@test.com', '$2b$10$Y3IkwcIm4bP6L3FFYvpZIOYVR584VTFqjk0QHEWohQr1nWG3McnsW', 0),
(28, 'timazar', 't@test.com', '$2b$10$5I4Ru4LQV3gIyW0GA.fCeuNYeijmMdu2AAIDxm.UqUjoVPeb60noO', 0),
(29, 'zora', 'zora@test.com', '$2b$10$7/wPYia9KGGUoLnsEa2qw.oHd1UidzyDNYZAPcx.h8Ms3yM7C07FG', 0),
(31, 'test4', 'test4@test.com', '$2b$10$Bzm3ZNCxiWma1knz955syuIWuPdYfoDz8Vcvh2IMwfPxtpdQ6iFf.', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT pour la table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
