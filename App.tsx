import React from "react";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./src/home/presentation/screens/HomeScreen";
import { MoviesProvider } from "./src/movie/infrastructure/context/MoviesContext";

export default function App() {
	return (
		<MoviesProvider>
			<HomeScreen />
			<StatusBar style='auto' hidden />
		</MoviesProvider>
	);
}
