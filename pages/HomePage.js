import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function HomePage({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				{/* TODO how to make image full width  */}
				<Image style={{ margin: 10, padding: 10, width: "50%", height: "50%", aspectRatio: 1 }} source={require('../assets/name.png')} />
				<Text >Open up App.js to start working on your app!</Text>
				<Button
					title="Go About Page"
					onPress={() => navigation.navigate("About")} />
				<Text>
					Outdoor exercise has been shown to offer numerous benefits compared to indoor workouts. The natural environment provides a refreshing change of scenery, which can improve mental well-being and reduce stress levels. Fresh air and natural light are also crucial for overall health. Additionally, outdoor exercise often involves varied terrain, which can enhance physical conditioning and prevent workout monotony. Engaging in activities such as hiking, running, or cycling outdoors can lead to better cardiovascular health, improved mood, and a greater sense of accomplishment. Embracing outdoor fitness can lead to a more enjoyable and holistic approach to maintaining a healthy lifestyle.
				</Text>
				<StatusBar style="auto" />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		color: '#fff',
		backgroundColor: 'pink',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
