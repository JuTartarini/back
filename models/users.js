'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    Users.hasMany(models.Orders, { foreignKey: 'uid' });
  };

  // Users.create({email: 'test1@test.com'});
  // Users.create({email: 'test2@test.com'});
  // Users.create({email: 'test3@test.com'});

  return Users;
};
