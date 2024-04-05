import React, { createContext, useReducer } from "react";
import { ActionsModel, StateModel, Transactions } from "../interfaces";
import GlobalReducer from "./globalReducer";
import { ActionType } from "./actions";

const initialState: StateModel = {
	transactions: [
		{ id: 1, text: "Flower", amount: -20 },
		{ id: 2, text: "Salary", amount: 300 },
		{ id: 3, text: "Book", amount: -10 },
		{ id: 4, text: "Camera", amount: 150 },
	],
};

const actionContext: ActionsModel = {
	addTransaction: () => {},
	deleteTransaction: () => {},
};

interface Props {
	children: React.ReactNode;
}

export const GlobalContext = createContext(initialState);
// export const GlobalDispatchContext = createContext<Dispatch<Action> | null>(
// 	null
// );
export const GlobalDispatchContext = createContext(actionContext);

export const GlobalProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(GlobalReducer, initialState);

	const deleteTransaction = (id: number) => {
		dispatch({
			type: ActionType.DELETE_TRANSACTION,
			payload: id,
		});
	};

	const addTransaction = (transaction: Transactions) => {
		dispatch({
			type: ActionType.ADD_TRANSACTION,
			payload: transaction,
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
			}}
		>
			<GlobalDispatchContext.Provider
				value={{
					addTransaction,
					deleteTransaction,
				}}
			>
				{children}
			</GlobalDispatchContext.Provider>
		</GlobalContext.Provider>
	);
};
