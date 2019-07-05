'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {});
  Orders.associate = function(models) {
    Orders.belongsTo(models.Users, {foreignKey: 'uid'});
    Orders.hasMany(models.OrderProducts, {foreignKey: 'orderId'});
    
  };
  
  // Orders.create(
  //   {
  //     uid: 1,
  //     status: 'Cozinha',
     
  //   }
  //   )

  return Orders;
};