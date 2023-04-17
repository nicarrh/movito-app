import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import { IconProps } from '@expo/vector-icons/AntDesign';
import { colors } from '@app/utils/colors';

// typeof {
//  icon: string; => name
//  linkTo: string; => link to screen
//  color: string; => color
// }
//

type FooterProps = {
	items: {
		name: string;
		linkTo: string;
		color: string;
	}[];
	show: boolean;
};

export default function Footer({ items, show }: FooterProps) {
	if (!show) return null;
	function goTo(linkTo: string) {
		console.log(linkTo);
	}
	return (
		<View style={styles.footer}>
			<View style={styles.row}>
				{items.map((item) => (
					<TouchableOpacity key={item.name} onPress={() => goTo(item.linkTo)}>
						<AntDesign name={item.name} size={24} color={item.color ?? '#ddd'} />
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
}

Footer.defaultProps = {
	items: [],
	show: true,
};

let styles = StyleSheet.create({
	footer: {
		position: 'absolute',
		backgroundColor: colors?.mediumBg,
		bottom: 0,
		right: 0,
		left: 0,
		height: 70,
		shadowColor: '#000000',
		shadowOpacity: 0.7,
		shadowRadius: 1,
		shadowOffset: {
			height: -1,
			width: 0,
		},
	},
	row: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginHorizontal: 20,
	},
});
