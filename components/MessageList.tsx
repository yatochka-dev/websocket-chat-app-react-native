import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import useMessagesStore from "@/lib/messages";
import {ScrollView} from "tamagui";
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';


const MessageList = () => {

    const {messages} = useMessagesStore()

    return (
        <ScrollView style={styles.container}>
            <View style={styles.messagesList}>
                {messages.map((message, index) => (
                    <Animated.View
                        entering={FadeIn}
                        exiting={FadeOut}
                        key={index} style={styles.message}>
                        <Text style={styles.message_text}>
                            <Text style={styles.message_author}>
                                {message.name}
                            </Text>: {message.message}
                        </Text>
                    </Animated.View>
                ))}
            </View>



        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 16,height: 300,        backgroundColor: "rgba(35,35,35,0.52)",

    },
    message_author: {
        fontWeight: "bold",
    },
    message: {

        flexDirection: "row",
        alignItems: "center",

    }   ,
    message_text: {
        color: "white",
    },
    messagesList: {
        flexDirection: "column",
        gap: 8,
        padding: 15
    }
})

export default MessageList;