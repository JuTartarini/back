const router = require('express').Router();
const models = require('../models');
const User = models.Users;

// todos os usuários user.dataValues
router.get('/', (req, res) => {
  // findAll() => http://docs.sequelizejs.com/manual/querying.html

  User.findAll()
    .then(users => {
      const usersList = users.map(user => user.dataValues)
      res.send(usersList)
    });
});

// Usuário específico
router.get('/:id', (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then(user => {
      res.send(user);
    })
});

// ou
// router.get('/:id', (req, res) => {
// pk = primary key
//   User.findByPk(req.params.id)
//   .then(user => {
//     console.log(user);

//     res.send(user)
//   });
// })

router.post('/', (req, res) => {
  User.create(req.body)
  .then(user => {
    res.status(201).send(user);
  })
});

router.put('/:id', (req, res) => {
  User.update({ ...req.body }, { where: { id: req.params.id }})
    .then(() => {
      User
        .findByPk(req.params.id)
        .then(user => res.send(user))
    })
});

router.delete('/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200));
});

module.exports = router;
