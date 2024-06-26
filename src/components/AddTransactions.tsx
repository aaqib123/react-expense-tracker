import { FormEvent, useContext, useState } from "react";
import { GlobalDispatchContext } from "../context/globalState";

const AddTransactions = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalDispatchContext);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		addTransaction({
			id: Math.floor(Math.random() * 100000000),
			text,
			amount,
		});
		setText("");
		setAmount(0);
	};
	return (
		<>
			<h3>Add new transaction</h3>
			<form id="form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						id="text"
						placeholder="Enter text..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(Number(e.target.value))}
						id="amount"
						placeholder="Enter amount..."
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	);
};

export default AddTransactions;
