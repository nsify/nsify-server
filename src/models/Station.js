module.exports = (sequelize, DataTypes) =>
  sequelize.define('Station', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    city: {
      type: DataTypes.STRING,
      unique: false
    },
    province: {
      type: DataTypes.STRING,
      unique: false
    }
  })
