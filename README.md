# bamazon

#bamazon is a CLI APP and is an online marketplace mock-up (ie Amazon).  It uses node.js, MySQL, Inquirer npm.

#I ceated a MySQL Database called 'bamazon', and then a Table inside of that database called 'products'.
The products table has each of the following columns:

  *item_id (unique id for each product)
  *product_name (Name of product) - populated with 10 different products
  *department_name
  *price (cost to customer)
  *stock_quantity (how much of the product is available in stores)
 
#Then I created a Node application called bamazonCustomer.js, which will first display all of the items available for sale. 
The app then prompts users with two messages:

  *The first asks them the ID of the product they would like to buy.
  *The second asks how many units of the product they would like to buy.

#Once the customer has placed the order, my application checks if the 'store' has enough of the product to meet the customer's request.

  *If not, the app should logs 'Insufficient quantity!', and then prevents the order from going through.
  *If the store does have enough of the product, the store 'fulfills' the customer's order.


#Then, the SQL database is updated to reflect the remaining quantity, and the customer is shown the total cost of their purchase.

#Please see the screenshots below:






