import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import s from './styles';
import colors from '~/App/styles/colors';

const MainDrawer = ({ apps, onPress }) => {
	console.log(onPress)
	return (
		<View style={s.container}>
			<View style={s.titleContainer}>
				<TouchableOpacity onPress={() => onPress()}>
					<Image style={s.image} source={require('../../../assets/x-button.png')} />
				</TouchableOpacity>
				<Text style={s.title}>
					filter by...
				</Text>
			</View>
			{apps.map((appData, index) => {
				return (
					<View style={s.drawerItem} key={index}>
						<TouchableOpacity 
							onPress={this._onPressButton}
							style={[s.filterButton, {borderColor: appData.color}]}>
						</TouchableOpacity>
						<Text style={s.itemText}>
							{appData.name}
						</Text>	
					</View>
				)
			})}
		</View>
	);
};

MainDrawer.propTypes = {
  onPress: PropTypes.func.isRequired,
  apps: PropTypes.arrayOf(PropTypes.shape({
  	name: React.PropTypes.string.isRequired,
  	color: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default MainDrawer;
