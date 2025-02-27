import { View, StyleSheet, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";

function ExpensesOutput({ expenses, periodName, fallbackText }) {
	let content = <Text syles={styles.infoText}>{fallbackText}</Text>;

	if (expenses.length > 0) {
		content = <ExpensesList expenses={expenses} />;
	}

	return (
		<View style={styles.container}>
			<ExpensesSummary expenses={expenses} periodName={periodName} />
			{content}
		</View>
	);
}

export default ExpensesOutput;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: 12,
		backgroundColor: GlobalStyles.colors.primary700,
	},
	infoText: {
		color: "white",
		fontSize: 16,
		textAlign: "center",
		marginTop: 32,
	},
});
