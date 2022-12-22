import React from 'react'
import { Text, StyleSheet, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Motion } from "@legendapp/motion"
import { ColoredInputProps } from '../../models/ColoredInputProps';

const ColoredInput = (props:ColoredInputProps) => {

    const {placeholder} = props;

    return (
        <Motion.View
            style={styles.container}

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
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="rgba(255,255,255,0.31)"
                    
                />
            </LinearGradient>
        </Motion.View>
    )
}

export default ColoredInput


const styles = StyleSheet.create({
    container: {
        height: 72,
        width: 325,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        marginBottom:15,
    },
    text: {
        fontWeight: "600",
        fontSize: 18,
        color: "#fff"
    },
    gradient: {
        borderRadius: 8,
        flex: 1,
    },
    input: {
        margin: 1,
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#242424",
        color:"#fff",
        fontSize:18,
        fontWeight:"400"
    },

});