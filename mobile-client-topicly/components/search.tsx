import React from 'react'
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Motion } from "@legendapp/motion"
import ColoredInput from './utils/ColoredInput';


const Search = ({ navigation }: any) => {

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
                    Let's search{"\n"}
                    for your friend
                </Text>
                <View style={{ marginTop: "10%" }}>
                    <ColoredInput placeholder={"Tomas...."} />
                </View>
                <View style={{ width: "100%", height: "90%", backgroundColor: "#2b2a2a", borderRadius: 16 }}>
                    <ScrollView style={{ height:"100%", width:"100%" }} contentContainerStyle={{alignItems:"center"}}>
                        {
                            ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"].map((user: any) => {
                                return (
                                            <View style={styles.userContainer}>
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
                                                <Text style={styles.text}>
                                                    NEGGGR
                                                </Text>
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
                                )
                            })}
                    </ScrollView>
                </View>
            </Motion.View>

        </Motion.View>
    )
}

export default Search

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
    },
    contentContainer: {
        backgroundColor: "#2b2a2a",
        borderRadius: 8,
    },
    userContainer: {
        width: "100%",
        height: 99,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent:"space-evenly",
        marginLeft: "5%",
    },
    gradientUser: {
        width: "20%",
        height: "70%",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    userImage: {
        width: "95%",
        height: "96%",
        borderRadius: 16,
    },
    gradientFollow: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    followContainer: {
        width: "35%",
        height: "55%",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    followInsert: {
        width: "98%",
        height: "96%",
        borderRadius: 9,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2b2a2a"
    },

});