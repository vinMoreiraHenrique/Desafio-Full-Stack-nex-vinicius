import { Sequelize, SequelizeOptions } from "sequelize-typescript";
// import db from "../config/database";


require("dotenv").config();

import db from "../config/database";

const sequelizeOptions: SequelizeOptions | undefined = {
    dialect: "postgres", // Cast the dialect to the appropriate type
    database: db.development.database,
    username: db.development.username,
    password: db.development.password,
    host: db.development.host,
    define: {
      timestamps: db.development.define.timestamps,
      underscored: db.development.define.underscored,
    },
  };

require("ts-node/register");

const sequelize = new Sequelize(sequelizeOptions);

export default sequelize;
