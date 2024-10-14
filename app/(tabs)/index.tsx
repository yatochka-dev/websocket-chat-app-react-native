import {Image, StyleSheet, Platform, View} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Button} from "@tamagui/button";
import {useRouter} from "expo-router";
import MessageForm from "@/components/MessageForm";
import MessageList from "@/components/MessageList";
import useMessagesWebSocket from "@/lib/useMessagesWebSocket";
import useApi from "@/lib/useApi";
import {useInitialFetch} from "@/lib/useInitialFetch";

export default function HomeScreen() {
  useMessagesWebSocket()
    useInitialFetch()
    // const {clearMessages} = useApi()
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/twerk.gif')}
          style={styles.reactLogo}
        />
      }>

      <MessageForm/>
      <MessageList/>


        {/*<ThemedView  style={{*/}
        {/*    maxWidth: "40%"*/}
        {/*}}>*/}
        {/*    <Button onPress={clearMessages} >*/}
        {/*        Clear Messages*/}
        {/*    </Button>*/}
        {/*</ThemedView>*/}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    bottom: 0,
    top: -220,
    left: 0,
    position: 'absolute',
  },
});
