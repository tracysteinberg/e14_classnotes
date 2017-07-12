DROP TABLE pizza_orders;

CREATE TABLE pizza_orders (
  -- delete the first_name and last_name from pizza_orders
  id SERIAL4 PRIMARY KEY,
  topping VARCHAR(255),
  quantity INT2,
  first_name VARCHAR(255),
  last_name VARCHAR(255)
);
