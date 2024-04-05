import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext);
	const totalPositive = transactions
		.filter((transaction) => transaction.amount > 0)
		.map((transaction) => transaction.amount)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);
	const totalNegative = transactions
		.filter((transaction) => transaction.amount < 0)
		.map((transaction) => transaction.amount)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">{totalPositive}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">{totalNegative}</p>
			</div>
		</div>
	);
};

export default IncomeExpenses;
