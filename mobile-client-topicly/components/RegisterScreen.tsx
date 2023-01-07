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
      placeholder: "First name"
    }, {
      placeholder: "Last name"
    }, {
      placeholder: "Email"
    }, {
      placeholder: "Password"
    }, {
      placeholder: "Confirm Password"
    },
  ]

  return buttons.map((button:ColoredInputProps) => {
    return (
      <ColoredInput placeholder={button.placeholder} />
    )
  })
  
}

const RegisterScreen = ({ navigation }: any) => {

  const buttonProps: ColoredButtonProps = { title: "Register", onPress: () => { navigation.navigate("home"); } }

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
          Let's register{"\n"}
          your Account.
        </Text>
        <View style={styles.inputContainer}>
          {genButtons()}
        </View>
      </Motion.View>
      <View style={styles.aboveRegisterContainer}>
        <Text style={styles.text}>Already have an account?

        </Text>
        <Pressable onPress={() => {
          navigation.navigate("signIn")
        }} >
          <Text style={styles.signInText}>Sign In</Text>
        </Pressable>
      </View>
      <ColoredButton {...buttonProps} />
    </Motion.View>
  )
}

export default RegisterScreen

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
  backButton: {
    marginRight: "auto",
    marginLeft: "5%"
  },
  inputContainer: {
    marginTop: 19,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }

});