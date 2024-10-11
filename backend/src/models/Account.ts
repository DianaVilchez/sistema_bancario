import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize";
import User from "./User";
class Account extends Model {
    public id_account?: number;
    public id_user?: number; 
    public account_balance!: number;
}
Account.init(
    {
        id_account: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_account', 
            // allowNull: false,
        },
        id_user: {
            type: DataTypes.INTEGER,
            references: {
                model: User, 
                key: 'id_user',
            },
            allowNull: false, // Para asegurarte que siempre exista un usuario relacionado
        },
        account_balance: {
            type: DataTypes.DECIMAL,
            allowNull: false, // Puede que quieras asegurarte de que siempre haya saldo
        },
    },
    {
        sequelize,
        modelName: "Account",
        tableName: "account",
        timestamps: false,
    }
);
export default Account;