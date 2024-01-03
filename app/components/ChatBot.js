"use client";
import { useEffect } from "react";

const useClient = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "657e2b700aaf8485c3064065" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Clean up if needed (remove the script when the component unmounts)
      document.body.removeChild(script);
    };
  }, []);
};

const ChatBot = () => {
  useClient();

  return <div>Hello welcome to chatbot</div>;
};

export default ChatBot;
