DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db; 
CREATE TABLE products(
	item_id INT(10) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	price INT(10) NOT NULL,
	stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES('Kitty Condo', 'pets', 125, 10),
		('Catnip Bag - small', 'pets', 5, 10),
		('Catnip Bag - large', 'pets', 10, 10),
		('Catnip Mouse', 'pets', 10, 10),
		('Cat Bed', 'pets', 40, 10),
		('Litterbox', 'pets', 7, 10),
		('Kitty Litter', 'pets', 35, 10),
		('Cosmic Toy', 'pets', 5, 10),
		('Jingle Ball', 'pets', 25, 10),
		('Crinkle Toy', 'pets', 25, 10);
        
        
