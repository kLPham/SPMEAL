module.exports = {
  create: (req, res, next) => {
    const db = req.app.get('db');
    const {
      meal_id,
      meal_type,
      meal_title,
      image_url,
      price,
      quantity,
      description
    } = req.body;
  }
};
