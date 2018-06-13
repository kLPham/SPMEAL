module.exports = {
  getMealsFromCart: (req, res, next) => {
    // const db = req.app.get('db');
    const dbInstance = req.app.get('db');

    dbInstance
      .get_meals_from_cart()
      .then(meals => {
        res.status(200).send(meals);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
//     const {
//       meal_id,
//       meal_type,
//       meal_title,
//       image_url,
//       price,
//       quantity,
//       description
//     } = req.body;
//   }
// };
