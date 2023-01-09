import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Motion } from "@legendapp/motion"
import { LinearGradient } from 'expo-linear-gradient';

// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Navbar = ({ navigation, onPressSpecial }: any) => {

    const RenderButtons = () => {

        const buttons = [
            {
                key: 1,
                icon: "account-search",
                isFocussed: false,
                pointsTo: "search"
            },
            {
                key: 2,
                icon: "home-variant",
                isFocussed: false,
                pointsTo: "home"
            },
            {
                key: 3,
                icon: "special",
                isFocussed: false,
                pointsTo: "home"
            },
            {
                key: 4,
                icon: "bookmark",
                isFocussed: false,
                pointsTo: "bookmark"
            },
            {
                key: 5,
                icon: "account-circle",
                isFocussed: false,
                pointsTo: "profile"
            },
        ]


        return (
            buttons.map((button) => {
                return (

                    button.icon != "special" ? <Motion.Pressable onPress={() => {
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
                            <Icon name={button.icon} size={36} color={button.isFocussed == false ? "#fff" : "#EA539A"} />
                        </Motion.View>
                    </Motion.Pressable> :
                        <View style={{ width: 50, height: 50 }}>
                            <Pressable onPress={onPressSpecial}>
                                <LinearGradient
                                    colors={['#EA539A',
                                        '#D22E7B',
                                        '#830891',]}
                                    locations={[0.19, 0.50, 0.96]}
                                    start={{ x: 0.4, y: 0 }}
                                    end={{ x: 0.8, y: 1.1 }}
                                    style={{ width: "100%", height: "100%", borderRadius: 100, justifyContent: "center", alignItems: "center" }}
                                >
                                    <Icon name={"plus"} size={40} color={button.isFocussed == false ? "#fff" : "#EA539A"} />
                                </LinearGradient>
                            </Pressable>
                        </View>

                )
            })
        )
    }



    return (
        <LinearGradient
            colors={['#EA539A',
                '#D22E7B',
                '#830891',]}
            locations={[0.19, 0.50, 0.96]}
            start={{ x: 0.4, y: 0 }}
            end={{ x: 0.8, y: 1.1 }}
            style={styles.gradient}
        >
            <View style={styles.container}>
                {
                    RenderButtons()
                }
            </View>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2a2a', //#2b2a2a
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        display: "flex",
        flexDirection: "row",
        marginLeft: 2,
        marginRight: 2,
    },
    text: {
        color: "#fff",
    },
    button: {
        padding: 15
    },
    gradient: {
        width: "95%",
        height: "8%",
        backgroundColor: '#2b2a2a', //#2b2a2a
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        display: "flex",
        flexDirection: "row",
    }
});

export default Navbar