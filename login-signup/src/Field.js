import React from 'react';
import {TextInput} from 'react-native';
import {blueDark} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: blueDark, paddingHorizontal: 10, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor={blueDark}></TextInput>
  );
};

export default Field;
