import useMessagesStore, {IMessage} from "@/lib/messages";
import {getApiPath} from "@/lib/getApiPath";
import {useEffect} from "react";

function useInitialFetch() {
    const {setMessages} = useMessagesStore();
    const fetchMessages = async () => {
        const response = await fetch(getApiPath("/messages"));
        const data = (await response.json()) as { messages: IMessage[] };
        setMessages(data.messages.reverse());
    };
    useEffect(() => {
        void fetchMessages(); // Fetch messages initially when the component mounts
    }, []);
}


export {useInitialFetch};