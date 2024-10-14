import React, {useState} from 'react';
import {Alert, Keyboard, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {Form, Input} from "tamagui";
import {HeaderTitle} from "@react-navigation/elements";
import {Button} from "@tamagui/button";
import useApi from "@/lib/useApi";


const MessageForm = () => {

    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const {sendMessage} = useApi()

    const handleSubmit = async () => {

        if (!username || !message) {
            return Alert.alert("Please enter a username & your message!")

        }

        await sendMessage(
            username,
            message
        )

        setMessage("")
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Form style={styles.container} >
            <HeaderTitle style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
            }}>
                Chat App!
            </HeaderTitle>
            <View >
                <Input placeholder={"Username"}
                    value={username}
                       size={"$3"}
                        onChangeText={(text) => setUsername(text)}
                ></Input>
            </View>
            <View>
                <Input placeholder={"Message"}
                       size={"$3"}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                       onSubmitEditing={handleSubmit}
                       onEndEditing={handleSubmit}

                ></Input>
            </View>

           <Form.Trigger asChild>
               <Button size={"$3"} onPress={handleSubmit}>
                   Submit
               </Button>
           </Form.Trigger>

        </Form>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 16,
    }
})

export default MessageForm;