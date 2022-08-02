import { View, Text, Button } from 'react-native'
import React from 'react'

const SignUpSignIn = ({navigation}) => {
  return (
    <View>
      <Text>SignUpSignIn</Text>
      <Button title='splash' onPress={() => {navigation.navigate('SplashScreen')}}/>
    </View>
  )
}

export default SignUpSignIn