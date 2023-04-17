import { SafeAreaView, View, Dimensions } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const Header = ({ user = null }) => {
	return (
		<SafeAreaView
			style={{
				// flex: 0.1,
				flexDirection: 'row',
				backgroundColor: 'blue',
				width,
				justifyContent: 'space-between',
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					paddingHorizontal: 20,
					width: '100%',
					justifyContent: 'space-between',
				}}
			>
				{/* <AntDesign name='bars' size={24} color='#ddd' /> */}
				{user && <Text>Welcome back, {user.name} </Text>}
				<AntDesign name='search1' size={24} color='#ddd' />
			</View>
		</SafeAreaView>
	);
};

export default Header;
