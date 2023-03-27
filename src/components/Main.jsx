import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Constants from 'expo-constants'
import {Text, View, TouchableWithoutFeedback, Alert, Image} from 'react-native'
import RepositoryList from './RepositoryList';

const Main = () => {
    return (

<View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}}>
 <Text style={{fontWeight:'bold', marginLeft:110}}>Rate Repository Application</Text>
 <Text style={{ marginLeft:140}}>Valentina Cossio</Text>
<TouchableWithoutFeedback
onPress={() => Alert.alert('Has tocado al gatito')}>
<Image
    source={{
      uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
    }}
    style={{width: 200, height: 200, marginLeft:90}}
  />
  </TouchableWithoutFeedback>
<StatusBar style="auto" />
<RepositoryList/>
</View>

    )
}

export default Main