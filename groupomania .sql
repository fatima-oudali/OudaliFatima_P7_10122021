-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 21 fév. 2022 à 02:07
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
(2, 'comment çava ?', 21, 5, '2022-02-17 21:11:39'),
(3, 'Slt ', 28, 4, '2022-02-17 21:11:39'),
(5, 'Hi !', 20, 6, '2022-02-17 21:11:39'),
(27, 'Bonjour', 21, 5, '2022-02-19 17:18:22'),
(28, 'Bonjour', 21, 5, '2022-02-19 17:18:26'),
(29, 'comment çava', 21, 5, '2022-02-19 17:19:20'),
(30, 'salut', 21, 5, '2022-02-21 00:48:12'),
(31, 'cc', 21, 4, '2022-02-21 00:49:39'),
(32, 'salutt', 21, 4, '2022-02-21 00:51:24'),
(33, 'salutt', 21, 9, '2022-02-21 00:51:42'),
(34, 'hello', 21, 4, '2022-02-21 00:56:02'),
(35, 'Hi', 21, 4, '2022-02-21 00:57:05'),
(36, 'slt', 21, 9, '2022-02-21 00:57:29'),
(37, 'slt', 21, 9, '2022-02-21 00:57:32'),
(38, 'slt', 21, 9, '2022-02-21 00:57:33'),
(39, 'slt', 21, 9, '2022-02-21 00:57:35'),
(40, 'slt', 21, 9, '2022-02-21 00:57:36'),
(41, 'slt', 21, 9, '2022-02-21 00:57:36'),
(42, 'slt', 21, 9, '2022-02-21 00:57:38'),
(43, 'slt', 21, 9, '2022-02-21 00:57:38'),
(44, 'slt', 21, 9, '2022-02-21 00:57:48'),
(45, '...', 21, 5, '2022-02-21 01:02:05'),
(46, 'cc', 21, 6, '2022-02-21 01:05:01');

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `contenu` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`id`, `contenu`, `user_id`, `date`) VALUES
(4, 'Salut', 29, '2022-02-02 21:41:00'),
(5, 'coucou cava ', 23, '2022-02-16 23:38:29'),
(6, 'Hello ^_^', 21, '2022-02-17 15:55:32'),
(9, 'Il fait beau aujourd\'hui !', 21, '2022-02-19 17:51:44');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `pseudo`, `email`, `password`) VALUES
(20, 'f', 'f@test.com', '$2b$10$yIcYXTUGE7pA2HbNt4cyA.AUPY2pW8buyRjxbhFsUKJHXbtLsQ6Wi'),
(21, 'fatima', 'oud.tima@hotmail.com', '$2b$10$NgdnXX7CQEqZttAl3DxMg.WSd3A2C18QLgzPSXfcbde6fYbxSWpOm'),
(23, 'test1', 'test1@test.com', '$2b$10$WbZEXwWDm4oE5pPzI7LVBewLIwNsADAuR8FYLqQhSc45b1vkUyDWG'),
(26, 'test1', 'test11@test.com', '$2b$10$Y3IkwcIm4bP6L3FFYvpZIOYVR584VTFqjk0QHEWohQr1nWG3McnsW'),
(28, 'timazar', 't@test.com', '$2b$10$5I4Ru4LQV3gIyW0GA.fCeuNYeijmMdu2AAIDxm.UqUjoVPeb60noO'),
(29, 'zora', 'zora@test.com', '$2b$10$7/wPYia9KGGUoLnsEa2qw.oHd1UidzyDNYZAPcx.h8Ms3yM7C07FG');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT pour la table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

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
