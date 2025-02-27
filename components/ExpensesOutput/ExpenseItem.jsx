import { Pressable, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";
import { getFormattedData } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, description, amount, date }) {
	const navigation = useNavigation();

	function expensePressHandler() {
		navigation.navigate("ManageExpenses", {
			expenseId: id,
		});
	}

	return (
		<Pressable onPress={expensePressHandler} style={({ pressed }) => pressed && styles.pressed}>
			<View style={styles.item}>
				<View>
					<Text style={[styles.textBase, styles.description]}>{description}</Text>
					<Text style={styles.textBase}>{getFormattedData(date)}</Text>
				</View>
				<View style={styles.priceContainer}>
					<Text style={styles.amount}>{amount.toFixed(2)}</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default ExpenseItem;

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.75,
	},
	item: {
		padding: 12,
		marginVertical: 8,
		backgroundColor: GlobalStyles.colors.primary500,
		flexDirection: "row",
		justifyContent: "space-between",
		borderRadius: 6,
		elevation: 3,
		shadowColor: GlobalStyles.colors.gray500,
		shadowRadius: 4,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.4,
	},
	textBase: {
		color: GlobalStyles.colors.primary50,
	},
	description: {
		fontSize: 15,
		marginBottom: 4,
		fontWeight: "bold",
	},
	priceContainer: {
		paddingHorizontal: 12,
		paddingVertical: 4,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		minWidth: 80,
	},
	amount: {
		color: GlobalStyles.colors.primary500,
		fontSize: 12,
	},
});
