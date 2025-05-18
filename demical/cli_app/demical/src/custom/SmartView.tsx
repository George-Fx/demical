import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';

import {theme} from '../constants';

const SmartView: React.FC<ViewProps> = ({children, style}): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
        ...(style as ViewStyle),
      }}
    >
      {children}
    </View>
  );
};

export default SmartView;
