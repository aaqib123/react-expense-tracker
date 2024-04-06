import AddTransactions from "./components/AddTransactions";
import Balance from "./components/balance";
import Header from "./components/header";
import IncomeExpenses from "./components/incomeExpenses";
import Transactions from "./components/transactions";
import { GlobalProvider } from "./context/globalState";
import "./App.css";

function App() {
	return (
		<GlobalProvider>
			<Header />
			<section className="container">
				<Balance />
				<IncomeExpenses />
				<Transactions />
				<AddTransactions />
			</section>
		</GlobalProvider>
	);
}

export default App;
