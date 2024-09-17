import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function AboutPage({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Image style={{ margin: 10, padding: 10, width: "50%", height: "50%", aspectRatio: 1 }} source={require('../assets/name.png')} />
				<Button title="List Page" onPress={() => navigation.navigate("List")} />
				<Text>
					I'm the About Page
				</Text>
				<StatusBar style="auto" />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
