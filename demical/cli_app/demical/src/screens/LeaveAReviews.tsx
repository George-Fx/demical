import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {custom} from '../custom';
import {hooks} from '../hooks';
import {utils} from '../utils';
import {validation} from '../utils/validation';

const LeaveAReviews: React.FC = () => {
  const navigation = hooks.useAppNavigation();

  const {responsiveHeight} = utils;

  const [comment, setComment] = useState<string>('');

  const handleCommentChange = useCallback((text: string): void => {
    setComment(text);
  }, []);

  const renderHeader = () => {
    return (
      <components.Header
        title='Leave a review'
        goBackIcon={true}
      />
    );
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 20,
          flexGrow: 1,
          justifyContent: 'center',
        }}
        enableOnAndroid={true}
      >
        <View style={{marginBottom: 30}}>
          <custom.Image
            source={{
              uri: 'https://george-fx.github.io/unimor/assets/04.png',
            }}
            style={{
              // width: utils.responsiveDimension((130.8 / 375) * 100).width,
              aspectRatio: 130.8 / 128,
              borderRadius: 30,
              alignSelf: 'center',
              // marginBottom: utils.responsiveDimension((55 / 812) * 100).height,
            }}
            imageStyle={{
              backgroundColor: theme.colors.transparent,
            }}
          />
        </View>
        <Text
          style={{
            ...theme.fonts.H2,
            // color: theme.colors.mainColor,
            textTransform: 'capitalize',
            marginBottom: 14,
            textAlign: 'center',
          }}
        >
          Please rate the quality of{'\n'}service for the order!
        </Text>
        {/* <components.RatingStars
          containerStyle={{
            marginBottom: 20,
          }}
        /> */}
        <Text
          style={{
            // ...theme.fonts.DM_Sans_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
            marginBottom: 60,
          }}
        >
          Your comments and suggestions help us improve the service quality
          better!
        </Text>
        <custom.InputFieldBig
          containerStyle={{
            marginBottom: 20,
          }}
          value={comment}
          onChangeText={handleCommentChange}
        />
        <components.Button
          title='submit'
          onPress={() => {
            validation({comment}) ? navigation.goBack() : null;
          }}
        />
      </KeyboardAwareScrollView>
    );
  };

  return (
    <custom.SafeAreaView insets={['top', 'bottom']}>
      {renderHeader()}
      {renderContent()}
      <Text>ddd</Text>
    </custom.SafeAreaView>
  );
};

export default LeaveAReviews;
