import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Navbar from './utils/Navbar';
import TopiclyLoginLogo from './svgComponents/TopiclyLogo';
import UserStoriesContainer from './utils/UserStoriesContainer';
import Posts from './utils/Posts';

// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor={'#2b2a2a'} hidden={false} style={'light'} />
      <View style={styles.logo}>
            <Text style={styles.logoText}>Topicly</Text>  
      </View>
        <View style={styles.contentContainer}>
            <ScrollView style={styles.scroll} contentContainerStyle={{alignItems: 'center' }}>
              <UserStoriesContainer/>
              <Posts/>
            </ScrollView>
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
      display:'flex',
    },
    text: {
      color: "#fff",
    },
    contentContainer:{
        height:"80%",
        width:"100%"
    },
    logo:{
        width:"100%",
        height: "8%",
        display: 'flex',
        flexDirection:"row",
        backgroundColor: "#2b2a2a",
        justifyContent:"center",
        alignItems:"center"
    },
    logoText:{
      color: "#fff",
      textAlign:"center",
      fontSize: 35,
    },
    scroll: {
      
    }
    
  });

export default Home