const router = require('express').Router();
const models = require('../models');
const Users = models.User;
const Orders = models.Orders;
const Products = models.Products;
const OrderItem = models.OrderProducts;

router.get('/', (req, res) => Orders.findAll(
  {
    include: [{ model: OrderItem, include: [Products] }, Users]
  })
  .then(order => res.send(order))
);

router.get('/:id', (req, res) => {
  Orders.findByPk(req.params.id, { include: [{ model: OrderItem, include: [Products] }, Users] })
    .then(order => {
      res.send(order)
    })
});

router.post('/', (req, res) => {
  Orders.create(req.body, {include: [OrderItem]})
  .then(order => {
    res.status(201).send(order)
  })
})


router.put('/:id', (req, res) => Orders.update(
  { ...req.body },
  {
    where: { id: req.params.id }
  })
  .then(() => {
    Orders
      .findByPk(req.params.id)
      .then(order => res.send(order))
  })
);

router.delete('/:id', (req, res) => {
  Orders.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200));
});

module.exports = router;