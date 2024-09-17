import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function Profile({ navigation }) {
	const name = "PangPang";

	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.image} source={require('../assets/gifer.gif')} />
			<Text style={{ textAlign: "center", marginTop: 16 }}>Name:{name}</Text>
			<Text style={{ textAlign: "center", marginTop: 16 }}>Age:20</Text>

			<View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around" }}>
				<Button title="Save" onPress={() => navigation.navigate("Home")} />
				<Button title="Cancel" onPress={() => navigation.navigate("List")} />
			</View>

			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 10,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	image: {
		width: '100%',
		borderRadius: 24, // ios only effect on image 😂
		overflow: 'hidden',
		height: undefined,
		aspectRatio: 1, // This ensures the image maintains its aspect ratio
	},
});
