import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Navbar from './utils/Navbar';
import TopiclyLoginLogo from './svgComponents/TopiclyLogo';

// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>Topicly</Text>
                <View style={styles.logoAvatarContainer}>
                  <Icon name="account" size={36} color="#fff" />
                </View>
            </View>
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
        marginLeft: 15,
        marginTop: 25,
        display: 'flex',
        flexDirection:"row"
    },
    logoText:{
      color: "#fff",
      fontSize: 35,
      textAlign:"left",
    },
    logoAvatarContainer:{
      display: 'flex',
        flexDirection:"row",
      width: "100%",
      justifyContent:"center",
      alignItems:"center",
      borderWidth: 5,
    }
  });

export default Home