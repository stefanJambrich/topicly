import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Pressable, Image } from 'react-native';

import Navbar from './utils/Navbar';
import TopiclyLoginLogo from './svgComponents/TopiclyLogo';
import UserStoriesContainer from './utils/UserStoriesContainer';
import Posts from './utils/Posts';
import WavyHeader from './svgComponents/Wawe';
import { LinearGradient } from 'expo-linear-gradient';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Profile = ({ navigation }: any) => {

  const [likedSelected, setLikedSelected] = useState(false);
  const [postsSelected, setPostsSelected] = useState(true);



  return (
    <View style={styles.container}>
      <WavyHeader customStyles={styles.svgCurve} />
      <Pressable style={styles.backButton} onPress={() => {
        navigation.navigate("home")
      }}>
        <Icon name="arrow-left-top" size={50} color="#fff" />
      </Pressable>
      <View style={styles.headerContainer}>
        <LinearGradient
          colors={['#EA539A',
            '#D22E7B',
            '#830891',]}
          locations={[0.19, 0.50, 0.96]}
          start={{ x: 0.4, y: 0 }}
          end={{ x: 0.8, y: 1.1 }}
          style={styles.gradientUser}
        >
          <Image style={styles.userImage}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />

        </LinearGradient>
        <Text style={styles.headerText}>Women Beater 69</Text>
        <Text style={styles.headerTextUnder}>Tomas Hudeckos</Text>
        <Text numberOfLines={2} style={styles.headerTextDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eligendi nulla recusandae minus iure nobis dicta odit molestiae eveniet est voluptates, porro inventore illo ipsa!</Text>
        <View style={{ display: "flex", flexDirection: "row", justifyContent:"center",height:"25%", width:"100%", marginTop:15}}><Text style={styles.headerTextFollower}>0 Followers 0 Following</Text>
        <Pressable style={styles.followContainer}>
                            <LinearGradient
                                colors={['#EA539A',
                                    '#D22E7B',
                                    '#830891',]}
                                locations={[0.19, 0.50, 0.96]}
                                start={{ x: 0.4, y: 0 }}
                                end={{ x: 0.8, y: 1.1 }}
                                style={styles.gradientFollow}
                            >
                                <View style={styles.followInsert}>
                                    <Text style={{ color: "rgba(255,255,255,0.75)", fontSize: 18 }}>
                                        Follow
                                    </Text>
                                </View>
                            </LinearGradient>
                        </Pressable>
        </View>
        
      </View>
      <View style={styles.contentContainer}>
            <View style={{display: 'flex', flexDirection:"row", width: "70%", justifyContent:"space-evenly"}}>
              <Pressable
              style={{padding: 10, borderRadius: 8}}
              android_ripple={{color: 'white', borderless: false}}
              onPress={()=>{
                setLikedSelected(true);
                setPostsSelected(false);
              }}
              >
                <Text style={{color:likedSelected ? "#830891" : "#fff", fontSize: 25}}>Liked</Text>
              </Pressable>
              <Pressable
               style={{padding: 10, borderRadius: 8}}
               android_ripple={{color: 'white', borderless: false}}
               onPress={()=>{
                setLikedSelected(false);
                setPostsSelected(true);
              }}
               >
                <Text style={{color:postsSelected ? "#830891" : "#fff", fontSize: 25}}>Posts</Text>
              </Pressable>
            </View>
            <ScrollView style={{height:"100%"}}>
              {
                !postsSelected? ['Apple', 'Orange', 'Banana'].map(()=>{
                  return(
                    <Posts/>
                  )
                }) : <View></View>
              }
            </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: "center"
  },
  headerContainer: {
    marginTop: -95,
    marginHorizontal: 10,
    alignItems: "center",
  },
  svgCurve: {
    width: Dimensions.get('window').width,
    
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 25
  },
  headerTextUnder: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  headerTextDescription: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
  },
  headerTextFollower: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    height: "100%",
    justifyContent:"center",
    alignItems:"center",
    marginTop: -175,
  },
  backButton: {
    marginTop: "10%",
    position: "absolute",
    left: 25
  },
  gradientUser: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 395
  },
  userImage: {
    width: "95%",
    height: "95%",
    borderRadius: 100,

  },
  gradientFollow: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  followContainer: {
    width: "25%",
    height: "35%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  followInsert: {
    width: "96%",
    height: "94%",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2b2a2a"
  },

});

export default Profile