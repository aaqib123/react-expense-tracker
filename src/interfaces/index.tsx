export interface StateModel {
	transactions: Transactions[];
}

export interface Transactions {
	id: number;
	text: string;
	amount: number;
}

export interface ActionModel {
	type: string;
	payload: Transactions;
}

export interface ActionsModel {
	addTransaction: (transaction: Transactions) => void;
	deleteTransaction: (id: number) => void;
}
