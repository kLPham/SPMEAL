require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = {
  redirectAfterMakeASale(req, res) {
    stripe.charges.create(req.body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send({ error: stripeErr });
      } else {
        req.session.paid = true;
        req.session.purchases = req.session.cart;

        delete req.session.cart;
        res.redirect(200, '/');
      }
    });
  }
};
