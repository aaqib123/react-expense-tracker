import { StateModel } from "../interfaces";
import { Action, ActionType } from "./actions";

export default function GlobalReducer(state: StateModel, action: Action) {
	switch (action.type) {
		case ActionType.ADD_TRANSACTION:
			return {
				...state,
				transactions: [action.payload, ...state.transactions],
			};
		case ActionType.DELETE_TRANSACTION:
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};
		default:
			return state;
	}
}
