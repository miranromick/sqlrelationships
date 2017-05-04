'use strict';
module.exports = function(sequelize, DataTypes) {
  var listowner = sequelize.define('listowner', {
    // id: DataTypes.INT,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        listowner.hasMany(models.Task, {
          foreignKey: 'ownerId',
          as: 'tasks'
        })
      }
    }
  });
  return listowner
};
