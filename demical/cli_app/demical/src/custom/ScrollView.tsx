import {
  Text,
  ScrollView as ScrollViewRN,
  Platform,
  ViewStyle,
} from 'react-native';
import React from 'react';

type Props = {
  style?: ViewStyle;
  bounce?: boolean;
  horizontal?: boolean;
  refreshControl?: any;
  snapToInterval?: number;
  decelerationRate?: any;
  pagingEnabled?: boolean;
  children: React.ReactNode;
  onMomentumScrollEnd?: any;
  alwaysBounceHorizontal?: boolean;
  contentContainerStyle?: ViewStyle;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
  showHorizontalScrollIndicator?: boolean;
};

const ScrollView: React.FC<Props> = ({
  style,
  bounce,
  children,
  horizontal,
  pagingEnabled,
  snapToInterval,
  refreshControl,
  decelerationRate,
  onMomentumScrollEnd,
  contentContainerStyle,
  alwaysBounceHorizontal,
  showsVerticalScrollIndicator,
  showsHorizontalScrollIndicator,
}) => {
  return (
    <ScrollViewRN
      style={style}
      bounces={bounce}
      horizontal={horizontal}
      pagingEnabled={pagingEnabled}
      refreshControl={refreshControl}
      snapToInterval={snapToInterval}
      decelerationRate={decelerationRate}
      onMomentumScrollEnd={onMomentumScrollEnd}
      contentContainerStyle={contentContainerStyle}
      alwaysBounceHorizontal={alwaysBounceHorizontal}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      // smooth scroll
      overScrollMode='never'
      nestedScrollEnabled={true}
      // end smooth scroll
    >
      {children}
    </ScrollViewRN>
  );

  return null;
};

export default ScrollView;
