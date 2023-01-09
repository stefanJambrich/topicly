import React, { useCallback, useMemo, useRef, useState, useEffect, } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Dimensions, Button, Image,Pressable } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Animated from "react-native-reanimated";
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';

import Navbar from './utils/Navbar';
import TopiclyLoginLogo from './svgComponents/TopiclyLogo';
import UserStoriesContainer from './utils/UserStoriesContainer';
import Posts from './utils/Posts';

// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ColoredButton from './utils/ColoredButton';


const Home = ({ navigation }: any) => {


  const [image, setImage] = useState("");

 

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetRef2 = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['85%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  let fall = new Animated.Value(1);
  const animatedShadowOpacity = Animated

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#2b2a2a'} hidden={false} style={'light'} />
      <View style={styles.logo}>
        <Text style={styles.logoText}>Topicly</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView style={styles.scroll} contentContainerStyle={{ alignItems: 'center' }}>
          <UserStoriesContainer />
          <Posts />
        </ScrollView>
      </View>
      <Navbar navigation={navigation} onPressSpecial={()=>{
        bottomSheetRef.current?.expand();
      }} />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        // add bottom inset to elevate the sheet
        bottomInset={0}
        // set `detached` to true
        index={-1}
        detached={false}
        style={styles.sheetContainer}
        backgroundComponent={() =>
          <View style={styles.bottomSheetBackground} />
        }
        enablePanDownToClose={true}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={{ height: "80%" }}>
            <LinearGradient
              colors={['#EA539A',
                '#D22E7B',
                '#830891',]}
              locations={[0.19, 0.50, 0.96]}
              start={{ x: 0.4, y: 0 }}
              end={{ x: 0.8, y: 1.1 }}
              style={{ height: "50%", width: Dimensions.get('window').width - 25, justifyContent: "center", alignItems: "center", borderRadius: 16 }}
            >
              <TextInput
                style={{ width: "99%", height: "99%", textAlign: "left", backgroundColor: "#2b2a2a", color: "#fff", fontSize: 25, borderRadius: 16, padding: 10 }}
                placeholder='Write something...'
                placeholderTextColor={"rgba(255,255,255,0.75)"}
                textAlign={"left"}
                textAlignVertical={"top"}
                maxLength={255}
                multiline={true}
              >

              </TextInput>
            </LinearGradient>
            <Pressable style={{height:"10%", width: Dimensions.get('window').width - 25,alignItems:"flex-end"}} onPress={pickImage} >
            <LinearGradient
              colors={['#EA539A',
                '#D22E7B',
                '#830891',]}
              locations={[0.19, 0.50, 0.96]}
              start={{ x: 0.4, y: 0 }}
              end={{ x: 0.8, y: 1.1 }}
              style={{ height: "100%", width: 60, justifyContent: "center", alignItems: "center", borderRadius: 100, marginTop:-35, marginRight: 10,  }}
            >
              <View style={{width:"95%", height:"95%", backgroundColor:"#2b2a2a", borderRadius: 100, justifyContent: "center", alignItems: "center"}}>
                <Icon name={"image"} size={36} color="#fff" />
              </View>
            </LinearGradient>
            </Pressable>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {image && <Image source={{ uri: image }} style={{ width: "100%", height: 250, marginTop: -30, borderRadius:16}} />}
            </View>
          </View>
          <ColoredButton title='Post' onPress={() => { bottomSheetRef.current?.close(); }} />
        </View>
      </BottomSheet>
      <BottomSheet
        ref={bottomSheetRef2}
        snapPoints={snapPoints}
        // add bottom inset to elevate the sheet
        bottomInset={0}
        // set `detached` to true
        index={-1}
        detached={false}
        style={styles.sheetContainer}
        backgroundComponent={() =>
          <View style={styles.bottomSheetBackground} />
        }
        enablePanDownToClose={true}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          
        </View>
      </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  text: {
    color: "#fff",
  },
  contentContainer: {
    height: "80%",
    width: "100%"
  },
  logo: {
    width: "100%",
    height: "8%",
    display: 'flex',
    flexDirection: "row",
    backgroundColor: "#2b2a2a",
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 35,
  },
  scroll: {

  },
  sheetContainer: {
    // add horizontal space
    // marginHorizontal: 24,
  },

  bottomSheetBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    backgroundColor: '#2b2a2a'
  }

});

export default Home