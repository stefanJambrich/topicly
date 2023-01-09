import React from 'react'
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { Motion } from "@legendapp/motion"

import ColoredButton from './utils/ColoredButton';
import ColoredInput from './utils/ColoredInput';
import { ColoredButtonProps } from '../models/ColoredButtonProps';
import { ColoredInputProps } from '../models/ColoredInputProps';
import Posts from './utils/Posts';


const genButtons = () => {

  const buttons: ColoredInputProps[] = [
    {
      placeholder: "Email"
    }, {
      placeholder: "Password"
    },
  ]

  return buttons.map((button:ColoredInputProps) => {
    return (
      <ColoredInput placeholder={button.placeholder} />
    )
  })
  
}

const Bookmarks = ({ navigation }: any) => {

  return (
    <Motion.View
      style={styles.container}
    >
      <Pressable style={styles.backButton} onPress={() => {
        navigation.navigate("home")
      }}>
        <Icon name="arrow-left-top" size={50} color="#fff" />
      </Pressable>
      <Motion.View
        style={styles.viewController}
      >
        <Text style={styles.registerText}>
          Bookmarks
        </Text>
        <ScrollView style={styles.inputContainer} contentContainerStyle={{alignItems:"center" }}>
              <Posts/>
              <Posts/>
              <Posts/>
              <Posts/>
              <Posts/>
              <Posts/>
              <Posts/>
              <Posts/>
        </ScrollView>
        
      </Motion.View>
      
    </Motion.View>
  )
}

export default Bookmarks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboveRegisterContainer: {
    marginBottom: "4%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  text: {
    color: "rgba(255,255,255,0.31);",
    fontSize: 18,
    fontWeight: "400",
  },
  signInText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
    marginLeft: "10%"
  },
  viewController: {
    height: "95%",
    width:"100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  registerText: {
    color: "#ffff",
    fontSize: 36,
    fontWeight: "500",
    textAlign: "left",
    marginTop: "10%",
    marginRight: "25%",
  },
  registerUnderText: {
    color: "rgba(255,255,255,0.56)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "left",
    marginTop: "5%",
    marginRight: 65
  },
  registerUnderText2: {
    color: "rgba(255,255,255,0.56)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "left",
    marginTop: "5%",
    marginRight: 130
  },
  backButton: {
    marginRight: "auto",
    marginLeft: "5%",
    marginTop: "25%"
  },
  inputContainer: {
    marginTop: 25,
  }

});