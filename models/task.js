'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    // id: DataTypes.INT,
    taskname: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.listowner, {
          foreignKey: 'ownerId',
          onDelete: 'CASCADE'
        })
      }
    }
  })
  return Task
}
