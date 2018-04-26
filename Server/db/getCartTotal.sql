SELECT SUM(meals.price * cart.quantity)

FROM cart

JOIN meals ON cart.meal_id = meals.meal_id

WHERE order_id=$1 ;