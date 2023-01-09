import React from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BottomSheet from '@gorhom/bottom-sheet';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserStoriesContainer = () => {

    

    const renderStories = () => {

        const stories = [
            {
                name: "nigger",
            },
            {
                name: "nigger2",
            }
        ]

        return (
            stories.map((storie) => {
                return (
                    <Pressable style={styles.press}>
                        <LinearGradient
                            colors={['#EA539A',
                                '#D22E7B',
                                '#830891',]}
                            locations={[0.19, 0.50, 0.96]}
                            start={{ x: 0.4, y: 0 }}
                            end={{ x: 0.8, y: 1.1 }}
                            style={styles.gradient}
                        >
                            <View style={styles.storyInsert}>
                                <Image style={styles.storyInsert}
                                    source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                      }}
                                />
                            </View>
                        </LinearGradient>
                        <Text style={styles.storyText}>{storie.name}</Text>
                    </Pressable>
                )
            })
        )
    }


    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <Pressable style={styles.press}>
                    <LinearGradient
                        colors={['#EA539A',
                            '#D22E7B',
                            '#830891',]}
                        locations={[0.19, 0.50, 0.96]}
                        start={{ x: 0.4, y: 0 }}
                        end={{ x: 0.8, y: 1.1 }}
                        style={styles.gradient}
                    >
                        <View style={styles.storyInsert}>
                            <Icon name={"plus"} size={50} color={"#EA539A"} />
                        </View>
                    </LinearGradient>
                    <Text style={styles.storyText}>NEW </Text>
                </Pressable>
                {
                    renderStories()
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        display: "flex",
        flexDirection: "row"
    },
    text: {
        color: "#fff",
    },
    press: {
        width: 85,
        height: 105,
        margin: 10
    },
    gradient: {
        flex: 1,
        width: 85,
        height: 85,
        backgroundColor: '#2b2a2a', //#2b2a2a
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        display: "flex",
    },
    storyInsert: {
        backgroundColor: "#2b2a2a",
        width: "95%",
        height: "95%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    storyText: {
        color: "#fff",
        textAlign: "center",
        marginTop: 2,
    }
});

export default UserStoriesContainer