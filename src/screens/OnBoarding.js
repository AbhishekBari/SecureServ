import {View, Text, Image} from 'react-native';
import React from 'react';
import scale, {height, width} from '../assets/Scale';
import HeaderComponent from '../components/Header/HeaderComponent';
import {images} from '../assets/ImagesURI';
import ButtonComponent from '../components/Button/ButtonComponent';

const OnBoarding = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <HeaderComponent
        title={'Create Profile'}
        titleStyle={{color: '#FFFFFF', fontSize: scale(26), fontWeight: '700'}}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          borderTopWidth: 1,
          borderColor: '#707070',
        }}>
        <View
          style={{
            height: height * 0.68,
            width: width,
            backgroundColor: 'black',
            marginTop: height * 0.07,
            alignItems: 'center',
          }}>
          <Image
            source={images.Guard}
            style={{width: width * 0.4, height: '100%'}}
          />
        </View>
        <View style={{height:height * 0.2, width:width, backgroundColor:'black', alignItems:'center', justifyContent:'center'}}>
          <ButtonComponent title={'Lets Begin'} onClick={() =>  navigation.navigate('SignUpSignIn')}/>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;
