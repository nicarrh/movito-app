import { Movie } from "@app/movie/domain/entities/Movie";
import React from "react";
import { StyleSheet, Animated, View, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const ITEM_SIZE: number = width * 0.75;
const SPACING: number = 10;

type MovieListItemProps = {
	item: Movie;
	scrollX: Animated.Value;
	index: number;
	totalItems: number;
};

const CarouselItem = ({ item, scrollX, index, totalItems }: MovieListItemProps) => {
	const inputRange = [(index - 1) * ITEM_SIZE, index * ITEM_SIZE, (index + 1) * ITEM_SIZE];

	const scale = scrollX.interpolate({
		inputRange,
		outputRange: [0.8, 1, 0.8],
	});

	const translateX = scrollX.interpolate({
		inputRange,
		outputRange: [-60, 1, -60],
	});

	return (
		<View
			style={[
				{
					width: ITEM_SIZE,
					marginLeft: index === 0 ? (width - ITEM_SIZE) / 2 : 0,
					marginRight: index === totalItems ? (width - ITEM_SIZE) / 2 : 0,
				},
			]}
		>
			<Animated.View style={[styles.item, { transform: [{ scale }] }]}>
				<Image source={{ uri: item.poster }} style={[styles.img]} />
			</Animated.View>
		</View>
	);
};

export default CarouselItem;

const styles = StyleSheet.create({
	item: {
		alignItems: "center",
		borderRadius: 34,
		paddingVertical: 20,
	},
	img: {
		width: "100%",
		height: ITEM_SIZE - 20,
		resizeMode: "cover",
		borderRadius: 24,
	},
	title: {
		color: "white",
		width: "50%",
	},
});
