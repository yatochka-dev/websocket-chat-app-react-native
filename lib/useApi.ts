import {getApiPath} from "@/lib/getApiPath";



const useApi = () => {
  // Fetch messages via HTTP
  // Send a message via HTTP POST
  const sendMessage = async (name: string, message: string) => {
    await fetch(getApiPath("/send"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });
  };

  const clearMessages = async () => {
    await fetch(getApiPath("/clear-messages"), {
      method: "POST",
    });
  };

  return { sendMessage, clearMessages };
};

export default useApi;
