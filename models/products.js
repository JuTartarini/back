'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Products.associate = function (models) {
    Products.hasMany(models.OrderProducts, {foreignKey: 'productId'});

    // Products.bulkCreate([
    //   {
    //     "name": "Café americano",
    //     "price": 5
    //   },
    //   {
    //     "name": "Café com leite",
    //     "price": 7,
    //   },
    //   {
    //     "name": "Sanduíche de presunto e queijo",
    //     "price": 10,
    //   },
    //   {
    //     "name": "Suco de fruta natural",
    //     "price": 7,
    //   },
    //   {
    //     "name": "Hambúrguer simples (bovino)",
    //     "price": 10,
    //   },
      // {
      //   "name": "Hambúrguer simples (frango)",
      //   "price": 10,
      // },
      // {
      //   "name": "Hambúrguer simples (vegetariano)",
      //   "price": 10,
      // },
      // {
      //   "name": "Hambúrguer duplo (bovino)",
      //   "price": 15,
      // },
      // {
      //   "name": "Hambúrguer duplo (frango)",
      //   "price": 15,
      // },
      // {
      //   "name": "Hambúrguer duplo (vegetariano)",
      //   "price": 15,
      // },
      // {
      //   "name": "+ Adicional Ovo",
      //   "price": 1,
      // },
      // {
      //   "name": "+ Adicional Queijo",
      //   "price": 1,
      // },
      // {
      //   "name": "Batata frita",
      //   "price": 5,
      // },
    //   {
    //     "name": "Anéis de cebola",
    //     "price": 5,
    //   },
      // {
      //   "name": "Água 500ml",
      //   "price": 5,
      // },
    //   {
    //     "name": "Água 750ml",
    //     "price": 7,
    //   },
      // {
      //   "name": "Bebida gaseificada 500ml",
      //   "price": 7,
      // },
    //   {
    //     "name": "Bebida gaseificada 750ml",
    //     "price": 10,
    //   }
    // ])
  };
  return Products;
};
