import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const Rating = ({ rating }) => {
	const ratings = [
		...Array(Math.floor(rating / 2)).fill('star'),
		...Array(5 - Math.floor(rating / 2)).fill('staro'),
	];
	return (
		<View
			style={{
				flexDirection: 'row',
				textAlign: 'center',
				alignItems: 'center',
			}}
		>
			<Text style={{ marginHorizontal: 5, color: colors.text, textAlign: 'center' }}>{rating}</Text>
			<AntDesign name='staro' size={12} color={colors.text} style={{ textAlign: 'center' }} />
		</View>
	);
};

export default Rating;
