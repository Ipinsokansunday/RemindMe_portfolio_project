const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres'
});

const User = require('./user')(sequelize);
const Reminder = require('./reminder')(sequelize);

User.hasMany(Reminder, { foreignKey: 'userId', as: 'reminders' });
Reminder.belongsTo(User, { foreignKey: 'userId', as: 'user' });

const db = {
  Sequelize,
  sequelize,
  User,
  Reminder
};

module.exports = db;
