-- CreateTable
CREATE TABLE `Downloaded` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `count` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Students` (
    `email` VARCHAR(255) NOT NULL,
    `years` INTEGER NOT NULL,
    `student_id` VARCHAR(10) NOT NULL,
    `title` VARCHAR(10) NOT NULL,
    `full_name` VARCHAR(100) NOT NULL,
    `nickname` VARCHAR(50) NOT NULL,
    `birthdate` DATE NOT NULL,
    `gender` VARCHAR(10) NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `passwords` VARCHAR(255) NOT NULL,

    INDEX `years`(`years`),
    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teachers` (
    `email` VARCHAR(255) NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `full_name` VARCHAR(100) NOT NULL,
    `nickname` VARCHAR(50) NOT NULL,
    `birthdate` DATE NOT NULL,
    `gender` VARCHAR(10) NOT NULL,
    `phone` VARCHAR(15) NOT NULL,
    `passwords` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Years` (
    `id` INTEGER NOT NULL,
    `year_name` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`years`) REFERENCES `Years`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
