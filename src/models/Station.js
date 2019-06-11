module.exports = (sequelize, DataTypes) =>
  sequelize.define('Station', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    code: {
      type: DataTypes.STRING,
      unique: false
    },
    country: {
      type: DataTypes.STRING,
      unique: false
    },
    type: {
      type: DataTypes.STRING,
      unique: false
    }
  })
