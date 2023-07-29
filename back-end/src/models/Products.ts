import { Model, DataTypes } from "sequelize";
import sequelize from "../database";
import User from "./User";

export interface ProductsAttributes {
  id?: number;
  name: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
  userId: number;
}

const Product = sequelize.define<Model>(
  "Product",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  {
    tableName: "Products",
  }
);

export default Product;
