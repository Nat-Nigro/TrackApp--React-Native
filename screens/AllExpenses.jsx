import ExpensesOutput from "../components/ExpensesOutput/ExpensesOuput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
	const expensesCtx = useContext(ExpensesContext);

	return <ExpensesOutput expenses={expensesCtx.expenses} periodName="Total" fallbackText="No expenses" />;
}

export default AllExpenses;
