import React from 'react'
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { Motion } from "@legendapp/motion"

import ColoredButton from './utils/ColoredButton';
import ColoredInput from './utils/ColoredInput';
import { ColoredButtonProps } from '../models/ColoredButtonProps';
import { ColoredInputProps } from '../models/ColoredInputProps';


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

const SignInScreen = ({ navigation }: any) => {

  const onPress=()=>{
    navigation.navigate("home")
  }

  const buttonProps: ColoredButtonProps = { title: "Sign In", onPress: onPress }

  return (
    <Motion.View
      style={styles.container}
    >
      <Pressable style={styles.backButton} onPress={() => {
        navigation.navigate("login")
      }}>
        <Icon name="arrow-left-top" size={50} color="#fff" />
      </Pressable>
      <Motion.View
        style={styles.viewController}
      >
        <Text style={styles.registerText}>
          Let's sign you in.
        </Text>
        <Text style={styles.registerUnderText2}>
          Welcome back.
        </Text>
        <Text style={styles.registerUnderText}>
         You've been missed!
        </Text>
        <View style={styles.inputContainer}>
          {genButtons()}
        </View>
      </Motion.View>
      <View style={styles.aboveRegisterContainer}>
        <Text style={styles.text}>Don't have an account?

        </Text>
        <Pressable onPress={() => {
          navigation.navigate("register")
        }} >
          <Text style={styles.signInText}>Register</Text>
        </Pressable>
      </View>
      <ColoredButton {...buttonProps} />
    </Motion.View>
  )
}

export default SignInScreen

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
    height: "75%",
    width: "85%",
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
    marginRight: 65
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
    marginLeft: "5%"
  },
  inputContainer: {
    marginTop: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }

});