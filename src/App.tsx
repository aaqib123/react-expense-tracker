import "./App.css";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpenses from "./components/incomeExpenses";
import Transactions from "./components/transactions";
import AddTransactions from "./components/AddTransactions";
import { GlobalProvider } from "./context/globalState";

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
