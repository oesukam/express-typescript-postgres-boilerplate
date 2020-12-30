import { Model, DataTypes } from 'sequelize';
import { v4 } from 'uuid';

import { sequelize } from './index';

/**
 * User Class Model
 */
class User extends Model {
  id!: number;
  phone_number!: string;
  password!: string;
  id_number!: string;
  email!: string;
  first_name!: string;
  middle_name!: string;
  last_name!: string;
  avatar!: string;
  gender!: string;
  status!: string; // inactive, active

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    avatar: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middle_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone_number: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active',
    },
  },
  {
    sequelize: sequelize,
    tableName: 'users',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default User;
