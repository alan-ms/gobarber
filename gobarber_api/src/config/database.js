require('dotenv').config(); // OR require('dotenv/config')

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'gobaber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
