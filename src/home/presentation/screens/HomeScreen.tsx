import React from "react";
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, Dimensions } from "react-native";
import { colors } from "../utils/colors";
// import { colors } from "@app/movie/presentation/utils/colors";
import useMovies from "@app/movie/infrastructure/hooks/useMovies";
import Carousel from "@app/movie/presentation/components/Carousel";
// import Footer from '@app/navigation/Footer';
// import { dummyFunc } from "@app/movie/index";

let { width } = Dimensions.get("window");

const HomeScreen = (props) => {
	const { popularMovies, isLoading, topRatedMovies } = useMovies();
	if (isLoading) {
		return null;
	}
	return (
		<SafeAreaView style={styles.container}>
			<Carousel data={popularMovies} type='popular' />
			<Text style={styles.title}>Continue viewing</Text>
			<View style={{ flex: 0.3 }}>
				<FlatList
					data={topRatedMovies}
					horizontal
					renderItem={({ item, index }) => {
						return (
							<View style={styles.itemContainer}>
								<View style={styles.alignStart}>
									<Image source={{ uri: item.poster }} style={styles.posterImg} />
									<Text style={styles.movieName} numberOfLines={1}>
										{item.title}
									</Text>
								</View>
							</View>
						);
					}}
				/>
			</View>
			<View style={styles.bottomMovies}>
				<Text style={styles.subtitle}> Now showing</Text>
			</View>
			{/* <Footer
				items={[
					{ name: 'home', color: '#ddd', linkTo: '/home' },
					{ name: 'search1', color: '#ddd', linkTo: '/search' },
					{ name: 'appstore-o', color: '#ddd', linkTo: '/catalog' },
					{ name: 'hearto', color: '#ddd', linkTo: '/favorites' },
					{ name: 'user', color: '#ddd', linkTo: '/profile' },
				]}
			/> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 160,
		height: 50,
		backgroundColor: "orange",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
	},
	container: {
		flex: 1,
		backgroundColor: colors.mediumBg,
	},
	footer: {
		position: "absolute",
		backgroundColor: colors.mediumBg,
		bottom: 0,
		right: 0,
		left: 0,
		height: 70,
		shadowColor: "#000000",
		shadowOpacity: 0.7,
		shadowRadius: 1,
		shadowOffset: {
			height: -1,
			width: 0,
		},
	},
	title: { color: "white", fontSize: 20, padding: 20 },
	bottomMovies: { flex: 0.2 },
	posterImg: {
		width: "100%",
		height: width / 2 - 60,
		borderRadius: 34,
	},
	alignStart: {
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	subtitle: { color: "white", fontSize: 20, padding: 20 },
	movieName: { color: "white", margin: 5 },
	itemContainer: {
		width: width / 2,
		height: width / 2,
		// padding: 20,
		// backgroundColor: colors.darknessBg,
		marginHorizontal: 10,
		justifyContent: "flex-start",
		borderRadius: 34,
	},
});

export default HomeScreen;
