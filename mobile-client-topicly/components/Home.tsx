import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Navbar from './utils/Navbar';
import TopiclyLoginLogo from './svgComponents/TopiclyLogo';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Text style={styles.logo}>Topicly</Text>
        </View>
       <Navbar navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C1C1C',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: "#fff",
    },
    contentContainer:{
        height:"90%",
        width:"100%"
    },
    logo:{
        width:"100%",
        color: "#fff",
        fontSize: 35,
        textAlign:"left",
        marginLeft: 
    }
  });

export default Home