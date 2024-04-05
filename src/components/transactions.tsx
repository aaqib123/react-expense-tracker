import React, { useContext } from "react";
import { GlobalContext, GlobalDispatchContext } from "../context/globalState";

const Transactions = () => {
	const { transactions } = useContext(GlobalContext);
	// const dispatch = useContext(GlobalDispatchContext);
	const { deleteTransaction } = useContext(GlobalDispatchContext);
	return (
		<>
			<h3>Transactions</h3>
			<ul id="list" className="list">
				{transactions.map((transaction) => (
					<li
						className={transaction.amount > 0 ? "plus" : "minus"}
						key={transaction.id}
					>
						{transaction.text} <span>${transaction.amount}</span>
						<button
							className="delete-btn"
							onClick={() => deleteTransaction(transaction.id)}
						>
							x
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default Transactions;
