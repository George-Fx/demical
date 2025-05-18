import React from 'react';
import {View} from 'react-native';

type Props = {
  title: string;
  description: string;
  status: boolean;
};

import {theme} from '../constants';

const OrderStatus: React.FC<Props> = ({title, description, status}) => {
  // const {responsiveWidth, responsiveHeight} = utils;

  return (
    <View
      style={{
        // paddingLeft: responsiveWidth(40),
        flexDirection: 'row',
      }}
    >
      <View style={{marginRight: 24}}>
        <View
          style={{
            width: 30,
            height: 30,
            borderWidth: 2,
            borderColor: '#EAEDF4',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          <View
            style={{
              width: 12,
              height: 12,
              backgroundColor: status
                ? theme.colors.darkBlue
                : theme.colors.transparent,
              borderRadius: 6,
            }}
          />
        </View>
        {title !== 'Receiving' && (
          <View
            style={{
              height: 40,
              width: 1,
              alignSelf: 'center',
              marginBottom: 2,
              borderWidth: 1,
              borderColor: status ? '#EAEDF4' : theme.colors.transparent,
              borderStyle: 'dotted',
            }}
          />
        )}
      </View>
      <View>
        {/* <text.H5
          style={{
            color: theme.colors.mainColor,
            marginBottom: responsiveHeight(6),
          }}
        >
          {title}
        </text.H5>
        <text.T14>{description}</text.T14> */}
      </View>
    </View>
  );
};

export default OrderStatus;
