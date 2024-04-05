import { Transactions } from "../interfaces";

export enum ActionType {
	ADD_TRANSACTION = "ADD_TRANSACTION",
	DELETE_TRANSACTION = "DELETE_TRANSACTION",
}

export type Action =
	| { type: ActionType.ADD_TRANSACTION; payload: Transactions }
	| { type: ActionType.DELETE_TRANSACTION; payload: number };
