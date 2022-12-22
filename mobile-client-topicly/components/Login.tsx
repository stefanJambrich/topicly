import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MotionLinearGradient } from '@legendapp/motion/linear-gradient-expo';
import { Motion } from "@legendapp/motion"
import TopiclyLoginLogo from './svgComponents/TopiclyLogo';


const Login = ({navigation}:any) => {

  const onRegisterPressed = () => {
     navigation.navigate("register")
  }

  const onSignInPressed = () => {
    navigation.navigate("signIn")
 }

  return (
    <Motion.View style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Motion.View style={styles.underlineTextContainer}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <TopiclyLoginLogo />
        <Motion.Text
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 100,
          }} style={styles.text}>Social media is not a media. The key is to listen, engage, and build relationships.</Motion.Text>
      </Motion.View>
      <View style={styles.buttonsView}>
      <Motion.Pressable style={styles.registerButton} onPress={onRegisterPressed}>
          <Motion.View
            whileHover={{ scale: 1.2 }}
            whileTap={{ y: 20 }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 300
            }}
            style={styles.registerButtonGradient}
          >
            <MotionLinearGradient
            animateProps={{
              colors: [
                '#EA539A',
               '#D22E7B',
                '#830891',
              ],
              start: { x: 0.4, y: 0 },
              end: { x: 0.8, y: 1.1 },
            }}
            transition={{
              type: 'timing',
              duration: 100,
              easing: "easeInOut"
            }}
            locations={[0.19, 0.50, 0.96]}
            style={styles.registerButtonGradient}
          >

            <Text style={styles.buttonText}>Register</Text>
          </MotionLinearGradient>
          </Motion.View>
        </Motion.Pressable>
        <Motion.Pressable style={styles.registerButton} onPress={onSignInPressed}>
          <Motion.View
            whileHover={{ scale: 1.2 }}
            whileTap={{ y: 20 }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 300
            }}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </Motion.View>
        </Motion.Pressable>
      </View>
    </Motion.View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  underlineTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "2%",
    width: "80%"
  },
  text: {
    fontSize: 16,
    color: "rgba(255,255,255,0.39)",
    textAlign: "center",
  },
  buttonsView: {
    height: "10%",
    width: "90%",
    borderRadius: 16,
    marginBottom: "10%",
    backgroundColor: "#2b2a2a",
    display: "flex",
    flexDirection: "row"
  },
  registerButton: {
    height: "100%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 18,
    color: "#fff"
  },
  registerButtonGradient: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,

  },

});