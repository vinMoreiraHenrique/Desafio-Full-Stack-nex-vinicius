require("dotenv").config();

const db = {
  development: {
    dialect: "postgres",
    database: process.env.DATABASE || undefined,
    username: process.env.USER || undefined,
    password: process.env.PASSWORD || undefined,
    host: process.env.HOST || undefined,
    define: {
      timestamps: true,
      underscored: false,
    },
  },
  test: {
    dialect: "postgres",
    database: process.env.DATABASE || undefined,
    username: process.env.USER || undefined,
    password: process.env.PASSWORD || undefined,
    host: process.env.HOST || undefined,
    define: {
      timestamps: true,
      underscored: false,
    },
  },
  production: {
    dialect: "postgres",
    database: process.env.DATABASE || undefined,
    username: process.env.USER || undefined,
    password: process.env.PASSWORD || undefined,
    host: process.env.HOST || undefined,
    define: {
      timestamps: true,
      underscored: false,
    },
  },
};

module.exports = db;



