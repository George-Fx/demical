import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  name: string;
  onPress: () => void;
};

const TabBarIcon: React.FC<Props> = ({name, onPress}) => {
  return (
    <TouchableOpacity
      // key={index}
      style={{alignItems: 'center'}}
      onPress={onPress}
    >
      <View style={{marginBottom: 6}}>
        <item.icon
          fillColor={
            item.name === currentTabScreen ? colors.green : colors.white
          }
          strokeColor={
            item.name === currentTabScreen ? colors.green : colors.white
          }
        />
      </View>
      <Text
        style={{
          color: item.name === currentTabScreen ? colors.green : colors.white,
          fontSize: 12,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default TabBarIcon;
