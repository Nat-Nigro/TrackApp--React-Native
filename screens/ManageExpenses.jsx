import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/style";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

function ManageExpenses({ route, navigation }) {
	const expensesCtx = useContext(ExpensesContext);
	const editedExpenseId = route.params?.expenseId; // ? come in MVC può accettare valori undefined
	const isEditing = !!editedExpenseId; // isEditing deve essere un boolean, e lo facciamo tramite !!, se esiste sarò true

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [navigation, isEditing]);

	function deleteExpenses() {
		expensesCtx.deleteExpense(editedExpenseId);
		navigation.goBack();
	}

	function cancelHandler() {
		navigation.goBack();
	}

	function confirmHandler() {
		if (isEditing) {
			expensesCtx.updateExpense(editedExpenseId, {
				description: "Test",
				amount: 49.99,
				date: new Date("2024-05-19"),
			});
		} else {
			expensesCtx.addExpense({ description: "Test", amount: 19.99, date: new Date("2022-05-19") });
		}
		navigation.goBack();
	}

	return (
		<View style={styles.container}>
			<View style={styles.buttons}>
				<Button mode="flat" onPress={cancelHandler} style={styles.button}>
					Cancel
				</Button>
				<Button onPress={confirmHandler} style={styles.button}>
					{isEditing ? "Update" : "Add"}{" "}
				</Button>
			</View>
			{isEditing && (
				<View style={styles.deleContainer}>
					<IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenses} />
				</View>
			)}
		</View>
	);
}

export default ManageExpenses;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: GlobalStyles.colors.primary800,
	},
	deleContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: GlobalStyles.colors.primary200,
		alignItems: "center",
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		minWidth: 120,
		marginHorizontal: 12,
	},
});
