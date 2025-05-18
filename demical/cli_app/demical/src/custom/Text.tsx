import {Text as RNText, TextProps, TextStyle} from 'react-native';
import React from 'react';

import {colors} from '../constants/colors';

const Text: React.FC<TextProps> = ({style, children, numberOfLines}) => {
  return (
    <RNText
      style={{color: colors.darkBlue, ...(style as TextStyle)}}
      numberOfLines={numberOfLines}
    >
      {children}
    </RNText>
  );
};

export default Text;
