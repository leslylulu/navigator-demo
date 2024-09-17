import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item 🐱',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item 🐶',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item 🐭',
	},
	{
		id: '58694a0f-3da1-471f-bd96-89e28gei2832',
		title: 'Fourth Item 🐹',
	},
	{
		id: '58694a0f-3da1-471f-bd96-89e28gei2839',
		title: 'PangPang is the best 🐷',
	},
	{
		id: '23694a0f-3da1-471f-bd96-89e28gei2839',
		title: 'I like food and sleep 🙉',
	}
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

export default function ListPage({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ fontWeight: "bold", margin: 16 }}>Here's a List</Text>
			<FlatList
				data={DATA}
				renderItem={({ item }) => <Item title={item.title} />}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 16,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 24,
	},
	title: {
		fontSize: 16,
	},
});

