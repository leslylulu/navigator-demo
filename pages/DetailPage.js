import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';


export default function DetailPage({ navigation }) {
	return (
		<View style={styles.container}>
			<Button title="Home" onPress={() => navigation.navigate("Home")}></Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		color: '#000',
		backgroundColor: '#ccff55',
	},
});
