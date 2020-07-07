'use strict';
module.exports = (sequelize, DataTypes) => {
  const Register = sequelize.define('Register', {
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Register.associate = function(models) {
    // associations can be defined here
  };
  return Register;
};