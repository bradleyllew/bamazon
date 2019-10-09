// requiring the programs needed
const mysql = require("mysql");
const inquirer = require("inquirer");

// setting up the variables
const prices = [125, 5, 10, 10, 40, 7, 35, 5, 25, 25];
// var for how many (stock_quantity user wants to buy)
let howMany = 0;
// var for user choice of product
let choices = "";

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

start();
// to display all the products available to customer, including id, name, & price
function start() {
    connection.connect(function (err) {
        // console.log("inside connection")
        if (err) throw err;
        connection.query("SELECT item_id, product_name, price FROM products", function (err, result) {
            if (err) throw err;
            console.log(result);
            buy();
        });
    });
}


// asks customer the id of the product wanted and how many of that item
function buy() {
    inquirer
        .prompt([
            {
                name: "username",
                type: "input",
                message: "Welcome to Bamazon! What is your kitty's name?"
            },
            {
                name: "toBuy",
                type: "rawlist",
                message: "What would you like to buy for your kitty?",
                choices: ["Kitty Condo", "Catnip Bag - small", "Catnip Bag - large", "Catnip Mouse", "Cat Bed", "Litterbox", "Kitty Litter", "Cosmic Toy", "Jingle Ball", "Crinkle Toy"]
            },
            {
                name: "howMany",
                type: "number",
                message: "How many would you like?"
            }])
        .then(function (answer) {
            console.log(answer)
            howMany = answer.howMany;
            choices = answer.toBuy;
            checker(answer);
        });
};
// based on their answer, check the stock quantities
function checker(answer) {
    let stock = 10;
    let remainingStock = (stock - answer.howMany);
    // let totalPrice = ()

    // if ==! enough, log 'Insufficient Quantity In Stock'
    if (answer.howMany > 10) {
        console.log("Sorry, insufficient quantity! Try again?");
        // restart the app so user can pick again
        buy();
    }

    // if === enough , updates quantity in table and displays -------- needs to show total price
    else if (remainingStock <= 10) {
        console.log("We have " + remainingStock + "_" + answer.toBuy + " left! Thanks for shopping Bamazon!");
        console.log(choices);
        let purchase = function () {
            // update quantity
            connection.query(
                "UPDATE products SET stock_quantity=? WHERE product_name=?",
                [
                    remainingStock, answer.toBuy
                ],
                function (err, result) {
                    if (err) throw err;
                    // console.log('result', result)
                    console.log("RESULTS UPDATED:");
                    connection.query("SELECT item_id, product_name, stock_quantity FROM products", function (err, result) {
                        if (err) throw err;
                        console.log(result);
                    });
                }
            );


        };
        purchase();

    };
};




// function total () {
// // for value of price array === to item in choices array???
//     prices[x] === answer.toBuy
//     console.log("Your total today is " + (prices[x] * remainingStock));
// }

// let total = function () {
//     // update quantity
//     connection.query(
//         "UPDATE products SET stock_quantity=? WHERE product_name=?",
//         [
//             remainingStock, answer.toBuy
//         ],
//         function (err, result) {
//             if (err) throw err;
//             // console.log('result', result)
//             console.log("RESULTS UPDATED:");
//             connection.query("SELECT item_id, product_name, stock_quantity FROM products", function (err, result) {
//                 if (err) throw err;
//                 console.log(result);
//             });
//         }
//     );


};