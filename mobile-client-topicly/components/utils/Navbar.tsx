import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Motion } from "@legendapp/motion"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Navbar = ({ navigation }: any) => {

    const RenderButtons = () => {

        const buttons = [
            {
                key: 1,
                icon: "select-search",
                isFocussed: false,
                pointsTo: "login"
            },
            {
                key: 2,
                icon: "home-variant",
                isFocussed: false,
                pointsTo: "home"
            },
            {
                key: 3,
                icon: "bookmark",
                isFocussed: false,
                pointsTo: "login"
            },
            {
                key: 3,
                icon: "account-circle",
                isFocussed: false,
                pointsTo: "login"
            },
        ]
    
    
        return (
            buttons.map((button)=>{
                return(
                    <Motion.Pressable onPress={()=>{
                        button.isFocussed = true;
                        navigation.navigate(button.pointsTo)
                        }}
                        style={styles.button}
                        >
                    <Motion.View
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ y: -200 }}
                        transition={{
                            type: 'spring',
                            damping: 50,
                            stiffness: 300
                        }}
                    >
                        <Icon name={button.icon} size={36} color={button.isFocussed==false ? "#fff" : "#EA539A"} />
                    </Motion.View>
                    </Motion.Pressable>
                )
            })
        )
    }



    return (
        <View style={styles.container}>
            {
                RenderButtons()
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "8%",
        backgroundColor: '#1C1C1C', //#2b2a2a
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        display: "flex",
        flexDirection:"row"
    },
    text: {
        color: "#fff",
    },
    button:{
        padding: 15
    }
});

export default Navbar