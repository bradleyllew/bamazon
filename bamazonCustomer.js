var mysql = require("mysql");
var inquirer = require("inquirer");

var products = ["Kitty Condo $125", "Catnip Bag(sm) $5", "Catnip Bag(lg) $10", "Catnip Mouse $10", "Cat Bed $40", "Litterbox $7", "Kitty Litter $35", "Cosmic Toy $5", "Jingle Ball $25", "Crinkle Toy $25"];

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// to display all the products available to customer, including id, name, & price
function start() {
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT item_id, product_name, price FROM products", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
    buy();
}

// asks customer the id of the product wanted and how many of that item
function buy() {
    inquirer
        .prompt(
            {
                name: "username",
                type: "input",
                message: "What is your kitty's name?"
            },
            {
                name: "toBuy",
                type: "rawlist",
                message: "What would you like to buy for your kitty?",
                choices: ["Kitty Condo $125", "Catnip Bag(sm) $5", "Catnip Bag(lg) $10", "Catnip Mouse $10", "Cat Bed $40", "Litterbox $7", "Kitty Litter $35", "Cosmic Toy $5", "Jingle Ball $25", "Crinkle Toy $25"]
            },
            {
                name: "howMany",
                type: "number",
                message: "How many would you like?"
            })
        .then(function (answer) {
            // based on their answer, welcome owner & kitty
            if (inquirerResponse.username) {
                console.log(inquirerResponse.username + " is going to love their new " + inquirerResponse.choices);
            }
            // based on their answer, check the stock quantities
            switch (answer) {
                case "Kitty Condo $125":
                    checker();
                    break;

                case "Catnip Bag(sm) $5":
                    checker();
                    break;

                case "Catnip Bag(lg) $10":
                    checker();
                    break;

                case "Catnip Mouse $10":
                    checker();
                    break;

                case "Cat Bed $40":
                    checker();
                    break;

                case "Litterbox $7":
                    checker();
                    break;

                case "Kitty Litter $35":
                    checker();
                    break;

                case "Cosmic Toy $5":
                    checker();
                    break;

                case "Jingle Ball $25":
                    checker();
                    break;

                case "Crinkle Toy $25":
                    checker();
                    break;
            }
        });
}

// to check request against stock
function checker() {

    // if ==! enough, log 'Insufficient Quantity In Stock'
    if (inquirerResponse.howMany > 10) {
        console.log("Sorry, insufficient quantity! Try again?");
        // restart the app so user can pick again
        start();
    }
    // if === enough , updates quantity in table and displays -------- needs to show total price
    else if (inquirerResponse.howMany <= 10) {
        var purchase = function () {
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: howMany.id
                    },
                    {
                        product_name: choices.id
                    }
                ],
                connection.query("SELECT item_id, product_name, price FROM products", function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                });
            // function(error) {
            //     if (error) throw err;
            //     console.log("Thanks for your purchase!");
            //     start();
            // }
              );
    }
    purchase();
}



}