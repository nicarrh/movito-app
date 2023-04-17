import React from "react";
import { Animated, View } from "react-native";
import CarouselItem, { ITEM_SIZE } from "./CarouselItem";
import styles from "./Carousel.styles";
import { Movie } from "@app/movie/domain/entities/Movie";

type CarouselProps = {
	data: Movie[];
	type: "popular" | "topRated" | "upcoming" | "latest";
};

const Carousel = (props: CarouselProps) => {
	const { data, type } = props;
	const scrollX = React.useRef(new Animated.Value(0)).current;

	return (
		<View style={styles.container}>
			<Animated.FlatList
				data={data}
				keyExtractor={(item) => item.key}
				snapToInterval={ITEM_SIZE}
				renderItem={({ item, index }) => (
					<CarouselItem scrollX={scrollX} item={item} index={index} totalItems={data.length} />
				)}
				horizontal
				bounces={false}
				scrollEventThrottle={16}
				contentContainerStyle={styles.contentContainer}
				showsHorizontalScrollIndicator={false}
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
					useNativeDriver: true,
				})}
			/>
		</View>
	);
};

export default Carousel;
