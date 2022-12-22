import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Motion } from "@legendapp/motion"
import { LinearGradient } from 'expo-linear-gradient';

import { ColoredButtonProps } from '../../models/ColoredButtonProps';

const ColoredButton = (props:ColoredButtonProps) => {

    const {title} = props;

    return (
        <Motion.Pressable style={styles.container} >
            <Motion.View
                style={styles.view}
                whileTap={{ y: 20 }}
                transition={{
                    type: 'spring',
                    damping: 20,
                    stiffness: 300
                }}
            >
                <LinearGradient
                    colors={['#EA539A',
                        '#D22E7B',
                        '#830891',]}
                    locations={[0.19, 0.50, 0.96]}
                    start={{ x: 0.4, y: 0 }}
                    end={{ x: 0.8, y: 1.1 }}
                    style={styles.gradient}
                >
                    <Text style={styles.text}>{title}</Text>
                </LinearGradient>
            </Motion.View>
        </Motion.Pressable>
    )
}


export default ColoredButton

const styles = StyleSheet.create({
    container: {
        height: "10%",
        width: "85%",
        borderRadius: 16,
        backgroundColor: "#2b2a2a",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    text: {
        fontWeight: "600",
        fontSize: 18,
        color: "#fff"
    },
    gradient: {
        borderRadius: 16,
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    view: {
        flex: 1
    }
});